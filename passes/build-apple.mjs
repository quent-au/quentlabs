// Builds and signs the Apple Wallet pass at public/card/abhi-iyer.pkpass.
// Needs passes/certs/pass.key (generated locally) and passes/certs/pass.cer
// (downloaded from the Apple Developer portal for the Pass Type ID).
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const certs = join(here, 'certs');
const out = join(here, 'build', 'apple');
const target = join(here, '..', 'public', 'card', 'abhi-iyer.pkpass');
const config = JSON.parse(readFileSync(join(here, 'config.json'), 'utf8'));
const { apple, person, voiceAi, cardUrl } = config;

if (apple.teamIdentifier === 'YOUR_TEAM_ID') throw new Error('Set apple.teamIdentifier in passes/config.json');
for (const f of ['pass.key', 'pass.cer', 'wwdr.pem']) {
  if (!existsSync(join(certs, f))) throw new Error(`Missing passes/certs/${f}`);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const pass = {
  formatVersion: 1,
  passTypeIdentifier: apple.passTypeIdentifier,
  teamIdentifier: apple.teamIdentifier,
  serialNumber: apple.serialNumber,
  organizationName: person.company,
  description: `${person.name}, ${person.title} at ${person.company}`,
  logoText: person.company,
  foregroundColor: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(10, 10, 10)',
  labelColor: 'rgb(156, 163, 175)',
  sharingProhibited: false,
  generic: {
    primaryFields: [{ key: 'name', label: person.title.toUpperCase(), value: person.name }],
    secondaryFields: [{ key: 'voice', label: voiceAi.heading.toUpperCase(), value: voiceAi.tagline }],
    auxiliaryFields: [
      { key: 'demo', label: 'LIVE DEMO LINE', value: person.demoPhoneDisplay },
      { key: 'email', label: 'EMAIL', value: person.email },
    ],
    backFields: [
      { key: 'about', label: voiceAi.heading, value: voiceAi.body },
      { key: 'call', label: 'Call the live demo', value: person.demoPhoneDisplay },
      { key: 'emailBack', label: 'Email', value: person.email },
      { key: 'card', label: 'Digital card', value: cardUrl },
      { key: 'web', label: 'Website', value: person.website },
    ],
  },
  barcodes: [
    { format: 'PKBarcodeFormatQR', message: cardUrl, messageEncoding: 'iso-8859-1', altText: 'Scan for my card' },
  ],
};

writeFileSync(join(out, 'pass.json'), JSON.stringify(pass, null, 2));
const images = ['icon.png', 'icon@2x.png', 'icon@3x.png', 'logo.png', 'logo@2x.png', 'logo@3x.png'];
for (const img of images) copyFileSync(join(here, 'assets', img), join(out, img));

const manifest = {};
for (const f of ['pass.json', ...images]) {
  manifest[f] = createHash('sha1').update(readFileSync(join(out, f))).digest('hex');
}
writeFileSync(join(out, 'manifest.json'), JSON.stringify(manifest));

const certPem = join(here, 'build', 'pass.pem');
execFileSync('openssl', ['x509', '-inform', 'der', '-in', join(certs, 'pass.cer'), '-out', certPem]);
execFileSync('openssl', [
  'smime', '-binary', '-sign',
  '-signer', certPem,
  '-inkey', join(certs, 'pass.key'),
  '-certfile', join(certs, 'wwdr.pem'),
  '-in', join(out, 'manifest.json'),
  '-out', join(out, 'signature'),
  '-outform', 'DER',
]);

rmSync(target, { force: true });
execFileSync('zip', ['-q', '-X', '-j', target, ...['pass.json', 'manifest.json', 'signature', ...images].map((f) => join(out, f))]);
console.log(`Wrote ${target}`);

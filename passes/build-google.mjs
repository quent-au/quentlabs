// Builds the "Add to Google Wallet" link and writes it into public/card/index.html.
// Needs passes/certs/google-service-account.json (a key for a Google Cloud service
// account that has been added as a user on your Google Wallet issuer account).
import { createSign } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const keyPath = join(here, 'certs', 'google-service-account.json');
const cardPage = join(here, '..', 'public', 'card', 'index.html');
const config = JSON.parse(readFileSync(join(here, 'config.json'), 'utf8'));
const { google, person, voiceAi, cardUrl } = config;

if (google.issuerId === 'YOUR_ISSUER_ID') throw new Error('Set google.issuerId in passes/config.json');
if (!existsSync(keyPath)) throw new Error('Missing passes/certs/google-service-account.json');
const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));

const text = (value) => ({ defaultValue: { language: 'en-AU', value } });
const classId = `${google.issuerId}.${google.classSuffix}`;

const object = {
  id: `${google.issuerId}.${google.objectSuffix}`,
  classId,
  state: 'ACTIVE',
  cardTitle: text(person.company),
  header: text(person.name),
  subheader: text(person.title),
  hexBackgroundColor: '#0a0a0a',
  logo: { sourceUri: { uri: 'https://quentlabs.com/card/wallet/logo.png' }, contentDescription: text('Quent Labs Q logo') },
  heroImage: { sourceUri: { uri: 'https://quentlabs.com/card/wallet/hero.png' }, contentDescription: text(voiceAi.tagline) },
  barcode: { type: 'QR_CODE', value: cardUrl, alternateText: 'Scan for my card' },
  textModulesData: [
    { id: 'voice', header: voiceAi.heading, body: voiceAi.body },
    { id: 'demo', header: 'Live demo line', body: person.demoPhoneDisplay },
    { id: 'email', header: 'Email', body: person.email },
  ],
  linksModuleData: {
    uris: [
      { id: 'call', uri: `tel:${person.demoPhone}`, description: 'Call the Voice AI demo' },
      { id: 'mail', uri: `mailto:${person.email}`, description: `Email ${person.name.split(' ')[0]}` },
      { id: 'card', uri: cardUrl, description: 'Digital card' },
    ],
  },
};

const b64url = (input) => Buffer.from(input).toString('base64url');
const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
const claims = b64url(JSON.stringify({
  iss: serviceAccount.client_email,
  aud: 'google',
  typ: 'savetowallet',
  origins: ['https://quentlabs.com'],
  payload: { genericClasses: [{ id: classId }], genericObjects: [object] },
}));
const signature = createSign('RSA-SHA256').update(`${header}.${claims}`).sign(serviceAccount.private_key, 'base64url');
const saveUrl = `https://pay.google.com/gp/v/save/${header}.${claims}.${signature}`;

const html = readFileSync(cardPage, 'utf8');
const updated = html.replace(
  /<a class="btn wallet" id="google-wallet"[^>]*>/,
  `<a class="btn wallet" id="google-wallet" href="${saveUrl}" target="_blank" rel="noopener noreferrer">`
);
if (updated === html && !html.includes(saveUrl)) throw new Error('Could not find the Google Wallet button in public/card/index.html');
writeFileSync(cardPage, updated);
console.log('Updated Google Wallet link in public/card/index.html');

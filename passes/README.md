# Wallet passes for the digital card

Builds the Apple Wallet and Google Wallet versions of https://quentlabs.com/card/.
Card details live in `config.json`. Keys and certificates go in `certs/`, which is gitignored.

## Apple Wallet

1. In the Apple Developer portal, create a Pass Type ID (`pass.com.quentlabs.card`).
2. Create a Pass Type ID certificate for it, uploading `certs/pass.csr`.
3. Save the downloaded certificate as `certs/pass.cer`.
4. Put your Team ID in `config.json` under `apple.teamIdentifier`.
5. Run `node passes/build-apple.mjs`. It writes `public/card/abhi-iyer.pkpass`.

The certificate expires after a year; renew it in the portal and rebuild.

## Google Wallet

1. Create an issuer account in the Google Pay & Wallet Console and note the Issuer ID.
2. In Google Cloud, enable the Google Wallet API, create a service account and download a JSON key.
3. In the Wallet Console, add the service account email as a user.
4. Save the key as `certs/google-service-account.json` and put the Issuer ID in `config.json` under `google.issuerId`.
5. Run `node passes/build-google.mjs`. It writes the save link into `public/card/index.html`.

Until the issuer account is approved for publishing, only users added as testers in the console can save the pass.

## After building

Commit and push to `main`. The card page shows each Wallet button once its pass exists.

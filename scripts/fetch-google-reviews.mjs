// Fetches QuentLabs' Google rating and reviews from the Places API (New) and
// writes them to src/data/googleReviews.json so they ship with the build.
//
// Env:
//   GOOGLE_PLACES_API_KEY  required; without it the existing JSON is left as is
//   GOOGLE_PLACE_ID        optional; otherwise found by searching for GOOGLE_PLACE_NAME
//   GOOGLE_PLACE_NAME      optional; defaults to "QuentLabs". The place's name must match
//                          it (ignoring case and spaces) or nothing is written.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const OUTPUT = fileURLToPath(new URL('../src/data/googleReviews.json', import.meta.url));
const API = 'https://places.googleapis.com/v1';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const expectedName = process.env.GOOGLE_PLACE_NAME || 'QuentLabs';

const normalise = (s = '') => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const nameMatches = (name) => normalise(name).includes(normalise(expectedName));

async function places(path, { fieldMask, body } = {}) {
  const res = await fetch(`${API}/${path}`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': fieldMask,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    throw new Error(`Places API ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function findPlaceId() {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;

  const seen = new Map();
  for (const textQuery of [`${expectedName} Melbourne`, expectedName, `${expectedName} Australia`]) {
    const { places: results = [] } = await places('places:searchText', {
      fieldMask: 'places.id,places.displayName,places.formattedAddress',
      body: { textQuery, regionCode: 'AU' },
    });
    for (const p of results) seen.set(p.id, p);
    const match = results.find((p) => nameMatches(p.displayName?.text));
    if (match) {
      console.log(`Using place ${match.displayName.text} (${match.formattedAddress ?? 'no address'}), id ${match.id}`);
      return match.id;
    }
  }

  const found = [...seen.values()]
    .slice(0, 5)
    .map((p) => `  - ${p.displayName?.text} (${p.formattedAddress ?? 'no address'}), id ${p.id}`)
    .join('\n');
  throw new Error(
    `No Google place named "${expectedName}" found. Set GOOGLE_PLACE_ID to your Place ID.` +
      (found ? `\nClosest results:\n${found}` : ''),
  );
}

async function main() {
  if (!apiKey) {
    console.log('GOOGLE_PLACES_API_KEY not set; keeping existing Google reviews data.');
    return;
  }

  const placeId = await findPlaceId();
  const place = await places(`places/${placeId}`, {
    fieldMask: 'displayName,rating,userRatingCount,googleMapsUri,reviews',
  });
  if (!nameMatches(place.displayName?.text)) {
    throw new Error(`Place ${placeId} is "${place.displayName?.text}", not "${expectedName}"; not saving its reviews.`);
  }

  const data = {
    name: place.displayName?.text ?? 'QuentLabs',
    rating: place.rating ?? null,
    userRatingCount: place.userRatingCount ?? 0,
    mapsUrl: place.googleMapsUri ?? null,
    fetchedAt: new Date().toISOString(),
    reviews: (place.reviews ?? []).map((r) => ({
      author: r.authorAttribution?.displayName ?? 'Google user',
      authorUrl: r.authorAttribution?.uri ?? null,
      authorPhoto: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? null,
      text: r.text?.text ?? r.originalText?.text ?? '',
      relativeTime: r.relativePublishTimeDescription ?? '',
      reviewUrl: r.googleMapsUri ?? null,
    })),
  };

  await writeFile(OUTPUT, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`Saved ${data.reviews.length} reviews (rating ${data.rating}, ${data.userRatingCount} total).`);
}

main().catch((err) => {
  console.warn(`Could not fetch Google reviews: ${err.message}`);
});

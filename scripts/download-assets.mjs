import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

const assets = [
  { url: 'https://irp-cdn.multiscreensite.com/4dd4966b/dms3rep/multi/desktop/Logo+Bruna+Burti-color+menor.png', name: 'logo.png' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/landing_page_white_background-1920w.png', name: 'wave-bg.png' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/landing_page_white_background_vertical-1920w.png', name: 'wave-bg-vertical.png' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/_V8A8044-1fdd6eeb-1920w.jpg', name: 'bruna-portrait-1.jpg' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/_V8A7753-b154f142-1920w.jpg', name: 'bruna-portrait-bg.jpg' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/_V8A8065-1920w.jpg', name: 'bruna-about.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1490818387583-1baba5e638af-1920w.jpg', name: 'hero-bg.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1522844990619-4951c40f7eda-1000h.jpg', name: 'service-obesity.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1463740839922-2d3b7e426a56-800h.jpg', name: 'service-functional.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1526413425697-1d271fdbe7a9-800h.jpg', name: 'service-aesthetic.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1517466787929-bc90951d0974-1000h.jpg', name: 'service-sports.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1505252784141-72a7a8073787-1000h.jpg', name: 'service-intolerances.jpg' },
  { url: 'https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1514995669114-6081e934b693-800h.jpg', name: 'service-ortomolecular.jpg' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/photo-1470167290877-7d5d3446de4c-bba841ec-1920w.jpg', name: 'beyond-office-bg.jpg' },
  { url: 'https://lirp.cdn-website.com/4dd4966b/dms3rep/multi/opt/Captura+de+Tela+2020-01-17+a%CC%80s+16.56.25-1920w.png', name: 'gsi-method.png' },
];

async function download(url, name) {
  const dest = join(publicDir, name);
  if (existsSync(dest)) { console.log(`✓ Already exists: ${name}`); return; }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(`✓ Downloaded: ${name} (${Math.round(buf.byteLength / 1024)}kb)`);
  } catch (e) {
    console.error(`✗ Failed: ${name} — ${e.message}`);
  }
}

// 4 at a time
async function downloadAll() {
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(a => download(a.url, a.name)));
  }
  console.log('\nDone!');
}

downloadAll();

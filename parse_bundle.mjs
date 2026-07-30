import fs from 'fs';

const bundle = fs.readFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', 'utf8');

// Find categories array in bundle
// Search for category names like "E Commerce Skills"
const categoriesIdx = bundle.indexOf('E Commerce Skills');
console.log('Categories index:', categoriesIdx);

if (categoriesIdx !== -1) {
  // Extract a chunk around categoriesIdx
  const start = Math.max(0, categoriesIdx - 1000);
  const end = Math.min(bundle.length, categoriesIdx + 50000);
  const chunk = bundle.substring(start, end);
  fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\categories_chunk.js', chunk);
  console.log('Saved categories chunk!');
}

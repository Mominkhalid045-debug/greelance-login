import fs from 'fs';

const bundle = fs.readFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', 'utf8');

// Find where categories array is defined in bundle.js
// Look for array containing objects with id, name, img, subcategories
const startIdx = bundle.indexOf('id:1,name:');
console.log('startIdx:', startIdx);

// Let's inspect the chunk starting at 218000 to 260000
const chunk = bundle.substring(218000, 265000);
fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle_categories_chunk.js', chunk);

// Find all base64 variables (e.g. Pe="data...", Fe="data...")
const varRegex = /var ([A-Za-z0-9_$]+)="(data:image\/png;base64,[^"]+)"/g;
let match;
const imgMap = {};
while ((match = varRegex.exec(chunk)) !== null) {
  imgMap[match[1]] = match[2];
}

console.log('Found image variables:', Object.keys(imgMap).length);
fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\imgMap.json', JSON.stringify(imgMap, null, 2));

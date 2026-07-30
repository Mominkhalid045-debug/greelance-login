import fs from 'fs';

const bundle = fs.readFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', 'utf8');

// Search for data:image/png;base64
const imgRegex = /data:image\/png;base64,[A-Za-z0-9+/=]+/g;
const images = bundle.match(imgRegex) || [];
console.log('Total base64 images found:', images.length);

// Let's find categories array by regex
const catMatch = bundle.match(/\[\{id:1,name:[^\]]+\}\]/);
if (catMatch) {
  console.log('Found categories array string length:', catMatch[0].length);
  fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\extracted_categories_raw.js', 'export const CATEGORIES = ' + catMatch[0] + ';');
} else {
  // Try finding string starting with [{id:1,name:
  const idx = bundle.indexOf('id:1,name:');
  console.log('id:1,name: index:', idx);
  if (idx !== -1) {
    const endIdx = bundle.indexOf('}]', idx);
    console.log('endIdx:', endIdx);
    const arrStr = bundle.substring(idx - 2, endIdx + 2);
    fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\extracted_categories_raw.js', 'export const CATEGORIES = ' + arrStr + ';');
  }
}

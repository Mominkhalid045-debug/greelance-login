import fs from 'fs';

const bundle = fs.readFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', 'utf8');

// Find all matches for: name:"...",img:"..." or img:"...",name:"..."
const regex = /\{id:[0-9]+,name:"([^"]+)",img:"(data:image\/png;base64,[^"]+)"/g;
let match;
const results = [];
while ((match = regex.exec(bundle)) !== null) {
  results.push({ name: match[1], img: match[2] });
}

console.log('Results count:', results.length);
if (results.length > 0) {
  fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\category_logos.json', JSON.stringify(results, null, 2));
} else {
  // Let's search for name: and img: without strict spacing
  const regex2 = /name:"([^"]+)"[\s\S]{1,100}?img:"(data:image\/png;base64,[^"]+)"/g;
  while ((match = regex2.exec(bundle)) !== null) {
    results.push({ name: match[1], img: match[2] });
  }
  console.log('Results2 count:', results.length);
  fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\category_logos.json', JSON.stringify(results, null, 2));
}

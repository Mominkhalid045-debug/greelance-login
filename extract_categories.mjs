import https from 'https';
import fs from 'fs';

https.get('https://five-step-page.vercel.app/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const matches = html.match(/\/assets\/[a-zA-Z0-9_-]+\.js/g);
    console.log('Found JS bundles:', matches);
    if (matches && matches.length > 0) {
      matches.forEach(jsPath => {
        https.get('https://five-step-page.vercel.app' + jsPath, (jsRes) => {
          let jsContent = '';
          jsRes.on('data', chunk => jsContent += chunk);
          jsRes.on('end', () => {
            console.log(`JS ${jsPath} length:`, jsContent.length);
            fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', jsContent);
          });
        });
      });
    }
  });
});

import fs from 'fs';

// Helper to create 3D gradient SVG data URIs
function make3dSvg(pathContent) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
    <defs>
      <linearGradient id="gradMain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8090FF"/>
        <stop offset="50%" stop-color="#4F5EFF"/>
        <stop offset="100%" stop-color="#2D35C7"/>
      </linearGradient>
      <linearGradient id="gradLight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#C5D0FF"/>
        <stop offset="100%" stop-color="#8090FF"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#1A227E" flood-opacity="0.25"/>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      ${pathContent}
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const CATEGORIES_DATA = [
  {
    id: 1,
    name: "E Commerce Skills",
    img: make3dSvg(`
      <rect x="6" y="10" width="24" height="20" rx="4" fill="url(#gradMain)"/>
      <path d="M12 12V8a6 6 0 0 1 12 0v4" fill="none" stroke="url(#gradLight)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="14" cy="18" r="1.5" fill="#FFFFFF"/>
      <circle cx="22" cy="18" r="1.5" fill="#FFFFFF"/>
    `)
  },
  {
    id: 2,
    name: "Cybersecurity Engineer",
    img: make3dSvg(`
      <path d="M18 3L6 8v9c0 7.5 5.1 14.5 12 16 6.9-1.5 12-8.5 12-16V8L18 3z" fill="url(#gradMain)"/>
      <path d="M18 10v12M13 16h10" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    `)
  },
  {
    id: 3,
    name: "Cloud Computing Engineer",
    img: make3dSvg(`
      <path d="M10 26h16a7 7 0 0 0 1-13.9 9 9 0 0 0-17.4-2.1A6.5 6.5 0 0 0 10 26z" fill="url(#gradMain)"/>
      <circle cx="18" cy="17" r="3" fill="#FFFFFF"/>
    `)
  },
  {
    id: 4,
    name: "Digital Marketing Expert",
    img: make3dSvg(`
      <path d="M6 14v8h4l9 6V8l-9 6H6z" fill="url(#gradMain)"/>
      <path d="M23 12a6 6 0 0 1 0 12" fill="none" stroke="url(#gradLight)" stroke-width="3" stroke-linecap="round"/>
      <path d="M26 8a11 11 0 0 1 0 20" fill="none" stroke="url(#gradLight)" stroke-width="2.5" stroke-linecap="round"/>
    `)
  },
  {
    id: 5,
    name: "Software Engineering",
    img: make3dSvg(`
      <rect x="4" y="6" width="28" height="18" rx="3" fill="url(#gradMain)"/>
      <path d="M12 28h12M18 24v4" stroke="url(#gradMain)" stroke-width="3" stroke-linecap="round"/>
      <path d="M11 13l-3 3 3 3M25 13l3 3-3 3M19 12l-2 8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `)
  },
  {
    id: 6,
    name: "IT Staffing",
    img: make3dSvg(`
      <rect x="4" y="6" width="28" height="18" rx="3" fill="url(#gradMain)"/>
      <circle cx="18" cy="13" r="3" fill="#FFFFFF"/>
      <path d="M12 21c0-3 2.7-5 6-5s6 2 6 5" fill="#FFFFFF"/>
      <path d="M12 28h12M18 24v4" stroke="url(#gradMain)" stroke-width="3"/>
    `)
  },
  {
    id: 7,
    name: "Data Center security",
    img: make3dSvg(`
      <rect x="6" y="5" width="24" height="7" rx="2" fill="url(#gradMain)"/>
      <rect x="6" y="14" width="24" height="7" rx="2" fill="url(#gradMain)"/>
      <rect x="6" y="23" width="24" height="7" rx="2" fill="url(#gradMain)"/>
      <circle cx="10" cy="8.5" r="1.5" fill="#70FFB8"/>
      <circle cx="10" cy="17.5" r="1.5" fill="#70FFB8"/>
      <circle cx="10" cy="26.5" r="1.5" fill="#70FFB8"/>
    `)
  },
  {
    id: 8,
    name: "Artificial Intelligence",
    img: make3dSvg(`
      <rect x="8" y="8" width="20" height="20" rx="4" fill="url(#gradMain)"/>
      <rect x="14" y="14" width="8" height="8" rx="2" fill="#FFFFFF"/>
      <path d="M12 4v4M18 4v4M24 4v4M12 28v4M18 28v4M24 28v4M4 12h4M4 18h4M4 24h4M28 12h4M28 18h4M28 24h4" stroke="url(#gradMain)" stroke-width="2.5" stroke-linecap="round"/>
    `)
  },
  {
    id: 9,
    name: "Business Intelligence",
    img: make3dSvg(`
      <rect x="5" y="11" width="26" height="18" rx="3" fill="url(#gradMain)"/>
      <path d="M13 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" fill="none" stroke="url(#gradLight)" stroke-width="2.5"/>
      <path d="M11 20l4-4 4 2 6-6" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    `)
  },
  {
    id: 10,
    name: "Decision Intelligence",
    img: make3dSvg(`
      <path d="M18 4a10 10 0 0 0-6 18c1.5 1.2 2 2.5 2 4h8c0-1.5.5-2.8 2-4a10 10 0 0 0-6-18z" fill="url(#gradMain)"/>
      <path d="M14 30h8M16 33h4" stroke="url(#gradMain)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M18 10v6M15 13h6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    `)
  },
  {
    id: 11,
    name: "Robotics",
    img: make3dSvg(`
      <rect x="7" y="10" width="22" height="18" rx="4" fill="url(#gradMain)"/>
      <circle cx="13" cy="17" r="2.5" fill="#FFFFFF"/>
      <circle cx="23" cy="17" r="2.5" fill="#FFFFFF"/>
      <path d="M14 23h8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <path d="M18 3v7M18 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="url(#gradMain)" stroke="url(#gradMain)"/>
    `)
  },
  {
    id: 12,
    name: "Virtual/Augmented",
    img: make3dSvg(`
      <rect x="4" y="11" width="28" height="14" rx="6" fill="url(#gradMain)"/>
      <circle cx="12" cy="18" r="4" fill="#FFFFFF"/>
      <circle cx="24" cy="18" r="4" fill="#FFFFFF"/>
      <path d="M16 18h4" stroke="url(#gradMain)" stroke-width="2"/>
    `)
  },
  {
    id: 13,
    name: "Systems Engineering",
    img: make3dSvg(`
      <rect x="5" y="7" width="26" height="16" rx="3" fill="url(#gradMain)"/>
      <path d="M3 27h30a2 2 0 0 0 2-2v-2H1v2a2 2 0 0 0 2 2z" fill="url(#gradMain)"/>
      <circle cx="18" cy="15" r="4" fill="none" stroke="#FFFFFF" stroke-width="2"/>
      <path d="M18 11v8M14 15h8" stroke="#FFFFFF" stroke-width="1.5"/>
    `)
  },
  {
    id: 14,
    name: "Cryptocurrency",
    img: make3dSvg(`
      <circle cx="18" cy="18" r="14" fill="url(#gradMain)"/>
      <path d="M16 10h4a3.5 3.5 0 0 1 0 7h-4m0 0h5a3.5 3.5 0 0 1 0 7h-5M16 8v20M20 8v20" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    `)
  },
  {
    id: 15,
    name: "Fintech",
    img: make3dSvg(`
      <rect x="4" y="6" width="28" height="18" rx="3" fill="url(#gradMain)"/>
      <circle cx="18" cy="15" r="5" fill="#FFFFFF"/>
      <text x="18" y="19" font-family="Arial" font-weight="bold" font-size="11" fill="#2D35C7" text-anchor="middle">$</text>
      <path d="M12 28h12M18 24v4" stroke="url(#gradMain)" stroke-width="3"/>
    `)
  },
  {
    id: 16,
    name: "Autonomous Systems",
    img: make3dSvg(`
      <path d="M7 17l2-5a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l2 5v8a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H10v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z" fill="url(#gradMain)"/>
      <circle cx="9.5" cy="21.5" r="2" fill="#FFFFFF"/>
      <circle cx="26.5" cy="21.5" r="2" fill="#FFFFFF"/>
      <path d="M15 6a3 3 0 0 1 6 0" fill="none" stroke="url(#gradMain)" stroke-width="2.5" stroke-linecap="round"/>
    `)
  },
  {
    id: 17,
    name: "Machine Learning",
    img: make3dSvg(`
      <rect x="7" y="7" width="22" height="22" rx="4" fill="url(#gradMain)"/>
      <circle cx="13" cy="13" r="2" fill="#FFFFFF"/>
      <circle cx="23" cy="13" r="2" fill="#FFFFFF"/>
      <circle cx="18" cy="22" r="2" fill="#FFFFFF"/>
      <path d="M13 13l5 9 5-9" stroke="#FFFFFF" stroke-width="1.5"/>
    `)
  },
  {
    id: 18,
    name: "Electric-Vehicle Technology",
    img: make3dSvg(`
      <path d="M6 18l2-6a3 3 0 0 1 3-2h10a3 3 0 0 1 3 2l2 6v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H9v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7z" fill="url(#gradMain)"/>
      <circle cx="8.5" cy="21.5" r="2" fill="#FFFFFF"/>
      <circle cx="23.5" cy="21.5" r="2" fill="#FFFFFF"/>
      <path d="M26 13l4-3M30 10v4M27 10h3" stroke="url(#gradMain)" stroke-width="2" stroke-linecap="round"/>
    `)
  },
  {
    id: 19,
    name: "Internet of Things",
    img: make3dSvg(`
      <circle cx="18" cy="18" r="13" fill="none" stroke="url(#gradMain)" stroke-width="3"/>
      <ellipse cx="18" cy="18" rx="6" ry="13" fill="none" stroke="url(#gradMain)" stroke-width="2"/>
      <path d="M5 18h26M7 11h22M7 25h22" stroke="url(#gradMain)" stroke-width="2"/>
    `)
  },
  {
    id: 20,
    name: "Recycle-Energy",
    img: make3dSvg(`
      <circle cx="18" cy="18" r="14" fill="none" stroke="url(#gradMain)" stroke-width="3.5" stroke-dasharray="22 8"/>
      <path d="M19 8l-6 11h6l-2 9 8-12h-6l2-8z" fill="url(#gradMain)"/>
    `)
  },
  {
    id: 21,
    name: "Smart-Home",
    img: make3dSvg(`
      <path d="M18 3L4 14v15a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14L18 3z" fill="url(#gradMain)"/>
      <path d="M13 18a7 7 0 0 1 10 0M15 22a4 4 0 0 1 6 0" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      <circle cx="18" cy="25" r="1.5" fill="#FFFFFF"/>
    `)
  },
  {
    id: 22,
    name: "Quantum Computing",
    img: make3dSvg(`
      <rect x="5" y="5" width="26" height="26" rx="5" fill="url(#gradMain)"/>
      <ellipse cx="18" cy="18" rx="9" ry="3" fill="none" stroke="#FFFFFF" stroke-width="1.8" transform="rotate(30 18 18)"/>
      <ellipse cx="18" cy="18" rx="9" ry="3" fill="none" stroke="#FFFFFF" stroke-width="1.8" transform="rotate(150 18 18)"/>
      <circle cx="18" cy="18" r="2.5" fill="#FFFFFF"/>
    `)
  },
  {
    id: 23,
    name: "Blockchain",
    img: make3dSvg(`
      <path d="M18 4l10 5v11l-10 5-10-5V9l10-5z" fill="url(#gradMain)"/>
      <path d="M18 4v11m0 0v11m0-11l10-5m-10 5l-10-5" stroke="#FFFFFF" stroke-width="1.8"/>
    `)
  }
];

const fileContent = `export const CATEGORIES = ${JSON.stringify(CATEGORIES_DATA, null, 2)};\n`;
fs.writeFileSync('src/data/categoryData.js', fileContent, 'utf-8');
console.log("Successfully updated categoryData.js with 3D gradient icons!");

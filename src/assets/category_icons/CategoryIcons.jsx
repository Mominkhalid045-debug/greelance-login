// Inline SVG icons for all 23 categories — consistent #3038BD style matching Figma
const C = '#3038BD'; // primary color
const S = { width: 28, height: 28 };

export const IconECommerce = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

export const IconCybersecurity = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export const IconCloudComputing = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);

export const IconDigitalMarketing = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

export const IconSoftwareEngineering = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    <line x1="19" y1="12" x2="5" y2="12" strokeDasharray="2 2"/>
  </svg>
);

export const IconITStaffing = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const IconDataCenter = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

export const IconAI = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    <line x1="9" y1="13" x2="22" y2="13"/><line x1="15" y1="9" x2="15" y2="22"/>
  </svg>
);

export const IconBusinessIntelligence = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

export const IconDecisionIntelligence = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

export const IconRobotics = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/>
    <line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    <path d="M5 11V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/>
  </svg>
);

export const IconVirtualAugmented = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

export const IconSystemsEngineering = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07m.01-14.14A10 10 0 0 0 19.07 19.07"/>
    <path d="M12 2v2m0 18v2M2 12h2m18 0h2m-3.5-7.5-1.42 1.42M6.93 17.07l-1.42 1.42M17.5 17.07l1.42 1.42M7.5 7.5l-1.42-1.42"/>
  </svg>
);

export const IconCryptocurrency = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9V8zm0 5h5a2.5 2.5 0 0 1 0 5H9v-5z"/>
    <line x1="9" y1="8" x2="9" y2="18"/><line x1="10" y1="6" x2="10" y2="8"/>
    <line x1="13" y1="6" x2="13" y2="8"/><line x1="10" y1="18" x2="10" y2="20"/>
    <line x1="13" y1="18" x2="13" y2="20"/>
  </svg>
);

export const IconFintech = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);

export const IconAutonomousSystems = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
  </svg>
);

export const IconMachineLearning = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/>
    <line x1="12" y1="6" x2="4" y2="18"/><line x1="12" y1="6" x2="20" y2="18"/>
    <line x1="4" y1="18" x2="20" y2="18"/>
    <circle cx="8" cy="12" r="1.5" fill={C} stroke="none"/>
    <circle cx="16" cy="12" r="1.5" fill={C} stroke="none"/>
  </svg>
);

export const IconElectricVehicle = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="2"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    <line x1="11" y1="5" x2="9" y2="9"/><line x1="9" y1="9" x2="11" y2="9"/>
    <line x1="11" y1="9" x2="9" y2="13"/>
  </svg>
);

export const IconIoT = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  </svg>
);

export const IconRecycleEnergy = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    <line x1="12" y1="8" x2="12" y2="12"/><polyline points="10 12 12 14 14 12"/>
  </svg>
);

export const IconSmartHome = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
    <path d="M12 3v1m0 14v1m-5-7.5h1m8 0h1"/>
  </svg>
);

export const IconQuantumComputing = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="10" ry="4"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    <circle cx="12" cy="12" r="2" fill={C} stroke="none"/>
  </svg>
);

export const IconBlockchain = () => (
  <svg {...S} viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="6" height="6" rx="1"/><rect x="16" y="7" width="6" height="6" rx="1"/>
    <rect x="9" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/>
    <line x1="8" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="16" y2="10"/>
    <line x1="12" y1="8" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="16"/>
  </svg>
);

export const CATEGORY_ICONS = {
  'E Commerce Skills': IconECommerce,
  'Cybersecurity Engineer': IconCybersecurity,
  'Cloud Computing Engineer': IconCloudComputing,
  'Digital Marketing Expert': IconDigitalMarketing,
  'Software Engineering': IconSoftwareEngineering,
  'IT Staffing': IconITStaffing,
  'Data Center security': IconDataCenter,
  'Artificial Intelligence': IconAI,
  'Business Intelligence': IconBusinessIntelligence,
  'Decision Intelligence': IconDecisionIntelligence,
  'Robotics': IconRobotics,
  'Virtual/Augmented': IconVirtualAugmented,
  'Systems Engineering': IconSystemsEngineering,
  'Cryptocurrency': IconCryptocurrency,
  'Fintech': IconFintech,
  'Autonomous Systems': IconAutonomousSystems,
  'Machine Learning': IconMachineLearning,
  'Electric-Vehicle Technology': IconElectricVehicle,
  'Internet of Things': IconIoT,
  'Recycle-Energy': IconRecycleEnergy,
  'Smart-Home': IconSmartHome,
  'Quantum Computing': IconQuantumComputing,
  'Blockchain': IconBlockchain,
};

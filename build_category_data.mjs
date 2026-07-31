import fs from 'fs';

const categories = [
  { id: 1, name: 'E Commerce Skills', slug: 'e_commerce_skills' },
  { id: 2, name: 'Cybersecurity Engineer', slug: 'cybersecurity_engineer' },
  { id: 3, name: 'Cloud Computing Engineer', slug: 'cloud_computing_engineer' },
  { id: 4, name: 'Digital Marketing Expert', slug: 'digital_marketing_expert' },
  { id: 5, name: 'Software Engineering', slug: 'software_engineering' },
  { id: 6, name: 'IT Staffing', slug: 'it_staffing' },
  { id: 7, name: 'Data Center security', slug: 'data_center_security' },
  { id: 8, name: 'Artificial Intelligence', slug: 'artificial_intelligence' },
  { id: 9, name: 'Business Intelligence', slug: 'business_intelligence' },
  { id: 10, name: 'Decision Intelligence', slug: 'decision_intelligence' },
  { id: 11, name: 'Robotics', slug: 'robotics' },
  { id: 12, name: 'Virtual/Augmented', slug: 'virtual_augmented' },
  { id: 13, name: 'Systems Engineering', slug: 'systems_engineering' },
  { id: 14, name: 'Cryptocurrency', slug: 'cryptocurrency' },
  { id: 15, name: 'Fintech', slug: 'fintech' },
  { id: 16, name: 'Autonomous Systems', slug: 'autonomous_systems' },
  { id: 17, name: 'Machine Learning', slug: 'machine_learning' },
  { id: 18, name: 'Electric-Vehicle Technology', slug: 'electric_vehicle_technology' },
  { id: 19, name: 'Internet of Things', slug: 'internet_of_things' },
  { id: 20, name: 'Recycle-Energy', slug: 'recycle_energy' },
  { id: 21, name: 'Smart-Home', slug: 'smart_home' },
  { id: 22, name: 'Quantum Computing', slug: 'quantum_computing' },
  { id: 23, name: 'Blockchain', slug: 'blockchain' }
];

let imports = '';
let arrayItems = '';

categories.forEach(c => {
  const varName = 'icon_' + c.slug;
  imports += `import ${varName} from '../assets/category_icons/${c.slug}.png';\n`;
  arrayItems += `  { id: ${c.id}, name: ${JSON.stringify(c.name)}, img: ${varName} },\n`;
});

const content = `${imports}\nexport const CATEGORIES = [\n${arrayItems}];\n`;
fs.writeFileSync('src/data/categoryData.js', content);
console.log('Successfully wrote src/data/categoryData.js with ES module imports!');

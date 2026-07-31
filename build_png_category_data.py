import os, json

OUT_DIR = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\assets\category_icons'

categories = [
  {"id": 1, "name": "E Commerce Skills", "file": "e_commerce_skills.png"},
  {"id": 2, "name": "Cybersecurity Engineer", "file": "cybersecurity_engineer.png"},
  {"id": 3, "name": "Cloud Computing Engineer", "file": "cloud_computing_engineer.png"},
  {"id": 4, "name": "Digital Marketing Expert", "file": "digital_marketing_expert.png"},
  {"id": 5, "name": "Software Engineering", "file": "software_engineering.png"},
  {"id": 6, "name": "IT Staffing", "file": "it_staffing.png"},
  {"id": 7, "name": "Data Center security", "file": "data_center_security.png"},
  {"id": 8, "name": "Artificial Intelligence", "file": "artificial_intelligence.png"},
  {"id": 9, "name": "Business Intelligence", "file": "business_intelligence.png"},
  {"id": 10, "name": "Decision Intelligence", "file": "decision_intelligence.png"},
  {"id": 11, "name": "Robotics", "file": "robotics.png"},
  {"id": 12, "name": "Virtual/Augmented", "file": "virtual_augmented.png"},
  {"id": 13, "name": "Systems Engineering", "file": "systems_engineering.png"},
  {"id": 14, "name": "Cryptocurrency", "file": "cryptocurrency.png"},
  {"id": 15, "name": "Fintech", "file": "fintech.png"},
  {"id": 16, "name": "Autonomous Systems", "file": "autonomous_systems.png"},
  {"id": 17, "name": "Machine Learning", "file": "machine_learning.png"},
  {"id": 18, "name": "Electric-Vehicle Technology", "file": "electric_vehicle_technology.png"},
  {"id": 19, "name": "Internet of Things", "file": "internet_of_things.png"},
  {"id": 20, "name": "Recycle-Energy", "file": "recycle_energy.png"},
  {"id": 21, "name": "Smart-Home", "file": "smart_home.png"},
  {"id": 22, "name": "Quantum Computing", "file": "quantum_computing.png"},
  {"id": 23, "name": "Blockchain", "file": "blockchain.png"}
]

imports_code = ""
categories_js = []

for c in categories:
    var_name = c["file"].replace('.png', '')
    imports_code += f"import {var_name} from '../assets/category_icons/{c['file']}';\n"
    categories_js.append({
        "id": c["id"],
        "name": c["name"],
        "img": f"__VAR_{var_name}__"
    })

js_content = imports_code + "\nexport const CATEGORIES = " + json.dumps(categories_js, indent=2) + ";\n"

# Replace quoted var names
for c in categories:
    var_name = c["file"].replace('.png', '')
    js_content = js_content.replace(f'"__VAR_{var_name}__"', var_name)

target_file = r'c:\Users\HTC\.gemini\antigravity\scratch\greelance-login\src\data\categoryData.js'
with open(target_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Updated categoryData.js with imported PNG assets directly from Figma screenshot!")

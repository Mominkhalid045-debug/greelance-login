import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

const CATEGORIES = [
  { name: 'E Commerce Skills', icon: '🛒' },
  { name: 'Cybersecurity Engineer', icon: '🛡️' },
  { name: 'Cloud Computing Engineer', icon: '☁️' },
  { name: 'Digital Marketing Expert', icon: '📣' },
  { name: 'Software Engineering', icon: '💻' },
  { name: 'IT Staffing', icon: '🖥️' },
  { name: 'Data Center security', icon: '🔒' },
  { name: 'Artificial Intelligence', icon: '🧠' },
  { name: 'Business Intelligence', icon: '💼' },
  { name: 'Decision Intelligence', icon: '💡' },
  { name: 'Robotics', icon: '🤖' },
  { name: 'Virtual/Augmented', icon: '🕶️' },
  { name: 'Systems Engineering', icon: '💻' },
  { name: 'Cryptocurrency', icon: '🪙' },
  { name: 'Fintech', icon: '💳' },
  { name: 'Autonomous Systems', icon: '🚚' },
  { name: 'Machine Learning', icon: '⚙️' },
  { name: 'Electric-Vehicle Technology', icon: '🔌' },
  { name: 'Internet of Things', icon: '🌐' },
  { name: 'Recycle-Energy', icon: '⚡' },
  { name: 'Smart-Home', icon: '🏠' },
  { name: 'Quantum Computing', icon: '⚛️' },
  { name: 'Blockchain', icon: '🔗' },
];

const DEFAULT_SKILLS = [
  'Retail Media',
  'Programmatic',
  'Network',
  'Product Design',
  'Mobile App Design',
  'Wireframing',
  'Prototype',
  'UX Research',
];

export default function SkillsSelection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('E Commerce Skills');
  const [selectedSubCategory, setSelectedSubCategory] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState([
    'Retail Media', 'Programmatic', 'Network', 'Product Design', 'Product Design',
    'Product Design', 'Product Design', 'Network', 'Network', 'Programmatic',
    'Product Design', 'Product Design', 'Product Design', 'Product Design', 'Network'
  ]);
  const [suggestedSkillInput, setSuggestedSkillInput] = useState('');

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const addSuggestedSkill = (skillToAdd) => {
    if (skillToAdd.trim()) {
      setSelectedSkills([...selectedSkills, skillToAdd.trim()]);
      setSuggestedSkillInput('');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={3} navigate={navigate} />

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '30px' }}>
        
        <div style={{ width: '100%', maxWidth: '1320px' }}>
          
          {/* Category Section */}
          <h2 style={{ fontFamily: F, fontSize: '18px', fontWeight: 700, color: '#050A5F', marginBottom: '4px' }}>
            Category<span style={{ color: '#EF4444' }}>*</span>
          </h2>

          {!selectedCategory ? (
            /* Mode 1: Full Category Grid Unselected State (V1.F1.6-A) */
            <>
              <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8, marginBottom: '24px' }}>
                Select a category from the following.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      border: '0.75px solid #E0E2FE',
                      background: '#F3F7FF',
                      color: '#050A5F',
                      cursor: 'pointer',
                      fontFamily: F,
                      fontSize: '12px',
                      fontWeight: 600,
                      boxShadow: '0 2px 6px rgba(5,10,95,0.03)',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Mode 2: Category Selected State with Sub-Categories & Skills (V1.F1.6-B & C) */
            <>
              {/* Selected Category Pill with Clear Option */}
              <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0 24px 0' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: '0.75px solid #E0E2FE',
                    background: '#F3F7FF',
                    color: '#050A5F',
                    fontFamily: F,
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: '18px' }}>
                    {CATEGORIES.find(c => c.name === selectedCategory)?.icon || '🛒'}
                  </span>
                  <span>{selectedCategory}</span>
                  <span
                    onClick={() => setSelectedCategory(null)}
                    style={{ cursor: 'pointer', color: '#3038BD', fontSize: '16px', marginLeft: '8px' }}
                    title="Clear Category"
                  >
                    ⊗
                  </span>
                </div>
              </div>

              {/* Sub Category Section */}
              <h3 style={{ fontFamily: F, fontSize: '16px', fontWeight: 700, color: '#050A5F', marginBottom: '4px' }}>
                Sub Category<span style={{ color: '#EF4444' }}>*</span>
              </h3>
              <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8, marginBottom: '16px' }}>
                Select a category from the following.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
                {['E Commerce Skills', 'E Commerce Skills', 'E Commerce Skills', 'E Commerce Skills', 'E Commerce Skills', 'E Commerce Skills'].map((sub, idx) => {
                  const isSelected = selectedSubCategory === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedSubCategory(idx)}
                      style={{
                        padding: '10px 24px',
                        borderRadius: '8px',
                        border: isSelected ? 'none' : '0.75px solid #E0E2FE',
                        background: isSelected ? '#3038BD' : '#F3F7FF',
                        color: isSelected ? '#FFFFFF' : '#050A5F',
                        fontFamily: F,
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: isSelected ? '0 4px 12px rgba(48,56,189,0.3)' : 'none',
                      }}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>

              {/* Skills Dropdown Section */}
              <div style={{ position: 'relative', marginBottom: '20px', width: '240px' }}>
                <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F', display: 'block', marginBottom: '8px' }}>
                  Skills
                </label>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    width: '100%',
                    height: '39px',
                    padding: '0 16px',
                    borderRadius: '45px',
                    border: '0.75px solid #E0E2FE',
                    background: '#F3F7FF',
                    fontFamily: F,
                    fontSize: '12px',
                    color: '#050A5F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <span>Select</span>
                  <span style={{ fontSize: '12px', color: '#050A5F' }}>∨</span>
                </div>

                {/* Multiselect Dropdown Menu */}
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '72px',
                      left: 0,
                      width: '240px',
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      boxShadow: '0 12px 32px rgba(5,10,95,0.15)',
                      padding: '12px',
                      zIndex: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {DEFAULT_SKILLS.map((skill, idx) => {
                      const isChecked = selectedSkills.includes(skill);
                      return (
                        <div
                          key={idx}
                          onClick={() => toggleSkill(skill)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            padding: '4px 6px',
                            borderRadius: '6px',
                            transition: 'background 0.15s',
                          }}
                        >
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              background: isChecked ? '#22D3A6' : 'transparent',
                              border: isChecked ? 'none' : '1.5px solid #D1D5DB',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              fontSize: '11px',
                              fontWeight: 700,
                            }}
                          >
                            {isChecked && '✓'}
                          </div>
                          <span style={{ fontFamily: F, fontSize: '12px', color: '#3038BD', fontWeight: 600 }}>
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Selected Skills Tag Cloud (Mint Green Badges) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px', marginTop: '16px' }}>
                {selectedSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#22D3A6',
                      color: '#FFFFFF',
                      fontFamily: F,
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '6px 14px',
                      borderRadius: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      boxShadow: '0 2px 6px rgba(34,211,166,0.3)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Suggest Missing Skill Section */}
              <div style={{ width: '100%', maxWidth: '400px', marginBottom: '36px' }}>
                <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F', display: 'block', marginBottom: '8px' }}>
                  Suggest missing skill
                </label>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <input
                    type="text"
                    value={suggestedSkillInput}
                    onChange={(e) => setSuggestedSkillInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addSuggestedSkill(suggestedSkillInput)}
                    placeholder=""
                    style={{
                      flex: 1,
                      height: '39px',
                      padding: '0 16px',
                      borderRadius: '45px',
                      border: '0.75px solid #E0E2FE',
                      background: '#F3F7FF',
                      fontFamily: F,
                      fontSize: '12px',
                      color: '#050A5F',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Quick Add Suggested Skill Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Retail Media', 'Programmatic', 'Network', 'Product Design'].map((s, i) => (
                    <span
                      key={i}
                      onClick={() => addSuggestedSkill(s)}
                      style={{
                        background: '#22D3A6',
                        color: '#FFFFFF',
                        fontFamily: F,
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '5px 12px',
                        borderRadius: '14px',
                        cursor: 'pointer',
                        display: 'inline-block',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '40px' }}>
            <button
              onClick={() => navigate('/connect-wallet')}
              style={{
                background: '#3038BD',
                color: '#fff',
                border: 'none',
                borderRadius: '16.88px',
                width: '99px',
                height: '27.6px',
                fontFamily: F,
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(48,56,189,0.25)',
              }}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

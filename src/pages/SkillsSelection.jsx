import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

const CATEGORIES = [
  { id: 'ecommerce', name: 'E-Commerce Skills', icon: '🛒' },
  { id: 'it_staffing', name: 'IT Staffing', icon: '🖥️' },
  { id: 'vr_ar', name: 'Virtual/Augmented', icon: '🥽' },
  { id: 'ev_tech', name: 'Electric-Vehicle Technology', icon: '🚗' },
  { id: 'cybersecurity', name: 'Cybersecurity Engineer', icon: '🛡️' },
  { id: 'datacenter', name: 'Data Center Security', icon: '🏛️' },
  { id: 'systems_eng', name: 'Systems Engineering', icon: '💻' },
  { id: 'iot', name: 'Internet of Things', icon: '🌐' },
  { id: 'cloud', name: 'Cloud Computing Engineer', icon: '☁️' },
  { id: 'ai', name: 'Artificial Intelligence', icon: '🧠' },
  { id: 'blockchain', name: 'Blockchain', icon: '🔗' },
  { id: 'recycle_energy', name: 'Recycle-Energy', icon: '⚡' },
  { id: 'digital_marketing', name: 'Digital Marketing Expert', icon: '📢' },
  { id: 'bi', name: 'Business Intelligence', icon: '💼' },
  { id: 'crypto', name: 'Cryptocurrency', icon: '🪙' },
  { id: 'smarthome', name: 'Smart-Home', icon: '🏠' },
  { id: 'software_eng', name: 'Software Engineering', icon: '💻' },
  { id: 'decision_intel', name: 'Decision Intelligence', icon: '💡' },
  { id: 'robotics', name: 'Robotics', icon: '🤖' },
  { id: 'fintech', name: 'Fintech', icon: '💳' },
  { id: 'autonomous', name: 'Autonomous Systems', icon: '🚙' },
  { id: 'ml', name: 'Machine Learning', icon: '⚙️' },
];

const SUB_CATEGORIES_MAP = {
  'Digital Marketing Expert': ['Retail Media', 'Programmatic Ads', 'Network Marketing', 'Product Design', 'Email Marketing', 'SEO Strategy'],
  'Virtual/Augmented': ['VR App Development', 'AR Modeling', 'Unity 3D', 'Unreal Engine', '3D Asset Creation', 'Spatial Computing'],
  'default': ['Retail Media', 'Programmatic Ads', 'Network Marketing', 'Product Design', 'Email Marketing', 'SEO Strategy'],
};

const DROPDOWN_SKILLS_LIST = [
  'Retail Media',
  'Programmatic',
  'Network',
  'Product Design',
  'Email Marketing',
  'SEO',
  'Content Strategy',
  'Paid Social',
  'Analytics',
];

const SUGGESTED_SKILL_CHIPS = ['Network', 'Product Design', 'SEO', 'Content Strategy'];

export default function SkillsSelection() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('Digital Marketing Expert');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Product Design');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(['Retail Media', 'Email Marketing', 'Programmatic']);
  const [customSkillInput, setCustomSkillInput] = useState('');

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCategory = (catName) => {
    setSelectedCategory(catName);
    setSelectedSubCategory(null);
    localStorage.setItem('userSelectedCategory', catName);
  };

  const handleClearCategory = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedSkills([]);
    localStorage.removeItem('userSelectedCategory');
    localStorage.removeItem('userSelectedSubCategory');
  };

  const handleSelectSubCategory = (subCatName) => {
    setSelectedSubCategory(subCatName);
    localStorage.setItem('userSelectedSubCategory', subCatName);
  };

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      if (selectedSkills.length < 15) {
        setSelectedSkills([...selectedSkills, skill]);
      }
    }
  };

  const handleAddCustomSkill = (skillToAdd) => {
    const trimmed = skillToAdd.trim();
    if (trimmed && !selectedSkills.includes(trimmed) && selectedSkills.length < 15) {
      setSelectedSkills([...selectedSkills, trimmed]);
      setCustomSkillInput('');
    }
  };

  const currentCategoryObj = CATEGORIES.find((c) => c.name === selectedCategory);
  const currentSubCategories = selectedCategory
    ? SUB_CATEGORIES_MAP[selectedCategory] || SUB_CATEGORIES_MAP['default']
    : [];

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#F4F7FC',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Floating Step Header Navigation */}
      <StepHeader activeStep={3} navigate={navigate} />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '32px 20px 60px 20px',
        }}
      >
        {/* Main White Card Container */}
        <div
          style={{
            width: '1140px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.03)',
            padding: '48px',
            boxSizing: 'border-box',
            marginBottom: '32px',
          }}
        >
          {/* Section 1: Category* Header */}
          <h2
            style={{
              fontFamily: F,
              fontSize: '22px',
              fontWeight: 700,
              color: '#050A5F',
              margin: '0 0 6px 0',
            }}
          >
            Category<span style={{ color: '#EF4444' }}>*</span>
          </h2>

          <p
            style={{
              fontFamily: F,
              fontSize: '13px',
              color: '#050A5F',
              fontWeight: 500,
              margin: '0 0 24px 0',
            }}
          >
            Select a category from the following.
          </p>

          {!selectedCategory ? (
            /* Mode 1: Grid of All 22 Categories */
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '16px',
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.name)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 22px',
                    borderRadius: '14px',
                    border: '1px solid #D6E4FF',
                    background: '#F8FAFE',
                    color: '#050A5F',
                    fontFamily: F,
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(5, 10, 95, 0.02)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F0F4FF';
                    e.currentTarget.style.borderColor = '#C7D2FE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F8FAFE';
                    e.currentTarget.style.borderColor = '#D6E4FF';
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          ) : (
            /* Mode 2: Selected Category Pill + Sub Category List */
            <>
              {/* Selected Category Pill with X Icon */}
              <div style={{ marginBottom: '40px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '14px 22px',
                    borderRadius: '14px',
                    border: '1px solid #D6E4FF',
                    background: '#F8FAFE',
                    color: '#050A5F',
                    fontFamily: F,
                    fontSize: '13px',
                    fontWeight: 600,
                    minWidth: '220px',
                    boxShadow: '0 2px 8px rgba(5, 10, 95, 0.03)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '18px' }}>{currentCategoryObj?.icon || '📢'}</span>
                    <span>{selectedCategory}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleClearCategory}
                    aria-label="Remove selected category"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#050A5F',
                      fontSize: '16px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2px',
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Section 2: Sub Category* */}
              <h2
                style={{
                  fontFamily: F,
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#050A5F',
                  margin: '0 0 6px 0',
                }}
              >
                Sub Category<span style={{ color: '#EF4444' }}>*</span>
              </h2>

              <p
                style={{
                  fontFamily: F,
                  fontSize: '13px',
                  color: '#050A5F',
                  fontWeight: 500,
                  margin: '0 0 24px 0',
                }}
              >
                Select a category from the following.
              </p>

              {/* Sub Categories Grid */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  marginBottom: '40px',
                }}
              >
                {currentSubCategories.map((sub) => {
                  const isSubSelected = selectedSubCategory === sub;
                  return (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => handleSelectSubCategory(sub)}
                      style={{
                        padding: '14px 26px',
                        borderRadius: '14px',
                        border: isSubSelected ? 'none' : '1px solid #D6E4FF',
                        background: isSubSelected ? '#2334CD' : '#F8FAFE',
                        color: isSubSelected ? '#FFFFFF' : '#050A5F',
                        fontFamily: F,
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: isSubSelected
                          ? '0 4px 14px rgba(35, 52, 205, 0.25)'
                          : '0 2px 6px rgba(5, 10, 95, 0.02)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubSelected) {
                          e.currentTarget.style.background = '#F0F4FF';
                          e.currentTarget.style.borderColor = '#C7D2FE';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubSelected) {
                          e.currentTarget.style.background = '#F8FAFE';
                          e.currentTarget.style.borderColor = '#D6E4FF';
                        }
                      }}
                    >
                      <span>{sub}</span>
                    </button>
                  );
                })}
              </div>

              {/* Section 3: Skills Multi-Select Dropdown & Badges */}
              {selectedSubCategory && (
                <div style={{ marginTop: '32px' }}>
                  <label
                    style={{
                      fontFamily: F,
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#050A5F',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Skills
                  </label>

                  {/* Dropdown Container */}
                  <div ref={dropdownRef} style={{ position: 'relative', width: '280px', marginBottom: '24px' }}>
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        width: '100%',
                        height: '42px',
                        padding: '0 16px',
                        borderRadius: '21px',
                        border: '1px solid #D6E4FF',
                        background: '#F0F4FF',
                        fontFamily: F,
                        fontSize: '13px',
                        color: '#050A5F',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span>
                        {selectedSkills.length > 0
                          ? `${selectedSkills.length} skill(s) selected`
                          : 'Select'}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>

                    {/* Checkbox Items Popup Menu */}
                    {dropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '48px',
                          left: 0,
                          width: '280px',
                          maxHeight: '320px',
                          overflowY: 'auto',
                          background: '#FFFFFF',
                          borderRadius: '16px',
                          boxShadow: '0 10px 30px rgba(5, 10, 95, 0.12)',
                          border: '1px solid #E5E7EB',
                          padding: '12px',
                          zIndex: 100,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {DROPDOWN_SKILLS_LIST.map((skill) => {
                          const isChecked = selectedSkills.includes(skill);
                          return (
                            <div
                              key={skill}
                              onClick={() => toggleSkill(skill)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '8px 10px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'background 0.15s ease',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = '#F4F7FC')}
                              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                              <div
                                style={{
                                  width: '18px',
                                  height: '18px',
                                  borderRadius: '6px',
                                  border: isChecked ? 'none' : '1.5px solid #050A5F',
                                  background: isChecked ? '#2334CD' : 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#FFFFFF',
                                  fontSize: '12px',
                                  fontWeight: 700,
                                }}
                              >
                                {isChecked && '✓'}
                              </div>
                              <span
                                style={{
                                  fontFamily: F,
                                  fontSize: '13px',
                                  fontWeight: 600,
                                  color: '#050A5F',
                                }}
                              >
                                {skill}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Selected Mint Green Skill Badges Cloud */}
                  {selectedSkills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                      {selectedSkills.map((skill) => (
                        <div
                          key={skill}
                          style={{
                            background: '#22C55E',
                            color: '#FFFFFF',
                            fontFamily: F,
                            fontSize: '13px',
                            fontWeight: 600,
                            padding: '8px 18px',
                            borderRadius: '18px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 2px 8px rgba(34, 197, 94, 0.25)',
                          }}
                        >
                          <span>{skill}</span>
                          <span
                            onClick={() => toggleSkill(skill)}
                            style={{ cursor: 'pointer', fontSize: '13px', fontWeight: 700 }}
                            title="Remove skill"
                          >
                            ✕
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Limit Warning Notice */}
                  <p
                    style={{
                      fontFamily: F,
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#22C55E',
                      margin: '0 0 32px 0',
                    }}
                  >
                    *You can only select 15 skills in total
                  </p>

                  {/* Section 4: Suggest missing skill */}
                  <div style={{ maxWidth: '420px' }}>
                    <label
                      style={{
                        fontFamily: F,
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#050A5F',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Suggest missing skill
                    </label>

                    <input
                      type="text"
                      value={customSkillInput}
                      onChange={(e) => setCustomSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddCustomSkill(customSkillInput);
                        }
                      }}
                      placeholder="Type a skill..."
                      style={{
                        width: '100%',
                        height: '42px',
                        padding: '0 20px',
                        borderRadius: '21px',
                        border: '1px solid #D6E4FF',
                        background: '#F0F4FF',
                        fontFamily: F,
                        fontSize: '13px',
                        color: '#050A5F',
                        outline: 'none',
                        boxSizing: 'border-box',
                        marginBottom: '16px',
                      }}
                    />

                    {/* Quick Add Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {SUGGESTED_SKILL_CHIPS.map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => handleAddCustomSkill(chip)}
                          style={{
                            background: '#22C55E',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '18px',
                            padding: '8px 18px',
                            fontFamily: F,
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(34, 197, 94, 0.2)',
                            transition: 'background 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#16A34A')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom Navigation Controls (Outside Card) */}
        <div
          style={{
            width: '1140px',
            maxWidth: '96%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/connect-wallet')}
            style={{
              background: '#2334CD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              height: '42px',
              padding: '0 36px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1B2AB2')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2334CD')}
          >
            <span>Next</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}




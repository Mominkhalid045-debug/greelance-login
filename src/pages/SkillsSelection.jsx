import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

import { CATEGORIES } from '../data/categoryData';

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

  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('userSelectedCategory') || null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
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
        background: '#F7FAFF',
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
        {/* Main White Card Container (1320px width matching Figma frame) */}
        <div
          style={{
            width: '1320px',
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
            /* Mode 1: Exact 4-Row Grid matching Figma Frame V1.F1.6-A */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px', width: '100%' }}>
              {[
                ["E Commerce Skills", "Cybersecurity Engineer", "Cloud Computing Engineer", "Digital Marketing Expert", "Software Engineering"],
                ["IT Staffing", "Data Center security", "Artificial Intelligence", "Business Intelligence", "Decision Intelligence", "Robotics"],
                ["Virtual/Augmented", "Systems Engineering", "Cryptocurrency", "Fintech", "Autonomous Systems", "Machine Learning"],
                ["Electric-Vehicle Technology", "Internet of Things", "Recycle-Energy", "Smart-Home", "Quantum Computing", "Blockchain"]
              ].map((rowNames, rIdx) => (
                <div
                  key={rIdx}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  {rowNames.map((name) => {
                    const cat = CATEGORIES.find((c) => c.name === name) || { name, img: '' };
                    return (
                      <div
                        key={cat.name}
                        onClick={() => handleSelectCategory(cat.name)}
                        style={{
                          display: 'inline-flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: '0 14px',
                          gap: '10px',
                          height: '52px',
                          width: 'auto',
                          whiteSpace: 'nowrap',
                          background: '#F3F7FF',
                          border: '1.5px solid #E0E2FE',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          userSelect: 'none',
                          transition: 'all 0.2s ease',
                          boxSizing: 'border-box',
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#E6EFFF';
                          e.currentTarget.style.borderColor = '#3038BD';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#F3F7FF';
                          e.currentTarget.style.borderColor = '#E0E2FE';
                        }}
                      >
                        <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {cat.img ? (
                            <img src={cat.img} alt={cat.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                          ) : null}
                        </div>
                        <span style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>{cat.name}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : (
            /* Mode 2: Selected Category Pill + Sub Category List */
            <>
              {/* Selected Category Pill with X Icon */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '10px 20px',
                    borderRadius: '7.5px',
                    border: '1.33px solid #3038BD',
                    background: '#E6EFFF',
                    color: '#050A5F',
                    fontFamily: F,
                    fontSize: '13px',
                    fontWeight: 600,
                    minWidth: '220px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {currentCategoryObj?.img ? (
                      <img src={currentCategoryObj.img} alt={selectedCategory} style={{ width: '33px', height: '33px', objectFit: 'contain' }} />
                    ) : null}
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
                        height: '39px',
                        padding: '0 22px',
                        borderRadius: '7.5px',
                        border: isSubSelected ? '1.33px solid #3038BD' : '1.33px solid #E0E2FE',
                        background: isSubSelected ? '#3038BD' : '#F3F7FF',
                        color: isSubSelected ? '#FFFFFF' : '#050A5F',
                        fontFamily: F,
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubSelected) {
                          e.currentTarget.style.background = '#E6EFFF';
                          e.currentTarget.style.borderColor = '#3038BD';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubSelected) {
                          e.currentTarget.style.background = '#F3F7FF';
                          e.currentTarget.style.borderColor = '#E0E2FE';
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
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#050A5F',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Skills
                  </label>

                  {/* Dropdown Container */}
                  <div ref={dropdownRef} style={{ position: 'relative', width: '280px', marginBottom: '16px', zIndex: 100 }}>
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        width: '100%',
                        height: '39px',
                        padding: '0 18px',
                        borderRadius: '45px',
                        border: '0.66px solid #D2D4FF',
                        background: '#F3F7FF',
                        fontFamily: F,
                        fontSize: '12px',
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3038BD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>

                    {/* Checkbox Items Popup Menu */}
                    {dropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '46px',
                          left: 0,
                          width: '280px',
                          maxHeight: '280px',
                          overflowY: 'auto',
                          background: '#FFFFFF',
                          borderRadius: '16px',
                          boxShadow: '0 12px 32px rgba(5, 10, 95, 0.16)',
                          border: '1px solid #D2D4FF',
                          padding: '10px',
                          zIndex: 1000,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
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
                                gap: '10px',
                                padding: '8px 10px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'background 0.15s ease',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = '#F3F7FF')}
                              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                              <div
                                style={{
                                  width: '18px',
                                  height: '18px',
                                  borderRadius: '4px',
                                  border: isChecked ? '1.5px solid #4ADF86' : '1.5px solid #050A5F',
                                  background: isChecked ? '#4ADF86' : 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  boxSizing: 'border-box',
                                }}
                              >
                                {isChecked && (
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                )}
                              </div>
                              <span
                                style={{
                                  fontFamily: F,
                                  fontSize: '12px',
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

                  {/* Selected Mint Green Skill Badges Cloud (Positioned cleanly below dropdown) */}
                  {selectedSkills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                      {selectedSkills.map((skill) => (
                        <div
                          key={skill}
                          style={{
                            background: '#4ADF86',
                            color: '#FFFFFF',
                            fontFamily: F,
                            fontSize: '12px',
                            fontWeight: 500,
                            height: '27px',
                            padding: '0 12px',
                            borderRadius: '7.5px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 2px 6px rgba(74, 223, 134, 0.2)',
                          }}
                        >
                          <span>{skill}</span>
                          <span
                            onClick={() => toggleSkill(skill)}
                            style={{ cursor: 'pointer', fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}
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
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#4ADF86',
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
                        fontSize: '14px',
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
                        height: '39px',
                        padding: '0 18px',
                        borderRadius: '45px',
                        border: '0.66px solid #D2D4FF',
                        background: '#F3F7FF',
                        fontFamily: F,
                        fontSize: '12px',
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
                            background: '#4ADF86',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '7.5px',
                            height: '27px',
                            padding: '0 12px',
                            fontFamily: F,
                            fontSize: '12px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            boxShadow: '0 2px 6px rgba(74, 223, 134, 0.2)',
                            transition: 'background 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#38C972')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = '#4ADF86')}
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
            width: '1320px',
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
              background: '#3038BD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '16.875px',
              width: '99px',
              height: '28px',
              fontFamily: F,
              fontSize: '9px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: 'rgba(48, 56, 189, 0.25) 0px 4px 12px 0px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#252BA3')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#3038BD')}
          >
            <span>Next</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}




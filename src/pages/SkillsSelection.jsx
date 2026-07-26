import { useState } from 'react';
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

export default function SkillsSelection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (catName) => {
    setSelectedCategory(catName);
    localStorage.setItem('userSelectedCategory', catName);
  };

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
          {/* Section Title & Subtitle */}
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
              margin: '0 0 32px 0',
            }}
          >
            Select a category from the following.
          </p>

          {/* Category Cards Flex Wrap Container */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '16px',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
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
                    border: isSelected ? '2px solid #2334CD' : '1px solid #D6E4FF',
                    background: isSelected ? '#EEF2FF' : '#F8FAFE',
                    color: '#050A5F',
                    fontFamily: F,
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 4px 14px rgba(35, 52, 205, 0.15)'
                      : '0 2px 6px rgba(5, 10, 95, 0.02)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = '#F0F4FF';
                      e.currentTarget.style.borderColor = '#C7D2FE';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = '#F8FAFE';
                      e.currentTarget.style.borderColor = '#D6E4FF';
                    }
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {isSelected && (
                    <span
                      style={{
                        marginLeft: '4px',
                        color: '#22C55E',
                        fontSize: '14px',
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Controls (Outside Card) */}
        <div
          style={{
            width: '1140px',
            maxWidth: '96%',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/setup-profile')}
            style={{
              background: '#FFFFFF',
              color: '#2334CD',
              border: '1.5px solid #2334CD',
              borderRadius: '20px',
              height: '42px',
              padding: '0 28px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#EEF2FF')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/connect-wallet')}
            style={{
              background: selectedCategory ? '#2334CD' : '#A5B4FC',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              height: '42px',
              padding: '0 32px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: selectedCategory
                ? 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px'
                : 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedCategory) e.currentTarget.style.background = '#1B2AB2';
            }}
            onMouseLeave={(e) => {
              if (selectedCategory) e.currentTarget.style.background = '#2334CD';
            }}
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


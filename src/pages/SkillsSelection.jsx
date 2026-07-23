import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

const CATEGORIES = [
  { name: 'E Commerce Skills', icon: '🛒' },
  { name: 'Cybersecurity Engineer', icon: '🔒' },
  { name: 'Cloud Computing Engineer', icon: '☁️' },
  { name: 'Digital Marketing Expert', icon: '📈' },
  { name: 'Software Engineering', icon: '💻' },
  { name: 'IT Staffing', icon: '👥' },
  { name: 'Data Center security', icon: '🛡️' },
  { name: 'Artificial Intelligence', icon: '🤖' },
  { name: 'Business Intelligence', icon: '📊' },
  { name: 'Decision Intelligence', icon: '🧠' },
  { name: 'Robotics', icon: '🦾' },
  { name: 'Virtual/Augmented', icon: '🥽' },
  { name: 'Systems Engineering', icon: '⚙️' },
  { name: 'Cryptocurrency', icon: '🪙' },
  { name: 'Fintech', icon: '💳' },
  { name: 'Autonomus Systems', icon: '🚗' },
  { name: 'Machine Learning', icon: '📡' },
  { name: 'Electric-Vehicle Technology', icon: '🔋' },
  { name: 'Internet of Things', icon: '🌐' },
  { name: 'Recycle-Energy', icon: '♻️' },
  { name: 'Smart-Home', icon: '🏠' },
  { name: 'Quantum Computing', icon: '⚛️' },
  { name: 'Blockchain', icon: '🔗' },
];

export default function SkillsSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('Cloud Computing Engineer');

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={3} navigate={navigate} />

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '40px' }}>
        
        <div style={{ width: '100%', maxWidth: '1320px' }}>
          {/* Title */}
          <h2 style={{ fontFamily: F, fontSize: '30px', fontWeight: 600, color: '#050A5F', marginBottom: '4px' }}>
            Category<span style={{ color: '#EF4444' }}>*</span>
          </h2>
          <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8, marginBottom: '24px' }}>
            Select a category from the following.
          </p>

          {/* Category Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {CATEGORIES.map(cat => {
              const isSelected = selected === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelected(cat.name)}
                  className="category-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '6px 14px', borderRadius: '20px',
                    border: isSelected ? '1px solid #3038BD' : '1px solid #E0E2FE',
                    background: isSelected ? '#3038BD' : '#fff',
                    color: isSelected ? '#fff' : '#050A5F',
                    cursor: 'pointer', fontFamily: F, fontSize: '12px', fontWeight: 500,
                    userSelect: 'none',
                  }}
                >
                  <span style={{ fontSize: '16px' }}>{cat.icon}</span>
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', marginBottom: '40px' }}>
            <button onClick={() => navigate('/connect-wallet')} style={{ background: '#ADAFDD', color: '#fff', border: '0.28px solid #ADAFDD', borderRadius: '16.88px', width: '99px', height: '27.6px', fontFamily: F, fontSize: '9px', fontWeight: 500, cursor: 'pointer' }}>
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

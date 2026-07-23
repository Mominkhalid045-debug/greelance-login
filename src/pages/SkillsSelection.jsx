import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ width: '100vw', height: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '0', alignItems: 'stretch', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/setup-profile')}
          style={{ width: '56px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1 }}>
          {[
            { num: 1, label: 'Upload Resume', path: '/form' },
            { num: 2, label: 'Setup Profile', path: '/setup-profile' },
            { num: 3, label: 'Choose Skill', path: '/skills' },
            { num: 4, label: 'Connect Wallet', path: '/connect-wallet' },
            { num: 5, label: 'Complete Profile', path: '/complete-profile' },
          ].map(step => {
            const isActive = step.num === 3;
            return (
              <div
                key={step.num}
                onClick={() => navigate(step.path)}
                style={{
                  flex: 1,
                  padding: '14px 16px',
                  cursor: 'pointer',
                  background: isActive ? '#3741D4' : 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p style={{ margin: 0, fontSize: '11px', color: isActive ? '#93C5FD' : '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step {step.num}</p>
                <p style={{ margin: 0, fontSize: '13px', color: isActive ? '#FFFFFF' : '#0A0F2E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>{step.label}</p>
              </div>
            );
          })}
        </div>

        {/* Forward/Exit Arrow */}
        <button onClick={() => navigate('/connect-wallet')} style={{ width: '56px', background: '#fff', border: 'none', borderLeft: '1px solid #E5E7EB', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content Area - Scrollable */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '32px 40px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', borderRadius: '20px', padding: '36px 40px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          
          {/* Title */}
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#0A0F2E', margin: '0 0 4px 0' }}>
            Category<span style={{ color: '#EF4444' }}>*</span>
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', margin: '0 0 28px 0' }}>
            Select a category from the following.
          </p>

          {/* Category Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
            {CATEGORIES.map(cat => {
              const isSelected = selected === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelected(cat.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid #3741D4' : '1.5px solid #E5E7EB',
                    background: isSelected ? '#EEF2FF' : '#FFFFFF',
                    cursor: 'pointer',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#0A0F2E',
                    transition: 'all 0.15s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{cat.icon}</span>
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              onClick={() => navigate('/connect-wallet')}
              style={{
                background: '#3741D4',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                padding: '12px 40px',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
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

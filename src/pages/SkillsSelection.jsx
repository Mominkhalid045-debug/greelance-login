import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  'Development & IT',
  'Design & Creative',
  'AI & Machine Learning',
  'Marketing & Sales',
  'Writing & Translation',
  'Finance & Accounting'
];

const SUB_CATEGORIES = [
  'Web Development',
  'Mobile App Development',
  'Blockchain & Web3',
  'UI/UX Design',
  'DevOps & Cloud'
];

const AVAILABLE_SKILLS = [
  'React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js',
  'Solidity', 'Web3.js', 'Ethers.js', 'Rust', 'Python',
  'Figma', 'UI Design', 'UX Research', 'GraphQL', 'Docker',
  'PostgreSQL', 'MongoDB', 'AWS', 'Smart Contracts', 'Go'
];

export default function SkillsSelection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Development & IT');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Blockchain & Web3');
  const [selectedSkills, setSelectedSkills] = useState(['React.js', 'TypeScript', 'Solidity']);

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      if (selectedSkills.length >= 15) {
        alert('You can only select up to 15 skills in total.');
        return;
      }
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ display: 'flex', background: '#fff', padding: '16px 32px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/setup-profile')}
          style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1, gap: '40px' }}>
          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/form')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 1</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Upload Resume</p>
          </div>
          
          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/setup-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 2</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Setup Profile</p>
          </div>

          <div style={{ background: '#E0E7FF', padding: '8px 24px', borderRadius: '8px', borderLeft: '4px solid #3741D4' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 3</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#3741D4', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Choose Skill</p>
          </div>

          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/connect-wallet')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 4</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Connect Wallet</p>
          </div>
          
          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/assessment')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 5</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Complete Profile</p>
          </div>
        </div>

        {/* Exit Icon */}
        <button onClick={() => navigate('/')} style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </button>
      </div>

      {/* Main Container */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px' }}>
            Category & Skills Selection
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', marginBottom: '32px' }}>
            Select your main domain and pick up to 15 key skills to display on your Greelance freelancer card.
          </p>

          {/* Category Dropdowns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>
                Category *
              </label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E0E2FE', outline: 'none', fontFamily: "'Poppins', sans-serif", fontSize: '14px' }}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>
                Sub Category *
              </label>
              <select 
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E0E2FE', outline: 'none', fontFamily: "'Poppins', sans-serif", fontSize: '14px' }}
              >
                {SUB_CATEGORIES.map(sub => <option key={sub} value={sub}>{sub}</option>)}
              </select>
            </div>
          </div>

          {/* Skills Grid */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: '#0A0F2E' }}>
                Select Skills ({selectedSkills.length}/15)
              </label>
              <span style={{ fontSize: '12px', color: '#6B7280' }}>*You can only select 15 skills in total</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {AVAILABLE_SKILLS.map(skill => {
                const active = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '24px',
                      border: active ? '1.5px solid #3741D4' : '1px solid #E5E7EB',
                      background: active ? '#EEF2FF' : '#F9FAFB',
                      color: active ? '#3741D4' : '#374151',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '13px',
                      fontWeight: active ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {active ? `✓ ${skill}` : `+ ${skill}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E5E7EB', paddingTop: '24px' }}>
            <button 
              onClick={() => navigate('/setup-profile')}
              style={{ background: 'transparent', color: '#6B7280', border: '1px solid #D1D5DB', borderRadius: '30px', padding: '12px 28px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
            >
              Back
            </button>
            <button 
              onClick={() => navigate('/connect-wallet')}
              style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '12px 36px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}
            >
              Next Step: Connect Wallet →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

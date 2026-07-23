import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompleteProfile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [aboutText, setAboutText] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleModifyWithAI = () => {
    if (!aboutText.trim()) {
      setAboutText("Experienced Full Stack & Blockchain Developer with over 5 years of experience crafting high-performance decentralized web applications, smart contracts, and intuitive user interfaces. Passionate about Web3 ecosystem growth.");
    } else {
      setAboutText(prev => `${prev}\n\n✨ AI Refined: Driven developer with deep expertise in modern React architectures, Solidity smart contracts, and scalable backend services.`);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '0', alignItems: 'stretch', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/connect-wallet')}
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
            const isActive = step.num === 5;
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

        {/* Forward Arrow placeholder */}
        <div style={{ width: '56px', background: '#fff', borderLeft: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Main Content Area - Scrollable */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '32px 40px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', borderRadius: '20px', padding: '48px 40px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          
          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#3741D4', margin: '0 0 6px 0' }}>
              Complete Profile
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', margin: 0 }}>
              Upload your photo and write about your work to start your Greelance journey.
            </p>
          </div>

          {/* Profile Picture Upload */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '36px' }}>
            <label style={{ cursor: 'pointer' }}>
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 24px',
                  borderRadius: '14px',
                  background: '#EEF2FF',
                  border: '1.5px solid #C7D2FE',
                  transition: 'all 0.2s',
                }}
              >
                {/* Avatar Icon */}
                <div style={{ width: '44px', height: '44px', borderRadius: '22px', background: '#E0E7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {/* Green collar accent */}
                      <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '28px', height: '10px', background: '#22C55E', borderRadius: '0 0 14px 14px' }}></div>
                    </>
                  )}
                </div>

                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: '#0A0F2E' }}>
                  Upload Profile Picture
                </span>

                {/* Upload Arrow */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
            </label>
            
            <p style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '10px', margin: '10px 0 0 0' }}>
              *You can upload any JPEG or PNG.
            </p>
          </div>

          {/* About Section */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0A0F2E' }}>
                About
              </label>

              <button 
                type="button"
                onClick={handleModifyWithAI}
                style={{
                  background: 'transparent',
                  color: '#6B7280',
                  border: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>✨</span> Modify With AI
              </button>
            </div>

            <textarea 
              rows={6}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder="Write text here..."
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1.5px solid #E5E7EB',
                background: '#F9FAFD',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                color: '#0A0F2E',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompleteProfile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [aboutText, setAboutText] = useState('');
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '16px 32px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/connect-wallet')}
          style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px', flexShrink: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1, gap: '32px', overflowX: 'auto' }}>
          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/form')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 1</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Upload Resume</p>
          </div>
          
          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/setup-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 2</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Setup Profile</p>
          </div>

          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/skills')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 3</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Choose Skill</p>
          </div>

          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/connect-wallet')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 4</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Connect Wallet</p>
          </div>
          
          <div style={{ background: '#E0E7FF', padding: '8px 20px', borderRadius: '8px', borderLeft: '4px solid #3741D4', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/complete-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 5</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#3741D4', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Complete Profile</p>
          </div>
        </div>

        {/* Exit Icon */}
        <button onClick={() => navigate('/')} style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </button>
      </div>

      {/* Main Container - Scrollable */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '40px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '850px', background: '#FFFFFF', borderRadius: '24px', padding: '48px 40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          
          {/* Header Title & Subtitle */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '26px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px' }}>
              Complete Profile
            </h1>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', margin: 0 }}>
              Upload your photo and write about your work to start your Greelance journey.
            </p>
          </div>

          {/* Profile Picture Upload Box */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
            <label style={{ cursor: 'pointer' }}>
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              <div 
                style={{
                  width: '320px',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  background: '#EEF2FF',
                  border: '1.5px solid #C7D2FE',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.2s'
                }}
              >
                {/* Avatar Icon */}
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#E0E7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>

                <span style={{ flex: 1, fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: '#0A0F2E' }}>
                  {profileImage ? 'Change Profile Picture' : 'Upload Profile Picture'}
                </span>

                {/* Upload Arrow Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', fontWeight: 700, color: '#0A0F2E' }}>
                About
              </label>

              {/* Modify With AI Button */}
              <button 
                type="button"
                onClick={handleModifyWithAI}
                style={{
                  background: '#EEF2FF',
                  color: '#3741D4',
                  border: '1px solid #C7D2FE',
                  borderRadius: '20px',
                  padding: '6px 16px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
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
                border: '1px solid #E0E2FE',
                background: '#F9FAFD',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                color: '#0A0F2E',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '24px' }}>
            <button 
              onClick={() => navigate('/connect-wallet')}
              style={{ background: 'transparent', color: '#6B7280', border: '1px solid #D1D5DB', borderRadius: '30px', padding: '12px 32px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
            >
              Back
            </button>

            <button 
              onClick={() => setShowPreviewModal(true)} 
              style={{ background: '#3741D4', color: '#fff', border: 'none', borderRadius: '30px', padding: '14px 40px', fontFamily: "'Poppins', sans-serif", fontSize: '15px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}
            >
              Preview Profile →
            </button>
          </div>

        </div>
      </div>

      {/* Profile Preview Modal */}
      {showPreviewModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10, 15, 46, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '640px', background: '#FFFFFF', borderRadius: '24px', padding: '36px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', position: 'relative' }}>
            <button onClick={() => setShowPreviewModal(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#6B7280' }}>✕</button>

            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0A0F2E', marginBottom: '20px', textAlign: 'center' }}>
              Profile Preview
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', padding: '16px', background: '#F9FAFB', borderRadius: '16px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '32px', background: '#3741D4', color: '#fff', fontSize: '24px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {profileImage ? <img src={profileImage} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : 'AM'}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#0A0F2E' }}>Alex Morgan</h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#6B7280' }}>Senior Blockchain & UI/UX Developer • $45.00/hr</p>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>About</h4>
              <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.6, background: '#F9FAFB', padding: '16px', borderRadius: '12px', margin: 0 }}>
                {aboutText || "Experienced developer passionate about building high-performance decentralized web applications."}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', paddingTop: '16px', borderTop: '1px solid #E5E7EB' }}>
              <button onClick={() => setShowPreviewModal(false)} style={{ background: 'transparent', color: '#6B7280', border: '1px solid #D1D5DB', borderRadius: '30px', padding: '12px 28px', fontWeight: 600, cursor: 'pointer' }}>Edit Profile</button>
              <button 
                onClick={() => { setShowPreviewModal(false); setShowSuccessModal(true); }}
                style={{ background: '#22C55E', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '12px 36px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 14px rgba(34,197,94,0.3)' }}
              >
                Submit Profile ✓
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10, 15, 46, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ width: '100%', maxWidth: '520px', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', textAlign: 'center' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '36px', background: '#DCFCE7', color: '#166534', fontSize: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              ✓
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px' }}>
              Profile Submitted Successfully!
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '32px' }}>
              Your Greelance freelancer profile is now live. Complete the skill assessment to get verified.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button onClick={() => navigate('/dashboard')} style={{ background: '#F3F4F6', color: '#374151', border: 'none', borderRadius: '30px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer' }}>Go to Home</button>
              <button onClick={() => navigate('/assessment')} style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '12px 32px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}>Start Assessment →</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

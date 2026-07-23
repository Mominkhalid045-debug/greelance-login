import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

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
      setAboutText("Experienced Full Stack & Blockchain Developer with over 5 years of experience crafting high-performance decentralized web applications, smart contracts, and intuitive user interfaces.");
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={5} navigate={navigate} />

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '40px' }}>
        
        <div style={{ width: '100%', maxWidth: '1320px', minHeight: '530.25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Title */}
          <h2 style={{ fontFamily: F, fontSize: '30px', fontWeight: 600, color: '#050A5F', marginBottom: '4px', textAlign: 'center', letterSpacing: '0.15px', lineHeight: '42.75px' }}>
            Complete Profile
          </h2>
          <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8, marginBottom: '24px', textAlign: 'center', letterSpacing: '0.15px', lineHeight: '18px' }}>
            Upload your photo and write about your work to start your Greelance journey.
          </p>

          {/* Upload Profile Picture Box */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
            <label style={{ cursor: 'pointer' }}>
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              <div style={{
                border: '1.5px dashed #3038BD',
                background: '#F3F7FF',
                borderRadius: '12px',
                width: '278.56px', height: '110px',
                padding: '15px 20px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                transition: 'all 0.3s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Avatar Icon */}
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '6px',
                    border: '1px solid #E0E2FE', background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(5,10,95,0.05)',
                    overflow: 'hidden',
                  }}>
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3038BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                  </div>
                  <span style={{ fontFamily: F, fontSize: '12px', fontWeight: 500, color: '#050A5F', lineHeight: '13.5px' }}>
                    Upload Profile Picture
                  </span>
                </div>
                {/* Upload Icon */}
                <div style={{ display: 'flex', alignItems: 'center', color: '#050A5F' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
              </div>
            </label>
            <p style={{ fontFamily: F, fontSize: '9.75px', color: '#050A5F', opacity: 0.6, marginTop: '8px', letterSpacing: '0.15px', lineHeight: '18px' }}>
              *You can upload any JPEG or PNG.
            </p>
          </div>

          {/* About Section */}
          <div style={{ width: '100%', maxWidth: '958.5px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontFamily: F, fontSize: '14px', fontWeight: 600, color: '#050A5F' }}>About</label>
              <button
                type="button"
                onClick={handleModifyWithAI}
                style={{
                  background: '#E6EFFF', color: '#3038BD',
                  border: '0.84px solid #3038BD',
                  borderRadius: '16.88px',
                  width: '103.5px', height: '19.5px',
                  fontFamily: F, fontSize: '8.5px', fontWeight: 500,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px',
                }}
              >
                ✨ Modify With AI
              </button>
            </div>
            <textarea
              rows={5}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder="Write text here..."
              style={{
                width: '100%', minHeight: '80.25px', height: '100px',
                padding: '12px 16px', borderRadius: '6px',
                border: '0.75px solid #E0E2FE', background: '#F3F7FF',
                fontFamily: F, fontSize: '13px', color: '#050A5F',
                outline: 'none', resize: 'vertical', boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Preview Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <button onClick={() => navigate('/assessment')} style={{ background: '#ADAFDD', color: '#fff', border: '0.28px solid #ADAFDD', borderRadius: '16.88px', width: '99px', height: '27.6px', fontFamily: F, fontSize: '9px', fontWeight: 500, cursor: 'pointer', boxShadow: '0 2px 4px rgba(5,10,95,0.05)' }}>
              Preview
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

export default function CompleteProfile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);
  const [aboutText, setAboutText] = useState('');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Direct file input trigger
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem('userProfileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // AI Bio Generator simulator
  const handleModifyWithAI = () => {
    setIsAiGenerating(true);
    const aiBios = [
      "Experienced Full Stack & Blockchain Developer with over 5 years of experience crafting high-performance decentralized web applications, smart contracts, and intuitive user interfaces. Passionate about clean code, UX excellence, and scalable cloud architecture.",
      "Senior Product Designer & Frontend Specialist focused on creating stunning, pixel-perfect user experiences for Web3 ecosystems and SaaS platforms. Proven track record of boosting conversion rates by 40% through human-centric UI design.",
      "Dedicated Digital Marketing & SEO Strategist specializing in data-driven growth campaigns, brand position, and high-ROI conversion funnels for tech startups and enterprise platforms.",
    ];

    setTimeout(() => {
      const randomBio = aiBios[Math.floor(Math.random() * aiBios.length)];
      setAboutText(randomBio);
      localStorage.setItem('userAboutBio', randomBio);
      setIsAiGenerating(false);
    }, 400);
  };

  const handlePreview = () => {
    setShowToast(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1800);
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
      <StepHeader activeStep={5} navigate={navigate} />

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/jpeg,image/png,image/jpg,image/webp"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
            marginBottom: '32px',
          }}
        >
          {/* Main Title & Subtitle */}
          <h2
            style={{
              fontFamily: F,
              fontSize: '26px',
              fontWeight: 700,
              color: '#050A5F',
              margin: '0 0 8px 0',
              textAlign: 'center',
            }}
          >
            Complete Profile
          </h2>

          <p
            style={{
              fontFamily: F,
              fontSize: '13px',
              color: '#050A5F',
              fontWeight: 500,
              margin: '0 0 36px 0',
              textAlign: 'center',
            }}
          >
            Upload your photo and write about your work to start your Greelance journey.
          </p>

          {/* Upload Profile Picture Box */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            {!profileImage ? (
              <button
                type="button"
                onClick={handleUploadClick}
                style={{
                  border: '1.5px dashed #D6E4FF',
                  background: '#F8FAFE',
                  borderRadius: '16px',
                  width: '320px',
                  height: '72px',
                  padding: '0 20px',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(5, 10, 95, 0.02)',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Badge Icon */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#EEF2FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: F,
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#050A5F',
                    }}
                  >
                    Upload Profile Picture
                  </span>
                </div>

                {/* Upload Arrow */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </button>
            ) : (
              /* Display Uploaded Profile Image Avatar */
              <div style={{ position: 'relative' }}>
                <img
                  src={profileImage}
                  alt="Profile Avatar"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #2334CD',
                    boxShadow: '0 6px 18px rgba(35, 52, 205, 0.2)',
                  }}
                />
                <button
                  type="button"
                  onClick={handleUploadClick}
                  title="Change Picture"
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#2334CD',
                    color: '#FFFFFF',
                    border: '2px solid #FFFFFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                  }}
                >
                  ✏️
                </button>
              </div>
            )}

            {/* Green Upload Format Notice */}
            <p
              style={{
                fontFamily: F,
                fontSize: '13px',
                fontWeight: 600,
                color: '#22C55E',
                margin: '12px 0 0 0',
                textAlign: 'center',
              }}
            >
              *You can upload any JPEG or PNG
            </p>
          </div>

          {/* About Section */}
          <div style={{ width: '100%', maxWidth: '840px', marginBottom: '40px' }}>
            <div
              style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <label
                style={{
                  fontFamily: F,
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#050A5F',
                }}
              >
                About
              </label>

              {/* Modify with AI Button */}
              <button
                type="button"
                onClick={handleModifyWithAI}
                disabled={isAiGenerating}
                style={{
                  background: '#EEF2FF',
                  color: '#2334CD',
                  border: '1.5px solid #C7D2FE',
                  borderRadius: '20px',
                  height: '36px',
                  padding: '0 18px',
                  fontFamily: F,
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 6px rgba(35, 52, 205, 0.05)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#E0E7FF')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#EEF2FF')}
              >
                <span>{isAiGenerating ? '⌛ Generating...' : '✨ Modify with AI'}</span>
              </button>
            </div>

            {/* About Textarea */}
            <textarea
              rows={5}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder="Write a short introduction about your work..."
              style={{
                width: '100%',
                padding: '18px 20px',
                borderRadius: '18px',
                border: '1px solid #D6E4FF',
                background: '#F8FAFE',
                fontFamily: F,
                fontSize: '13px',
                color: '#050A5F',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
                lineHeight: '20px',
              }}
            />
          </div>

          {/* Centered Preview Button */}
          <button
            type="button"
            onClick={handlePreview}
            style={{
              background: '#2334CD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              height: '42px',
              padding: '0 48px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 14px 0px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1B2AB2')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2334CD')}
          >
            Preview
          </button>
        </div>
      </main>

      {/* Toast Notification ("Profile Set Successfully") */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            background: '#ECFDF5',
            border: '1px solid #10B981',
            borderRadius: '40px',
            padding: '12px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 12px 28px rgba(16, 185, 129, 0.2)',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#10B981',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            ✓
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: F, fontSize: '12.5px', fontWeight: 700, color: '#065F46' }}>
              Profile Set Successfully
            </span>
            <span style={{ fontFamily: F, fontSize: '11px', color: '#047857' }}>
              Your profile is all set! Redirecting to dashboard...
            </span>
          </div>
          <span
            onClick={() => setShowToast(false)}
            style={{ cursor: 'pointer', color: '#047857', marginLeft: '12px', fontSize: '14px' }}
          >
            ✕
          </span>
        </div>
      )}
    </div>
  );
}

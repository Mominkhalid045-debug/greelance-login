import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';
import EditProfilePictureModal from '../components/EditProfilePictureModal';
import defaultAvatar from '../assets/default_avatar.svg';

const DEFAULT_AVATAR = defaultAvatar;

export default function CompleteProfile() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('userProfileImage') || DEFAULT_AVATAR
  );
  const [aboutText, setAboutText] = useState(
    localStorage.getItem('userAboutBio') ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // AI Bio Generator simulator
  const handleModifyWithAI = () => {
    setIsAiGenerating(true);
    const aiBios = [
      "Experienced Full Stack & Blockchain Developer with over 5 years of experience crafting high-performance decentralized web applications, smart contracts, and intuitive user interfaces. Passionate about clean code, UX excellence, and scalable cloud architecture.",
      "Senior Product Designer & Frontend Specialist focused on creating stunning, pixel-perfect user experiences for Web3 ecosystems and SaaS platforms. Proven track record of boosting conversion rates by 40% through human-centric UI design.",
      "Dedicated Digital Marketing & SEO Strategist specializing in data-driven growth campaigns, brand positioning, and high-ROI conversion funnels for tech startups and enterprise platforms.",
    ];

    setTimeout(() => {
      const randomBio = aiBios[Math.floor(Math.random() * aiBios.length)];
      setAboutText(randomBio);
      localStorage.setItem('userAboutBio', randomBio);
      setIsAiGenerating(false);
    }, 400);
  };

  const handleSaveModalImage = (newImageSrc) => {
    setProfileImage(newImageSrc);
    localStorage.setItem('userProfileImage', newImageSrc);
  };

  const handlePreview = () => {
    setShowToast(true);
    setTimeout(() => {
      navigate('/assessment');
    }, 1800);
  };

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#F7FAFF',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        fontFamily: F,
      }}
    >
      {/* Floating Step Header Navigation */}
      <StepHeader activeStep={5} navigate={navigate} />

      {/* Edit Profile Picture Modal */}
      <EditProfilePictureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentImage={profileImage}
        onSaveImage={handleSaveModalImage}
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
        {/* Main White Card Container (Figma frame: 1006.5px x 580.5px) */}
        <div
          style={{
            width: '1006.5px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.03)',
            padding: '40px 48px 48px 48px',
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

          {/* Profile Picture Avatar Frame with Pencil Edit Icon */}
          <div
            onClick={() => setIsModalOpen(true)}
            style={{
              position: 'relative',
              cursor: 'pointer',
              marginBottom: '36px',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #E6EFFF',
                boxShadow: '0 8px 24px rgba(48, 56, 189, 0.12)',
                background: '#F3F7FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={profileImage}
                alt="Profile Avatar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Pencil Badge Icon at Bottom Right */}
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1.5px solid #E6EFFF',
                boxShadow: '0 2px 8px rgba(5, 10, 95, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3038BD',
                fontSize: '13px',
              }}
              title="Edit Profile Picture"
            >
              ✏️
            </div>
          </div>

          {/* About Section */}
          <div style={{ width: '100%', maxWidth: '880px', marginBottom: '32px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <label
                style={{
                  fontFamily: F,
                  fontSize: '14px',
                  fontWeight: 600,
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
                  background: '#E6EFFF',
                  color: '#3038BD',
                  border: 'none',
                  borderRadius: '12px',
                  height: '24px',
                  padding: '4px 12px',
                  fontFamily: F,
                  fontSize: '10px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#D8E5FF')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#E6EFFF')}
              >
                <span>{isAiGenerating ? '⌛ Generating...' : 'Modify with AI'}</span>
              </button>
            </div>

            {/* About Textarea */}
            <textarea
              rows={4}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder="Write a short introduction about your work..."
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '15px',
                border: '0.66px solid #D2D4FF',
                background: '#F3F7FF',
                fontFamily: F,
                fontSize: '12px',
                color: '#050A5F',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
                lineHeight: '18px',
              }}
            />
          </div>

          {/* Centered Preview Button (Figma size: 99px x 28px) */}
          <button
            type="button"
            onClick={handlePreview}
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
              boxShadow: 'rgba(48, 56, 189, 0.25) 0px 4px 14px 0px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#252BA3')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#3038BD')}
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
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 12px 28px rgba(16, 185, 129, 0.2)',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#10B981',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '12px',
            }}
          >
            ✓
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: F, fontSize: '12px', fontWeight: 700, color: '#065F46' }}>
              Profile Set Successfully
            </span>
            <span style={{ fontFamily: F, fontSize: '10.5px', color: '#047857' }}>
              Your profile is all set
            </span>
          </div>
          <span
            onClick={() => setShowToast(false)}
            style={{ cursor: 'pointer', color: '#047857', marginLeft: '12px', fontSize: '13px' }}
          >
            ✕
          </span>
        </div>
      )}
    </div>
  );
}


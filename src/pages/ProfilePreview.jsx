import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';
import defaultAvatar from '../assets/default_avatar.svg';

const DEFAULT_AVATAR = defaultAvatar;

export default function ProfilePreview() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(DEFAULT_AVATAR);
  const [aboutBio, setAboutBio] = useState('');
  const [wallet, setWallet] = useState('MetaMask');
  const [selectedSkills, setSelectedSkills] = useState(['Blockchain', 'Smart Contracts', 'Solidity', 'React.js', 'Node.js']);

  useEffect(() => {
    const savedImg = localStorage.getItem('userProfileImage');
    if (savedImg) setProfileImage(savedImg);

    const savedBio = localStorage.getItem('userAboutBio');
    if (savedBio) setAboutBio(savedBio);

    const savedWallet = localStorage.getItem('userSelectedWallet');
    if (savedWallet) setWallet(savedWallet);
  }, []);

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
      {/* Floating Step Header */}
      <StepHeader activeStep={5} navigate={navigate} />

      {/* Main Content Container */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '32px 20px 60px 20px',
        }}
      >
        {/* Profile Card Frame (Width: 1006.5px) */}
        <div
          style={{
            width: '1006.5px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.03)',
            overflow: 'hidden',
            marginBottom: '32px',
            position: 'relative',
          }}
        >
          {/* Top Decorative Blue Gradient Banner */}
          <div
            style={{
              height: '140px',
              background: 'linear-gradient(135deg, #3038BD 0%, #5961CB 50%, #7B8BFF 100%)',
              position: 'relative',
              padding: '24px 40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              👁️ Profile Preview Mode
            </span>

            <span
              style={{
                background: '#4ADF86',
                color: '#050A5F',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              ✓ Wallet Connected: {wallet}
            </span>
          </div>

          {/* User Profile Info Section */}
          <div style={{ padding: '0 48px 40px 48px', marginTop: '-50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
              
              {/* Avatar & Name */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '24px' }}>
                <div
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    border: '4px solid #FFFFFF',
                    boxShadow: '0 8px 24px rgba(5, 10, 95, 0.12)',
                    background: '#FFFFFF',
                    overflow: 'hidden',
                  }}
                >
                  <img src={profileImage} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div>
                  <h2 style={{ margin: '0 0 4px 0', fontSize: '24px', fontWeight: 700, color: '#050A5F' }}>
                    Momin Khalid
                  </h2>
                  <p style={{ margin: 0, fontSize: '14px', color: '#5961CB', fontWeight: 600 }}>
                    Senior Blockchain & Full Stack Engineer
                  </p>
                </div>
              </div>

              {/* Hourly Rate & Location */}
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '22px', fontWeight: 700, color: '#3038BD' }}>$65.00</span>
                <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}> / hr</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#6B7280' }}>📍 Remote • Full Time</p>
              </div>

            </div>

            {/* About Section */}
            <div style={{ marginBottom: '32px', background: '#F8FAFF', padding: '24px', borderRadius: '16px', border: '1px solid #E6EFFF' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 700, color: '#050A5F' }}>
                About
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>
                {aboutBio || "Experienced Full Stack & Blockchain Developer with over 5 years of experience crafting high-performance decentralized web applications, smart contracts, and intuitive user interfaces. Passionate about clean code, UX excellence, and scalable cloud architecture."}
              </p>
            </div>

            {/* Skills & Categories */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: 700, color: '#050A5F' }}>
                Primary Skills & Expertise
              </h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: '#E6EFFF',
                      color: '#3038BD',
                      padding: '8px 18px',
                      borderRadius: '30px',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: '1px solid #D2D4FF',
                    }}
                  >
                    ⚡ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Experience Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              
              {/* Education Card */}
              <div style={{ background: '#F8FAFF', borderRadius: '16px', padding: '20px', border: '1px solid #E6EFFF' }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 700, color: '#050A5F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🎓 Education
                </h4>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E0E2FE' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 700, color: '#050A5F' }}>
                    BS in Computer Science
                  </p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#6B7280' }}>
                    National University of Sciences & Technology • 2019 - 2023
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div style={{ background: '#F8FAFF', borderRadius: '16px', padding: '20px', border: '1px solid #E6EFFF' }}>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 700, color: '#050A5F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  💼 Work Experience
                </h4>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E0E2FE' }}>
                  <p style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 700, color: '#050A5F' }}>
                    Lead Web3 & React Developer
                  </p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#6B7280' }}>
                    Greelance Ecosystems • 2023 - Present
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Action Row inside Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F3F4F6', paddingTop: '24px' }}>
              <button
                type="button"
                onClick={() => navigate('/complete-profile')}
                style={{
                  background: 'transparent',
                  color: '#5961CB',
                  border: '1.5px solid #5961CB',
                  borderRadius: '18px',
                  padding: '10px 24px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                ← Edit Profile
              </button>

              <button
                type="button"
                onClick={() => navigate('/assessment')}
                style={{
                  background: '#3038BD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '12px 32px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 18px rgba(48, 56, 189, 0.3)',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#252BA3')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3038BD')}
              >
                <span>Take Skill Assessment Test</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

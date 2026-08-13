import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';
import defaultAvatar from '../assets/default_avatar.svg';

const DEFAULT_AVATAR = defaultAvatar;

export default function CVPreview() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(DEFAULT_AVATAR);
  const [aboutBio, setAboutBio] = useState('');
  const [wallet, setWallet] = useState('MetaMask');

  useEffect(() => {
    const savedImg = localStorage.getItem('userProfileImage');
    if (savedImg) setProfileImage(savedImg);

    const savedBio = localStorage.getItem('userAboutBio');
    if (savedBio) setAboutBio(savedBio);

    const savedWallet = localStorage.getItem('userSelectedWallet');
    if (savedWallet) setWallet(savedWallet);
  }, []);

  const handlePrintDownload = () => {
    window.print();
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
      {/* Floating Header */}
      <StepHeader activeStep={5} navigate={navigate} />

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
        {/* Top Control Bar */}
        <div
          style={{
            width: '1006.5px',
            maxWidth: '96%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#050A5F',
              }}
            >
              CV / Resume Preview
            </span>
            <span
              style={{
                background: '#ECFDF5',
                color: '#065F46',
                border: '1px solid #10B981',
                borderRadius: '16px',
                padding: '4px 12px',
                fontSize: '11px',
                fontWeight: 600,
              }}
            >
              ✓ Verified Greelance Format
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              onClick={handlePrintDownload}
              style={{
                background: '#FFFFFF',
                color: '#3038BD',
                border: '1.5px solid #3038BD',
                borderRadius: '16px',
                padding: '8px 18px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(48, 56, 189, 0.08)',
              }}
            >
              <span>📥 Export PDF / Print</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/complete-profile')}
              style={{
                background: '#E6EFFF',
                color: '#3038BD',
                border: 'none',
                borderRadius: '16px',
                padding: '8px 18px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ✏️ Edit Bio & Photo
            </button>
          </div>
        </div>

        {/* Main White CV Document Card (Figma width: 1006.5px) */}
        <div
          style={{
            width: '1006.5px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 12px 40px rgba(5, 10, 95, 0.06)',
            padding: '48px',
            boxSizing: 'border-box',
            marginBottom: '36px',
            border: '1px solid #E6EFFF',
          }}
        >
          {/* Document Header Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid #F3F7FF',
              paddingBottom: '32px',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {/* Profile Avatar */}
              <div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid #E6EFFF',
                  boxShadow: '0 8px 24px rgba(48, 56, 189, 0.15)',
                  background: '#F3F7FF',
                  flexShrink: 0,
                }}
              >
                <img
                  src={profileImage}
                  alt="Profile Avatar"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Name & Title */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 800, color: '#050A5F' }}>
                    Momin Khalid
                  </h1>
                  <span
                    style={{
                      background: '#3038BD',
                      color: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '3px 10px',
                      fontSize: '10px',
                      fontWeight: 700,
                    }}
                  >
                    PRO FREELANCER
                  </span>
                </div>

                <p style={{ margin: '0 0 10px 0', fontSize: '15px', color: '#3038BD', fontWeight: 600 }}>
                  Senior Blockchain & Full Stack Engineer
                </p>

                {/* Badges */}
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#6B7280' }}>
                  <span>📍 Remote (PK / Worldwide)</span>
                  <span>💼 5+ Years Experience</span>
                  <span>🔗 Wallet: <strong style={{ color: '#050A5F' }}>{wallet} (0x71C...39F)</strong></span>
                </div>
              </div>
            </div>

            {/* Rate & Stats */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#3038BD', marginBottom: '4px' }}>
                $65.00 <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>/ hr</span>
              </div>
              <div
                style={{
                  background: '#F3F7FF',
                  borderRadius: '12px',
                  padding: '8px 16px',
                  display: 'inline-block',
                  textAlign: 'right',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#050A5F' }}>
                  ★ 5.0 Top Rated
                </div>
                <div style={{ fontSize: '11px', color: '#4ADF86', fontWeight: 700 }}>
                  100% Job Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column CV Grid Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px' }}>
            
            {/* Left Column (Sidebar Skills & Meta) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              {/* Primary Skills */}
              <div style={{ background: '#F7FAFF', padding: '24px', borderRadius: '16px', border: '1px solid #E6EFFF' }}>
                <h3 style={{ margin: '0 0 14px 0', fontSize: '14px', fontWeight: 700, color: '#050A5F', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Core Skills
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Smart Contracts & Solidity', 'React.js & Next.js', 'Node.js & TypeScript', 'Web3.js & Ethers.js', 'System Architecture', 'Tailwind CSS'].map((skill) => (
                    <div
                      key={skill}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D2D4FF',
                        borderRadius: '10px',
                        padding: '8px 14px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#050A5F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{skill}</span>
                      <span style={{ color: '#3038BD', fontWeight: 700 }}>✓</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div style={{ background: '#F7FAFF', padding: '24px', borderRadius: '16px', border: '1px solid #E6EFFF' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 700, color: '#050A5F', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Languages
                </h3>
                <div style={{ fontSize: '12px', color: '#050A5F', lineHeight: '22px' }}>
                  <div><strong>English:</strong> Fluent (Professional)</div>
                  <div><strong>Urdu:</strong> Native</div>
                </div>
              </div>

              {/* Certifications */}
              <div style={{ background: '#F7FAFF', padding: '24px', borderRadius: '16px', border: '1px solid #E6EFFF' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 700, color: '#050A5F', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Certifications
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E0E2FE' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#050A5F' }}>Certified Ethereum Developer</div>
                    <div style={{ fontSize: '10px', color: '#6B7280' }}>Consensys Academy • 2023</div>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E0E2FE' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#050A5F' }}>AWS Solutions Architect</div>
                    <div style={{ fontSize: '10px', color: '#6B7280' }}>Amazon Web Services • 2022</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Main Experience & Education Content) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* About / Summary Section */}
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 700, color: '#050A5F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📝</span> Executive Summary
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: '22px' }}>
                  {aboutBio || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                </p>
              </div>

              {/* Work Experience Section */}
              <div>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#050A5F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💼</span> Work Experience
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: '#F8FAFF', padding: '18px 20px', borderRadius: '14px', border: '1px solid #E6EFFF' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#050A5F' }}>
                        Lead Web3 & Smart Contract Engineer
                      </h4>
                      <span style={{ fontSize: '11px', color: '#3038BD', fontWeight: 600 }}>2023 - Present</span>
                    </div>
                    <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#5961CB', fontWeight: 600 }}>
                      Greelance Ecosystems • Full-time
                    </p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#4B5563', lineHeight: '18px' }}>
                      Architected decentralized escrow contracts and high-performance React user interfaces for global Web3 freelancing platform.
                    </p>
                  </div>

                  <div style={{ background: '#F8FAFF', padding: '18px 20px', borderRadius: '14px', border: '1px solid #E6EFFF' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#050A5F' }}>
                        Senior Full Stack Developer
                      </h4>
                      <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>2021 - 2023</span>
                    </div>
                    <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#5961CB', fontWeight: 600 }}>
                      Tech Ventures Inc. • Full-time
                    </p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#4B5563', lineHeight: '18px' }}>
                      Developed microservice backend APIs and responsive Web apps serving over 500,000 active monthly users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#050A5F', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🎓</span> Education
                </h3>

                <div style={{ background: '#F8FAFF', padding: '18px 20px', borderRadius: '14px', border: '1px solid #E6EFFF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#050A5F' }}>
                      Bachelor of Science in Computer Science
                    </h4>
                    <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>2019 - 2023</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#5961CB', fontWeight: 600 }}>
                    National University of Sciences and Technology (NUST)
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Action Section */}
          <div
            style={{
              marginTop: '40px',
              paddingTop: '24px',
              borderTop: '2px solid #F3F7FF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
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
              }}
            >
              ← Back to Edit Profile
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
                boxShadow: '0 6px 20px rgba(48, 56, 189, 0.3)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#252BA3')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#3038BD')}
            >
              <span>Proceed to Skill Assessment Test</span>
              <span style={{ marginLeft: '8px' }}>→</span>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

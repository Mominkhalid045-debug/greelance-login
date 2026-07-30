import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const F = "'Lexend', sans-serif";

function StepHeader({ activeStep, navigate }) {
  const steps = [
    { num: 1, label: 'Upload Resume', path: '/form' },
    { num: 2, label: 'Setup Profile', path: '/setup-profile' },
    { num: 3, label: 'Choose Skill', path: '/skills' },
    { num: 4, label: 'Connect Wallet', path: '/connect-wallet' },
    { num: 5, label: 'Complete Profile', path: '/complete-profile' },
  ];

  return (
    <div style={{ width: '100%', padding: '24px 32px 0 32px', boxSizing: 'border-box' }}>
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          background: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(5, 10, 95, 0.04)',
          height: '72px',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Back Button (Green Rect with Left Curved Edge) */}
        <button
          onClick={() => {
            const prev = steps.find((s) => s.num === activeStep - 1);
            navigate(prev ? prev.path : '/verify-otp');
          }}
          aria-label="Go back"
          style={{
            width: '72px',
            height: '72px',
            background: '#4ADF86',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Step Tabs */}
        <div style={{ display: 'flex', flex: 1, height: '100%', overflowX: 'auto' }}>
          {steps.map((step) => {
            const isActive = step.num === activeStep;
            return (
              <div
                key={step.num}
                onClick={() => navigate(step.path)}
                style={{
                  flex: 1,
                  minWidth: '140px',
                  height: '100%',
                  padding: '0 20px',
                  cursor: 'pointer',
                  background: isActive ? '#E6EFFF' : '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '2px',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                  borderRight: '1px solid #E0E2FE',
                  boxShadow: isActive ? '#3038BD 0px -2.25px 0px 0px inset' : '#22D3A6 0px -2.25px 0px 0px inset',
                }}
              >
                <span
                  style={{
                    fontFamily: F,
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#22D3A6',
                  }}
                >
                  Step {step.num}
                </span>
                <span
                  style={{
                    fontFamily: F,
                    fontSize: '12px',
                    fontWeight: isActive ? 700 : 500,
                    color: '#050A5F',
                  }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Exit / Next Button (White Circle) */}
        <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', flexShrink: 0, background: '#FFFFFF' }}>
          <button
            onClick={() => {
              const next = steps.find((s) => s.num === activeStep + 1);
              navigate(next ? next.path : '/dashboard');
            }}
            aria-label="Exit or next step"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1.5px solid #E0E2FE',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#050A5F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FreelancerForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      localStorage.setItem('userResume', file.name);
      setTimeout(() => {
        navigate('/setup-profile');
      }, 600);
    }
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
      }}
    >
      {/* Step Header Navigation */}
      <StepHeader activeStep={1} navigate={navigate} />

      {/* Main Card Section */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            width: '900px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.03)',
            padding: '48px',
            boxSizing: 'border-box',
          }}
        >
          {/* Dashed Upload Dropzone Container */}
          <div
            style={{
              width: '100%',
              background: '#F3F7FF',
              border: '1.33px dashed #D2D4FF',
              borderRadius: '12px',
              padding: '48px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            {/* Soft Glow Circular Backdrop + Illustration */}
            <div
              style={{
                position: 'relative',
                width: '180px',
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
              }}
            >
              {/* Soft purple glow circle */}
              <div
                style={{
                  position: 'absolute',
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: '#E6EFFF',
                  zIndex: 1,
                }}
              />

              {/* Graphic Window Card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '170px',
                  height: '110px',
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  boxShadow: '0 8px 24px rgba(48, 56, 189, 0.12)',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  overflow: 'hidden',
                }}
              >
                {/* Left Sidebar */}
                <div style={{ width: '25%', background: '#0F172A', height: '100%', padding: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3038BD', marginBottom: '8px' }} />
                  <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px', marginBottom: '4px' }} />
                  <div style={{ width: '70%', height: '4px', background: '#334155', borderRadius: '2px' }} />
                </div>

                {/* Right Document Previews */}
                <div style={{ flex: 1, background: '#F8FAFC', padding: '10px', display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                  {/* PDF Badge File */}
                  <div
                    style={{
                      width: '48px',
                      height: '60px',
                      background: '#FFFFFF',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#FFFFFF', background: '#4ADF86', padding: '2px 5px', borderRadius: '4px' }}>
                      PDF
                    </span>
                    <div style={{ width: '28px', height: '2px', background: '#E2E8F0' }} />
                    <div style={{ width: '20px', height: '2px', background: '#E2E8F0' }} />
                  </div>

                  {/* DOC Badge File */}
                  <div
                    style={{
                      width: '48px',
                      height: '60px',
                      background: '#FFFFFF',
                      borderRadius: '6px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#FFFFFF', background: '#3038BD', padding: '2px 5px', borderRadius: '4px' }}>
                      DOC
                    </span>
                    <div style={{ width: '28px', height: '2px', background: '#E2E8F0' }} />
                    <div style={{ width: '20px', height: '2px', background: '#E2E8F0' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Hint Text */}
            <p
              style={{
                fontFamily: F,
                fontSize: '13px',
                color: '#7C8BA1',
                margin: '0 0 28px 0',
                textAlign: 'center',
              }}
            >
              *You can upload any PDF or Word File
            </p>

            {/* Upload Status Feedback */}
            {selectedFile && (
              <p style={{ fontFamily: F, fontSize: '13px', fontWeight: 600, color: '#4ADF86', margin: '0 0 16px 0' }}>
                📄 {selectedFile} selected! Redirecting...
              </p>
            )}

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                style={{
                  background: '#3038BD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '16.88px',
                  height: '38px',
                  padding: '0 24px',
                  fontFamily: F,
                  fontSize: '11px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: 'rgba(48, 56, 189, 0.25) 0px 4px 12px 0px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#252BA3')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3038BD')}
              >
                <span>Upload Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => navigate('/setup-profile')}
                style={{
                  background: '#E6EFFF',
                  color: '#3038BD',
                  border: '0.66px solid #3038BD',
                  borderRadius: '16.88px',
                  height: '38px',
                  padding: '0 24px',
                  fontFamily: F,
                  fontSize: '11px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D8E5FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#E6EFFF';
                }}
              >
                Create Manually
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { StepHeader, F };


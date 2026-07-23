import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

export default function CompleteProfile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [aboutText, setAboutText] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        setShowEditModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModifyWithAI = () => {
    setAboutText(
      "Experienced Full Stack & Blockchain Developer with over 5 years of experience crafting high-performance decentralized web applications, smart contracts, and intuitive user interfaces. Passionate about clean code, UX excellence, and scalable architecture."
    );
  };

  const handlePreview = () => {
    setShowToast(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <StepHeader activeStep={5} navigate={navigate} />

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '30px' }}>
        
        {/* Main Card Container */}
        <div
          style={{
            width: '100%',
            maxWidth: '1000px',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 12px 36px rgba(5,10,95,0.06)',
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
            border: '0.75px solid #E0E2FE',
          }}
        >
          {/* Main Title & Subtitle */}
          <h2 style={{ fontFamily: F, fontSize: '28px', fontWeight: 700, color: '#050A5F', marginBottom: '4px', textAlign: 'center' }}>
            Complete Profile
          </h2>
          <p style={{ fontFamily: F, fontSize: '12px', color: '#6B7280', marginBottom: '32px', textAlign: 'center' }}>
            Upload your photo and write about your work to start your Greelance journey.
          </p>

          {/* Profile Picture Upload Section */}
          {!profileImage ? (
            /* State 1: Dashed Upload Box */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
              <div
                onClick={() => setShowEditModal(true)}
                style={{
                  border: '1.5px dashed #3038BD',
                  background: '#F3F7FF',
                  borderRadius: '12px',
                  width: '280px',
                  height: '110px',
                  padding: '16px 20px',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Default Badge */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      border: '1px solid #E0E2FE',
                      background: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3038BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: F, fontSize: '12px', fontWeight: 600, color: '#050A5F' }}>
                    Upload Profile Picture
                  </span>
                </div>
                {/* Upload Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#050A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <p style={{ fontFamily: F, fontSize: '10px', color: '#9CA3AF', marginTop: '8px' }}>
                *You can upload any JPEG or PNG
              </p>
            </div>
          ) : (
            /* State 2: Uploaded Circular Photo with Pencil Overlay (V1.F1.8.B) */
            <div style={{ position: 'relative', marginBottom: '32px' }}>
              <img
                src={profileImage}
                alt="Uploaded Profile"
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 8px 24px rgba(5,10,95,0.12)',
                  border: '3px solid #FFFFFF',
                }}
              />
              {/* Pencil Edit Icon Button */}
              <button
                type="button"
                onClick={() => setShowEditModal(true)}
                aria-label="Edit Profile Picture"
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  right: '4px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1px solid #E0E2FE',
                  boxShadow: '0 4px 10px rgba(5,10,95,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3038BD',
                  fontSize: '14px',
                }}
              >
                ✏️
              </button>
            </div>
          )}

          {/* About Section */}
          <div style={{ width: '100%', maxWidth: '840px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '13px', fontWeight: 700, color: '#050A5F' }}>About</label>
              <button
                type="button"
                onClick={handleModifyWithAI}
                style={{
                  background: '#F3F7FF',
                  color: '#3038BD',
                  border: '1px solid #3038BD',
                  borderRadius: '16px',
                  padding: '4px 14px',
                  fontFamily: F,
                  fontSize: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                ✨ Modify With AI
              </button>
            </div>
            <textarea
              rows={4}
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              placeholder="Write text here..."
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                border: '0.75px solid #E0E2FE',
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

          {/* Preview Button */}
          <button
            onClick={handlePreview}
            style={{
              background: profileImage || aboutText ? '#3038BD' : '#ADAFDD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              width: '120px',
              height: '34px',
              fontFamily: F,
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: profileImage || aboutText ? '0 6px 16px rgba(48,56,189,0.3)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Preview
          </button>

        </div>
      </div>

      {/* ───────────────────────────────────────────────────
          1. Edit Profile Picture Modal (717 x 465 Popup)
      ─────────────────────────────────────────────────── */}
      {showEditModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 10, 95, 0.4)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: '717px',
              maxWidth: '92vw',
              background: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 24px 60px rgba(5,10,95,0.25)',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #F3F4F6', paddingBottom: '12px' }}>
              <h3 style={{ fontFamily: F, fontSize: '16px', fontWeight: 700, color: '#050A5F', margin: 0 }}>
                Edit Profile Picture
              </h3>
              <span
                onClick={() => setShowEditModal(false)}
                style={{ cursor: 'pointer', fontSize: '18px', color: '#9CA3AF' }}
              >
                ✕
              </span>
            </div>

            {/* Modal Body */}
            <div style={{ display: 'flex', gap: '36px', alignItems: 'center', marginBottom: '32px' }}>
              {/* Left Large Avatar Circle */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: '#EBF3FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="50" fill="#EBF3FF" />
                  <circle cx="50" cy="35" r="20" fill="#050A5F" />
                  <path d="M15 85C15 65 30 55 50 55C70 55 85 65 85 85Z" fill="#22D3A6" />
                </svg>
              </div>

              {/* Right Side Content & Scale Previews */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ fontFamily: F, fontSize: '14px', fontWeight: 700, color: '#050A5F', margin: 0 }}>
                  Show clients the best version of yourself!
                </h4>

                <ul style={{ fontFamily: F, fontSize: '11px', color: '#6B7280', margin: 0, paddingLeft: '16px', lineHeight: '16px' }}>
                  <li>Must be an actual photo of you.</li>
                  <li>Logos, clip-art, group photos, and digitally-altered images are not allowed.</li>
                </ul>

                {/* 4 Scale Preview Circles */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px' }}>
                  {[80, 60, 40, 24].map((sz) => (
                    <div
                      key={sz}
                      style={{
                        width: `${sz}px`,
                        height: `${sz}px`,
                        borderRadius: '50%',
                        background: '#EBF3FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        border: '1px solid #E0E2FE',
                      }}
                    >
                      <svg width={sz * 0.8} height={sz * 0.8} viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="35" r="20" fill="#050A5F" />
                        <path d="M15 85C15 65 30 55 50 55C70 55 85 65 85 85Z" fill="#22D3A6" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                type="button"
                style={{
                  background: '#3038BD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '8px 20px',
                  fontFamily: F,
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Camera 📷
              </button>

              <label
                style={{
                  background: '#FFFFFF',
                  color: '#3038BD',
                  border: '1px solid #3038BD',
                  borderRadius: '24px',
                  padding: '8px 20px',
                  fontFamily: F,
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                Upload Picture 🖼️
              </label>
            </div>
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────
          2. Toast Notification ("Profile Set Successfully")
      ─────────────────────────────────────────────────── */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            background: '#ECFDF5',
            border: '1px solid #10B981',
            borderRadius: '40px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 12px 28px rgba(16,185,129,0.2)',
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
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontFamily: F, fontSize: '12px', fontWeight: 700, color: '#065F46' }}>
                Profile Set Successfully
              </span>
              <span style={{ fontFamily: F, fontSize: '9px', color: '#6EE7B7' }}>1:20 PM</span>
            </div>
            <span style={{ fontFamily: F, fontSize: '11px', color: '#047857' }}>
              Your profile is all set
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

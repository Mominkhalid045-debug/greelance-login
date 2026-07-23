import { useNavigate } from 'react-router-dom';

const F = "'Lexend', sans-serif";

export default function VerifyOTP() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px', cursor: 'pointer' }} onClick={() => navigate('/')}>
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
          <path d="M20 4 L28 10 L24 10 C24 10 28 14 28 20" stroke="#22D3A6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M20 4 L12 10 L16 10" stroke="#22D3A6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M20 36 L12 30 L16 30 C16 30 12 26 12 20" stroke="#22D3A6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M20 36 L28 30 L24 30" stroke="#22D3A6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span style={{ fontFamily: F, fontSize: '20px', fontWeight: 700, letterSpacing: '0.5px' }}>
          <span style={{ color: '#050A5F' }}>GREE</span>
          <span style={{ color: '#22D3A6' }}>LANCE</span>
        </span>
      </div>

      {/* Card Container */}
      <div
        style={{
          width: '380px',
          maxWidth: '100%',
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E0E2FE',
          padding: '48px 32px',
          boxShadow: '0 10px 30px rgba(5,10,95,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Verified Green Circle Icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #22D3A6 0%, #4ADF86 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            boxShadow: '0 8px 24px rgba(34,211,166,0.3)',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: F, fontSize: '20px', fontWeight: 700, color: '#050A5F', margin: '0 0 6px 0' }}>
          Verified
        </h2>

        {/* Subtitle */}
        <p style={{ fontFamily: F, fontSize: '12px', color: '#6B7280', margin: '0 0 28px 0' }}>
          OTP Verified Successfully
        </p>

        {/* Proceed Button */}
        <button
          onClick={() => navigate('/form')}
          style={{
            background: '#3038BD', color: '#fff', border: 'none',
            borderRadius: '20px', height: '38px', width: '140px',
            fontFamily: F, fontSize: '13px', fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(48,56,189,0.3)',
          }}
        >
          Proceed
        </button>
      </div>

    </div>
  );
}

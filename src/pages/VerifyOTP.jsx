import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';

const F = "'Lexend', sans-serif";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'user@example.com';

  const [otp, setOtp] = useState(['3', '5', '6', '7']);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(29);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Countdown timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError(false);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 4) {
      setError(true);
      return;
    }
    // Directly open Step 1: Upload Resume (/form)
    navigate('/form');
  };

  const handleResend = () => {
    setTimer(29);
    setError(false);
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#F7FAFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '30px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header Logo */}
      <div style={{ width: '100%', maxWidth: '1200px', padding: '0 40px', marginBottom: '40px' }}>
        <div style={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => navigate('/')}>
          <Logo size="small" />
        </div>
      </div>

      {/* Main OTP Card Container (Figma V1.F1.D & E) */}
      <div
        style={{
          width: '580px',
          maxWidth: '90vw',
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '0.75px solid #E0E2FE',
          boxShadow: '0 16px 40px rgba(5,10,95,0.06)',
          padding: '48px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Title & Subtitle */}
        <h1 style={{ fontFamily: F, fontSize: '24px', fontWeight: 700, color: '#050A5F', margin: '0 0 6px 0' }}>
          Enter OTP
        </h1>
        <p style={{ fontFamily: F, fontSize: '11.5px', color: '#6B7280', margin: '0 0 36px 0' }}>
          We Have Sent OTP To Your Email ({email})
        </p>

        {/* 4 Circular OTP Input Fields */}
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: error ? '16px' : '36px' }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e.key)}
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  border: error ? '1.5px solid #EF4444' : '1px solid #E0E2FE',
                  background: error ? '#FEF2F2' : '#F3F7FF',
                  fontFamily: F,
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#050A5F',
                  textAlign: 'center',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(5,10,95,0.03)',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>

          {/* OTP Error Message (V1.F1.E) */}
          {error && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
              <span style={{ color: '#EF4444', fontSize: '12px' }}>⚠️</span>
              <span style={{ fontFamily: F, fontSize: '10.5px', fontWeight: 600, color: '#EF4444' }}>
                Error! Wrong code. Only three attempts are possible
              </span>
            </div>
          )}

          {/* Controls: Resend Timer & Submit Button */}
          <div
            style={{
              width: '100%',
              maxWidth: '420px',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Resend Code & Countdown */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span
                onClick={handleResend}
                style={{
                  fontFamily: F,
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#22D3A6',
                  cursor: 'pointer',
                }}
              >
                Resend Code
              </span>
              <span style={{ fontFamily: F, fontSize: '11px', fontWeight: 700, color: '#050A5F' }}>
                00:{timer < 10 ? `0${timer}` : timer}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background: '#3038BD',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '18px',
                width: '100px',
                height: '32px',
                fontFamily: F,
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(48,56,189,0.25)',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    if (pasted.length === 4) {
      setOtp(pasted.split(''));
      inputRefs[3].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp.join(''));
    navigate('/new-password');
  };

  return (
    /* White floating card */
    <div
      className="animate-slide-in"
      role="main"
      aria-label="Verify OTP form"
      style={{
        width: '100%',
        maxWidth: '460px',
        background: '#FFFFFF',
        borderRadius: '28px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        padding: '40px 40px 44px',
        margin: '0 24px',
      }}
    >
      {/* Top row: back arrow + logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px',
        }}
      >
        <Link
          to="/forgot-password"
          aria-label="Back"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#6B7280',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#0A0F2E'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Logo inline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M20 4 L28 10 L24 10 C24 10 28 14 28 20" stroke="#4ADE80" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M20 4 L12 10 L16 10" stroke="#4ADE80" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M20 36 L12 30 L16 30 C16 30 12 26 12 20" stroke="#4ADE80" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M20 36 L28 30 L24 30" stroke="#4ADE80" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '20px', lineHeight: 1 }}>
            <span style={{ color: '#0A0F2E', fontWeight: 700 }}>GREE</span>
            <span style={{ color: '#22C55E', fontWeight: 400 }}>LANCE</span>
          </span>
        </div>
      </div>

      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '28px',
          fontWeight: 700,
          color: '#0A0F2E',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        Verify OTP
      </h1>

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '14px',
          color: '#6B7280',
          textAlign: 'center',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        Enter the 4-digit code sent to your email.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* OTP boxes */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '28px',
          }}
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={{
                width: '64px',
                height: '64px',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                color: '#0A0F2E',
                background: '#F7F8FC',
                border: `2px solid ${digit ? '#3741D4' : '#E8EAF0'}`,
                borderRadius: '16px',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3741D4';
                e.target.style.boxShadow = '0 0 0 3px rgba(55,65,212,0.12)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = otp[index] ? '#3741D4' : '#E8EAF0';
                e.target.style.boxShadow = 'none';
              }}
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>

        {/* Resend Code link */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: '#3741D4',
            }}
            onClick={() => console.log('Resend OTP')}
          >
            Resend Code
          </button>
        </div>

        <Button type="submit" id="verify-btn">
          Verify
        </Button>
      </form>
    </div>
  );
}

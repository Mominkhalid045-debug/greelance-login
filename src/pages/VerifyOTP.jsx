import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';

const F = "'Lexend', sans-serif";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  // 8 circular OTP digit fields
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', '']);
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState(26);

  const inputRefs = Array(8)
    .fill(0)
    .map(() => useRef());

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    const newOtp = [...otp];

    // Handle multi-character paste or single digit
    if (value.length > 1) {
      const pastedDigits = value.slice(0, 8).split('');
      pastedDigits.forEach((digit, i) => {
        if (index + i < 8) newOtp[index + i] = digit;
      });
      setOtp(newOtp);
      const nextFocusIndex = Math.min(index + pastedDigits.length, 7);
      inputRefs[nextFocusIndex]?.current?.focus();
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);
    setError(false);

    // Auto-focus next input
    if (value && index < 7) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs[index - 1]?.current?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Directly navigate to Freelancer Form (Step 1)
    navigate('/form');
  };

  const handleResend = () => {
    setTimer(26);
    setError(false);
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
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Top Left Logo Header */}
      <header style={{ padding: '24px 40px' }}>
        <div style={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => navigate('/')}>
          <Logo size="medium" />
        </div>
      </header>

      {/* Main Centered Container */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '840px',
            maxWidth: '94%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.04)',
            padding: '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          {/* Title & Subtitle */}
          <h1
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: '32px',
              fontWeight: 700,
              color: '#050A5F',
              margin: '0 0 10px 0',
              textAlign: 'center',
            }}
          >
            Enter OTP
          </h1>
          <p
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#050A5F',
              margin: '0 0 44px 0',
              textAlign: 'center',
            }}
          >
            We Have Sent OTP To Your Email
          </p>

          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* 8 Circular OTP Input Fields */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'nowrap',
                marginBottom: '44px',
                width: '100%',
                maxWidth: '600px',
              }}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    border: '1px solid #D6E4FF',
                    background: '#F0F4FF',
                    fontFamily: F,
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#050A5F',
                    textAlign: 'center',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2334CD';
                    e.target.style.background = '#FFFFFF';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#D6E4FF';
                    e.target.style.background = '#F0F4FF';
                  }}
                />
              ))}
            </div>

            {/* Bottom Controls Row: Resend Code on Left, Submit on Right */}
            <div
              style={{
                width: '100%',
                maxWidth: '560px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Resend Code & Countdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  onClick={handleResend}
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#34E096',
                    cursor: 'pointer',
                  }}
                >
                  Resend Code
                </span>
                <span
                  style={{
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#050A5F',
                  }}
                >
                  00:{timer < 10 ? `0${timer}` : timer}
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: '#2334CD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '20px',
                  width: '110px',
                  height: '38px',
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#1B2AB2'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#2334CD'}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}


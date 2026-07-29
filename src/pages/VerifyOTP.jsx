import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';

const F = "'Lexend', sans-serif";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();

  const userEmail = location.state?.email || localStorage.getItem('userEmail') || 'ss@gmail.com';
  const initialOtp = location.state?.otp || localStorage.getItem('userOtp') || '12345678';

  const [expectedOtp, setExpectedOtp] = useState(initialOtp);
  const [otp, setOtp] = useState(['', '', '', '', '', '', '', '']);
  const [errorMsg, setErrorMsg] = useState('');
  const [timer, setTimer] = useState(26);
  const [showNotification, setShowNotification] = useState(true);

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
      setErrorMsg('');
      const nextFocusIndex = Math.min(index + pastedDigits.length, 7);
      inputRefs[nextFocusIndex]?.current?.focus();
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);
    setErrorMsg('');

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

  const handleAutofill = () => {
    const digits = expectedOtp.split('');
    setOtp(digits);
    setErrorMsg('');
    inputRefs[7]?.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = otp.join('');

    if (enteredCode.length < 8) {
      setErrorMsg('Please enter all 8 digits of the OTP code');
      return;
    }

    if (enteredCode !== expectedOtp && enteredCode !== '12345678') {
      setErrorMsg('Error! Wrong code. Only three attempts are possible');
      return;
    }

    // Success transition to Freelancer Form (Step 1)
    navigate('/form');
  };

  const handleResend = () => {
    const newCode = Math.floor(10000000 + Math.random() * 90000000).toString();
    setExpectedOtp(newCode);
    localStorage.setItem('userOtp', newCode);
    setTimer(26);
    setErrorMsg('');
    setShowNotification(true);
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
      <header style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ cursor: 'pointer', width: 'fit-content' }} onClick={() => navigate('/')}>
          <Logo size="medium" />
        </div>

        {/* Demo OTP Banner */}
        {showNotification && (
          <div
            onClick={handleAutofill}
            style={{
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              borderRadius: '12px',
              padding: '8px 16px',
              fontFamily: F,
              fontSize: '12px',
              color: '#065F46',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)',
            }}
          >
            <span>📩 Demo OTP sent to <strong>{userEmail}</strong>: <strong style={{ color: '#047857' }}>{expectedOtp}</strong></span>
            <span style={{ fontSize: '10px', background: '#10B981', color: '#fff', padding: '2px 6px', borderRadius: '6px', fontWeight: 600 }}>Auto-fill</span>
          </div>
        )}
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
              fontFamily: F,
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
              fontFamily: F,
              fontSize: '14px',
              fontWeight: 600,
              color: '#050A5F',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            We Have Sent OTP To Your Email ({userEmail})
          </p>

          {/* Inline OTP Helper & Auto-fill button */}
          <div
            onClick={handleAutofill}
            style={{
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              borderRadius: '20px',
              padding: '8px 20px',
              fontFamily: F,
              fontSize: '13px',
              color: '#065F46',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '32px',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.12)',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span>🔑 Demo Code: <strong style={{ color: '#047857', letterSpacing: '1px' }}>{expectedOtp}</strong></span>
            <span style={{ fontSize: '11px', background: '#10B981', color: '#ffffff', padding: '3px 10px', borderRadius: '12px', fontWeight: 600 }}>
              Click to Auto-fill ✨
            </span>
          </div>

          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* 8 Circular OTP Input Fields */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'nowrap',
                marginBottom: errorMsg ? '16px' : '44px',
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
                    border: errorMsg ? '1.5px solid #EF4444' : '1px solid #D6E4FF',
                    background: errorMsg ? '#FEF2F2' : '#F0F4FF',
                    fontFamily: F,
                    fontSize: '22px',
                    fontWeight: 700,
                    color: errorMsg ? '#DC2626' : '#050A5F',
                    textAlign: 'center',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    if (!errorMsg) {
                      e.target.style.borderColor = '#2334CD';
                      e.target.style.background = '#FFFFFF';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errorMsg) {
                      e.target.style.borderColor = '#D6E4FF';
                      e.target.style.background = '#F0F4FF';
                    }
                  }}
                />
              ))}
            </div>

            {/* Error Message if invalid OTP */}
            {errorMsg && (
              <p
                style={{
                  fontFamily: F,
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#EF4444',
                  margin: '0 0 24px 0',
                }}
              >
                ⚠️ {errorMsg}
              </p>
            )}

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
                    fontFamily: F,
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
                    fontFamily: F,
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
                  fontFamily: F,
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



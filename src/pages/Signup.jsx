import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import SocialLogin from '../components/SocialLogin';

const F = "'Lexend', sans-serif";

function EyeIcon({ show, onClick }) {
  return (
    <button
      type="button"
      aria-label={show ? 'Hide password' : 'Show password'}
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        color: '#9CA3AF',
      }}
    >
      {show ? (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Fill all fields check
    if (!email.trim() || !password || !confirmPassword) {
      setErrorMessage('Please fill all fields');
      return;
    }

    // 2. Email format validation
    if (!email.includes('@')) {
      setErrorMessage(`Please include an '@' in the email address. '${email}' is missing an '@'.`);
      return;
    }

    // 3. Password strength check (8+ chars, uppercase, number, symbol)
    const hasUpper = /[A-Z]/.test(password);
    const hasNum = /[0-9]/.test(password);
    const hasSym = /[^A-Za-z0-9]/.test(password);

    if (password.length < 8 || !hasUpper || !hasNum || !hasSym) {
      setErrorMessage('Password must be 8+ characters with an uppercase letter, a number, and a symbol');
      return;
    }

    // 4. Confirm password match check
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Generate realistic 8-digit OTP code for verification
    const generatedOtp = '12345678';
    localStorage.setItem('userEmail', email.trim());
    localStorage.setItem('userOtp', generatedOtp);

    // Valid submission state
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/verify-otp', { state: { email: email.trim(), otp: generatedOtp } });
    }, 600);
  };

  return (
    <div
      role="main"
      aria-label="Signup form"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Logo centered size="medium" style={{ marginBottom: '12px' }} />

      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '20px',
          fontWeight: 700,
          color: '#1F2937',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Create Account
      </h1>

      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          boxSizing: 'border-box',
        }}
      >
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Email Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage('');
              }}
              placeholder="ss@gmail.com"
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>Password</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage('');
                }}
                placeholder="••••••••"
                style={{ ...inputStyle, paddingRight: '40px' }}
              />
              <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <EyeIcon show={showPw} onClick={() => setShowPw(!showPw)} />
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={labelStyle}>Confirm Password</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showConfirmPw ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorMessage('');
                }}
                placeholder="••••••••"
                style={{ ...inputStyle, paddingRight: '40px' }}
              />
              <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <EyeIcon show={showConfirmPw} onClick={() => setShowConfirmPw(!showConfirmPw)} />
              </div>
            </div>
          </div>

          {/* Password Requirement Hint */}
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#6B7280', margin: '2px 0 0px', lineHeight: '15px' }}>
            *Password must contain 8 characters, uppercase letters, numbers, symbols
          </p>

          {/* Error Message directly below hint */}
          {errorMessage && (
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#EF4444',
                margin: '2px 0 0',
                lineHeight: '16px',
              }}
            >
              {errorMessage}
            </p>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              height: '42px',
              background: '#2334CD',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              border: 'none',
              borderRadius: '10px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
              marginTop: '10px',
              transition: 'all 0.2s ease',
              opacity: isSubmitting ? 0.8 : 1,
            }}
          >
            {isSubmitting ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        {/* Already have account */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '13px',
            color: '#6B7280',
            textAlign: 'center',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#2334CD', fontWeight: 600, textDecoration: 'none' }}>
            Sign In
          </Link>
        </div>

        {/* Social Login */}
        <SocialLogin />
      </div>
    </div>
  );
}

const labelStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '13px',
  fontWeight: 500,
  color: '#374151',
};

const inputStyle = {
  width: '100%',
  height: '44px',
  padding: '0 16px',
  borderRadius: '10px',
  border: '1px solid #E5E7EB',
  background: '#FFFFFF',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '14px',
  color: '#1F2937',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
};


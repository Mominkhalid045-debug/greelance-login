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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Navigate directly to OTP Verification with email state
    navigate('/verify-otp', { state: { email } });
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
      <div style={{ marginBottom: '24px' }}>
        <Logo centered size="medium" />
      </div>

      {/* Main Card Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '36px 36px 28px',
          boxShadow: '0 12px 36px rgba(5,10,95,0.06)',
          border: '0.75px solid #E0E2FE',
          boxSizing: 'border-box',
        }}
      >
        <h1
          style={{
            fontFamily: F,
            fontSize: '20px',
            fontWeight: 700,
            color: '#050A5F',
            marginBottom: '24px',
            textAlign: 'left',
          }}
        >
          Create Account
        </h1>

        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Email Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johnsmith@gmail.com"
              style={inputStyle}
              required
            />
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>
              Password
            </label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{ ...inputStyle, paddingRight: '40px' }}
                required
              />
              <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <EyeIcon show={showPw} onClick={() => setShowPw(!showPw)} />
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>
              Confirm Password
            </label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showConfirmPw ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="johnsmith123%^&"
                style={{ ...inputStyle, paddingRight: '40px' }}
                required
              />
              <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <EyeIcon show={showConfirmPw} onClick={() => setShowConfirmPw(!showConfirmPw)} />
              </div>
            </div>
          </div>

          {/* Password Requirement Hint */}
          <p style={{ fontFamily: F, fontSize: '9px', color: '#6B7280', margin: '2px 0 8px', lineHeight: '14px' }}>
            <span style={{ color: '#22D3A6' }}>*</span> Password must contain 8 characters, uppercase letters, lower case letters, numbers, symbols
          </p>

          {/* Sign Up Button */}
          <button
            type="submit"
            style={{
              background: '#3038BD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              height: '36px',
              width: '120px',
              fontFamily: F,
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              alignSelf: 'center',
              boxShadow: '0 4px 12px rgba(48,56,189,0.3)',
              marginTop: '4px',
            }}
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span style={{ fontFamily: F, fontSize: '11.5px', color: '#050A5F', opacity: 0.8 }}>
            Already have an account?{' '}
          </span>
          <Link
            to="/login"
            style={{
              fontFamily: F,
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#3038BD',
              textDecoration: 'none',
            }}
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Social Login */}
      <div style={{ marginTop: '24px' }}>
        <SocialLogin />
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: '39px',
  padding: '0 16px',
  borderRadius: '45px',
  border: '0.75px solid #E0E2FE',
  background: '#F3F7FF',
  fontFamily: F,
  fontSize: '12px',
  color: '#050A5F',
  outline: 'none',
  boxSizing: 'border-box',
};

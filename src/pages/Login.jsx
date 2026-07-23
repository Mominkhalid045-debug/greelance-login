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
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [password, setPassword] = useState('Password123!');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form');
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Brand Logo */}
      <div style={{ marginBottom: '28px', cursor: 'pointer' }} onClick={() => navigate('/')}>
        <Logo centered size="medium" />
      </div>

      {/* Card Container */}
      <div
        style={{
          width: '380px',
          maxWidth: '100%',
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '0.75px solid #E0E2FE',
          padding: '36px 32px',
          boxShadow: '0 12px 36px rgba(5,10,95,0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ fontFamily: F, fontSize: '20px', fontWeight: 700, color: '#050A5F', margin: '0 0 24px 0', textAlign: 'center' }}>
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Email Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Password Field with Working View Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>Password</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: '42px' }}
                required
              />
              <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                <EyeIcon show={showPassword} onClick={() => setShowPassword(!showPassword)} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2px' }}>
              <Link to="/forgot-password" style={{ fontFamily: F, fontSize: '11px', color: '#3038BD', textDecoration: 'none', fontWeight: 500 }}>
                Forget Password?
              </Link>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            style={{
              background: '#3038BD', color: '#fff', border: 'none',
              borderRadius: '20px', height: '38px', width: '100%',
              fontFamily: F, fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', marginTop: '8px',
              boxShadow: '0 4px 12px rgba(48,56,189,0.3)',
            }}
          >
            Sign In
          </button>
        </form>

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

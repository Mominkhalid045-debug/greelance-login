import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const F = "'Lexend', sans-serif";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [password, setPassword] = useState('••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form');
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Brand Logo */}
      <div style={{ marginBottom: '32px', cursor: 'pointer' }} onClick={() => navigate('/')}>
        <Logo centered size="medium" />
      </div>

      {/* Card Container */}
      <div
        style={{
          width: '360px',
          maxWidth: '100%',
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E0E2FE',
          padding: '32px 28px',
          boxShadow: '0 10px 30px rgba(5,10,95,0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <h2 style={{ fontFamily: F, fontSize: '18px', fontWeight: 700, color: '#050A5F', margin: '0 0 24px 0', textAlign: 'center' }}>
          Welcome Back!
        </h2>

        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Email Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 600, color: '#050A5F' }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {/* Password Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative' }}>
            <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 600, color: '#050A5F' }}>Password</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: '40px' }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: '#ADAFDD', display: 'flex',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
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
              cursor: 'pointer', marginTop: '12px',
              boxShadow: '0 4px 12px rgba(48,56,189,0.3)',
            }}
          >
            Sign In
          </button>
        </form>

        {/* Signup Link */}
        <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', margin: '20px 0 0 0', textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#3038BD', fontWeight: 600, textDecoration: 'none' }}>
            Sign Up
          </Link>
        </p>
      </div>

      {/* Social Sign In at bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '24px' }}>
        <span style={{ fontFamily: F, fontSize: '11px', color: '#ADAFDD' }}>You can also signin with</span>
        <div style={{ display: 'flex', gap: '14px' }}>
          {/* LinkedIn */}
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0A66C2', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>in</div>
          {/* Google */}
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', border: '1px solid #E0E2FE', color: '#EA4335', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>G</div>
          {/* Apple */}
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', cursor: 'pointer' }}></div>
        </div>
      </div>

    </div>
  );
}

const inputStyle = {
  width: '100%', height: '40px', padding: '0 16px',
  borderRadius: '20px', border: '1px solid #E0E2FE',
  background: '#F3F7FF', fontFamily: F, fontSize: '13px', color: '#050A5F',
  outline: 'none', boxSizing: 'border-box',
};

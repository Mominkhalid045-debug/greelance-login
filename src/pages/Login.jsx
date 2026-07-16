import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';

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

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in with:', email);
    // Dummy navigation for demo purposes
    alert('Signed in successfully!');
  };

  return (
    <div
      className="animate-slide-in"
      role="main"
      aria-label="Login form"
      style={{
        width: '100%',
        maxWidth: '460px',
        padding: '0 32px',
      }}
    >
      <Logo />

      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '30px',
          fontWeight: 700,
          color: '#0A0F2E',
          marginBottom: '28px',
          lineHeight: 1.2,
        }}
      >
        Welcome!
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <Input
          id="password"
          label="Password"
          type={showPw ? 'text' : 'password'}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          rightElement={<EyeIcon show={showPw} onClick={() => setShowPw((v) => !v)} />}
        />

        {/* Links row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            marginTop: '-4px',
          }}
        >
          <Link
            to="/signup"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#3741D4',
              textDecoration: 'none',
            }}
            aria-label="Create account"
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Create Account
          </Link>
          <Link
            to="/forgot-password"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#3741D4',
              textDecoration: 'none',
            }}
            aria-label="Forgot password"
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" id="sign-in-btn">
          Sign In
        </Button>
      </form>

      <SocialLogin />
    </div>
  );
}

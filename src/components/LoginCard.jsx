import Logo from './Logo';
import Input from './Input';
import Button from './Button';
import SocialLogin from './SocialLogin';
import { useState } from 'react';

/**
 * LoginCard — the white card containing the full login form.
 */
export default function LoginCard() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in with:', email);
  };

  const EyeIcon = () => (
    <button
      type="button"
      aria-label={showPw ? 'Hide password' : 'Show password'}
      onClick={() => setShowPw((v) => !v)}
      className="text-body hover:text-heading transition-colors focus-ring rounded"
    >
      {showPw ? (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#6F7894" strokeWidth="2">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#6F7894" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );

  return (
    <div
      className="animate-slide-in login-card"
      role="main"
      aria-label="Login form"
      style={{
        width: '477.75px',
        minHeight: '470.25px',
        background: '#FFFFFF',
        borderRadius: '40.5px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        padding: '48px',
      }}
    >
      {/* Logo */}
      <Logo />

      {/* Welcome heading */}
      <h1
        className="font-poppins"
        style={{
          fontSize: '26px',
          fontWeight: 700,
          color: '#202B52',
          marginBottom: '24px',
        }}
      >
        Welcome!
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        {/* Password */}
        <Input
          id="password"
          label="Password"
          type={showPw ? 'text' : 'password'}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          rightElement={<EyeIcon />}
        />

        {/* Forgot password */}
        <div className="flex justify-end mb-6 -mt-1">
          <a
            href="#forgot"
            className="font-poppins font-medium transition-opacity hover:opacity-75 focus-ring rounded"
            style={{ fontSize: '12px', color: '#4F5BFF' }}
            aria-label="Forgot password"
          >
            Forgot Password?
          </a>
        </div>

        {/* Sign In button */}
        <Button type="submit" id="sign-in-btn">
          Sign In
        </Button>
      </form>

      {/* Social login */}
      <SocialLogin />
    </div>
  );
}

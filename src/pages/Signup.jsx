import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';

export default function Signup() {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up with:', name, email);
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
      aria-label="Signup form"
      style={{
        width: '477.75px',
        background: '#FFFFFF',
        borderRadius: '40.5px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        padding: '48px',
      }}
    >
      <Logo />

      <h1
        className="font-poppins"
        style={{
          fontSize: '26px',
          fontWeight: 700,
          color: '#202B52',
          marginBottom: '24px',
        }}
      >
        Create Account
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          id="name"
          label="Full Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />

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
          autoComplete="new-password"
          rightElement={<EyeIcon />}
        />

        <div className="flex justify-end items-center mb-6 -mt-1">
          <Link
            to="/login"
            className="font-poppins font-medium transition-opacity hover:opacity-75 focus-ring rounded"
            style={{ fontSize: '12px', color: '#4F5BFF' }}
            aria-label="Sign in"
          >
            Already have an account? Sign In
          </Link>
        </div>

        <Button type="submit" id="sign-up-btn">
          Sign Up
        </Button>
      </form>

      <SocialLogin />
    </div>
  );
}

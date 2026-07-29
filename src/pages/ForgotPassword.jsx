import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim() || 'momin.khalid@gmail.com';
    const generatedOtp = '12345678';
    localStorage.setItem('userEmail', cleanEmail);
    localStorage.setItem('userOtp', generatedOtp);
    navigate('/verify-otp', { state: { email: cleanEmail, otp: generatedOtp, from: 'forgot' } });
  };

  return (
    <div
      role="main"
      aria-label="Forgot Password form"
      style={{
        width: '100%',
        boxSizing: 'border-box',
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
          to="/login"
          aria-label="Back to login"
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

        {/* Logo inline — no bottom margin here */}
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
        Forgot Password?
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
        Enter your email address to receive a verification code.
      </p>

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

        <div style={{ marginTop: '24px' }}>
          <Button type="submit" id="send-code-btn">
            Send Code
          </Button>
        </div>
      </form>
    </div>
  );
}

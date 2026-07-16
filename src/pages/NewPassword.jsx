import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

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

export default function NewPassword() {
  const [password, setPassword]         = useState('');
  const [confirmPassword, setConfirm]   = useState('');
  const [showPw, setShowPw]             = useState(false);
  const [showConfirm, setShowConfirm]   = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Set new password');
    navigate('/login');
  };

  return (
    /* White floating card */
    <div
      className="animate-slide-in"
      role="main"
      aria-label="Set New Password form"
      style={{
        width: '100%',
        maxWidth: '460px',
        background: '#FFFFFF',
        borderRadius: '28px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        padding: '40px 40px 44px',
        margin: '0 24px',
      }}
    >
      {/* Logo centered at top */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
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
          marginBottom: '32px',
        }}
      >
        Set New Password
      </h1>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          id="password"
          label="New Password"
          type={showPw ? 'text' : 'password'}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          rightElement={<EyeIcon show={showPw} onClick={() => setShowPw((v) => !v)} />}
        />

        <Input
          id="confirmPassword"
          label="Confirm Password"
          type={showConfirm ? 'text' : 'password'}
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirm(e.target.value)}
          autoComplete="new-password"
          rightElement={<EyeIcon show={showConfirm} onClick={() => setShowConfirm((v) => !v)} />}
        />

        <div style={{ marginTop: '24px' }}>
          <Button type="submit" id="update-password-btn">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}

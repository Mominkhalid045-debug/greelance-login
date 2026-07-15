import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Set new password');
    // Navigate back to login
    navigate('/login');
  };

  const EyeIcon = ({ show, toggle }) => (
    <button
      type="button"
      aria-label={show ? 'Hide password' : 'Show password'}
      onClick={() => toggle((v) => !v)}
      className="text-body hover:text-heading transition-colors focus-ring rounded"
    >
      {show ? (
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
      aria-label="Set New Password form"
      style={{
        width: '477.75px',
        background: '#FFFFFF',
        borderRadius: '40.5px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        padding: '48px',
      }}
    >
      <div className="flex justify-center mb-6">
        <Logo />
      </div>

      <h1
        className="font-poppins text-center"
        style={{
          fontSize: '26px',
          fontWeight: 700,
          color: '#202B52',
          marginBottom: '24px',
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
          rightElement={<EyeIcon show={showPw} toggle={setShowPw} />}
        />

        <Input
          id="confirmPassword"
          label="Confirm Password"
          type={showConfirmPw ? 'text' : 'password'}
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          rightElement={<EyeIcon show={showConfirmPw} toggle={setShowConfirmPw} />}
        />

        <div className="mt-8">
          <Button type="submit" id="update-password-btn">
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}

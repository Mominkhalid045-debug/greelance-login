import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import SocialLogin from '../components/SocialLogin';

const roles = [
  'Freelancer',
  'Employer',
  'Agency',
  'Service Provider',
  'Affiliate Marketer',
  'Investor',
];

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState('Freelancer');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signup');
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Logo centered style={{ marginBottom: '0px', height: '28px' }} />

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: '#8B8FA3',
          textAlign: 'center',
          marginTop: '14px',
          marginBottom: '18px',
          lineHeight: '18px',
          maxWidth: '380px',
        }}
      >
        Thanks for your interest in Greelance! Before we get started, how do you want to sign up in Greelance?
      </p>

      <div
        className="occupation-list"
        style={{
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        {roles.map((role) => {
          const isSelected = selectedRole === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => {
                setSelectedRole(role);
                localStorage.setItem('selectedRole', role);
              }}
              className={`occupation-pill ${isSelected ? 'selected' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '46px',
                padding: '0 20px',
                borderRadius: '10px',
                border: isSelected ? '1.5px solid #22C55E' : '1px solid #E5E7EB',
                background: isSelected ? '#22C55E' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: isSelected ? 600 : 500,
                color: isSelected ? '#FFFFFF' : '#374151',
                boxSizing: 'border-box',
                textAlign: 'left',
              }}
            >
              <span style={{ color: isSelected ? '#FFFFFF' : '#374151' }}>
                {role}
              </span>
              {isSelected && (
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="btn-next"
        style={{
          width: '110px',
          height: '36px',
          marginBottom: '16px',
          background: '#2334CD',
          color: '#FFFFFF',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '13px',
          border: 'none',
          borderRadius: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#1B2AB2'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#2334CD'}
      >
        Next
      </button>

      <div
        className="signin-text"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: '#8B8FA3',
          marginBottom: '16px',
          lineHeight: '18px',
        }}
      >
        Already have an account?{' '}
        <Link to="/login" style={{ color: '#2334CD', fontWeight: 600, textDecoration: 'none' }}>
          Sign In
        </Link>
      </div>

      <SocialLogin />
    </div>
  );
}

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
      <Logo centered style={{ marginBottom: '0px', height: '26px' }} />

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: '#8B8FA3',
          textAlign: 'center',
          marginTop: '14px',
          marginBottom: '14px',
          lineHeight: '18px',
          maxWidth: '416px',
        }}
      >
        Thanks for your interest in Greelance! Before we get started, how do you want to sign up in Greelance?
      </p>

      <div
        className="occupation-list"
        style={{
          width: '100%',
          maxWidth: '416px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        {roles.map((role) => {
          const isSelected = selectedRole === role;
          return (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`occupation-pill ${isSelected ? 'selected' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '46px',
                padding: '10px 12px',
                borderRadius: '7.5px',
                border: isSelected ? '1.33px solid #22C55E' : '1.33px solid #E5E7EB',
                background: isSelected ? '#22C55E' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: isSelected ? 600 : 500,
                color: isSelected ? '#ffffff' : '#1F2333',
                boxSizing: 'border-box',
              }}
            >
              <span style={{ color: isSelected ? '#ffffff' : '#1F2333' }}>{role}</span>
              {isSelected && (
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
          width: '99px',
          height: '30px',
          padding: '6px 32px',
          marginBottom: '12px',
          background: '#4B3FF2',
          color: '#FFFFFF',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '12px',
          border: 'none',
          borderRadius: '7.5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'rgba(75, 63, 242, 0.25) 0px 4px 10px 0px',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#3B30E2'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#4B3FF2'}
      >
        Next
      </button>

      <div
        className="signin-text"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: '#8B8FA3',
          marginBottom: '12px',
          lineHeight: '18px',
        }}
      >
        Already have an account?{' '}
        <Link to="/login" style={{ color: '#4B3FF2', fontWeight: 600, textDecoration: 'none' }}>
          Sign In
        </Link>
      </div>

      <SocialLogin />
    </div>
  );
}

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
    // Navigate to the signup form
    navigate('/signup');
  };

  return (
    <div
      className="animate-slide-in"
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Logo centered />

      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '15px',
          color: '#6B7280',
          textAlign: 'center',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        Thanks for your interest in Greelance! Before we get started, how do you want to sign up in Greelance?
      </p>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {roles.map((role) => {
          const isSelected = selectedRole === role;
          return (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '16px 24px',
                borderRadius: '12px',
                border: isSelected ? '2px solid #22C55E' : '1.5px solid #E5E7EB',
                background: isSelected ? '#22C55E' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '15px',
                fontWeight: isSelected ? 600 : 500,
                color: isSelected ? '#fff' : '#1F2937',
              }}
            >
              {role}
              {isSelected && (
                <div style={{ background: '#fff', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
        style={{
          width: '160px',
          height: '48px',
          borderRadius: '24px',
          background: '#3741D4',
          color: '#fff',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: '15px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '24px',
          boxShadow: '0 4px 14px rgba(55,65,212,0.3)',
        }}
      >
        Next
      </button>

      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', marginBottom: '16px' }}>
        Already have an account?{' '}
        <Link to="/login" style={{ color: '#3741D4', fontWeight: 600, textDecoration: 'none' }}>
          Sign In
        </Link>
      </div>

      <SocialLogin />
    </div>
  );
}

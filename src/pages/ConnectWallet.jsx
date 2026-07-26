import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

// High-fidelity vector logos matching reference screenshot
function CoinbaseLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#0052FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11ZM17.5 24C17.5 20.4101 20.4101 17.5 24 17.5C27.5899 17.5 30.5 20.4101 30.5 24C30.5 27.5899 27.5899 30.5 24 30.5C20.4101 30.5 17.5 27.5899 17.5 24ZM24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27C25.6569 27 27 25.6569 27 24H30.5C30.5 27.5899 27.5899 30.5 24 30.5C20.4101 30.5 17.5 27.5899 17.5 24C17.5 20.4101 20.4101 17.5 24 17.5C27.5899 17.5 30.5 20.4101 30.5 24H27C27 22.3431 25.6569 21 24 21Z"
        fill="white"
      />
    </svg>
  );
}

function FormaticLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <path
        d="M10 8H38V18.5H23.5V24H34V31C34 35.5 30 39.5 25 39.5H23.5V26.5H10V8Z"
        fill="#6748FF"
      />
    </svg>
  );
}

function MetamaskLogo() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M39.6 4.4L24.8 15.3L27.7 8.5L39.6 4.4Z" fill="#E67E22" />
      <path d="M4.4 4.4L19.2 15.3L16.3 8.5L4.4 4.4Z" fill="#E67E22" />
      <path d="M34.1 31.1L30.2 37L38.8 34.6L34.1 31.1Z" fill="#D35400" />
      <path d="M9.9 31.1L13.8 37L5.2 34.6L9.9 31.1Z" fill="#D35400" />
      <path d="M14.9 19.4L13.3 24.7L19 25L18.7 18.8L14.9 19.4Z" fill="#E67E22" />
      <path d="M29.1 19.4L25.3 18.8L25 25L30.7 24.7L29.1 19.4Z" fill="#E67E22" />
      <path d="M15.1 34.7L19.6 32.5L18.9 29.3L15.1 34.7Z" fill="#E67E22" />
      <path d="M28.9 34.7L25.1 29.3L24.4 32.5L28.9 34.7Z" fill="#E67E22" />
      <path d="M29.8 37L25.1 29.3L24.4 32.5L28.9 34.7Z" fill="#D35400" />
      <path d="M14.2 37L15.1 34.7L19.6 32.5L18.9 29.3Z" fill="#D35400" />
      <path d="M22 22.9L25.8 18.8L29.5 19.4L25.1 15.3L22 22.9Z" fill="#F39C12" />
      <path d="M22 22.9L18.9 15.3L14.5 19.4L18.2 18.8L22 22.9Z" fill="#F39C12" />
      <path d="M25.1 29.3L22 24.1L18.9 29.3L22 30.5L25.1 29.3Z" fill="#BDC3C7" />
      <path d="M22 31.8L18.9 29.3L22 30.5L25.1 29.3L22 31.8Z" fill="#7F8C8D" />
      <path d="M19 25L13.3 24.7L15.1 34.7L18.9 29.3L22 24.1L19 25Z" fill="#E67E22" />
      <path d="M25 25L22 24.1L25.1 29.3L28.9 34.7L30.7 24.7L25 25Z" fill="#E67E22" />
    </svg>
  );
}

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState('MetaMask');
  const [uniqueAddress, setUniqueAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const wallets = [
    {
      id: 'CoinBase',
      name: 'CoinBase',
      icon: <CoinbaseLogo />,
    },
    {
      id: 'Formatic',
      name: 'Formatic',
      icon: <FormaticLogo />,
    },
    {
      id: 'MetaMask',
      name: 'MetaMask',
      icon: <MetamaskLogo />,
    },
  ];

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#F4F7FC',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Floating Step Header Navigation */}
      <StepHeader activeStep={4} navigate={navigate} />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '32px 20px 60px 20px',
        }}
      >
        {/* Main White Card Container */}
        <div
          style={{
            width: '1140px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.03)',
            padding: '48px',
            boxSizing: 'border-box',
            marginBottom: '32px',
          }}
        >
          {/* Main Title & Subtitle */}
          <h2
            style={{
              fontFamily: F,
              fontSize: '22px',
              fontWeight: 700,
              color: '#050A5F',
              margin: '0 0 6px 0',
            }}
          >
            Connect Wallet
          </h2>
          <p
            style={{
              fontFamily: F,
              fontSize: '13px',
              color: '#050A5F',
              fontWeight: 500,
              margin: '0 0 36px 0',
            }}
          >
            Select a wallet you want to connect for your payment method. You can change the wallet after a sign in too.
          </p>

          {/* 3 Wallet Provider Cards */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}
          >
            {wallets.map((w) => {
              const isSelected = selectedWallet === w.name;
              return (
                <div
                  key={w.id}
                  onClick={() => {
                    setSelectedWallet(w.name);
                    localStorage.setItem('userSelectedWallet', w.name);
                  }}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '18px',
                    background: isSelected ? '#2334CD' : '#F8FAFE',
                    border: isSelected ? 'none' : '1px solid #D6E4FF',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                    boxShadow: isSelected
                      ? '0 10px 24px rgba(35, 52, 205, 0.3)'
                      : '0 2px 6px rgba(5, 10, 95, 0.02)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = '#F0F4FF';
                      e.currentTarget.style.borderColor = '#C7D2FE';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = '#F8FAFE';
                      e.currentTarget.style.borderColor = '#D6E4FF';
                    }
                  }}
                >
                  {w.icon}
                  <span
                    style={{
                      fontFamily: F,
                      fontSize: '14px',
                      fontWeight: 700,
                      color: isSelected ? '#FFFFFF' : '#050A5F',
                    }}
                  >
                    {w.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 3-Column Input Fields Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              maxWidth: '840px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                style={{
                  fontFamily: F,
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: '#050A5F',
                }}
              >
                Unique Address
              </label>
              <input
                type="text"
                placeholder="0x..."
                value={uniqueAddress}
                onChange={(e) => setUniqueAddress(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                style={{
                  fontFamily: F,
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: '#050A5F',
                }}
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                style={{
                  fontFamily: F,
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: '#050A5F',
                }}
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation Controls (Outside Card) */}
        <div
          style={{
            width: '1140px',
            maxWidth: '96%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/skills')}
            style={{
              background: '#FFFFFF',
              color: '#2334CD',
              border: '1.5px solid #2334CD',
              borderRadius: '20px',
              height: '42px',
              padding: '0 28px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#EEF2FF')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/complete-profile')}
            style={{
              background: '#2334CD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              height: '42px',
              padding: '0 32px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1B2AB2')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2334CD')}
          >
            <span>Next</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: '42px',
  padding: '0 20px',
  borderRadius: '21px',
  border: '1px solid #D6E4FF',
  background: '#F8FAFE',
  fontFamily: F,
  fontSize: '13px',
  color: '#050A5F',
  outline: 'none',
  boxSizing: 'border-box',
};

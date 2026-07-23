import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

// High-fidelity vector logo icons matching exact reference images
function CoinbaseIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="13" fill="#0052FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11ZM16.5 24C16.5 19.8579 19.8579 16.5 24 16.5C28.1421 16.5 31.5 19.8579 31.5 24C31.5 28.1421 28.1421 31.5 24 31.5C19.8579 31.5 16.5 28.1421 16.5 24ZM24 20.25C21.9289 20.25 20.25 21.9289 20.25 24C20.25 26.0711 21.9289 27.75 24 27.75C26.0711 27.75 27.75 26.0711 27.75 24H31.5C31.5 28.1421 28.1421 31.5 24 31.5C19.8579 31.5 16.5 28.1421 16.5 24C16.5 19.8579 19.8579 16.5 24 16.5C28.1421 16.5 31.5 19.8579 31.5 24H27.75C27.75 21.9289 26.0711 20.25 24 20.25Z"
        fill="white"
      />
    </svg>
  );
}

function FortmaticIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="none" />
      <path d="M12 9H36V18H22V23H32V36H22V36C22 28.8203 16.1797 23 9 23V23" fill="none" />
      <path
        d="M12 9H36V18H22V23H32V36H22V27.5C22 24 25.5 23.5 28 23.5"
        fill="none"
      />
      <path
        d="M11 9H37V19.5H23V24.5H33.5V31.5C33.5 36 29.5 39.5 24.5 39.5H23V25.5H11V9Z"
        fill="#6741D9"
      />
    </svg>
  );
}

function MetamaskIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 44 44" fill="none">
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
      icon: <CoinbaseIcon />,
    },
    {
      id: 'MetaMask',
      name: 'MetaMask',
      icon: <MetamaskIcon />,
    },
    {
      id: 'Fortmatic',
      name: 'Fortmatic',
      icon: <FortmaticIcon />,
    },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={4} navigate={navigate} />

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '30px' }}>
        
        <div style={{ width: '100%', maxWidth: '1320px' }}>
          
          {/* Main Title & Subtitle */}
          <h2 style={{ fontFamily: F, fontSize: '18px', fontWeight: 700, color: '#050A5F', marginBottom: '4px' }}>
            Connect Wallet
          </h2>
          <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8, marginBottom: '28px' }}>
            Select a wallet you want to connect for your payment method. You can change the wallet after a sign in too.
          </p>

          {/* 3 Wallet Options Row matching exact Figma card design */}
          <div className="wallet-cards-grid-responsive" style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {wallets.map((w) => {
              const isSelected = selectedWallet === w.name;
              const cardBg = isSelected ? '#3038BD' : '#F3F7FF';
              const textClr = isSelected ? '#FFFFFF' : '#050A5F';

              return (
                <div
                  key={w.id}
                  onClick={() => setSelectedWallet(w.name)}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '16px',
                    background: cardBg,
                    border: isSelected ? 'none' : '0.75px solid #E0E2FE',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: isSelected ? '0 12px 28px rgba(48,56,189,0.3)' : '0 2px 6px rgba(5,10,95,0.03)',
                    transition: 'all 0.2s',
                  }}
                >
                  {w.icon}
                  <span style={{ fontFamily: F, fontSize: '13px', fontWeight: 600, color: textClr }}>
                    {w.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 3-Column Input Fields Grid */}
          <div className="wallet-fields-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '900px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>Unique Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                value={uniqueAddress}
                onChange={(e) => setUniqueAddress(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <button
              onClick={() => navigate('/complete-profile')}
              style={{
                background: '#3038BD',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '20px',
                width: '99px',
                height: '32px',
                fontFamily: F,
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(48,56,189,0.3)',
                transition: 'all 0.2s',
              }}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  height: '38px',
  padding: '0 16px',
  borderRadius: '45px',
  border: '0.75px solid #E0E2FE',
  background: '#F3F7FF',
  fontFamily: F,
  fontSize: '12px',
  color: '#050A5F',
  outline: 'none',
  boxSizing: 'border-box',
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

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
      bgColor: '#F3F7FF',
      textColor: '#050A5F',
      icon: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="24" fill="#0052FF" />
          <rect x="15" y="15" width="18" height="18" rx="4" fill="#FFFFFF" />
          <rect x="20" y="20" width="8" height="8" rx="1.5" fill="#0052FF" />
        </svg>
      ),
    },
    {
      id: 'Fortmatic',
      name: 'Fortmatic',
      bgColor: '#F3F7FF',
      textColor: '#050A5F',
      icon: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="12" fill="#F3F7FF" />
          <path d="M14 12H34V20H22V26H30V34H22V36H14V12Z" fill="#6741D9" />
        </svg>
      ),
    },
    {
      id: 'MetaMask',
      name: 'MetaMask',
      bgColor: '#3038BD',
      textColor: '#FFFFFF',
      icon: (
        <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
          <path d="M35.6 4L22.2 13.9L24.8 7.7L35.6 4Z" fill="#E67E22" />
          <path d="M4.4 4L17.6 14.1L15.2 7.7L4.4 4Z" fill="#E67E22" />
          <path d="M30.6 28.3L27.1 33.6L34.9 31.5L30.6 28.3Z" fill="#E67E22" />
          <path d="M9.4 28.3L13.7 31.5L5.1 33.6L9.4 28.3Z" fill="#E67E22" />
          <path d="M13.5 17.6L12.1 22.4L17.2 22.7L17 17.1L13.5 17.6Z" fill="#E67E22" />
          <path d="M26.5 17.6L23 17.1L22.8 22.7L27.9 22.4L26.5 17.6Z" fill="#E67E22" />
          <path d="M13.7 31.5L17.8 29.5L17.2 26.6L13.7 31.5Z" fill="#D35400" />
          <path d="M26.3 31.5L22.8 26.6L22.2 29.5L26.3 31.5Z" fill="#D35400" />
          <path d="M27.1 33.6L22.8 26.6L22.2 29.5L26.3 31.5Z" fill="#E67E22" />
          <path d="M12.9 33.6L13.7 31.5L17.8 29.5L17.2 26.6Z" fill="#E67E22" />
          <path d="M20 20.8L23.4 17.1L26.8 17.6L22.8 13.9L20 20.8Z" fill="#F39C12" />
          <path d="M20 20.8L17.2 13.9L13.2 17.6L16.6 17.1L20 20.8Z" fill="#F39C12" />
        </svg>
      ),
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

          {/* 3 Wallet Options Row */}
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
                value={uniqueAddress}
                onChange={(e) => setUniqueAddress(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '40px' }}>
            <button
              onClick={() => navigate('/complete-profile')}
              style={{
                background: '#3038BD',
                color: '#fff',
                border: 'none',
                borderRadius: '16.88px',
                width: '99px',
                height: '27.6px',
                fontFamily: F,
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(48,56,189,0.25)',
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
  height: '39px',
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

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
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <rect width="52" height="52" rx="14" fill="#0052FF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 10C17.1634 10 10 17.1634 10 26C10 34.8366 17.1634 42 26 42C34.8366 42 42 34.8366 42 26C42 17.1634 34.8366 10 26 10ZM17 26C17 21.0294 21.0294 17 26 17C30.9706 17 35 21.0294 35 26C35 30.9706 30.9706 35 26 35C21.0294 35 17 30.9706 17 26ZM26 21.5C23.5147 21.5 21.5 23.5147 21.5 26C21.5 28.4853 23.5147 30.5 26 30.5C28.4853 30.5 30.5 28.4853 30.5 26H35C35 30.9706 30.9706 35 26 35C21.0294 35 17 30.9706 17 26C17 21.0294 21.0294 17 26 17C30.9706 17 35 21.0294 35 26H30.5C30.5 23.5147 28.4853 21.5 26 21.5Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 'Fortmatic',
      name: 'Fortmatic',
      bgColor: '#F3F7FF',
      textColor: '#050A5F',
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M12 10H40V21H23V27H35V42H23V42C23 33.7157 16.2843 27 8 27V27" fill="none" />
          <path d="M12 10H40V21H23V27H35V42H23V31.5C23 27.5 27 27 30 27" fill="none" />
          <path d="M12 10H40V21H23V27H35V32C35 37.5228 30.5228 42 25 42H23V27H12V10Z" fill="#6741D9" />
        </svg>
      ),
    },
    {
      id: 'MetaMask',
      name: 'MetaMask',
      bgColor: '#3038BD',
      textColor: '#FFFFFF',
      icon: (
        <svg width="54" height="54" viewBox="0 0 44 44" fill="none">
          {/* Outer Ears */}
          <path d="M39.6 4.4L24.8 15.3L27.7 8.5L39.6 4.4Z" fill="#E67E22" />
          <path d="M4.4 4.4L19.2 15.3L16.3 8.5L4.4 4.4Z" fill="#E67E22" />
          <path d="M34.1 31.1L30.2 37L38.8 34.6L34.1 31.1Z" fill="#D35400" />
          <path d="M9.9 31.1L13.8 37L5.2 34.6L9.9 31.1Z" fill="#D35400" />
          {/* Cheeks & Forehead */}
          <path d="M14.9 19.4L13.3 24.7L19 25L18.7 18.8L14.9 19.4Z" fill="#E67E22" />
          <path d="M29.1 19.4L25.3 18.8L25 25L30.7 24.7L29.1 19.4Z" fill="#E67E22" />
          <path d="M15.1 34.7L19.6 32.5L18.9 29.3L15.1 34.7Z" fill="#E67E22" />
          <path d="M28.9 34.7L25.1 29.3L24.4 32.5L28.9 34.7Z" fill="#E67E22" />
          <path d="M29.8 37L25.1 29.3L24.4 32.5L28.9 34.7Z" fill="#D35400" />
          <path d="M14.2 37L15.1 34.7L19.6 32.5L18.9 29.3Z" fill="#D35400" />
          {/* Nose & Eyes */}
          <path d="M22 22.9L25.8 18.8L29.5 19.4L25.1 15.3L22 22.9Z" fill="#F39C12" />
          <path d="M22 22.9L18.9 15.3L14.5 19.4L18.2 18.8L22 22.9Z" fill="#F39C12" />
          <path d="M25.1 29.3L22 24.1L18.9 29.3L22 30.5L25.1 29.3Z" fill="#BDC3C7" />
          <path d="M22 31.8L18.9 29.3L22 30.5L25.1 29.3L22 31.8Z" fill="#7F8C8D" />
          <path d="M19 25L13.3 24.7L15.1 34.7L18.9 29.3L22 24.1L19 25Z" fill="#E67E22" />
          <path d="M25 25L22 24.1L25.1 29.3L28.9 34.7L30.7 24.7L25 25Z" fill="#E67E22" />
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';
import coinbaseImg from '../assets/coinbase.png';
import fortmaticImg from '../assets/fortmatic.png';
import metamaskImg from '../assets/metamask.png';

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState('MetaMask');
  const [uniqueAddress, setUniqueAddress] = useState('');
  const [firstName, setFirstName] = useState('Momin');
  const [lastName, setLastName] = useState('Khalid');

  const wallets = [
    {
      id: 'CoinBase',
      name: 'CoinBase',
      img: coinbaseImg,
    },
    {
      id: 'Formatic',
      name: 'Formatic',
      img: fortmaticImg,
    },
    {
      id: 'MetaMask',
      name: 'MetaMask',
      img: metamaskImg,
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
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid #2334CD' : '1px solid #E5E7EB',
                    boxShadow: isSelected
                      ? '0 10px 24px rgba(35, 52, 205, 0.3)'
                      : '0 2px 6px rgba(5, 10, 95, 0.02)',
                    transition: 'all 0.2s ease',
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <img
                    src={w.img}
                    alt={w.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';
import coinbaseImg from '../assets/coinbase.png';
import metamaskImg from '../assets/metamask.png';
import fortmaticImg from '../assets/fortmatic.png';

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
      imgSrc: coinbaseImg,
    },
    {
      id: 'Fortmatic',
      name: 'Fortmatic',
      imgSrc: fortmaticImg,
    },
    {
      id: 'MetaMask',
      name: 'MetaMask',
      imgSrc: metamaskImg,
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

          {/* 3 Wallet Options Row (Displaying the EXACT user uploaded image cards) */}
          <div className="wallet-cards-grid-responsive" style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {wallets.map((w) => {
              const isSelected = selectedWallet === w.name;

              return (
                <div
                  key={w.id}
                  onClick={() => setSelectedWallet(w.name)}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    border: isSelected ? '3px solid #3038BD' : '1px solid #E0E2FE',
                    boxShadow: isSelected ? '0 12px 28px rgba(48,56,189,0.35)' : '0 2px 6px rgba(5,10,95,0.04)',
                    transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={w.imgSrc}
                    alt={w.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '14px',
                    }}
                  />
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

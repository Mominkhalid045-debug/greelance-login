import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [uniqueAddress, setUniqueAddress] = useState('');
  const [firstName, setFirstName] = useState('Momin');
  const [lastName, setLastName] = useState('Khalid');

  const wallets = [
    { name: 'CoinBase', color: '#2563EB', letter: 'C', shape: 'circle' },
    { name: 'Fortmatic', color: '#6366F1', letter: 'F', shape: 'square' },
    { name: 'MetaMask', color: '#F59E0B', letter: '🦊', shape: 'square' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={4} navigate={navigate} />

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '40px' }}>
        
        <div style={{ width: '100%', maxWidth: '1320px' }}>
          {/* Title */}
          <h2 style={{ fontFamily: F, fontSize: '30px', fontWeight: 600, color: '#050A5F', marginBottom: '4px' }}>
            Connect Wallet
          </h2>
          <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8, marginBottom: '24px' }}>
            Select a wallet you want to connect for your payment method. You can change the wallet after a sign in too.
          </p>

          {/* Wallet Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px', margin: '15px auto 24px' }}>
            {wallets.map(w => {
              const isSelected = selectedWallet === w.name;
              return (
                <div
                  key={w.name}
                  onClick={() => setSelectedWallet(w.name)}
                  style={{
                    border: isSelected ? '1px solid #3038BD' : '1px solid #E0E2FE',
                    background: isSelected ? '#F3F7FF' : '#F3F7FF',
                    borderRadius: '12px', padding: '20px',
                    cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px',
                    borderRadius: w.shape === 'circle' ? '50%' : '12px',
                    background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    fontSize: '24px',
                  }}>
                    {w.letter === '🦊' ? w.letter : <span style={{ color: w.color, fontWeight: 700, fontFamily: F }}>{w.letter}</span>}
                  </div>
                  <span style={{ fontFamily: F, fontSize: '14px', fontWeight: 600, color: '#050A5F' }}>{w.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 500, color: '#ADAFDD' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: isSelected ? '#4ADF86' : '#ADAFDD' }} />
                    {isSelected ? 'Connected' : 'Not connected'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '600px', margin: '0 auto 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 500, color: '#050A5F' }}>Unique Address</label>
              <input type="text" value={uniqueAddress} onChange={(e) => setUniqueAddress(e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 500, color: '#050A5F' }}>First Name</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 500, color: '#050A5F' }}>Last Name</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
            </div>
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', marginBottom: '40px' }}>
            <button onClick={() => navigate('/complete-profile')} style={{ background: '#ADAFDD', color: '#fff', border: '0.28px solid #ADAFDD', borderRadius: '16.88px', width: '99px', height: '27.6px', fontFamily: F, fontSize: '9px', fontWeight: 500, cursor: 'pointer' }}>
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', height: '42px', padding: '0 16px',
  borderRadius: '6px', border: '0.75px solid #E0E2FE',
  background: '#F3F7FF', fontFamily: F, fontSize: '13px', color: '#050A5F',
  outline: 'none', boxSizing: 'border-box',
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [uniqueAddress, setUniqueAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '0', alignItems: 'stretch', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/skills')}
          style={{ width: '56px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1 }}>
          {[
            { num: 1, label: 'Upload Resume', path: '/form' },
            { num: 2, label: 'Setup Profile', path: '/setup-profile' },
            { num: 3, label: 'Choose Skill', path: '/skills' },
            { num: 4, label: 'Connect Wallet', path: '/connect-wallet' },
            { num: 5, label: 'Complete Profile', path: '/complete-profile' },
          ].map(step => {
            const isActive = step.num === 4;
            return (
              <div
                key={step.num}
                onClick={() => navigate(step.path)}
                style={{
                  flex: 1,
                  padding: '14px 16px',
                  cursor: 'pointer',
                  background: isActive ? '#3741D4' : 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p style={{ margin: 0, fontSize: '11px', color: isActive ? '#93C5FD' : '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step {step.num}</p>
                <p style={{ margin: 0, fontSize: '13px', color: isActive ? '#FFFFFF' : '#0A0F2E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>{step.label}</p>
              </div>
            );
          })}
        </div>

        {/* Forward Arrow */}
        <button onClick={() => navigate('/complete-profile')} style={{ width: '56px', background: '#fff', border: 'none', borderLeft: '1px solid #E5E7EB', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content Area - Scrollable */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', borderRadius: '0 0 20px 20px', minHeight: 'calc(100vh - 60px)', padding: '40px 48px' }}>
          
          {/* Title */}
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#0A0F2E', margin: '0 0 8px 0' }}>
            Connect Wallet
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', margin: '0 0 36px 0' }}>
            Select a wallet you want to connect for your payment method. You can change the wallet after a sign in too.
          </p>

          {/* Wallet Cards */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '48px' }}>

            {/* CoinBase */}
            <div
              onClick={() => setSelectedWallet('CoinBase')}
              style={{
                width: '130px',
                padding: '28px 16px 20px',
                borderRadius: '14px',
                border: selectedWallet === 'CoinBase' ? '2px solid #3741D4' : '1.5px solid #E5E7EB',
                background: selectedWallet === 'CoinBase' ? '#F0F1FF' : '#FFFFFF',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '30px',
                background: '#2563EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                <span style={{ color: '#fff', fontSize: '28px', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>C</span>
              </div>
              <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#0A0F2E' }}>CoinBase</p>
            </div>

            {/* Fortmatic */}
            <div
              onClick={() => setSelectedWallet('Fortmatic')}
              style={{
                width: '130px',
                padding: '28px 16px 20px',
                borderRadius: '14px',
                border: selectedWallet === 'Fortmatic' ? '2px solid #3741D4' : '1.5px solid #E5E7EB',
                background: selectedWallet === 'Fortmatic' ? '#F0F1FF' : '#FFFFFF',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '14px',
                background: '#6366F1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                <span style={{ color: '#fff', fontSize: '28px', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>F</span>
              </div>
              <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#0A0F2E' }}>Fortmatic</p>
            </div>

            {/* MetaMask */}
            <div
              onClick={() => setSelectedWallet('MetaMask')}
              style={{
                width: '130px',
                padding: '28px 16px 20px',
                borderRadius: '14px',
                border: selectedWallet === 'MetaMask' ? '2px solid #3741D4' : '1.5px solid #E5E7EB',
                background: selectedWallet === 'MetaMask' ? '#F0F1FF' : '#FFFFFF',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: '60px', height: '60px', borderRadius: '14px',
                background: '#F59E0B',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                <span style={{ color: '#fff', fontSize: '22px', fontWeight: 700 }}>🦊</span>
              </div>
              <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#0A0F2E' }}>MetaMask</p>
            </div>

          </div>

          {/* Form Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '48px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, color: '#0A0F2E', marginBottom: '10px' }}>Unique Address</label>
              <input
                type="text"
                value={uniqueAddress}
                onChange={(e) => setUniqueAddress(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, color: '#0A0F2E', marginBottom: '10px' }}>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, color: '#0A0F2E', marginBottom: '10px' }}>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              onClick={() => navigate('/complete-profile')}
              style={{
                background: '#3741D4',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '24px',
                padding: '12px 40px',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
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
  padding: '14px 16px',
  borderRadius: '10px',
  border: '1.5px solid #E5E7EB',
  background: '#fff',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '13px',
  color: '#0A0F2E',
  outline: 'none',
  boxSizing: 'border-box',
};

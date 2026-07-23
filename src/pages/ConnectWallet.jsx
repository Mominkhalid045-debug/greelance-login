import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConnectWallet() {
  const navigate = useNavigate();
  const [connectedWallet, setConnectedWallet] = useState(null);

  const wallets = [
    { name: 'MetaMask', icon: '🦊', desc: 'Connect using browser extension or mobile app' },
    { name: 'Phantom', icon: '👻', desc: 'Solana & Multi-chain Web3 wallet' },
    { name: 'WalletConnect', icon: '🔗', desc: 'Scan with WalletConnect to connect mobile wallet' },
    { name: 'Coinbase Wallet', icon: '🔵', desc: 'Connect using Coinbase Wallet mobile app' }
  ];

  const handleConnect = (walletName) => {
    setConnectedWallet(`${walletName} (0x71C...8A3E)`);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '16px 32px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/skills')}
          style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px', flexShrink: 0 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1, gap: '32px', overflowX: 'auto' }}>
          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/form')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 1</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Upload Resume</p>
          </div>
          
          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/setup-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 2</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Setup Profile</p>
          </div>

          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/skills')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 3</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Choose Skill</p>
          </div>

          <div style={{ background: '#E0E7FF', padding: '8px 20px', borderRadius: '8px', borderLeft: '4px solid #3741D4', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/connect-wallet')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 4</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#3741D4', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Connect Wallet</p>
          </div>
          
          <div style={{ padding: '8px 12px', cursor: 'pointer', flexShrink: 0 }} onClick={() => navigate('/complete-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 5</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Complete Profile</p>
          </div>
        </div>

        {/* Exit Icon */}
        <button onClick={() => navigate('/')} style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </button>
      </div>

      {/* Main Container - Scrollable */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '40px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '640px', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px', textAlign: 'center' }}>
            Connect Your Crypto Wallet
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', marginBottom: '32px', textAlign: 'center' }}>
            Connect a web3 wallet to receive crypto payments directly for completed freelance milestone contracts.
          </p>

          {/* Connected Badge */}
          {connectedWallet && (
            <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '16px', padding: '16px', marginBottom: '24px', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#166534' }}>
                ✓ Connected: {connectedWallet}
              </p>
            </div>
          )}

          {/* Wallet List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
            {wallets.map(w => (
              <div
                key={w.name}
                onClick={() => handleConnect(w.name)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  background: '#F9FAFB',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: '28px' }}>{w.icon}</span>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 2px 0', fontSize: '15px', fontWeight: 600, color: '#0A0F2E' }}>{w.name}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#6B7280' }}>{w.desc}</p>
                </div>
                <button 
                  type="button"
                  style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '12px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Connect
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E5E7EB', paddingTop: '24px' }}>
            <button 
              onClick={() => navigate('/skills')}
              style={{ background: 'transparent', color: '#6B7280', border: '1px solid #D1D5DB', borderRadius: '30px', padding: '12px 28px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
            >
              Back
            </button>
            <button 
              onClick={() => navigate('/complete-profile')}
              style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '12px 36px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}
            >
              Next Step: Complete Profile →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

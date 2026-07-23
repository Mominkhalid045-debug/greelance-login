import { useNavigate } from 'react-router-dom';

export default function SetupProfile() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '0', alignItems: 'stretch', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/form')}
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
            const isActive = step.num === 2;
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
        <button onClick={() => navigate('/skills')} style={{ width: '56px', background: '#fff', border: 'none', borderLeft: '1px solid #E5E7EB', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content Area - Scrollable */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '32px 40px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', background: '#FFFFFF', borderRadius: '20px', padding: '36px 40px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0A0F2E', margin: 0 }}>Personal Information</h2>
            <span style={{ color: '#EF4444', fontWeight: 700, fontSize: '20px' }}>*</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>First Name *</label>
              <input type="text" placeholder="First Name" style={inputStyle} defaultValue="Alex" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Last Name *</label>
              <input type="text" placeholder="Last Name" style={inputStyle} defaultValue="Morgan" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Country of Residence</label>
              <select style={inputStyle}><option>United States</option><option>United Kingdom</option><option>Canada</option></select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Country of Citizenship</label>
              <select style={inputStyle}><option>United States</option><option>United Kingdom</option><option>Canada</option></select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Phone Number</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <select style={{ ...inputStyle, width: '80px' }}><option>+1</option></select>
                <input type="text" placeholder="201 555 0123" defaultValue="201 555 0123" style={{ ...inputStyle, flex: 1 }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>English Proficiency</label>
              <select style={inputStyle}>
                <option>Fluent</option><option>Native</option><option>Conversational</option><option>Basic</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Notice period to resign from current job</label>
              <select style={inputStyle}>
                <option>Immediate</option><option>2 Weeks</option><option>One Month</option><option>2 Months</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Preferred Job Commitment</label>
              <select style={inputStyle}>
                <option>Full Time</option><option>Part Time</option><option>Contract</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Hourly Rate ($)</label>
              <input type="text" placeholder="$ 45.00" defaultValue="$ 45.00" style={inputStyle} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#374151' }}>Time Zone</label>
              <select style={inputStyle}>
                <option>GMT-5 New York</option><option>GMT+0 London</option><option>GMT+5 Islamabad</option>
              </select>
            </div>

          </div>

          <div style={{ borderTop: '1px solid #E5E7EB', margin: '32px 0' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0A0F2E', margin: 0 }}>Education</h2>
            <button style={{ background: '#3741D4', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>+ Add Education</button>
          </div>

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #E5E7EB', paddingTop: '24px', marginTop: '20px' }}>
            <button 
              onClick={() => navigate('/skills')} 
              style={{
                background: '#3741D4',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
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
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1.5px solid #E5E7EB',
  background: '#fff',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '13px',
  color: '#050A5F',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

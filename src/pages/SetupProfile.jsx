import { useNavigate } from 'react-router-dom';

export default function SetupProfile() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header / Progress Bar */}
      <div style={{ display: 'flex', background: '#fff', padding: '16px 32px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/form')}
          style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1, gap: '32px' }}>
          <div style={{ padding: '8px 12px', cursor: 'pointer' }} onClick={() => navigate('/form')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 1</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Upload Resume</p>
          </div>
          
          <div style={{ background: '#E0E7FF', padding: '8px 20px', borderRadius: '8px', borderLeft: '4px solid #3741D4', cursor: 'pointer' }} onClick={() => navigate('/setup-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 2</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#3741D4', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Setup Profile</p>
          </div>

          <div style={{ padding: '8px 12px', cursor: 'pointer' }} onClick={() => navigate('/skills')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 3</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Choose Skill</p>
          </div>

          <div style={{ padding: '8px 12px', cursor: 'pointer' }} onClick={() => navigate('/connect-wallet')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 4</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Connect Wallet</p>
          </div>
          
          <div style={{ padding: '8px 12px', cursor: 'pointer' }} onClick={() => navigate('/assessment')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 5</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Complete Profile</p>
          </div>
        </div>

        {/* Exit Icon */}
        <button onClick={() => navigate('/')} style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          
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

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '24px', marginTop: '20px' }}>
            <button 
              onClick={() => navigate('/form')}
              style={{ background: 'transparent', color: '#6B7280', border: '1px solid #D1D5DB', borderRadius: '30px', padding: '12px 28px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
            >
              Back
            </button>

            <button 
              onClick={() => navigate('/skills')} 
              style={{ background: '#3741D4', color: '#fff', border: 'none', borderRadius: '30px', padding: '14px 40px', fontFamily: "'Poppins', sans-serif", fontSize: '15px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}
            >
              Next Step: Choose Skill →
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
  borderRadius: '8px',
  border: '1px solid #E0E2FE',
  background: '#fff',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '13px',
  color: '#050A5F',
  outline: 'none',
  transition: 'border-color 0.2s',
};

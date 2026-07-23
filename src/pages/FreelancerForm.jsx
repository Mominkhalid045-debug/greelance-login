import { useNavigate } from 'react-router-dom';

export default function FreelancerForm() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header / Progress Bar */}
      <div style={{ display: 'flex', background: '#fff', padding: '16px 32px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps Header Bar */}
        <div style={{ display: 'flex', flex: 1, gap: '32px' }}>
          <div style={{ background: '#E0E7FF', padding: '8px 20px', borderRadius: '8px', borderLeft: '4px solid #3741D4', cursor: 'pointer' }} onClick={() => navigate('/form')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 1</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#3741D4', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Upload Resume</p>
          </div>
          
          <div style={{ padding: '8px 12px', cursor: 'pointer' }} onClick={() => navigate('/setup-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 2</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Setup Profile</p>
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
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        
        {/* Upload Container */}
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          background: '#F9FAFD', 
          border: '2px dashed #C7D2FE', 
          borderRadius: '24px', 
          padding: '60px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
          {/* Upload Graphic */}
          <div style={{ 
            width: '240px', 
            height: '160px', 
            background: 'radial-gradient(circle, rgba(55,65,212,0.1) 0%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px'
          }}>
            <div style={{ width: '160px', height: '100px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', padding: '12px' }}>
               <div style={{ width: '40%', height: '100%', background: '#1F2937', borderRadius: '6px' }} />
               <div style={{ width: '60%', height: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '12px', gap: '8px' }}>
                 <div style={{ height: '6px', width: '80%', background: '#E5E7EB', borderRadius: '3px' }} />
                 <div style={{ height: '6px', width: '60%', background: '#E5E7EB', borderRadius: '3px' }} />
                 <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    <div style={{ width: '24px', height: '16px', background: '#4ADE80', borderRadius: '4px' }} />
                    <div style={{ width: '24px', height: '16px', background: '#818CF8', borderRadius: '4px' }} />
                 </div>
               </div>
            </div>
          </div>

          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', marginBottom: '32px' }}>
            *You can upload any PDF or Word File
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => navigate('/setup-profile')}
              style={{
                background: '#3741D4',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                padding: '14px 32px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(55,65,212,0.3)'
              }}
            >
              Upload Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
            </button>

            <button 
              onClick={() => navigate('/setup-profile')}
              style={{
                background: 'transparent',
                color: '#3741D4',
                border: '1.5px solid #3741D4',
                borderRadius: '30px',
                padding: '14px 32px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Create Manually
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

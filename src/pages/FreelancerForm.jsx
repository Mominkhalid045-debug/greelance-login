import { useNavigate } from 'react-router-dom';

export default function FreelancerForm() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Top Header / Progress Bar */}
      <div style={{ flexShrink: 0, display: 'flex', background: '#fff', padding: '0', alignItems: 'stretch', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
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
            const isActive = step.num === 1;
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
        <button onClick={() => navigate('/setup-profile')} style={{ width: '56px', background: '#fff', border: 'none', borderLeft: '1px solid #E5E7EB', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        
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

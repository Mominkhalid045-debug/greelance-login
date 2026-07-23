import { useNavigate } from 'react-router-dom';

const F = "'Lexend', sans-serif";

function StepHeader({ activeStep, navigate }) {
  const steps = [
    { num: 1, label: 'Upload Resume', path: '/form' },
    { num: 2, label: 'Setup Profile', path: '/setup-profile' },
    { num: 3, label: 'Choose Skill', path: '/skills' },
    { num: 4, label: 'Connect Wallet', path: '/connect-wallet' },
    { num: 5, label: 'Complete Profile', path: '/complete-profile' },
  ];

  return (
    <div style={{ flexShrink: 0, display: 'flex', background: '#fff', borderBottom: '1px solid #E0E2FE', height: '85.5px', zIndex: 10 }}>
      {/* Back Button */}
      <button
        onClick={() => {
          const prev = steps.find(s => s.num === activeStep - 1);
          navigate(prev ? prev.path : '/');
        }}
        style={{ width: '88.5px', height: '85.5px', background: '#22D3A6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Step Tabs */}
      <div className="step-header-nav" style={{ display: 'flex', flex: 1, overflowX: 'auto' }}>
        {steps.map(step => {
          const isActive = step.num === activeStep;
          return (
            <div
              key={step.num}
              onClick={() => navigate(step.path)}
              className="step-tab-item"
              style={{
                width: '236.25px',
                height: '85.5px',
                padding: '7.5px 31.5px',
                cursor: 'pointer',
                background: isActive ? '#E6EFFF' : '#fff',
                borderRight: '1px solid rgba(34,211,166,0.1)',
                boxShadow: isActive ? 'inset 0 -2.25px 0 0 #3038BD' : 'inset 0 -2.25px 0 0 #22D3A6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              <p style={{ margin: 0, fontSize: '12px', color: isActive ? '#3038BD' : '#4ADF86', fontWeight: 400, fontFamily: F, letterSpacing: '0.15px', lineHeight: '18px' }}>Step {step.num}</p>
              <p style={{ margin: 0, fontSize: '12px', color: '#050A5F', fontWeight: 500, fontFamily: F, lineHeight: '22.5px' }}>{step.label}</p>
            </div>
          );
        })}
      </div>

      {/* Exit / Forward Arrow */}
      <div style={{ width: '170px', minWidth: '80px', height: '85.5px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <button
          onClick={() => {
            const next = steps.find(s => s.num === activeStep + 1);
            navigate(next ? next.path : '/dashboard');
          }}
          style={{
            width: '39px', height: '39px', borderRadius: '71px',
            background: '#fff', border: '1px solid #E0E2FE',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(5,10,95,0.05)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function FreelancerForm() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={1} navigate={navigate} />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '40px' }}>
        
        {/* Resume Upload Container */}
        <div style={{ 
          width: '861.75px', 
          maxWidth: '100%',
          height: '358.5px', 
          background: '#F3F7FF', 
          border: '1.5px dashed #3038BD', 
          borderRadius: '12px', 
          padding: '42px 25.5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '41.25px',
          margin: '15px auto',
        }}>
          
          {/* Upload Graphic */}
          <div style={{ width: '184.45px', height: '171.5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '160px', height: '120px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', padding: '12px' }}>
               <div style={{ width: '40%', height: '100%', background: '#1F2937', borderRadius: '6px' }} />
               <div style={{ width: '60%', height: '100%', display: 'flex', flexDirection: 'column', paddingLeft: '12px', gap: '8px' }}>
                 <div style={{ height: '6px', width: '80%', background: '#E5E7EB', borderRadius: '3px' }} />
                 <div style={{ height: '6px', width: '60%', background: '#E5E7EB', borderRadius: '3px' }} />
                 <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    <div style={{ width: '24px', height: '16px', background: '#4ADF86', borderRadius: '4px' }} />
                    <div style={{ width: '24px', height: '16px', background: '#818CF8', borderRadius: '4px' }} />
                 </div>
               </div>
            </div>
          </div>

          <p style={{ fontFamily: F, fontSize: '12px', color: '#050A5F', opacity: 0.8 }}>
            <span style={{ color: '#22D3A6', fontWeight: 700 }}>*</span>You can upload any PDF or Word File
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '330px', height: '37.5px' }}>
            <button 
              onClick={() => navigate('/setup-profile')}
              style={{
                background: '#3038BD', color: '#fff', border: 'none',
                borderRadius: '16.88px', width: '167px', height: '37.6px',
                fontFamily: F, fontSize: '11px', fontWeight: 500,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
              }}
            >
              Upload Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
              </svg>
            </button>

            <button 
              onClick={() => navigate('/setup-profile')}
              style={{
                background: '#E6EFFF', color: '#3038BD',
                border: '1.13px solid #3038BD', borderRadius: '16.88px',
                width: '149px', height: '37.6px',
                fontFamily: F, fontSize: '11px', fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
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

export { StepHeader, F };

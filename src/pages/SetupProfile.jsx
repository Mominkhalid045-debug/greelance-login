import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

export default function SetupProfile() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={2} navigate={navigate} />

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '15px' }}>
        
        {/* Personal Info Grid */}
        <div style={{ width: '100%', maxWidth: '1320px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '15px' }}>
            <FormField label="First Name" defaultValue="Alex" />
            <FormField label="Last Name" defaultValue="Morgan" />
            <FormField label="Country of Residence" type="select" options={['United States','United Kingdom','Canada']} />
            <FormField label="Country of Citizenship" type="select" options={['United States','United Kingdom','Canada']} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 500, color: '#050A5F' }}>Phone Number</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <select style={{ ...selectStyle, width: '90px' }}><option>+1</option></select>
                <input type="text" defaultValue="201 555 0123" style={{ ...inputFieldStyle, flex: 1 }} />
              </div>
            </div>
            <FormField label="English Proficiency" type="select" options={['Fluent','Native','Conversational','Basic']} />
            <FormField label="Notice Period" type="select" options={['Immediate','2 Weeks','One Month','2 Months']} />
            <FormField label="Preferred Job Commitment" type="select" options={['Full Time','Part Time','Contract']} />
            <FormField label="Hourly Rate ($)" defaultValue="$ 45.00" />
            <FormField label="Time Zone" type="select" options={['GMT-5 New York','GMT+0 London','GMT+5 Islamabad']} />
          </div>
        </div>

        {/* Education Section */}
        <div style={{ width: '100%', maxWidth: '1320px', marginTop: '32px', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid #E0E2FE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: F, fontSize: '16px', fontWeight: 700, color: '#050A5F' }}>Education</h3>
          <button style={{ background: '#4ADF86', color: '#fff', border: 'none', borderRadius: '15px', padding: '4px 10.5px', fontFamily: F, fontSize: '9px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5.25px' }}>+ Add Education</button>
        </div>

        {/* Experience Section */}
        <div style={{ width: '100%', maxWidth: '1320px', marginTop: '16px', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid #E0E2FE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: F, fontSize: '16px', fontWeight: 700, color: '#050A5F' }}>Experience</h3>
          <button style={{ background: '#4ADF86', color: '#fff', border: 'none', borderRadius: '15px', padding: '4px 10.5px', fontFamily: F, fontSize: '9px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5.25px' }}>+ Add Experience</button>
        </div>

        {/* Next Button */}
        <div style={{ width: '100%', maxWidth: '1320px', display: 'flex', justifyContent: 'flex-end', marginTop: '24px', marginBottom: '40px' }}>
          <button onClick={() => navigate('/skills')} style={{ background: '#ADAFDD', color: '#fff', border: '0.28px solid #ADAFDD', borderRadius: '16.88px', width: '99px', height: '27.6px', fontFamily: F, fontSize: '9px', fontWeight: 500, cursor: 'pointer' }}>
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

function FormField({ label, defaultValue, type = 'text', options = [] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 500, color: '#050A5F' }}>{label}</label>
      {type === 'select' ? (
        <select style={selectStyle}>
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input type="text" defaultValue={defaultValue} style={inputFieldStyle} />
      )}
    </div>
  );
}

const inputFieldStyle = {
  width: '100%', height: '39px', padding: '0 15px',
  borderRadius: '45px', border: '0.75px solid #D2D4FF',
  background: '#F3F7FF', fontFamily: F, fontSize: '12px', color: '#050A5F',
  outline: 'none', boxSizing: 'border-box',
};

const selectStyle = {
  ...inputFieldStyle,
  appearance: 'none', cursor: 'pointer',
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5' stroke='%23000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
  backgroundPosition: 'right 12px center',
  backgroundRepeat: 'no-repeat',
  paddingRight: '30px',
};

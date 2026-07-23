import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

export default function SetupProfile() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', minHeight: '100vh', background: '#F7FAFF', display: 'flex', flexDirection: 'column' }}>
      <StepHeader activeStep={2} navigate={navigate} />

      {/* Main Form Content */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', marginTop: '30px' }}>
        
        <div style={{ width: '100%', maxWidth: '1320px' }}>
          
          {/* Section Heading */}
          <h2 style={{ fontFamily: F, fontSize: '18px', fontWeight: 700, color: '#050A5F', marginBottom: '20px' }}>
            Personal Information<span style={{ color: '#EF4444' }}>*</span>
          </h2>

          {/* 4-Column Personal Info Grid */}
          <div className="personal-info-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
            
            {/* Row 1 */}
            <FormField label="First Name" defaultValue="Momin" />
            <FormField label="Last Name" defaultValue="Khalid" />
            <FormField label="Country of Residence" type="select" placeholder="Select" options={['United States', 'United Kingdom', 'Canada', 'Pakistan', 'Germany']} />
            <FormField label="Country of Citizenship" type="select" placeholder="Select" options={['United States', 'United Kingdom', 'Canada', 'Pakistan', 'Germany']} />

            {/* Row 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F' }}>Phone Number</label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#F3F7FF', border: '0.75px solid #E0E2FE', borderRadius: '45px', height: '39px', padding: '0 12px', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>🇺🇸</span>
                <span style={{ fontSize: '10px', color: '#6B7280' }}>∨</span>
                <input
                  type="text"
                  defaultValue="+1 201 555 -0123"
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontFamily: F, fontSize: '12px', color: '#9CA3AF', flex: 1 }}
                />
              </div>
            </div>

            <FormField label="English Proficiency" type="select" placeholder="Select" options={['Native / Bilingual', 'Fluent', 'Conversational', 'Basic']} />
            <FormField label="Notice period to resign from current job" type="select" placeholder="Select" options={['Immediate', '2 Weeks', '1 Month', '2 Months']} />
            <FormField label="Which type of job commitment do you prefer?" type="select" placeholder="Select" options={['Full Time', 'Part Time', 'Contract / Project']} />

          </div>

          {/* Row 3: Hourly Rate (Single column under Row 2) */}
          <div style={{ width: '24%', minWidth: '260px', marginBottom: '36px' }}>
            <FormField label="What's your preferred hourly rate in U.S. dollars?" defaultValue="" placeholder="" />
          </div>

          {/* Education Sub-section */}
          <SubSection title="Education" buttonLabel="Add Education" />

          {/* Experience Sub-section */}
          <SubSection title="Experience" buttonLabel="Add Experience" />

          {/* Certifications Sub-section */}
          <SubSection title="Certifications" buttonLabel="Add Certification" />

          {/* Portfolio Sub-section */}
          <SubSection title="Portfolio" buttonLabel="Add Portfolio" />

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', marginBottom: '40px' }}>
            <button
              onClick={() => navigate('/skills')}
              style={{
                background: '#3038BD',
                color: '#fff',
                border: 'none',
                borderRadius: '16.88px',
                width: '99px',
                height: '27.6px',
                fontFamily: F,
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(48,56,189,0.25)',
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

/* Helper Component: Form Input / Select Field */
function FormField({ label, defaultValue, type = 'text', placeholder = '', options = [] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontFamily: F, fontSize: '11.5px', fontWeight: 600, color: '#050A5F', lineHeight: '15px' }}>
        {label}
      </label>
      {type === 'select' ? (
        <select style={selectStyle} defaultValue="">
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input type="text" defaultValue={defaultValue} placeholder={placeholder} style={inputFieldStyle} />
      )}
    </div>
  );
}

/* Helper Component: Sub-Section Header with Mint Green Add Button */
function SubSection({ title, buttonLabel }) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '14px',
        marginBottom: '20px',
        borderBottom: '1px solid #E0E2FE',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h3 style={{ fontFamily: F, fontSize: '16px', fontWeight: 700, color: '#050A5F', margin: 0 }}>
        {title}
      </h3>
      <button
        type="button"
        style={{
          width: 'fit-content',
          background: '#22D3A6',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '18px',
          padding: '5px 14px',
          fontFamily: F,
          fontSize: '10px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 6px rgba(34,211,166,0.3)',
        }}
      >
        <span style={{
          width: '14px', height: '14px', borderRadius: '50%',
          border: '1.2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '10px', fontWeight: 700, lineHeight: 1,
        }}>+</span>
        {buttonLabel}
      </button>
    </div>
  );
}

const inputFieldStyle = {
  width: '100%',
  height: '39px',
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

const selectStyle = {
  ...inputFieldStyle,
  appearance: 'none',
  cursor: 'pointer',
  color: '#9CA3AF',
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5' stroke='%23050A5F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
  backgroundPosition: 'right 14px center',
  backgroundRepeat: 'no-repeat',
  paddingRight: '32px',
};

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const YEARS = Array.from({ length: 30 }, (_, i) => (2026 - i).toString());

export default function SetupProfile() {
  const navigate = useNavigate();

  // Personal Information State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryResidence: '',
    countryCitizenship: '',
    countryCode: '+1',
    phoneNumber: '201 555-0123',
    englishProficiency: '',
    noticePeriod: '',
    commitment: '',
    hourlyRate: '',
    timeZone: '',
  });

  // Section Inline Cards visibility (default false so user clicks + Add button to show details)
  const [showEdu, setShowEdu] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showCert, setShowCert] = useState(false);
  const [showPort, setShowPort] = useState(false);

  // Education Values
  const [eduData, setEduData] = useState({
    degree: 'Bachelor in UX Designing',
    university: 'University Of Punjab College of Art & Design',
    startMonth: 'September',
    startYear: '2018',
    endMonth: 'September',
    endYear: '2018',
  });

  // Experience Values
  const [expData, setExpData] = useState({
    position: 'Network Support Engineer',
    workplace: 'Central Texas College',
    startMonth: 'September',
    startYear: '2013',
    endMonth: 'September',
    endYear: '2019',
    currentlyWorking: false,
    description: '',
  });

  // Certification Values
  const [certData, setCertData] = useState({
    name: 'Certificate of Appreciation',
    link: 'http://dbfceucgjkndckjwchouvhjcuo',
    file: null,
  });

  // Portfolio Values
  const [portData, setPortData] = useState({
    title: '',
    link: '',
    file: null,
    description: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const fullProfileData = {
      ...formData,
      education: showEdu ? [eduData] : [],
      experience: showExp ? [expData] : [],
      certifications: showCert ? [certData] : [],
      portfolio: showPort ? [portData] : [],
    };
    localStorage.setItem('userProfileData', JSON.stringify(fullProfileData));
    navigate('/skills');
  };

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#F7FAFF',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Floating Step Header Navigation */}
      <StepHeader activeStep={2} navigate={navigate} />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '32px 20px 60px 20px',
        }}
      >
        {/* Main White Card Container */}
        <div
          style={{
            width: '1320px',
            maxWidth: '96%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(5, 10, 95, 0.03)',
            padding: '48px',
            boxSizing: 'border-box',
            marginBottom: '32px',
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Page Title & Subtitle */}
            <h1
              style={{
                fontFamily: F,
                fontSize: '32px',
                fontWeight: 700,
                color: '#050A5F',
                textAlign: 'center',
                margin: '0 0 8px 0',
              }}
            >
              Setup Profile
            </h1>
            <p
              style={{
                fontFamily: F,
                fontSize: '13px',
                fontWeight: 400,
                color: '#050A5F',
                opacity: 0.8,
                textAlign: 'center',
                margin: '0 0 36px 0',
              }}
            >
              Enter your personal details to display on your freelancer card.
            </p>

            {/* Section 1: Personal Information* */}
            <h2
              style={{
                fontFamily: F,
                fontSize: '18px',
                fontWeight: 700,
                color: '#050A5F',
                margin: '0 0 24px 0',
              }}
            >
              Personal Information<span style={{ color: '#EF4444' }}>*</span>
            </h2>

            {/* 4-Column Inputs Grid with 282.75px column width, 58.5px height fields */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(240px, 282.75px))',
                gap: '24px 20px',
                marginBottom: '36px',
              }}
            >
              {/* Row 1 */}
              <FormField
                label="First Name"
                required
                placeholder="e.g. Ziafat"
                value={formData.firstName}
                onChange={(v) => handleChange('firstName', v)}
              />

              <FormField
                label="Last Name"
                required
                placeholder="e.g. Raool"
                value={formData.lastName}
                onChange={(v) => handleChange('lastName', v)}
              />

              <FormField
                label="Country of Residence"
                type="select"
                placeholder="Select"
                options={['United States', 'United Kingdom', 'Canada', 'Pakistan', 'Germany', 'Australia', 'UAE']}
                value={formData.countryResidence}
                onChange={(v) => handleChange('countryResidence', v)}
              />

              <FormField
                label="Country of Citizenship"
                type="select"
                placeholder="Select"
                options={['United States', 'United Kingdom', 'Canada', 'Pakistan', 'Germany', 'Australia', 'UAE']}
                value={formData.countryCitizenship}
                onChange={(v) => handleChange('countryCitizenship', v)}
              />

              {/* Row 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '58.5px', justifyContent: 'space-between' }}>
                <label style={labelStyle}>Phone Number</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ position: 'relative', width: '90px' }}>
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleChange('countryCode', e.target.value)}
                      style={{
                        width: '100%',
                        height: '36px',
                        borderRadius: '45px',
                        border: '0.67px solid #D2D4FF',
                        background: '#F3F7FF',
                        fontFamily: F,
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#050A5F',
                        padding: '0 8px 0 14px',
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                      }}
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
                    <div style={chevronStyle}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder="201 555-0123"
                    style={{ ...inputStyle, flex: 1 }}
                  />
                </div>
              </div>

              <FormField
                label="English Proficiency"
                type="select"
                placeholder="Select"
                options={['Native / Bilingual', 'Fluent', 'Conversational', 'Basic']}
                value={formData.englishProficiency}
                onChange={(v) => handleChange('englishProficiency', v)}
              />

              <FormField
                label="Notice period to resign from current job"
                type="select"
                placeholder="Select"
                options={['Immediate', '2 Weeks', '1 Month', '2 Months', '3 Months']}
                value={formData.noticePeriod}
                onChange={(v) => handleChange('noticePeriod', v)}
              />

              <FormField
                label="Which type of job commitment do you prefer?"
                type="select"
                placeholder="Select"
                options={['Full Time (40 hrs/wk)', 'Part Time (20 hrs/wk)', 'Contract / Project Basis']}
                value={formData.commitment}
                onChange={(v) => handleChange('commitment', v)}
              />

              {/* Row 3 */}
              <FormField
                label="What's your preferred hourly rate in U.S. dollars?"
                placeholder="e.g. 45"
                value={formData.hourlyRate}
                onChange={(v) => handleChange('hourlyRate', v)}
              />

              <FormField
                label="Time Zone"
                type="select"
                placeholder="Select"
                options={['(GMT-05:00) Eastern Time', '(GMT-08:00) Pacific Time', '(GMT+00:00) UTC', '(GMT+05:00) PKT', '(GMT+01:00) CET']}
                value={formData.timeZone}
                onChange={(v) => handleChange('timeZone', v)}
              />
            </div>

            {/* =====================================
                SECTION 2: EDUCATION (Figma card: 1316.25px x 110.25px, #E6EFFF, radius 7.5px)
               ===================================== */}
            <SectionHeader title="Education" buttonText="Add Education" onAdd={() => setShowEdu((prev) => !prev)} />
            {showEdu && (
              <FigmaCard onClose={() => setShowEdu(false)} minHeight="110.25px">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
                  <FormField
                    label="Degree"
                    type="select"
                    placeholder="Bachelor in UX Designing"
                    options={['Bachelor in UX Designing', 'BS Computer Science', 'MS Software Engineering', 'Diploma in Graphic Design']}
                    value={eduData.degree}
                    onChange={(v) => setEduData({ ...eduData, degree: v })}
                  />

                  <FormField
                    label="University"
                    type="select"
                    placeholder="University Of Punjab College of Art & Design"
                    options={['University Of Punjab College of Art & Design', 'Harvard University', 'MIT', 'Stanford', 'NUST']}
                    value={eduData.university}
                    onChange={(v) => setEduData({ ...eduData, university: v })}
                  />

                  <DateRangeGroup
                    label="Starting from"
                    month={eduData.startMonth}
                    year={eduData.startYear}
                    onMonthChange={(v) => setEduData({ ...eduData, startMonth: v })}
                    onYearChange={(v) => setEduData({ ...eduData, startYear: v })}
                  />

                  <DateRangeGroup
                    label="Ending"
                    month={eduData.endMonth}
                    year={eduData.endYear}
                    onMonthChange={(v) => setEduData({ ...eduData, endMonth: v })}
                    onYearChange={(v) => setEduData({ ...eduData, endYear: v })}
                  />
                </div>
              </FigmaCard>
            )}

            {/* =====================================
                SECTION 3: EXPERIENCE (Figma card: 1316.25px x 264px, #E6EFFF, radius 7.5px)
               ===================================== */}
            <SectionHeader title="Experience" buttonText="Add Experience" onAdd={() => setShowExp((prev) => !prev)} />
            {showExp && (
              <FigmaCard onClose={() => setShowExp(false)} minHeight="264px">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <FormField
                    label="Position"
                    type="select"
                    placeholder="Network Support Engineer"
                    options={['Network Support Engineer', 'Senior UX Architect', 'Full Stack Developer', 'Product Designer']}
                    value={expData.position}
                    onChange={(v) => setExpData({ ...expData, position: v })}
                  />

                  <FormField
                    label="Work Place"
                    type="select"
                    placeholder="Central Texas College"
                    options={['Central Texas College', 'Google', 'Microsoft', 'Freelance', 'Meta']}
                    value={expData.workplace}
                    onChange={(v) => setExpData({ ...expData, workplace: v })}
                  />

                  <DateRangeGroup
                    label="Starting from"
                    month={expData.startMonth}
                    year={expData.startYear}
                    onMonthChange={(v) => setExpData({ ...expData, startMonth: v })}
                    onYearChange={(v) => setExpData({ ...expData, startYear: v })}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '58.5px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label style={labelStyle}>Ending</label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontFamily: F, fontSize: '11.5px', color: '#050A5F', fontWeight: 600 }}>
                        <input
                          type="checkbox"
                          checked={expData.currentlyWorking}
                          onChange={(e) => setExpData({ ...expData, currentlyWorking: e.target.checked })}
                          style={{ accentColor: '#22C55E' }}
                        />
                        Currently Working
                      </label>
                    </div>
                    {!expData.currentlyWorking ? (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <SelectInput value={expData.endMonth} options={MONTHS} onChange={(v) => setExpData({ ...expData, endMonth: v })} />
                        <SelectInput value={expData.endYear} options={YEARS} onChange={(v) => setExpData({ ...expData, endYear: v })} />
                      </div>
                    ) : (
                      <div style={{ height: '36px', display: 'flex', alignItems: 'center', paddingLeft: '12px', fontFamily: F, fontSize: '13px', color: '#22C55E', fontWeight: 600 }}>
                        Present
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    rows={3}
                    value={expData.description}
                    onChange={(e) => setExpData({ ...expData, description: e.target.value })}
                    placeholder="Type your comments..."
                    style={textareaStyle}
                  />
                </div>
              </FigmaCard>
            )}

            {/* =====================================
                SECTION 4: CERTIFICATIONS (Figma card: 1320.6px x 230.25px, #E6EFFF, radius 7.5px)
               ===================================== */}
            <SectionHeader title="Certifications" buttonText="Add Certification" onAdd={() => setShowCert((prev) => !prev)} />
            {showCert && (
              <FigmaCard onClose={() => setShowCert(false)} minHeight="230.25px">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1fr', gap: '20px', alignItems: 'flex-end' }}>
                  <FormField
                    label="Certificate name"
                    placeholder="Certificate of Appreciation"
                    value={certData.name}
                    onChange={(v) => setCertData({ ...certData, name: v })}
                  />

                  <FormField
                    label="Certificate Link"
                    placeholder="http://dbfceucgjkndckjwchouvhjcuo"
                    value={certData.link}
                    onChange={(v) => setCertData({ ...certData, link: v })}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '58.5px', justifyContent: 'flex-end' }}>
                    <FileUploadButton label="Upload Certificate" onFileSelect={(f) => setCertData({ ...certData, file: f })} />
                  </div>
                </div>
              </FigmaCard>
            )}

            {/* =====================================
                SECTION 5: PORTFOLIO (Figma card: 1321.1px x 297px, #E6EFFF, radius 7.5px)
               ===================================== */}
            <SectionHeader title="Portfolio" buttonText="Add Portfolio" onAdd={() => setShowPort((prev) => !prev)} />
            {showPort && (
              <FigmaCard onClose={() => setShowPort(false)} minHeight="297px">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1fr', gap: '20px', alignItems: 'flex-end', marginBottom: '16px' }}>
                  <FormField
                    label="Title"
                    placeholder="Title"
                    value={portData.title}
                    onChange={(v) => setPortData({ ...portData, title: v })}
                  />

                  <FormField
                    label="Portfolio Link"
                    placeholder="Portfolio Link"
                    value={portData.link}
                    onChange={(v) => setPortData({ ...portData, link: v })}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <FileUploadButton label="Upload Portfolio" onFileSelect={(f) => setPortData({ ...portData, file: f })} />
                    <span style={{ fontFamily: F, fontSize: '10px', color: '#9CA3AF' }}>*You can upload any PDF, TXT, or DOC file</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    rows={3}
                    value={portData.description}
                    onChange={(e) => setPortData({ ...portData, description: e.target.value })}
                    placeholder="Type your comments..."
                    style={textareaStyle}
                  />
                </div>
              </FigmaCard>
            )}

            {/* Bottom Right ONLY Next Button */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginTop: '40px',
              }}
            >
              <button
                type="submit"
                style={{
                  background: '#3038BD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '16.875px',
                  width: '99px',
                  height: '28px',
                  fontFamily: F,
                  fontSize: '11px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  boxShadow: 'rgba(48, 56, 189, 0.25) 0px 4px 12px 0px',
                  transition: 'background 0.2s ease',
                  marginLeft: 'auto',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#252BA3')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#3038BD')}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

/* Helper SectionHeader Component with Green Add Button (width: 105.38px, height: 24px, #4ADF86) */
function SectionHeader({ title, buttonText, onAdd }) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '14px',
        marginBottom: '16px',
        marginTop: '32px',
        borderBottom: '0.66px solid #E0E2FE',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h3 style={{ fontFamily: F, fontSize: '18px', fontWeight: 700, color: '#050A5F', margin: 0 }}>
        {title}
      </h3>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onAdd();
        }}
        style={{
          background: '#4ADF86',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '12px',
          width: '105.38px',
          height: '24px',
          fontFamily: F,
          fontSize: '10px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          boxShadow: '0 2px 6px rgba(74, 223, 134, 0.2)',
          transition: 'all 0.2s ease',
          boxSizing: 'border-box',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#38C972')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#4ADF86')}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

/* Helper Figma Card Container (background: #E6EFFF, border-radius: 7.5px) */
function FigmaCard({ onClose, children, minHeight = 'auto' }) {
  return (
    <div
      style={{
        background: '#E6EFFF',
        border: '1px solid #D6E4FF',
        borderRadius: '7.5px',
        padding: '24px',
        marginBottom: '20px',
        position: 'relative',
        minHeight: minHeight,
        boxSizing: 'border-box',
      }}
    >
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          color: '#6B7280',
          fontSize: '16px',
          fontWeight: 700,
          cursor: 'pointer',
        }}
        title="Remove"
      >
        ✕
      </button>
      {children}
    </div>
  );
}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          color: '#6B7280',
          fontSize: '16px',
          fontWeight: 700,
          cursor: 'pointer',
        }}
        title="Remove"
      >
        ✕
      </button>
      {children}
    </div>
  );
}

/* Helper Date Range Selector (Month + Year) */
function DateRangeGroup({ label, month, year, onMonthChange, onYearChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={labelStyle}>{label}</label>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <SelectInput value={month} options={MONTHS} onChange={onMonthChange} />
        <SelectInput value={year} options={YEARS} onChange={onYearChange} />
      </div>
    </div>
  );
}

/* Helper File Upload Button Component */
function FileUploadButton({ label, onFileSelect }) {
  const [fileName, setFileName] = useState('');
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        height: '42px',
        background: '#FFFFFF',
        border: '1px solid #D6E4FF',
        borderRadius: '21px',
        padding: '0 16px',
        cursor: 'pointer',
        fontFamily: F,
        fontSize: '12.5px',
        fontWeight: 600,
        color: '#050A5F',
        boxSizing: 'border-box',
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {fileName || label}
      </span>
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFileName(e.target.files[0].name);
            onFileSelect(e.target.files[0]);
          }
        }}
      />
    </label>
  );
}

/* Helper FormField Component */
function FormField({ label, required = false, type = 'text', placeholder = '', options = [], value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: '#EF4444', marginLeft: '3px' }}>*</span>}
      </label>

      {type === 'select' ? (
        <SelectInput value={value} placeholder={placeholder} options={options} onChange={onChange} />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
    </div>
  );
}

/* Helper Select Input Component with Chevron */
function SelectInput({ value, placeholder = 'Select', options = [], onChange }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select value={value || ''} onChange={(e) => onChange(e.target.value)} style={selectStyle}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div style={chevronStyle}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

const labelStyle = {
  fontFamily: F,
  fontSize: '12.5px',
  fontWeight: 600,
  color: '#050A5F',
  lineHeight: '16px',
};

const inputStyle = {
  width: '100%',
  height: '39px',
  padding: '0 20px',
  borderRadius: '45px',
  border: '0.67px solid #D2D4FF',
  background: '#F3F7FF',
  fontFamily: F,
  fontSize: '12px',
  color: '#050A5F',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'all 0.2s ease',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  paddingRight: '34px',
};

const textareaStyle = {
  width: '100%',
  borderRadius: '16px',
  border: '1px solid #D6E4FF',
  background: '#FFFFFF',
  padding: '14px 18px',
  fontFamily: F,
  fontSize: '13px',
  color: '#050A5F',
  outline: 'none',
  resize: 'vertical',
  boxSizing: 'border-box',
};

const chevronStyle = {
  position: 'absolute',
  right: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
};

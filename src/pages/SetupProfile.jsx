import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

const YEARS = Array.from({ length: 25 }, (_, i) => (2026 - i).toString());

export default function SetupProfile() {
  const navigate = useNavigate();

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

  // Section Inline Form Visibility
  const [showEduForm, setShowEduForm] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);
  const [showCertForm, setShowCertForm] = useState(false);
  const [showPortForm, setShowPortForm] = useState(false);

  // Dynamic Item Lists
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [certificationsList, setCertificationsList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  // Form Inputs for Adding Items
  const [eduInput, setEduInput] = useState({ degree: '', university: '', startYear: '2020', endYear: '2024' });
  const [expInput, setExpInput] = useState({ position: '', workplace: '', currentlyWorking: false, startYear: '2021', endYear: '2023', description: '' });
  const [certInput, setCertInput] = useState({ name: '', link: '' });
  const [portInput, setPortInput] = useState({ title: '', link: '', description: '' });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Add Handlers
  const handleAddEducation = (e) => {
    if (e) e.preventDefault();
    if (!eduInput.degree && !eduInput.university) return;
    setEducationList((prev) => [...prev, { id: Date.now(), ...eduInput }]);
    setEduInput({ degree: '', university: '', startYear: '2020', endYear: '2024' });
    setShowEduForm(false);
  };

  const handleAddExperience = (e) => {
    if (e) e.preventDefault();
    if (!expInput.position && !expInput.workplace) return;
    setExperienceList((prev) => [...prev, { id: Date.now(), ...expInput }]);
    setExpInput({ position: '', workplace: '', currentlyWorking: false, startYear: '2021', endYear: '2023', description: '' });
    setShowExpForm(false);
  };

  const handleAddCertification = (e) => {
    if (e) e.preventDefault();
    if (!certInput.name) return;
    setCertificationsList((prev) => [...prev, { id: Date.now(), ...certInput }]);
    setCertInput({ name: '', link: '' });
    setShowCertForm(false);
  };

  const handleAddPortfolio = (e) => {
    if (e) e.preventDefault();
    if (!portInput.title) return;
    setPortfolioList((prev) => [...prev, { id: Date.now(), ...portInput }]);
    setPortInput({ title: '', link: '', description: '' });
    setShowPortForm(false);
  };

  // Remove Handlers
  const removeEdu = (id) => setEducationList((prev) => prev.filter((i) => i.id !== id));
  const removeExp = (id) => setExperienceList((prev) => prev.filter((i) => i.id !== id));
  const removeCert = (id) => setCertificationsList((prev) => prev.filter((i) => i.id !== id));
  const removePort = (id) => setPortfolioList((prev) => prev.filter((i) => i.id !== id));

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const fullProfileData = {
      ...formData,
      education: educationList,
      experience: experienceList,
      certifications: certificationsList,
      portfolio: portfolioList,
    };
    localStorage.setItem('userProfileData', JSON.stringify(fullProfileData));
    navigate('/skills');
  };

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#F4F7FC',
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
            width: '1140px',
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
            {/* Centered Page Header Title & Subtitle */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h1
                style={{
                  fontFamily: F,
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#050A5F',
                  margin: '0 0 8px 0',
                }}
              >
                Setup Profile
              </h1>
              <p
                style={{
                  fontFamily: F,
                  fontSize: '13.5px',
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                Enter your personal details to display on your freelancer card.
              </p>
            </div>

            {/* Section 1: Personal Information* */}
            <h2
              style={{
                fontFamily: F,
                fontSize: '20px',
                fontWeight: 700,
                color: '#050A5F',
                margin: '0 0 24px 0',
              }}
            >
              Personal Information<span style={{ color: '#EF4444' }}>*</span>
            </h2>

            {/* 4-Column Inputs Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px 20px',
                marginBottom: '40px',
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={labelStyle}>Phone Number</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {/* Country Flag & Code Select */}
                  <div style={{ position: 'relative', width: '90px' }}>
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleChange('countryCode', e.target.value)}
                      style={{
                        width: '100%',
                        height: '42px',
                        borderRadius: '21px',
                        border: '1px solid #D6E4FF',
                        background: '#F0F4FF',
                        fontFamily: F,
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#050A5F',
                        padding: '0 8px 0 12px',
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
                SECTION 2: EDUCATION
               ===================================== */}
            <SectionRow
              title="Education"
              buttonText="+ Add Education"
              isOpen={showEduForm}
              onToggle={() => setShowEduForm(!showEduForm)}
            />
            {showEduForm && (
              <InlineCard title="Add Education" onSave={handleAddEducation} onCancel={() => setShowEduForm(false)}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField label="Degree" placeholder="e.g. Bachelor in Software Engineering" value={eduInput.degree} onChange={(v) => setEduInput({ ...eduInput, degree: v })} />
                  <FormField label="University" placeholder="e.g. University of Texas" value={eduInput.university} onChange={(v) => setEduInput({ ...eduInput, university: v })} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                  <div>
                    <label style={labelStyle}>Start Year</label>
                    <SelectInput value={eduInput.startYear} options={YEARS} onChange={(v) => setEduInput({ ...eduInput, startYear: v })} />
                  </div>
                  <div>
                    <label style={labelStyle}>End Year</label>
                    <SelectInput value={eduInput.endYear} options={YEARS} onChange={(v) => setEduInput({ ...eduInput, endYear: v })} />
                  </div>
                </div>
              </InlineCard>
            )}
            <ItemList items={educationList} renderTitle={(i) => i.degree || i.university} renderSub={(i) => `${i.university} (${i.startYear} - ${i.endYear})`} onRemove={removeEdu} />

            {/* =====================================
                SECTION 3: EXPERIENCE
               ===================================== */}
            <SectionRow
              title="Experience"
              buttonText="+ Add Experience"
              isOpen={showExpForm}
              onToggle={() => setShowExpForm(!showExpForm)}
            />
            {showExpForm && (
              <InlineCard title="Add Experience" onSave={handleAddExperience} onCancel={() => setShowExpForm(false)}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField label="Position" placeholder="e.g. Network Support Engineer" value={expInput.position} onChange={(v) => setExpInput({ ...expInput, position: v })} />
                  <FormField label="Workplace" placeholder="e.g. Central Texas College" value={expInput.workplace} onChange={(v) => setExpInput({ ...expInput, workplace: v })} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                  <label style={labelStyle}>Description</label>
                  <textarea
                    rows={2}
                    value={expInput.description}
                    onChange={(e) => setExpInput({ ...expInput, description: e.target.value })}
                    placeholder="Type details..."
                    style={textareaStyle}
                  />
                </div>
              </InlineCard>
            )}
            <ItemList items={experienceList} renderTitle={(i) => i.position || i.workplace} renderSub={(i) => `${i.workplace} (${i.startYear} - ${i.endYear})`} onRemove={removeExp} />

            {/* =====================================
                SECTION 4: CERTIFICATIONS
               ===================================== */}
            <SectionRow
              title="Certifications"
              buttonText="+ Add Certification"
              isOpen={showCertForm}
              onToggle={() => setShowCertForm(!showCertForm)}
            />
            {showCertForm && (
              <InlineCard title="Add Certification" onSave={handleAddCertification} onCancel={() => setShowCertForm(false)}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField label="Certificate Name" placeholder="e.g. AWS Certified Developer" value={certInput.name} onChange={(v) => setCertInput({ ...certInput, name: v })} />
                  <FormField label="Certificate Link" placeholder="https://..." value={certInput.link} onChange={(v) => setCertInput({ ...certInput, link: v })} />
                </div>
              </InlineCard>
            )}
            <ItemList items={certificationsList} renderTitle={(i) => i.name} renderSub={(i) => i.link} onRemove={removeCert} />

            {/* =====================================
                SECTION 5: PORTFOLIO
               ===================================== */}
            <SectionRow
              title="Portfolio"
              buttonText="+ Add Portfolio"
              isOpen={showPortForm}
              onToggle={() => setShowPortForm(!showPortForm)}
            />
            {showPortForm && (
              <InlineCard title="Add Portfolio" onSave={handleAddPortfolio} onCancel={() => setShowPortForm(false)}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField label="Title" placeholder="e.g. E-Commerce Redesign" value={portInput.title} onChange={(v) => setPortInput({ ...portInput, title: v })} />
                  <FormField label="Portfolio Link" placeholder="https://..." value={portInput.link} onChange={(v) => setPortInput({ ...portInput, link: v })} />
                </div>
              </InlineCard>
            )}
            <ItemList items={portfolioList} renderTitle={(i) => i.title} renderSub={(i) => i.link} onRemove={removePort} />

            {/* Bottom Right ONLY Next Button */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justify: 'flex-end',
                marginTop: '40px',
              }}
            >
              <button
                type="submit"
                style={{
                  background: '#2334CD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '20px',
                  width: '110px',
                  height: '40px',
                  fontFamily: F,
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1B2AB2')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2334CD')}
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

/* Helper SectionRow Component with Right-aligned Green Button and Bottom Line */
function SectionRow({ title, buttonText, isOpen, onToggle }) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '14px',
        marginBottom: '14px',
        marginTop: '28px',
        borderBottom: '1px solid #E5E7EB',
        display: 'flex',
        justify: 'space-between',
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
          onToggle();
        }}
        style={{
          background: '#22C55E',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '20px',
          padding: '8px 18px',
          fontFamily: F,
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 8px rgba(34, 197, 94, 0.2)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#16A34A')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}
      >
        <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1 }}>+</span>
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

/* Helper InlineCard Form Component */
function InlineCard({ title, onSave, onCancel, children }) {
  return (
    <div
      style={{
        background: '#F0F4FF',
        border: '1px solid #D6E4FF',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '16px',
        marginTop: '8px',
      }}
    >
      <h4 style={{ fontFamily: F, fontSize: '15px', fontWeight: 700, color: '#050A5F', margin: '0 0 16px 0' }}>{title}</h4>
      {children}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            background: '#FFFFFF',
            color: '#4B5563',
            border: '1px solid #D1D5DB',
            borderRadius: '14px',
            padding: '6px 16px',
            fontFamily: F,
            fontSize: '12.5px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSave}
          style={{
            background: '#22C55E',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '14px',
            padding: '6px 20px',
            fontFamily: F,
            fontSize: '12.5px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

/* Helper ItemList Component */
function ItemList({ items, renderTitle, renderSub, onRemove }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            background: '#F8FAFE',
            border: '1px solid #D6E4FF',
            borderRadius: '12px',
            padding: '10px 16px',
          }}
        >
          <div>
            <div style={{ fontFamily: F, fontSize: '13px', fontWeight: 700, color: '#050A5F' }}>{renderTitle(item)}</div>
            {renderSub && <div style={{ fontFamily: F, fontSize: '12px', color: '#6B7280' }}>{renderSub(item)}</div>}
          </div>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
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
      <select value={value} onChange={(e) => onChange(e.target.value)} style={selectStyle}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div style={chevronStyle}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
  height: '42px',
  padding: '0 16px',
  borderRadius: '21px',
  border: '1px solid #D6E4FF',
  background: '#FFFFFF',
  fontFamily: F,
  fontSize: '13px',
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
  paddingRight: '32px',
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
  right: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
};

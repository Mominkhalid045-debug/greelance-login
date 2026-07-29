import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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

  // Dynamic Item Lists
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [certificationsList, setCertificationsList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  // Modal Control States
  const [activeModal, setActiveModal] = useState(null); // 'education' | 'experience' | 'certification' | 'portfolio' | null

  // Temporary Form States inside Modals
  const [tempEdu, setTempEdu] = useState({ degree: '', university: '', startMonth: 'September', startYear: '2020', endMonth: 'September', endYear: '2024' });
  const [tempExp, setTempExp] = useState({ position: '', workplace: '', startMonth: 'September', startYear: '2021', currentlyWorking: false, endMonth: 'September', endYear: '2023', description: '' });
  const [tempCert, setTempCert] = useState({ name: '', link: '', fileName: '' });
  const [tempPort, setTempPort] = useState({ title: '', link: '', fileName: '', description: '' });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Add Item Handlers
  const handleSaveEducation = (e) => {
    e.preventDefault();
    if (!tempEdu.degree && !tempEdu.university) return;
    setEducationList((prev) => [...prev, { id: Date.now(), ...tempEdu }]);
    setTempEdu({ degree: '', university: '', startMonth: 'September', startYear: '2020', endMonth: 'September', endYear: '2024' });
    setActiveModal(null);
  };

  const handleSaveExperience = (e) => {
    e.preventDefault();
    if (!tempExp.position && !tempExp.workplace) return;
    setExperienceList((prev) => [...prev, { id: Date.now(), ...tempExp }]);
    setTempExp({ position: '', workplace: '', startMonth: 'September', startYear: '2021', currentlyWorking: false, endMonth: 'September', endYear: '2023', description: '' });
    setActiveModal(null);
  };

  const handleSaveCertification = (e) => {
    e.preventDefault();
    if (!tempCert.name) return;
    setCertificationsList((prev) => [...prev, { id: Date.now(), ...tempCert }]);
    setTempCert({ name: '', link: '', fileName: '' });
    setActiveModal(null);
  };

  const handleSavePortfolio = (e) => {
    e.preventDefault();
    if (!tempPort.title) return;
    setPortfolioList((prev) => [...prev, { id: Date.now(), ...tempPort }]);
    setTempPort({ title: '', link: '', fileName: '', description: '' });
    setActiveModal(null);
  };

  // Delete Handlers
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
            <SectionHeader title="Education" onAdd={() => setActiveModal('education')} buttonLabel="Add Education" />
            <ItemBadges items={educationList} renderTitle={(i) => i.degree || i.university} renderSub={(i) => `${i.university} (${i.startYear} - ${i.endYear})`} onRemove={removeEdu} />

            {/* =====================================
                SECTION 3: EXPERIENCE
               ===================================== */}
            <SectionHeader title="Experience" onAdd={() => setActiveModal('experience')} buttonLabel="Add Experience" />
            <ItemBadges items={experienceList} renderTitle={(i) => i.position || i.workplace} renderSub={(i) => `${i.workplace} (${i.currentlyWorking ? 'Present' : i.endYear})`} onRemove={removeExp} />

            {/* =====================================
                SECTION 4: CERTIFICATIONS
               ===================================== */}
            <SectionHeader title="Certifications" onAdd={() => setActiveModal('certification')} buttonLabel="Add Certification" />
            <ItemBadges items={certificationsList} renderTitle={(i) => i.name} renderSub={(i) => i.link} onRemove={removeCert} />

            {/* =====================================
                SECTION 5: PORTFOLIO
               ===================================== */}
            <SectionHeader title="Portfolio" onAdd={() => setActiveModal('portfolio')} buttonLabel="Add Portfolio" />
            <ItemBadges items={portfolioList} renderTitle={(i) => i.title} renderSub={(i) => i.link} onRemove={removePort} />

            {/* Bottom Right ONLY Next Button (Inside Main Card Container) */}
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

      {/* =====================================
          INTERACTIVE MODALS
         ===================================== */}
      {/* 1. Education Modal */}
      {activeModal === 'education' && (
        <Modal title="Add Education" onClose={() => setActiveModal(null)} onSave={handleSaveEducation}>
          <FormField label="Degree" placeholder="e.g. Bachelor in UX Designing" value={tempEdu.degree} onChange={(v) => setTempEdu({ ...tempEdu, degree: v })} />
          <FormField label="University" placeholder="e.g. University Of Punjab" value={tempEdu.university} onChange={(v) => setTempEdu({ ...tempEdu, university: v })} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Start Year</label>
              <SelectInput value={tempEdu.startYear} options={YEARS} onChange={(v) => setTempEdu({ ...tempEdu, startYear: v })} />
            </div>
            <div>
              <label style={labelStyle}>End Year</label>
              <SelectInput value={tempEdu.endYear} options={YEARS} onChange={(v) => setTempEdu({ ...tempEdu, endYear: v })} />
            </div>
          </div>
        </Modal>
      )}

      {/* 2. Experience Modal */}
      {activeModal === 'experience' && (
        <Modal title="Add Experience" onClose={() => setActiveModal(null)} onSave={handleSaveExperience}>
          <FormField label="Position" placeholder="e.g. Network Support Engineer" value={tempExp.position} onChange={(v) => setTempExp({ ...tempExp, position: v })} />
          <FormField label="Workplace" placeholder="e.g. Central Texas College" value={tempExp.workplace} onChange={(v) => setTempExp({ ...tempExp, workplace: v })} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setTempExp({ ...tempExp, currentlyWorking: !tempExp.currentlyWorking })}>
            <input type="checkbox" checked={tempExp.currentlyWorking} onChange={() => {}} />
            <span style={{ fontFamily: F, fontSize: '13px', color: '#050A5F', fontWeight: 600 }}>Currently Working</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={labelStyle}>Description</label>
            <textarea
              rows={3}
              value={tempExp.description}
              onChange={(e) => setTempExp({ ...tempExp, description: e.target.value })}
              placeholder="Type your description..."
              style={textareaStyle}
            />
          </div>
        </Modal>
      )}

      {/* 3. Certifications Modal */}
      {activeModal === 'certification' && (
        <Modal title="Add Certification" onClose={() => setActiveModal(null)} onSave={handleSaveCertification}>
          <FormField label="Certificate Name" placeholder="e.g. Certificate of Appreciation" value={tempCert.name} onChange={(v) => setTempCert({ ...tempCert, name: v })} />
          <FormField label="Certificate Link" placeholder="http://..." value={tempCert.link} onChange={(v) => setTempCert({ ...tempCert, link: v })} />
        </Modal>
      )}

      {/* 4. Portfolio Modal */}
      {activeModal === 'portfolio' && (
        <Modal title="Add Portfolio" onClose={() => setActiveModal(null)} onSave={handleSavePortfolio}>
          <FormField label="Title" placeholder="e.g. Mobile App Redesign" value={tempPort.title} onChange={(v) => setTempPort({ ...tempPort, title: v })} />
          <FormField label="Portfolio Link" placeholder="https://..." value={tempPort.link} onChange={(v) => setTempPort({ ...tempPort, link: v })} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={labelStyle}>Description</label>
            <textarea
              rows={3}
              value={tempPort.description}
              onChange={(e) => setTempPort({ ...tempPort, description: e.target.value })}
              placeholder="Type details..."
              style={textareaStyle}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

/* Helper SectionHeader Component with divider line underneath */
function SectionHeader({ title, onAdd, buttonLabel }) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '16px',
        marginBottom: '12px',
        marginTop: '28px',
        borderBottom: '1px solid #E5E7EB',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
      }}
    >
      <h3
        style={{
          fontFamily: F,
          fontSize: '18px',
          fontWeight: 700,
          color: '#050A5F',
          margin: 0,
        }}
      >
        {title}
      </h3>

      <button
        type="button"
        onClick={onAdd}
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
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 8px rgba(34, 197, 94, 0.2)',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#16A34A')}
        onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}
      >
        <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1 }}>+</span>
        <span>{buttonLabel}</span>
      </button>
    </div>
  );
}

/* Helper ItemBadges Container */
function ItemBadges({ items, renderTitle, renderSub, onRemove }) {
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
            background: '#F0F4FF',
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

/* Helper Modal Dialog Component */
function Modal({ title, onClose, onSave, children }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(5, 10, 95, 0.4)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: '500px',
          maxWidth: '90%',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 20px 40px rgba(5, 10, 95, 0.15)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontFamily: F, fontSize: '20px', fontWeight: 700, color: '#050A5F', margin: 0 }}>{title}</h3>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#6B7280' }}>
            ✕
          </button>
        </div>

        <form onSubmit={onSave} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {children}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: '#F3F4F6',
                color: '#4B5563',
                border: 'none',
                borderRadius: '16px',
                height: '38px',
                padding: '0 20px',
                fontFamily: F,
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                background: '#22C55E',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '16px',
                height: '38px',
                padding: '0 24px',
                fontFamily: F,
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Save Item
            </button>
          </div>
        </form>
      </div>
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

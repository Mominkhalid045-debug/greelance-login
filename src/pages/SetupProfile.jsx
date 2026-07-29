import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepHeader, F } from './FreelancerForm';

export default function SetupProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: 'Momin',
    lastName: 'Khalid',
    countryResidence: '',
    countryCitizenship: '',
    countryCode: '+1',
    phoneNumber: '201 555 0123',
    englishProficiency: '',
    noticePeriod: '',
    commitment: '',
    hourlyRate: '',
    timeZone: '',
  });

  // Dynamic Lists State
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [certificationsList, setCertificationsList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  // Modal State
  const [activeModal, setActiveModal] = useState(null); // 'education' | 'experience' | 'certification' | 'portfolio' | null
  const [modalForm, setModalForm] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenModal = (type) => {
    setActiveModal(type);
    setModalForm({});
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalForm({});
  };

  const handleSaveModalItem = (e) => {
    e.preventDefault();
    if (activeModal === 'education') {
      if (!modalForm.school || !modalForm.degree) return;
      setEducationList((prev) => [...prev, { ...modalForm, id: Date.now() }]);
    } else if (activeModal === 'experience') {
      if (!modalForm.title || !modalForm.company) return;
      setExperienceList((prev) => [...prev, { ...modalForm, id: Date.now() }]);
    } else if (activeModal === 'certification') {
      if (!modalForm.name || !modalForm.issuer) return;
      setCertificationsList((prev) => [...prev, { ...modalForm, id: Date.now() }]);
    } else if (activeModal === 'portfolio') {
      if (!modalForm.title || !modalForm.url) return;
      setPortfolioList((prev) => [...prev, { ...modalForm, id: Date.now() }]);
    }
    handleCloseModal();
  };

  const removeItem = (type, id) => {
    if (type === 'education') setEducationList((prev) => prev.filter((item) => item.id !== id));
    if (type === 'experience') setExperienceList((prev) => prev.filter((item) => item.id !== id));
    if (type === 'certification') setCertificationsList((prev) => prev.filter((item) => item.id !== id));
    if (type === 'portfolio') setPortfolioList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeProfileData = {
      ...formData,
      education: educationList,
      experience: experienceList,
      certifications: certificationsList,
      portfolio: portfolioList,
    };
    localStorage.setItem('userProfileData', JSON.stringify(completeProfileData));
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
            {/* Section 1: Personal Information* */}
            <h2
              style={{
                fontFamily: F,
                fontSize: '22px',
                fontWeight: 700,
                color: '#050A5F',
                margin: '0 0 28px 0',
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
                marginBottom: '24px',
              }}
            >
              {/* Row 1 */}
              <FormField
                label="First Name"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={(v) => handleChange('firstName', v)}
              />

              <FormField
                label="Last Name"
                required
                placeholder="Last Name"
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
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange('countryCode', e.target.value)}
                    style={{
                      width: '76px',
                      height: '42px',
                      borderRadius: '21px',
                      border: '1px solid #D6E4FF',
                      background: '#F0F4FF',
                      fontFamily: F,
                      fontSize: '13px',
                      color: '#050A5F',
                      padding: '0 8px 0 12px',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+92">+92</option>
                    <option value="+49">+49</option>
                  </select>

                  <input
                    type="text"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder="201 555 0123"
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
                placeholder="$ 0.00"
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

            {/* Spacing before sections */}
            <div style={{ marginTop: '40px' }} />

            {/* Dynamic Sub-sections */}
            <SubSection
              title="Education"
              buttonLabel="Add Education"
              items={educationList}
              onAdd={() => handleOpenModal('education')}
              onRemove={(id) => removeItem('education', id)}
              renderItem={(item) => (
                <div>
                  <div style={{ fontWeight: 700, color: '#050A5F' }}>{item.degree}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>{item.school} {item.year ? `• (${item.year})` : ''}</div>
                </div>
              )}
            />

            <SubSection
              title="Experience"
              buttonLabel="Add Experience"
              items={experienceList}
              onAdd={() => handleOpenModal('experience')}
              onRemove={(id) => removeItem('experience', id)}
              renderItem={(item) => (
                <div>
                  <div style={{ fontWeight: 700, color: '#050A5F' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>{item.company} {item.duration ? `• ${item.duration}` : ''}</div>
                </div>
              )}
            />

            <SubSection
              title="Certifications"
              buttonLabel="Add Certificate"
              items={certificationsList}
              onAdd={() => handleOpenModal('certification')}
              onRemove={(id) => removeItem('certification', id)}
              renderItem={(item) => (
                <div>
                  <div style={{ fontWeight: 700, color: '#050A5F' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>Issued by {item.issuer} {item.year ? `(${item.year})` : ''}</div>
                </div>
              )}
            />

            <SubSection
              title="Portfolio"
              buttonLabel="Add Portfolio"
              items={portfolioList}
              onAdd={() => handleOpenModal('portfolio')}
              onRemove={(id) => removeItem('portfolio', id)}
              isLast
              renderItem={(item) => (
                <div>
                  <div style={{ fontWeight: 700, color: '#050A5F' }}>{item.title}</div>
                  <a href={item.url} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#2334CD', textDecoration: 'none' }}>
                    {item.url}
                  </a>
                </div>
              )}
            />
          </form>
        </div>

        {/* Bottom Navigation Buttons (Outside Card) */}
        <div
          style={{
            width: '1140px',
            maxWidth: '96%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/form')}
            style={{
              background: '#FFFFFF',
              color: '#2334CD',
              border: '1.5px solid #2334CD',
              borderRadius: '20px',
              height: '42px',
              padding: '0 28px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#EEF2FF')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/skills')}
            style={{
              background: '#2334CD',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              height: '42px',
              padding: '0 32px',
              fontFamily: F,
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: 'rgba(35, 52, 205, 0.25) 0px 4px 12px 0px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1B2AB2')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2334CD')}
          >
            <span>Next</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </main>

      {/* Modal Dialog for Dynamic Add */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 15, 46, 0.45)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '460px',
              maxWidth: '95%',
              background: '#FFFFFF',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              padding: '28px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: F, fontSize: '18px', fontWeight: 700, color: '#050A5F', margin: 0 }}>
                {activeModal === 'education' && 'Add Education'}
                {activeModal === 'experience' && 'Add Experience'}
                {activeModal === 'certification' && 'Add Certification'}
                {activeModal === 'portfolio' && 'Add Portfolio Project'}
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#9CA3AF' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveModalItem} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {activeModal === 'education' && (
                <>
                  <ModalInput
                    label="School / University"
                    placeholder="e.g. Stanford University"
                    value={modalForm.school || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, school: val }))}
                  />
                  <ModalInput
                    label="Degree / Certificate"
                    placeholder="e.g. B.S. Computer Science"
                    value={modalForm.degree || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, degree: val }))}
                  />
                  <ModalInput
                    label="Graduation Year"
                    placeholder="e.g. 2023"
                    value={modalForm.year || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, year: val }))}
                  />
                </>
              )}

              {activeModal === 'experience' && (
                <>
                  <ModalInput
                    label="Job Title / Role"
                    placeholder="e.g. Senior Frontend Developer"
                    value={modalForm.title || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, title: val }))}
                  />
                  <ModalInput
                    label="Company Name"
                    placeholder="e.g. TechCorp Inc."
                    value={modalForm.company || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, company: val }))}
                  />
                  <ModalInput
                    label="Duration"
                    placeholder="e.g. 2021 - Present"
                    value={modalForm.duration || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, duration: val }))}
                  />
                </>
              )}

              {activeModal === 'certification' && (
                <>
                  <ModalInput
                    label="Certification Name"
                    placeholder="e.g. AWS Certified Solutions Architect"
                    value={modalForm.name || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, name: val }))}
                  />
                  <ModalInput
                    label="Issuing Organization"
                    placeholder="e.g. Amazon Web Services"
                    value={modalForm.issuer || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, issuer: val }))}
                  />
                  <ModalInput
                    label="Issue Year"
                    placeholder="e.g. 2024"
                    value={modalForm.year || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, year: val }))}
                  />
                </>
              )}

              {activeModal === 'portfolio' && (
                <>
                  <ModalInput
                    label="Project Title"
                    placeholder="e.g. Greelance E-Commerce App"
                    value={modalForm.title || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, title: val }))}
                  />
                  <ModalInput
                    label="Project URL"
                    placeholder="https://myportfolio.com/project"
                    value={modalForm.url || ''}
                    onChange={(val) => setModalForm((prev) => ({ ...prev, url: val }))}
                  />
                </>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '14px' }}>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: '1px solid #E5E7EB',
                    background: '#FFFFFF',
                    color: '#4B5563',
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
                    padding: '8px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    background: '#2334CD',
                    color: '#FFFFFF',
                    fontFamily: F,
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Add Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
        <div style={{ position: 'relative', width: '100%' }}>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={selectStyle}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
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

/* Helper Modal Input */
function ModalInput({ label, placeholder, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontFamily: F, fontSize: '12px', fontWeight: 600, color: '#374151' }}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          height: '38px',
          padding: '0 12px',
          borderRadius: '8px',
          border: '1px solid #D1D5DB',
          fontFamily: F,
          fontSize: '13px',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}

/* Helper SubSection Component with Items List & Add Handler */
function SubSection({ title, buttonLabel, isLast = false, items = [], onAdd, onRemove, renderItem }) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '24px',
        marginBottom: '28px',
        borderBottom: isLast ? 'none' : '1px solid #F3F4F6',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
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

      {/* Render existing items list */}
      {items.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '600px' }}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                background: '#F0F4FF',
                borderRadius: '12px',
                border: '1px solid #D6E4FF',
                fontFamily: F,
              }}
            >
              {renderItem(item)}
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#EF4444',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 700,
                  padding: '4px 8px',
                }}
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Button */}
      <button
        type="button"
        onClick={onAdd}
        style={{
          width: 'fit-content',
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
          transition: 'background 0.2s ease, transform 0.1s ease',
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
  background: '#F0F4FF',
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
  paddingRight: '36px',
};

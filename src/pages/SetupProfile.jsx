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

  // Sub-section dynamic lists
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [certificationsList, setCertificationsList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Add Handlers
  const addEducation = () => {
    setEducationList((prev) => [
      ...prev,
      {
        id: Date.now(),
        degree: '',
        university: '',
        startMonth: 'Select',
        startYear: 'Select',
        endMonth: 'Select',
        endYear: 'Select',
      },
    ]);
  };

  const addExperience = () => {
    setExperienceList((prev) => [
      ...prev,
      {
        id: Date.now(),
        position: '',
        workplace: '',
        startMonth: 'Select',
        startYear: 'Select',
        currentlyWorking: false,
        endMonth: 'Select',
        endYear: 'Select',
        description: '',
      },
    ]);
  };

  const addCertification = () => {
    setCertificationsList((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        link: '',
        fileName: '',
      },
    ]);
  };

  const addPortfolio = () => {
    setPortfolioList((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: '',
        link: '',
        fileName: '',
        description: '',
      },
    ]);
  };

  // Remove Handlers
  const removeEducation = (id) => setEducationList((prev) => prev.filter((item) => item.id !== id));
  const removeExperience = (id) => setExperienceList((prev) => prev.filter((item) => item.id !== id));
  const removeCertification = (id) => setCertificationsList((prev) => prev.filter((item) => item.id !== id));
  const removePortfolio = (id) => setPortfolioList((prev) => prev.filter((item) => item.id !== id));

  // Item Update Handlers
  const updateEducation = (id, field, val) => {
    setEducationList((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const updateExperience = (id, field, val) => {
    setExperienceList((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const updateCertification = (id, field, val) => {
    setCertificationsList((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

  const updatePortfolio = (id, field, val) => {
    setPortfolioList((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: val } : item)));
  };

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
                  fontSize: '26px',
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
            <SectionHeader title="Education" onAdd={addEducation} buttonLabel="Add Education" />

            {educationList.map((item) => (
              <InlineCard key={item.id} onRemove={() => removeEducation(item.id)}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', alignItems: 'flex-start' }}>
                  <FormField
                    label="Degree"
                    type="select"
                    placeholder="Bachelor in UX Designing"
                    options={['Bachelor in UX Designing', 'B.S. Computer Science', 'M.S. Software Engineering', 'Bachelor of Fine Arts', 'Other']}
                    value={item.degree}
                    onChange={(v) => updateEducation(item.id, 'degree', v)}
                  />

                  <FormField
                    label="University"
                    placeholder="University Of Punjab College of Art & Design"
                    value={item.university}
                    onChange={(v) => updateEducation(item.id, 'university', v)}
                  />

                  {/* Starting from */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>Starting from</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <SelectInput
                        value={item.startMonth}
                        placeholder="September"
                        options={MONTHS}
                        onChange={(v) => updateEducation(item.id, 'startMonth', v)}
                      />
                      <SelectInput
                        value={item.startYear}
                        placeholder="2013"
                        options={YEARS}
                        onChange={(v) => updateEducation(item.id, 'startYear', v)}
                      />
                    </div>
                  </div>

                  {/* Ending */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>Ending</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <SelectInput
                        value={item.endMonth}
                        placeholder="September"
                        options={MONTHS}
                        onChange={(v) => updateEducation(item.id, 'endMonth', v)}
                      />
                      <SelectInput
                        value={item.endYear}
                        placeholder="2013"
                        options={YEARS}
                        onChange={(v) => updateEducation(item.id, 'endYear', v)}
                      />
                    </div>
                  </div>
                </div>
              </InlineCard>
            ))}

            {/* =====================================
                SECTION 3: EXPERIENCE
               ===================================== */}
            <SectionHeader title="Experience" onAdd={addExperience} buttonLabel="Add Experience" />

            {experienceList.map((item) => (
              <InlineCard key={item.id} onRemove={() => removeExperience(item.id)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Row 1 Inputs */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', alignItems: 'flex-start' }}>
                    <FormField
                      label="Position"
                      type="select"
                      placeholder="Network Support Engineer"
                      options={['Network Support Engineer', 'Senior Frontend Developer', 'UX/UI Designer', 'Product Manager', 'DevOps Engineer']}
                      value={item.position}
                      onChange={(v) => updateExperience(item.id, 'position', v)}
                    />

                    <FormField
                      label="Work Place"
                      placeholder="Central Texas Collage"
                      value={item.workplace}
                      onChange={(v) => updateExperience(item.id, 'workplace', v)}
                    />

                    {/* Starting from */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={labelStyle}>Starting from</label>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <SelectInput
                          value={item.startMonth}
                          placeholder="September"
                          options={MONTHS}
                          onChange={(v) => updateExperience(item.id, 'startMonth', v)}
                        />
                        <SelectInput
                          value={item.startYear}
                          placeholder="2013"
                          options={YEARS}
                          onChange={(v) => updateExperience(item.id, 'startYear', v)}
                        />
                      </div>
                    </div>

                    {/* Ending OR Currently Working */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={labelStyle}>Ending</label>

                      {item.currentlyWorking ? (
                        <div style={{ display: 'flex', alignItems: 'center', height: '42px', gap: '8px' }}>
                          <label
                            onClick={() => updateExperience(item.id, 'currentlyWorking', !item.currentlyWorking)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer',
                              fontFamily: F,
                              fontSize: '13px',
                              fontWeight: 600,
                              color: '#050A5F',
                            }}
                          >
                            <span
                              style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '5px',
                                background: '#22C55E',
                                color: '#FFFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 700,
                              }}
                            >
                              ✓
                            </span>
                            <span>Currently Working</span>
                          </label>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ display: 'flex', gap: '8px' }}>
                            <SelectInput
                              value={item.endMonth}
                              placeholder="September"
                              options={MONTHS}
                              onChange={(v) => updateExperience(item.id, 'endMonth', v)}
                            />
                            <SelectInput
                              value={item.endYear}
                              placeholder="2015"
                              options={YEARS}
                              onChange={(v) => updateExperience(item.id, 'endYear', v)}
                            />
                          </div>

                          {/* Checkbox toggle */}
                          <label
                            onClick={() => updateExperience(item.id, 'currentlyWorking', true)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer',
                              fontFamily: F,
                              fontSize: '12px',
                              color: '#6B7280',
                              marginTop: '2px',
                            }}
                          >
                            <input type="checkbox" checked={false} onChange={() => {}} style={{ cursor: 'pointer' }} />
                            <span>Currently Working</span>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 2 Description Textarea */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>Description</label>
                    <textarea
                      rows={3}
                      value={item.description}
                      onChange={(e) => updateExperience(item.id, 'description', e.target.value)}
                      placeholder="Type your comments..."
                      style={{
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
                      }}
                    />
                  </div>
                </div>
              </InlineCard>
            ))}

            {/* =====================================
                SECTION 4: CERTIFICATIONS
               ===================================== */}
            <SectionHeader title="Certifications" onAdd={addCertification} buttonLabel="Add Certification" />

            {certificationsList.map((item) => (
              <InlineCard key={item.id} onRemove={() => removeCertification(item.id)}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 220px', gap: '20px', alignItems: 'flex-start' }}>
                  <FormField
                    label="Certificate name"
                    placeholder="Certificate of Appreciation"
                    value={item.name}
                    onChange={(v) => updateCertification(item.id, 'name', v)}
                  />

                  <FormField
                    label="Certificate Link"
                    placeholder="http://dshsusus.gc.kndckjwchouwhjcua"
                    value={item.link}
                    onChange={(v) => updateCertification(item.id, 'link', v)}
                  />

                  {/* Upload Certificate Card Box */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ opacity: 0, height: '16px' }}>Upload</label>
                    <label
                      style={{
                        height: '42px',
                        background: '#FFFFFF',
                        border: '1px solid #D6E4FF',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        fontFamily: F,
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#050A5F',
                        boxShadow: '0 2px 6px rgba(5,10,95,0.02)',
                      }}
                    >
                      <input
                        type="file"
                        onChange={(e) => {
                          if (e.target.files[0]) updateCertification(item.id, 'fileName', e.target.files[0].name);
                        }}
                        style={{ display: 'none' }}
                      />
                      <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        📄
                      </div>
                      <span>{item.fileName ? item.fileName.slice(0, 14) + '...' : 'Upload Certificate'}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                      </svg>
                    </label>
                  </div>
                </div>
              </InlineCard>
            ))}

            {/* =====================================
                SECTION 5: PORTFOLIO
               ===================================== */}
            <SectionHeader title="Portfolio" onAdd={addPortfolio} buttonLabel="Add Portfolio" isLast />

            {portfolioList.map((item) => (
              <InlineCard key={item.id} onRemove={() => removePortfolio(item.id)}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 220px', gap: '20px', alignItems: 'flex-start' }}>
                    <FormField
                      label="Title"
                      placeholder="Project Title"
                      value={item.title}
                      onChange={(v) => updatePortfolio(item.id, 'title', v)}
                    />

                    <FormField
                      label="Portfolio Link"
                      placeholder="https://..."
                      value={item.link}
                      onChange={(v) => updatePortfolio(item.id, 'link', v)}
                    />

                    {/* Upload Portfolio Card Box */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ opacity: 0, height: '16px' }}>Upload</label>
                      <label
                        style={{
                          height: '42px',
                          background: '#FFFFFF',
                          border: '1px solid #D6E4FF',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          fontFamily: F,
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#050A5F',
                          boxShadow: '0 2px 6px rgba(5,10,95,0.02)',
                        }}
                      >
                        <input
                          type="file"
                          onChange={(e) => {
                            if (e.target.files[0]) updatePortfolio(item.id, 'fileName', e.target.files[0].name);
                          }}
                          style={{ display: 'none' }}
                        />
                        <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          📊
                        </div>
                        <span>{item.fileName ? item.fileName.slice(0, 14) + '...' : 'Upload Portfolio'}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2334CD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="19" x2="12" y2="5" />
                          <polyline points="5 12 12 5 19 12" />
                        </svg>
                      </label>
                    </div>
                  </div>

                  {/* Row 2 Description Textarea */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={labelStyle}>Description</label>
                    <textarea
                      rows={3}
                      value={item.description}
                      onChange={(e) => updatePortfolio(item.id, 'description', e.target.value)}
                      placeholder="Type your comments..."
                      style={{
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
                      }}
                    />
                  </div>
                </div>
              </InlineCard>
            ))}

            {/* Bottom Right ONLY Next Button (Inside Main Card Container) */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
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

/* Helper SectionHeader Component with divider line underneath */
function SectionHeader({ title, onAdd, buttonLabel }) {
  return (
    <div
      style={{
        width: '100%',
        paddingBottom: '16px',
        marginBottom: '20px',
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

/* Helper Inline Container Card Component */
function InlineCard({ children, onRemove }) {
  return (
    <div
      style={{
        width: '100%',
        background: '#F0F4FF',
        borderRadius: '20px',
        border: '1px solid #D6E4FF',
        padding: '24px 28px',
        marginBottom: '20px',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Right Close / Delete X Icon Button */}
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove item"
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          background: 'none',
          border: 'none',
          fontSize: '18px',
          fontWeight: 600,
          color: '#050A5F',
          cursor: 'pointer',
          opacity: 0.7,
          padding: '2px',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
      >
        ✕
      </button>

      {children}
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
function SelectInput({ value, placeholder, options = [], onChange }) {
  return (
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

const chevronStyle = {
  position: 'absolute',
  right: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
};

import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#F4F5FB', fontFamily: "'Lexend', sans-serif", color: '#0A0F2E', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        
        {/* Brand Logo */}
        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <Logo size="small" />
        </div>

        {/* Navigation items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link to="/form" style={{ color: '#3741D4', fontWeight: 600, textDecoration: 'none', fontSize: '14px' }}>Onboarding</Link>
          <Link to="/setup-profile" style={{ color: '#4B5563', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>My Profile</Link>
          <Link to="/dashboard" style={{ color: '#4B5563', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>Projects</Link>
        </nav>

        {/* Profile / Logout action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => navigate('/form')}
            style={{
              background: '#3741D4',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '20px',
              padding: '10px 20px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(55,65,212,0.25)'
            }}
          >
            Continue Onboarding →
          </button>
          <button 
            onClick={() => navigate('/login')}
            style={{
              background: 'transparent',
              color: '#6B7280',
              border: '1px solid #E5E7EB',
              borderRadius: '20px',
              padding: '10px 18px',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Log Out
          </button>
        </div>

      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Welcome Banner */}
        <div style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #3741D4 100%)', borderRadius: '24px', padding: '36px 40px', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(55,65,212,0.2)', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 10px 0' }}>Welcome to Greelance, Momin Khalid! 👋</h1>
            <p style={{ fontSize: '15px', color: '#C7D2FE', margin: '0 0 20px 0', maxWidth: '540px', lineHeight: '1.6' }}>
              Your account is successfully created. Complete your freelancer profile setup to start exploring top freelance opportunities and skill assessments.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => navigate('/form')}
                style={{
                  background: '#22C55E',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '12px 28px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(34,197,94,0.3)'
                }}
              >
                Start Profile Onboarding
              </button>
            </div>
          </div>
          <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.1)', borderRadius: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: '#0A0F2E' }}>Onboarding Quick Actions</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          {/* Card 1: Resume Upload */}
          <div 
            onClick={() => navigate('/form')}
            style={{ background: '#FFFFFF', borderRadius: '20px', padding: '28px 24px', border: '1px solid #E5E7EB', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.02)'; }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3741D4" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>Step 1: Upload Resume</h3>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, lineHeight: 1.5 }}>Upload PDF or Word file to auto-populate your skills and work experience.</p>
          </div>

          {/* Card 2: Setup Profile */}
          <div 
            onClick={() => navigate('/setup-profile')}
            style={{ background: '#FFFFFF', borderRadius: '20px', padding: '28px 24px', border: '1px solid #E5E7EB', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.02)'; }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>Step 2: Setup Profile</h3>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, lineHeight: 1.5 }}>Enter personal details, hourly rate, notice period, and English proficiency.</p>
          </div>

          {/* Card 3: Skill Verification */}
          <div 
            onClick={() => navigate('/form')}
            style={{ background: '#FFFFFF', borderRadius: '20px', padding: '28px 24px', border: '1px solid #E5E7EB', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.02)'; }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>Step 3: Skill Selection</h3>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: 0, lineHeight: 1.5 }}>Select up to 15 specialized skills to showcase your expertise.</p>
          </div>

        </div>

      </main>
    </div>
  );
}
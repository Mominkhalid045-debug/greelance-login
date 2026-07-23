import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LeftBanner from './components/LeftBanner';
import RoleLeftBanner from './components/RoleLeftBanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import NewPassword from './pages/NewPassword';
import Dashboard from './pages/Dashboard';
import RoleSelection from './pages/RoleSelection';
import FreelancerForm from './pages/FreelancerForm';
import SetupProfile from './pages/SetupProfile';

/**
 * SplitLayout — handles the 40/60 split screen.
 * Dynamically switches the LeftBanner based on the route.
 */
function SplitLayout({ children }) {
  const location = useLocation();
  const isRoleSelection = location.pathname === '/';

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Left blue panel */}
      {isRoleSelection ? <RoleLeftBanner /> : <LeftBanner />}

      {/* Right light panel */}
      <section
        style={{
          flex: 1,
          height: '100%',
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#E9EAEE',
          position: 'relative',
          padding: '20px 40px',
          boxSizing: 'border-box',
        }}
        aria-label="Auth section"
      >
        <div
          className="signup-card animate-slide-in"
          style={{
            position: 'relative',
            width: '480px',
            maxWidth: '100%',
            background: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: 'rgba(31, 35, 51, 0.08) 0px 10px 30px 0px',
            padding: '20px 32px 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
            margin: 'auto 0',
          }}
        >
          {children}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Full-screen routes */}
        <Route path="/form" element={<FreelancerForm />} />
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Split-screen routes */}
        <Route path="/" element={<SplitLayout><RoleSelection /></SplitLayout>} />
        <Route path="/login" element={<SplitLayout><Login /></SplitLayout>} />
        <Route path="/signup" element={<SplitLayout><Signup /></SplitLayout>} />
        <Route path="/forgot-password" element={<SplitLayout><ForgotPassword /></SplitLayout>} />
        <Route path="/verify-otp" element={<SplitLayout><VerifyOTP /></SplitLayout>} />
        <Route path="/new-password" element={<SplitLayout><NewPassword /></SplitLayout>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

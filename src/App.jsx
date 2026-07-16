import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftBanner from './components/LeftBanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import NewPassword from './pages/NewPassword';
import Dashboard from './pages/Dashboard';

/**
 * App — root layout: split-screen auth.
 * Left  ~42%  deep blue gradient  (LeftBanner)
 * Right ~58%  light gray-blue     (Auth pages)
 */
export default function App() {
  return (
    <Router>
      <div
        id="app-root"
        style={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          fontFamily: "'Poppins', sans-serif",
          overflow: 'hidden',
        }}
      >
        {/* Left blue panel */}
        <LeftBanner />

        {/* Right light panel */}
        <section
          style={{
            flex: 1,
            height: '100%',
            overflowY: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#EEF0FA',
            backgroundImage: `radial-gradient(circle, rgba(55,65,212,0.07) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            position: 'relative',
          }}
          aria-label="Auth section"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

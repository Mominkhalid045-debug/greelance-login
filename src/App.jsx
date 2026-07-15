import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftBanner from './components/LeftBanner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import NewPassword from './pages/NewPassword';

/**
 * App — root layout: 1440×810 split-screen login page.
 * Left  40%  #3438C6 blue  (LeftBanner)
 * Right 60%  #F8FAFF light (LoginSection / Outlet)
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
        {/* Left blue panel — 40% */}
        <LeftBanner />

        {/* Right light panel — 60% */}
        <section
          className="flex flex-1 items-center justify-center relative"
          style={{ background: '#F8FAFF', height: '100%', overflowY: 'auto' }}
          aria-label="Auth section"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/new-password" element={<NewPassword />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

import LeftBanner from './components/LeftBanner';
import LoginSection from './components/LoginSection';

/**
 * App — root layout: 1440×810 split-screen login page.
 * Left  40%  #3438C6 blue  (LeftBanner)
 * Right 60%  #F8FAFF light (LoginSection / LoginCard)
 */
export default function App() {
  return (
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
      <LoginSection />
    </div>
  );
}

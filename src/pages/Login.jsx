import LeftBanner from '../components/LeftBanner';
import LoginSection from '../components/LoginSection';

/**
 * Login page — the full split-screen layout.
 * Desktop: 40/60 split  |  Tablet: 35/65  |  Mobile: full-width login card
 */
export default function Login() {
  return (
    <div
      id="login-page"
      className="flex min-h-screen w-full"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* LEFT — blue promo panel */}
      <LeftBanner />

      {/* RIGHT — login form */}
      <LoginSection />
    </div>
  );
}

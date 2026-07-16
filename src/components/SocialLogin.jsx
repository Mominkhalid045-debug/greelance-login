import googleIcon from '../assets/google.svg';
import linkedinIcon from '../assets/linkedin.svg';
import appleIcon from '../assets/apple.svg';

const providers = [
  { id: 'google',   label: 'Sign in with Google',   icon: googleIcon,   bg: '#fff' },
  { id: 'linkedin', label: 'Sign in with LinkedIn', icon: linkedinIcon, bg: '#0A66C2' },
  { id: 'apple',    label: 'Sign in with Apple',    icon: appleIcon,    bg: '#1A1A1A' },
];

/**
 * SocialLogin — "You can also sign in with" section.
 * Matches the reference: Google (white bg), LinkedIn (blue bg), Apple (dark bg).
 */
export default function SocialLogin() {
  return (
    <div
      style={{
        marginTop: '24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '13px',
          color: '#9CA3AF',
          margin: 0,
        }}
      >
        You can also sign in with
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {providers.map(({ id, label, icon, bg }) => (
          <button
            key={id}
            id={`social-${id}`}
            type="button"
            aria-label={label}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: bg,
              border: bg === '#fff' ? '1.5px solid #E5E7EB' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
            }}
          >
            <img src={icon} alt={label} width={22} height={22} />
          </button>
        ))}
      </div>
    </div>
  );
}

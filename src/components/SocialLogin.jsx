import googleIcon from '../assets/google.svg';
import linkedinIcon from '../assets/linkedin.svg';
import appleIcon from '../assets/apple.svg';

const providers = [
  { id: 'linkedin', label: 'Sign in with LinkedIn', icon: linkedinIcon, bg: '#0A66C2' },
  { id: 'google',   label: 'Sign in with Google',   icon: googleIcon,   bg: '#fff' },
  { id: 'apple',    label: 'Sign in with Apple',    icon: appleIcon,    bg: '#1A1A1A' },
];

/**
 * SocialLogin — "You can also signin with" section.
 * Matches the reference: LinkedIn (blue bg), Google (white bg), Apple (dark bg).
 */
export default function SocialLogin() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: '#8B8FA3',
          margin: '0 0 10px 0',
          lineHeight: '18px',
        }}
      >
        You can also signin with
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {providers.map(({ id, label, icon, bg }) => (
          <button
            key={id}
            id={`social-${id}`}
            type="button"
            aria-label={label}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: bg,
              border: bg === '#fff' ? '1.33px solid #E5E7EB' : 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'rgba(31, 35, 51, 0.08) 0px 4px 12px 0px',
              transition: 'transform 0.15s, box-shadow 0.15s',
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = 'rgba(31, 35, 51, 0.15) 0px 6px 16px 0px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'rgba(31, 35, 51, 0.08) 0px 4px 12px 0px';
            }}
          >
            <img src={icon} alt={label} width={18} height={18} />
          </button>
        ))}
      </div>
    </div>
  );
}

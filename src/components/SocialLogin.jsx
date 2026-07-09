import googleIcon from '../assets/google.svg';
import linkedinIcon from '../assets/linkedin.svg';
import appleIcon from '../assets/apple.svg';

const providers = [
  { id: 'google',   label: 'Sign in with Google',   icon: googleIcon },
  { id: 'linkedin', label: 'Sign in with LinkedIn', icon: linkedinIcon },
  { id: 'apple',    label: 'Sign in with Apple',    icon: appleIcon },
];

/**
 * SocialLogin — "You can also sign in with" section with icon buttons.
 */
export default function SocialLogin() {
  return (
    <div 
      className="mt-6 text-center"
      style={{
        width: '172.5px',
        height: '69.53px',
        margin: '24px auto 0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <p
        className="font-poppins"
        style={{ fontSize: '12px', color: '#6F7894', margin: 0, padding: 0 }}
      >
        You can also sign in with
      </p>
      <div className="flex items-center justify-center gap-5">
        {providers.map(({ id, label, icon }) => (
          <button
            key={id}
            id={`social-${id}`}
            type="button"
            aria-label={label}
            className="rounded-full flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95 focus-ring"
            style={{
              width: '42px',
              height: '42px',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              border: '1px solid #E4E8F2',
            }}
          >
            <img src={icon} alt={label} width={24} height={24} />
          </button>
        ))}
      </div>
    </div>
  );
}

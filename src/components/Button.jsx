/**
 * PrimaryButton — reusable full-width sign-in button.
 */
export default function Button({ children, type = 'button', onClick, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={typeof children === 'string' ? children : 'Submit'}
      className={[
        'w-full h-12 rounded-input font-poppins font-semibold text-white text-sm',
        'transition-all duration-200 ease-out',
        'hover:opacity-90 active:scale-[0.98]',
        'focus-ring',
        className,
      ].join(' ')}
      style={{
        background: 'linear-gradient(135deg, #3944D4 0%, #3438C6 100%)',
        boxShadow: '0 8px 18px rgba(57,68,212,0.25)',
        borderRadius: '24px',
      }}
    >
      {children}
    </button>
  );
}

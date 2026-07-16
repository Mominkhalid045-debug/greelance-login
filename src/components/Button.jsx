/**
 * PrimaryButton — reusable full-width button.
 * Matches the reference: deep blue, fully rounded, bold white text.
 */
export default function Button({ children, type = 'button', onClick, id, className = '' }) {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      aria-label={typeof children === 'string' ? children : 'Submit'}
      style={{
        width: '100%',
        height: '52px',
        borderRadius: '30px',
        background: '#3741D4',
        border: 'none',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '15px',
        letterSpacing: '0.3px',
        transition: 'opacity 0.2s, transform 0.15s',
        boxShadow: '0 6px 20px rgba(55,65,212,0.30)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.92';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
    >
      {children}
    </button>
  );
}

/**
 * TextInput — labeled form input with pill styling.
 * Matches the reference Vercel app exactly.
 */
export default function Input({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  rightElement,
  autoComplete,
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          marginBottom: '6px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: '13px',
          color: '#6B7280',
        }}
      >
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          style={{
            width: '100%',
            height: '52px',
            border: '1.5px solid #E8EAF0',
            borderRadius: '30px',
            background: '#F7F8FC',
            padding: rightElement ? '0 52px 0 20px' : '0 20px',
            color: '#1A1F36',
            fontSize: '14px',
            fontFamily: "'Poppins', sans-serif",
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3944D4';
            e.target.style.boxShadow = '0 0 0 3px rgba(57,68,212,0.10)';
            e.target.style.background = '#fff';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E8EAF0';
            e.target.style.boxShadow = 'none';
            e.target.style.background = '#F7F8FC';
          }}
          aria-label={label}
        />
        {rightElement && (
          <div
            style={{
              position: 'absolute',
              right: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}

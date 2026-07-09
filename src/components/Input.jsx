/**
 * TextInput — labeled form input with pill styling.
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
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-1.5 font-poppins font-medium"
        style={{ fontSize: '12px', color: '#68728C' }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="w-full font-poppins text-sm focus-ring transition-all duration-150"
          style={{
            height: '48px',
            border: '1px solid #E3E7F1',
            borderRadius: '24px',
            background: '#F9FAFD',
            padding: '0 18px',
            color: '#202B52',
            outline: 'none',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3944D4';
            e.target.style.boxShadow = '0 0 0 3px rgba(57,68,212,0.12)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#E3E7F1';
            e.target.style.boxShadow = 'none';
          }}
          aria-label={label}
        />
        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightElement}</div>
        )}
      </div>
    </div>
  );
}

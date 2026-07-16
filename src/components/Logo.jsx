/**
 * Greelance Logo — matches the reference exactly.
 * Recycling-arrows G mark (green) + "GREE" dark navy bold + "LANCE" green regular weight.
 */
export default function Logo({ centered = false }) {
  return (
    <div
      className="flex items-center gap-2"
      aria-label="Greelance logo"
      style={{
        justifyContent: centered ? 'center' : 'flex-start',
        marginBottom: '32px',
      }}
    >
      {/* Recycling arrows G-mark icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Top-left arrow arc */}
        <path
          d="M20 4 L28 10 L24 10 C24 10 28 14 28 20"
          stroke="#4ADE80"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 4 L12 10 L16 10"
          stroke="#4ADE80"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Bottom-right arrow arc */}
        <path
          d="M20 36 L12 30 L16 30 C16 30 12 26 12 20"
          stroke="#4ADE80"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 36 L28 30 L24 30"
          stroke="#4ADE80"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '24px',
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#0A0F2E', fontWeight: 700 }}>GREE</span>
        <span style={{ color: '#22C55E', fontWeight: 400 }}>LANCE</span>
      </span>
    </div>
  );
}

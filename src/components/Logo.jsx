/**
 * Greelance Logo — pixel-perfect match to the Figma design dimensions.
 * Green polygonal G-mark icon + "GREE" dark navy + "LANCE" green wordmark.
 */
export default function Logo() {
  return (
    <div
      className="flex items-center justify-center mb-10"
      aria-label="Greelance logo"
      style={{
        width: '218.39px',
        height: '32.89px',
        margin: '0 auto 40px auto'
      }}
    >
      <div className="flex items-center gap-2" style={{ height: '100%' }}>
        {/* ── G-mark icon: green polygon shape ── */}
        <svg
          height="100%"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0, height: '32.89px', width: 'auto' }}
        >
          <path
            d="M26.4 1.2h-12c-1.2 0-2.3.6-2.9 1.6L.6 20c-.8 1.4-.8 3.1 0 4.5l6.7 11.6c.6 1 1.7 1.6 2.9 1.6h12c1.2 0 2.3-.6 2.9-1.6l4.2-7.3H19.5l-3.3 5.7h-5.8L3 17.1l5.8-10.1h14.2l3.3 5.7h9.8L31.9 2.8C31.3 1.8 30.2 1.2 29 1.2h-2.6z"
            fill="#5DE083"
          />
        </svg>

        {/* ── Wordmark ── */}
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '28.5px', // Adjusted to match scale
            letterSpacing: '1px',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span style={{ color: '#292C3D' }}>GREE</span>
          <span style={{ color: '#5DE083', fontWeight: 400 }}>LANCE</span>
        </span>
      </div>
    </div>
  );
}

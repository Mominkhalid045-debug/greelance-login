const F = "'Lexend', sans-serif";

/**
 * Greelance Logo — Pixel-perfect match to official branding:
 * Green hexagon ribbon G mark + "GREE" (bold charcoal #2B2F42) + "LANCE" (thin mint green #34E096).
 */
export default function Logo({ centered = false, size = 'medium', style = {} }) {
  const iconHeight = size === 'small' ? 24 : size === 'large' ? 40 : 32;
  const fontSize = size === 'small' ? 18 : size === 'large' ? 28 : 22;

  return (
    <div
      aria-label="Greelance logo"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: centered ? 'center' : 'flex-start',
        ...style,
      }}
    >
      {/* Official Greelance Green Hexagon Ribbon Icon */}
      <svg
        width={Math.round(iconHeight * 1.15)}
        height={iconHeight}
        viewBox="0 0 46 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Top green polygon */}
        <path
          d="M12 0H34L46 12L34 24H24L31 17L24 10H12L0 22V12L12 0Z"
          fill="#34E096"
        />
        {/* Bottom green polygon */}
        <path
          d="M34 40H12L0 28L12 16H22L15 23L22 30H34L46 18V28L34 40Z"
          fill="#34E096"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: F,
          fontSize: `${fontSize}px`,
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '0.5px',
        }}
      >
        <span style={{ color: '#2B2F42', fontWeight: 800 }}>GREE</span>
        <span style={{ color: '#34E096', fontWeight: 300, marginLeft: '1px' }}>LANCE</span>
      </span>
    </div>
  );
}

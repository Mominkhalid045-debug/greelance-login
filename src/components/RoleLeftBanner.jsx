import roleBannerIllustration from '../assets/role_banner_illustration_exact.png';

const F = "'Lexend', sans-serif";

/**
 * RoleLeftBanner — 100% Pixel-Perfect Match to Greelance Figma Reference
 */
export default function RoleLeftBanner() {
  return (
    <aside
      className="role-left-banner"
      style={{
        width: '50%',
        flexShrink: 0,
        height: '100%',
        background: '#2334CD',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 32px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Heading */}
      <h2
        style={{
          fontFamily: F,
          fontWeight: 700,
          fontSize: '32px',
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: '42px',
          marginTop: '10px',
          zIndex: 2,
        }}
      >
        Join Our Decentralized<br />Talent Network
      </h2>

      {/* Center 3D Illustration Graphic from Figma */}
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          margin: 'auto 0',
        }}
      >
        <img
          src={roleBannerIllustration}
          alt="Greelance Decentralized Talent Network"
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>

      {/* Bottom Section: Dots Pagination + Footer Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 2, marginBottom: '10px' }}>
        {/* Dots Pagination */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.7)' }} />
          <div style={{ width: '28px', height: '6px', borderRadius: '3px', background: '#22D3A6' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.7)' }} />
        </div>

        {/* Bottom Title */}
        <h3
          style={{
            fontFamily: F,
            fontWeight: 600,
            fontSize: '18px',
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '0.2px',
          }}
        >
          Welcome To A New Era Of Work
        </h3>
      </div>
    </aside>
  );
}

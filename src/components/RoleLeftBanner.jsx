const F = "'Lexend', sans-serif";

export default function RoleLeftBanner() {
  return (
    <aside
      style={{
        width: '50%',
        flexShrink: 0,
        height: '100%',
        background: '#2032BF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '48px 40px',
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
          fontSize: '30px',
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: '41px',
          marginTop: '10px',
          zIndex: 2,
        }}
      >
        Join Our Decentralized<br />Talent Network
      </h2>

      {/* Center Illustration with Cyan Radial Glow Ring */}
      <div
        style={{
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,166,0.35) 0%, rgba(32,50,191,0) 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Main Job Offer Card (Top) */}
        <div
          style={{
            width: '260px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(5,10,95,0.25)',
            padding: '16px 20px',
            position: 'relative',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {/* Card Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: F, fontSize: '13px', fontWeight: 700, color: '#050A5F' }}>Job Offer</span>
            <span style={{ fontSize: '12px', color: '#9CA3AF', cursor: 'pointer' }}>✕</span>
          </div>

          {/* Job Title & Subtext */}
          <p style={{ fontFamily: F, fontSize: '9px', fontWeight: 600, color: '#050A5F', margin: 0 }}>
            Need someone to redesign a website and deliver design files including assets
          </p>
          <p style={{ fontFamily: F, fontSize: '7.5px', color: '#6B7280', margin: 0, lineHeight: '11px' }}>
            Global Coach Group is a truly global provider of leadership coaching and training integrated with GAKC coaching tools.
          </p>

          {/* Details Table */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', background: '#F8FAFC', padding: '8px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontFamily: F }}>
              <span style={{ color: '#6B7280' }}>Category</span>
              <span style={{ color: '#3038BD', fontWeight: 600 }}>Product Design</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontFamily: F }}>
              <span style={{ color: '#6B7280' }}>Payment Method</span>
              <span style={{ color: '#3038BD', fontWeight: 600 }}>Dollar</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontFamily: F }}>
              <span style={{ color: '#6B7280' }}>Budget</span>
              <span style={{ color: '#3038BD', fontWeight: 600 }}>$100-$200</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', fontFamily: F }}>
              <span style={{ color: '#6B7280' }}>Job Commitment</span>
              <span style={{ color: '#3038BD', fontWeight: 600 }}>Contract</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
            <button style={{ flex: 1, height: '24px', background: '#3038BD', color: '#fff', border: 'none', borderRadius: '12px', fontFamily: F, fontSize: '8.5px', fontWeight: 600, cursor: 'pointer' }}>Accept</button>
            <button style={{ flex: 1, height: '24px', background: '#fff', color: '#3038BD', border: '1px solid #3038BD', borderRadius: '12px', fontFamily: F, fontSize: '8.5px', fontWeight: 600, cursor: 'pointer' }}>Decline</button>
          </div>
        </div>

        {/* Second Overlay Card (Left offset) */}
        <div
          style={{
            width: '240px',
            background: '#FFFFFF',
            borderRadius: '14px',
            boxShadow: '0 12px 30px rgba(5,10,95,0.15)',
            padding: '12px 16px',
            position: 'absolute',
            left: '-15px',
            top: '30px',
            zIndex: 3,
            transform: 'rotate(-6deg)',
            opacity: 0.95,
          }}
        >
          <p style={{ fontFamily: F, fontSize: '8px', fontWeight: 600, color: '#050A5F', margin: '0 0 6px 0' }}>Need someone to redesign a website...</p>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <span style={{ background: '#22D3A6', color: '#fff', fontSize: '6.5px', padding: '2px 6px', borderRadius: '8px', fontFamily: F }}>Product Design</span>
            <span style={{ background: '#22D3A6', color: '#fff', fontSize: '6.5px', padding: '2px 6px', borderRadius: '8px', fontFamily: F }}>Wireframing</span>
            <span style={{ background: '#22D3A6', color: '#fff', fontSize: '6.5px', padding: '2px 6px', borderRadius: '8px', fontFamily: F }}>Prototype</span>
          </div>
        </div>

        {/* Rating Floating Badge (Bottom Left) */}
        <div
          style={{
            position: 'absolute',
            left: '-5px',
            bottom: '20px',
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '8px 12px',
            boxShadow: '0 8px 20px rgba(5,10,95,0.2)',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <span style={{ fontFamily: F, fontSize: '8px', color: '#6B7280' }}>United States</span>
          <div style={{ display: 'flex', gap: '2px', color: '#F59E0B', fontSize: '10px' }}>★★★★★</div>
          <span style={{ fontFamily: F, fontSize: '9px', fontWeight: 700, color: '#050A5F' }}>$45 / hr</span>
        </div>
      </div>

      {/* Bottom Section: Dots + Footer Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 2 }}>
        {/* Pagination Dots */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div style={{ width: '22px', height: '6px', borderRadius: '3px', background: '#22D3A6' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
        </div>

        <h3
          style={{
            fontFamily: F,
            fontWeight: 600,
            fontSize: '16px',
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '0.15px',
          }}
        >
          Welcome To A New Era Of Work
        </h3>
      </div>
    </aside>
  );
}

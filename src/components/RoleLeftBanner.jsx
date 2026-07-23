const F = "'Lexend', sans-serif";

/**
 * RoleLeftBanner — 100% Pixel-Perfect Match to Greelance Figma Reference Screenshot:
 * - Royal Blue background (#2334CD)
 * - "Join Our Decentralized Talent Network" title
 * - Layered Job Offer cards stack with Cyan Glow backdrop
 * - Mint green skill chips (Product Design, Wireframing, Prototype, Mobile App Design, Video Making)
 * - Detailed Job Offer accept/decline modal card
 * - United States rating badge with 5 gold stars & 18$ Hourly details
 * - Dots pagination (White dot, Mint green active pill, White dot)
 * - "Welcome To A New Era Of Work" bottom title
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
        padding: '48px 36px',
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

      {/* Center Illustration with Large Cyan Soft Glow Backdrop */}
      <div
        className="center-illustration"
        style={{
          width: '380px',
          height: '360px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        {/* Soft Cyan Glow Ring */}
        <div
          style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 211, 166, 0.45) 0%, rgba(33, 50, 199, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* 1. Left Back Card (Tilted) */}
        <div
          style={{
            position: 'absolute',
            left: '0px',
            top: '40px',
            width: '260px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 12px 30px rgba(5,10,95,0.2)',
            padding: '14px 16px',
            transform: 'rotate(-4deg)',
            opacity: 0.9,
            zIndex: 1,
          }}
        >
          <p style={{ fontFamily: F, fontSize: '9px', fontWeight: 700, color: '#050A5F', margin: '0 0 4px 0' }}>
            Need someone to redesign a website and deliver design files including assets
          </p>
          <p style={{ fontFamily: F, fontSize: '7px', color: '#6B7280', margin: '0 0 8px 0', lineHeight: '10px' }}>
            Global Coach Group is a truly global provider of leadership coaching and training...
          </p>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <span style={mintTagStyle}>Product Design</span>
            <span style={mintTagStyle}>Wireframing</span>
            <span style={mintTagStyle}>Prototype</span>
            <span style={mintTagStyle}>Mobile App Design</span>
            <span style={mintTagStyle}>Video Making</span>
          </div>
        </div>

        {/* 2. Main Right Modal Box ("Job Offer") */}
        <div
          style={{
            position: 'absolute',
            right: '0px',
            top: '0px',
            width: '240px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(5,10,95,0.25)',
            padding: '12px 14px',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {/* Top Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: F, fontSize: '9px', color: '#050A5F' }}>Job Offer</span>
            <span style={{ fontSize: '10px', color: '#9CA3AF' }}>✕</span>
          </div>

          <h4 style={{ fontFamily: F, fontSize: '13px', fontWeight: 700, color: '#050A5F', margin: '0', textAlign: 'center' }}>
            Job Offer
          </h4>

          {/* Blue Shade Inner Container */}
          <div style={{ background: '#EEF2FF', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p style={{ fontFamily: F, fontSize: '8px', fontWeight: 700, color: '#050A5F', margin: 0, lineHeight: '11px' }}>
              Need someone to redesign a website and deliver design files including assets
            </p>
            <p style={{ fontFamily: F, fontSize: '6.5px', color: '#6B7280', margin: 0, lineHeight: '9px' }}>
              Global Coach Group is a truly global provider of leadership coaching and training integrated with SAAS coaching tools. GCG CEO Will Linssen is ranked as World's #1 Leadership Coach (by Global Gurus)...More
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '2px' }}>
              <div style={infoRowStyle}>
                <span>Category</span>
                <span style={{ color: '#3741D4', fontWeight: 700 }}>Product Design</span>
              </div>
              <div style={infoRowStyle}>
                <span>Payment Method</span>
                <span style={{ color: '#3741D4', fontWeight: 700 }}>Dollar</span>
              </div>
              <div style={infoRowStyle}>
                <span>Budget</span>
                <span style={{ color: '#3741D4', fontWeight: 700 }}>$100-$200</span>
              </div>
              <div style={infoRowStyle}>
                <span>Job Commitment</span>
                <span style={{ color: '#3741D4', fontWeight: 700 }}>Contract</span>
              </div>
              <div style={infoRowStyle}>
                <span>Working hours per week</span>
                <span style={{ color: '#3741D4', fontWeight: 700 }}>6</span>
              </div>
            </div>
          </div>

          {/* Accept / Decline Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
            <button style={{ flex: 1, height: '22px', background: '#3741D4', color: '#fff', border: 'none', borderRadius: '11px', fontFamily: F, fontSize: '8px', fontWeight: 700, cursor: 'pointer' }}>
              Accept
            </button>
            <button style={{ flex: 1, height: '22px', background: '#fff', color: '#3741D4', border: '1px solid #3741D4', borderRadius: '11px', fontFamily: F, fontSize: '8px', fontWeight: 700, cursor: 'pointer' }}>
              Decline
            </button>
          </div>
        </div>

        {/* 3. Bottom Left Card (Front Overlay) */}
        <div
          style={{
            position: 'absolute',
            left: '10px',
            bottom: '20px',
            width: '240px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 16px 36px rgba(5,10,95,0.22)',
            padding: '12px 14px',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <p style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, color: '#050A5F', margin: 0 }}>
            Need someone to redesign a website and deliver design files including assets
          </p>
          <p style={{ fontFamily: F, fontSize: '6.5px', color: '#6B7280', margin: 0, lineHeight: '9px' }}>
            Global Coach Group is a truly global provider of leadership coaching and training integrated with SAAS coaching tools...More
          </p>

          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <span style={mintTagStyle}>Product Design</span>
            <span style={mintTagStyle}>Wireframing</span>
            <span style={mintTagStyle}>Prototype</span>
            <span style={mintTagStyle}>Mobile App Design</span>
            <span style={mintTagStyle}>Video Making</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', paddingTop: '4px', borderTop: '0.5px solid #F3F4F6' }}>
            <span style={{ fontFamily: F, fontSize: '7px', color: '#050A5F', fontWeight: 600 }}>64% Matching your Profile</span>
            <div style={{ display: 'flex', gap: '6px', fontSize: '9px', color: '#6B7280' }}>
              <span>⚐</span>
              <span>🔖</span>
            </div>
          </div>
        </div>

        {/* 4. Rating Badge Card (Middle Front Overlay) */}
        <div
          style={{
            position: 'absolute',
            left: '125px',
            bottom: '0px',
            width: '100px',
            background: '#EEF2FF',
            borderRadius: '14px',
            boxShadow: '0 12px 28px rgba(5,10,95,0.25)',
            padding: '10px',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
          }}
        >
          <span style={{ fontFamily: F, fontSize: '7.5px', color: '#050A5F', fontWeight: 600 }}>United States</span>
          <div style={{ display: 'flex', gap: '1px', color: '#F59E0B', fontSize: '8px' }}>★★★★★</div>
          <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, color: '#3741D4', marginTop: '2px' }}>Full Time</span>
          <span style={{ fontFamily: F, fontSize: '6.5px', color: '#6B7280' }}>Work Type</span>
          <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, color: '#3741D4', marginTop: '2px' }}>18$</span>
          <span style={{ fontFamily: F, fontSize: '6.5px', color: '#6B7280' }}>Hourly</span>
          <span style={{ fontFamily: F, fontSize: '7.5px', fontWeight: 600, color: '#050A5F', marginTop: '2px' }}>Less than 1 month</span>
          <span style={{ fontFamily: F, fontSize: '6.5px', color: '#6B7280' }}>Est. Time</span>
          <span style={{ fontFamily: F, fontSize: '7.5px', fontWeight: 600, color: '#050A5F', marginTop: '2px' }}>53 minutes ago</span>
          <span style={{ fontFamily: F, fontSize: '6.5px', color: '#6B7280' }}>Posted</span>
        </div>
      </div>

      {/* Bottom Section: Dots Pagination + Footer Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 2 }}>
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

/* Helper Styles */
const mintTagStyle = {
  background: '#22D3A6',
  color: '#FFFFFF',
  fontFamily: F,
  fontSize: '6.5px',
  fontWeight: 600,
  padding: '2px 6px',
  borderRadius: '8px',
  display: 'inline-block',
};

const infoRowStyle = {
  display: 'flex',
  justify: 'space-between',
  justifyContent: 'space-between',
  fontFamily: F,
  fontSize: '6.5px',
  color: '#6B7280',
};

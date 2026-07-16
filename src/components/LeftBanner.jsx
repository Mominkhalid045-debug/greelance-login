/**
 * LeftBanner — 40% blue left panel.
 * Matches the reference Vercel app exactly:
 * - "Hello! Future" bold heading
 * - Green "Purchase Coin" pill button with G coin avatar
 * - White card widget (Connect Wallet / Buy Token tabs + token calculator)
 * - 3 dot indicators
 * - Footer text
 */

function HeroWidget() {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '22px 24px 18px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '340px',
        margin: '0 auto',
      }}
    >
      {/* Tab bar */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button
          type="button"
          style={{
            background: '#EEF0FF',
            color: '#3438C6',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
            cursor: 'pointer',
          }}
        >
          Connect Wallet
        </button>
        <button
          type="button"
          style={{
            background: '#3438C6',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
            cursor: 'pointer',
          }}
        >
          Buy Token
        </button>
      </div>

      {/* Choose preferred */}
      <p style={{ fontSize: '12px', fontWeight: 700, color: '#1A1F36', marginBottom: '10px', fontFamily: "'Poppins', sans-serif" }}>
        Choose you preferred
      </p>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
        {/* Ethereum */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '12px',
            border: '1.5px solid #E3E7F1',
            background: '#F9FAFD',
            flex: 1,
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#EEF0F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#627EEA">
              <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
            </svg>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A1F36', fontFamily: "'Poppins', sans-serif" }}>Ethereum</span>
        </div>
        {/* DAI */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '12px',
            border: '1.5px solid #E3E7F1',
            background: '#F9FAFD',
            flex: 1,
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#F4B731',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#fff', fontSize: '13px', fontWeight: 700 }}>D</span>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A1F36', fontFamily: "'Poppins', sans-serif" }}>DAI</span>
        </div>
      </div>

      {/* Current price note */}
      <p style={{ fontSize: '9px', color: '#3438C6', textAlign: 'right', marginBottom: '8px', fontFamily: "'Poppins', sans-serif" }}>
        *Current GRL Price: GRS 738
      </p>

      {/* Amount fields */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '12px' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '9px', color: '#6B7280', marginBottom: '4px', fontFamily: "'Poppins', sans-serif" }}>Enter Amount</p>
          <div
            style={{
              borderRadius: '10px',
              padding: '8px 12px',
              background: '#EEF0FF',
              fontSize: '14px',
              fontWeight: 700,
              color: '#3438C6',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            $2.51
          </div>
        </div>
        <span style={{ fontSize: '16px', fontWeight: 700, color: '#1A1F36', paddingBottom: '8px' }}>=</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '9px', color: '#6B7280', marginBottom: '4px', fontFamily: "'Poppins', sans-serif" }}>GRL Token</p>
          <div
            style={{
              borderRadius: '10px',
              padding: '8px 12px',
              background: '#F9FAFD',
              fontSize: '14px',
              fontWeight: 700,
              color: '#1A1F36',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            0.0736
          </div>
        </div>
      </div>

      {/* Progress bar labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#9CA3AF', marginBottom: '4px', fontFamily: "'Poppins', sans-serif" }}>
        <span>0 GRL</span>
        <span>500 GRL</span>
      </div>
      {/* Progress bar */}
      <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: '#E5E7EB', marginBottom: '4px' }}>
        <div style={{ width: '45%', height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg, #4ADE80, #3944D4)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#9CA3AF', marginBottom: '16px', fontFamily: "'Poppins', sans-serif" }}>
        <span>Blockchain</span>
        <span>Soft cap</span>
      </div>

      {/* Buy Token button */}
      <button
        type="button"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '24px',
          background: 'linear-gradient(90deg, #3944D4, #3438C6)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '13px',
          fontFamily: "'Poppins', sans-serif",
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Buy Token
      </button>
    </div>
  );
}

function FloatingCoin() {
  return (
    <div
      className="animate-float"
      style={{
        position: 'absolute',
        right: 'calc(50% - 200px)',
        bottom: '180px',
        zIndex: 3,
        width: '72px',
        height: '72px',
        filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.30))',
        pointerEvents: 'none',
      }}
    >
      <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
        <defs>
          <radialGradient id="coinGrad" cx="38%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="55%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#B86A00" />
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#coinGrad)" stroke="#E89A10" strokeWidth="2" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
        <text x="40" y="52" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="28" fontWeight="700" fill="white">G</text>
      </svg>
    </div>
  );
}

function PaginationDots() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '20px 0 16px' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: i === 0 ? '22px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === 0 ? '#4ADE80' : 'rgba(255,255,255,0.40)',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

export default function LeftBanner() {
  return (
    <aside
      style={{
        width: '42%',
        flexShrink: 0,
        height: '100%',
        background: 'linear-gradient(155deg, #3B40CE 0%, #2D31A8 60%, #2430C0 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px, 3vh, 48px) clamp(24px, 3vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Greelance promotion panel"
    >
      {/* Background blob decorations */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '280px', height: '280px',
        borderRadius: '50%',
        background: 'rgba(74,222,128,0.08)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '220px', height: '220px',
        borderRadius: '50%',
        background: 'rgba(57,68,212,0.40)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Heading */}
      <h2
        className="animate-fade-up"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(30px, 3.5vw, 56px)',
          color: '#fff',
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: 'clamp(14px, 2vh, 28px)',
        }}
      >
        Hello! Future
      </h2>

      {/* Purchase Coin button */}
      <button
        type="button"
        id="purchase-coin-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#4ADE80',
          border: 'none',
          borderRadius: '30px',
          padding: '10px 22px',
          color: '#fff',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(13px, 1.1vw, 16px)',
          cursor: 'pointer',
          marginBottom: 'clamp(16px, 2.5vh, 32px)',
          boxShadow: '0 6px 20px rgba(74,222,128,0.40)',
          transition: 'transform 0.15s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Purchase Coin"
      >
        Purchase Coin
        {/* Coin avatar */}
        <div
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD700, #F5A623)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: 800,
            color: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.20)',
          }}
        >
          G
        </div>
      </button>

      {/* Hero Widget + floating coin wrapper */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
        <HeroWidget />
        <FloatingCoin />
      </div>

      {/* Pagination dots */}
      <PaginationDots />

      {/* Footer */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: '#fff',
          fontSize: 'clamp(11px, 1.1vw, 16px)',
          letterSpacing: '1.5px',
          marginBottom: '4px',
        }}>
          THANK YOU FOR CHOOSING GREELANCE!
        </p>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          color: '#86EFAC',
          fontSize: 'clamp(9px, 0.75vw, 12px)',
        }}>
          Your commitment means the world to us.
        </p>
      </div>
    </aside>
  );
}

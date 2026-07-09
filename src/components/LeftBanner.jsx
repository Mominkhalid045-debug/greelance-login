import coinIcon from '../assets/coin.svg';

/**
 * Inline SVG illustration of the GRL Token purchase UI widget
 * that appears in the left banner, matching the Figma design.
 */
function HeroIllustration() {
  return (
    <div
      className="relative mx-auto animate-fade-up"
      style={{ width: '100%', maxWidth: '340px', marginBottom: '20px' }}
      aria-hidden="true"
    >
      {/* Main widget card */}
      <div
        style={{
          background: 'white',
          borderRadius: '18px',
          padding: '20px 22px 16px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.22)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Tab bar */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            className="text-xs font-semibold px-4 py-1.5 rounded-full"
            style={{ background: '#EEF0FF', color: '#3438C6' }}
          >
            Connect Wallet
          </button>
          <button
            type="button"
            className="text-xs font-semibold px-4 py-1.5 rounded-full text-white"
            style={{ background: '#3438C6' }}
          >
            Buy Token
          </button>
        </div>

        {/* Choose preferred */}
        <p className="text-xs font-semibold mb-2" style={{ color: '#202B52' }}>
          Choose you preferred
        </p>
        <div className="flex gap-3 mb-3">
          {/* Ethereum */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl border"
            style={{ borderColor: '#E3E7F1', background: '#F9FAFD', flex: 1 }}
          >
            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#627EEA">
                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
              </svg>
            </div>
            <span className="text-xs font-medium" style={{ color: '#202B52' }}>Ethereum</span>
          </div>
          {/* DAI */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl border"
            style={{ borderColor: '#E3E7F1', background: '#F9FAFD', flex: 1 }}
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#F4B731' }}>
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="text-xs font-medium" style={{ color: '#202B52' }}>DAI</span>
          </div>
        </div>

        {/* Current price label */}
        <p className="text-right text-xs mb-2" style={{ color: '#3438C6', fontSize: '9px' }}>
          *Current GRL Price: GRS 738
        </p>

        {/* Amounts row */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1">
            <p className="text-xs mb-1" style={{ color: '#68728C', fontSize: '9px' }}>Enter Amount</p>
            <div
              className="rounded-xl px-3 py-2 text-xs font-semibold"
              style={{ background: '#F0F3FF', color: '#3438C6', fontSize: '13px' }}
            >
              $2.51
            </div>
          </div>
          <span className="text-sm font-bold" style={{ color: '#202B52', marginTop: '14px' }}>=</span>
          <div className="flex-1">
            <p className="text-xs mb-1" style={{ color: '#68728C', fontSize: '9px' }}>GRL Token</p>
            <div
              className="rounded-xl px-3 py-2 text-xs font-bold"
              style={{ background: '#F9FAFD', color: '#202B52', fontSize: '13px' }}
            >
              0.0736
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex justify-between text-xs mb-1" style={{ fontSize: '9px', color: '#68728C' }}>
          <span>0 GRL</span><span>500 GRL</span>
        </div>
        <div
          className="w-full h-2 rounded-full mb-3"
          style={{ background: '#E3E7F1' }}
        >
          <div
            className="h-2 rounded-full"
            style={{ width: '45%', background: 'linear-gradient(90deg,#5DE083,#3944D4)' }}
          />
        </div>

        {/* Blockchain / Soft cap */}
        <div className="flex justify-between text-xs mb-3" style={{ fontSize: '9px', color: '#68728C' }}>
          <span>Blockchain</span><span>Soft cap</span>
        </div>

        {/* Buy Token button */}
        <button
          type="button"
          className="w-full py-2 rounded-full text-white font-semibold text-xs"
          style={{ background: 'linear-gradient(90deg,#3944D4,#3438C6)' }}
        >
          Buy Token
        </button>
      </div>

      {/* Floating 3-D coin */}
      <div
        style={{
          position: 'absolute',
          right: '-30px',
          bottom: '30px',
          zIndex: 3,
          width: '80px',
          height: '80px',
          filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.30))',
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <defs>
            <radialGradient id="cg" cx="38%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFE066"/>
              <stop offset="55%" stopColor="#F5A623"/>
              <stop offset="100%" stopColor="#B86A00"/>
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="38" fill="url(#cg)" stroke="#E89A10" strokeWidth="2"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
          {/* G emblem */}
          <text x="40" y="52" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="28" fontWeight="700" fill="white">G</text>
        </svg>
      </div>

      {/* Blurred circle decoration */}
      <div
        style={{
          position: 'absolute',
          left: '-20px',
          top: '50%',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'rgba(93,224,131,0.25)',
          filter: 'blur(18px)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

/**
 * PaginationDots — three animated indicator dots.
 */
function PaginationDots({ active = 0 }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8" aria-label="Slide indicators">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={i === active ? 'animate-pulse-dot' : ''}
          style={{
            width: i === active ? '22px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i === active ? '#5DE083' : 'rgba(255,255,255,0.45)',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

/**
 * LeftBanner — the 40% blue left panel of the split layout.
 */
export default function LeftBanner() {
  return (
    <aside
      className="hidden md:flex flex-col items-center justify-center"
      style={{
        width: '617.25px',
        maxWidth: '100%',
        height: '100%',
        background: 'linear-gradient(160deg, #3B3FCE 0%, #2D31A8 100%)',
        padding: 'clamp(20px, 3vh, 48px) 40px clamp(20px, 3vh, 50px)',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
      aria-label="Greelance promotion panel"
    >
      {/* Background blob decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(93,224,131,0.08)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'rgba(57,68,212,0.35)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top heading */}
      <h2
        className="font-poppins font-bold text-white text-center animate-fade-up"
        style={{ fontSize: 'clamp(28px, 3.5vw, 54px)', fontWeight: 700, lineHeight: 1.15, marginBottom: 'clamp(12px, 2vh, 28px)' }}
      >
        Hello! Future
      </h2>

      {/* Purchase Coin button */}
      <button
        type="button"
        id="purchase-coin-btn"
        className="flex items-center gap-2 font-poppins font-medium text-white
                   transition-transform duration-150 hover:scale-105 active:scale-95 focus-ring"
        style={{
          width: 'clamp(160px, 16vw, 220px)',
          height: '52px',
          background: '#5DE083',
          borderRadius: '30px',
          fontSize: 'clamp(13px, 1.1vw, 16px)',
          justifyContent: 'center',
          marginBottom: 'clamp(16px, 2vh, 30px)',
          boxShadow: '0 6px 20px rgba(93,224,131,0.40)',
        }}
        aria-label="Purchase Coin"
      >
        Purchase Coin
        <img src={coinIcon} alt="" width={26} height={26} aria-hidden="true" />
      </button>

      {/* Hero illustration */}
      <HeroIllustration />

      {/* Pagination dots */}
      <PaginationDots active={0} />

      {/* Footer text */}
      <div className="text-center">
        <p
          className="font-poppins font-bold text-white tracking-widest"
          style={{ fontSize: 'clamp(13px, 1.5vw, 20px)', letterSpacing: '1.5px' }}
        >
          THANK YOU FOR CHOOSING GREELANCE!
        </p>
        <p
          className="font-poppins mt-1"
          style={{ fontSize: 'clamp(10px, 0.85vw, 12px)', color: '#8CF0B8' }}
        >
          Your commitment means the world to us.
        </p>
      </div>
    </aside>
  );
}

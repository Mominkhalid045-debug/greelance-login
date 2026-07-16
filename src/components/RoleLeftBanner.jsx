export default function RoleLeftBanner() {
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
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <h2
        className="animate-fade-up"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(28px, 3vw, 42px)',
          color: '#fff',
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: '40px',
          zIndex: 2,
        }}
      >
        Join Our Decentralized<br />Talent Network
      </h2>

      {/* Decorative center cards graphic (placeholder for the real image) */}
      <div 
        className="animate-fade-up"
        style={{
          width: '100%',
          maxWidth: '360px',
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '40px',
          zIndex: 2,
        }}
      >
        <div style={{
          width: '80%',
          height: '60%',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          transform: 'rotate(-5deg) translateX(-20px)',
          position: 'absolute',
        }}>
          <div style={{ height: '8px', width: '60%', background: '#E5E7EB', borderRadius: '4px', marginBottom: '8px' }} />
          <div style={{ height: '8px', width: '40%', background: '#E5E7EB', borderRadius: '4px', marginBottom: '24px' }} />
          <div style={{ height: '40px', width: '100%', background: '#F3F4F6', borderRadius: '8px', marginBottom: '8px' }} />
          <div style={{ height: '40px', width: '100%', background: '#F3F4F6', borderRadius: '8px' }} />
        </div>
        
        <div style={{
          width: '85%',
          height: '65%',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          transform: 'rotate(2deg) translateX(10px)',
          position: 'absolute',
          zIndex: 3,
        }}>
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '14px', textAlign: 'center', marginBottom: '12px' }}>Job Offer</h3>
          <div style={{ height: '6px', width: '90%', background: '#E5E7EB', borderRadius: '3px', marginBottom: '6px' }} />
          <div style={{ height: '6px', width: '70%', background: '#E5E7EB', borderRadius: '3px', marginBottom: '16px' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '10px', color: '#6B7280' }}>Category</span>
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#3741D4' }}>Product Design</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '10px', color: '#6B7280' }}>Budget</span>
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#3741D4' }}>$100-$200</span>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
            <div style={{ flex: 1, height: '24px', background: '#3741D4', borderRadius: '12px' }} />
            <div style={{ flex: 1, height: '24px', border: '1px solid #3741D4', borderRadius: '12px' }} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', zIndex: 2 }}>
        <div style={{ width: '24px', height: '8px', borderRadius: '4px', background: '#4ADE80' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.4)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.4)' }} />
      </div>

      <h3 style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '18px',
        color: '#fff',
        zIndex: 2,
      }}>
        Welcome To A New Era Of Work
      </h3>
    </aside>
  );
}

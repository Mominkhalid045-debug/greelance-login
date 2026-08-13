import { useState, useRef, useEffect } from 'react';
import defaultAvatar from '../assets/default_avatar.svg';

export default function EditProfilePictureModal({ isOpen, onClose, currentImage, onSaveImage }) {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  
  const [imageSrc, setImageSrc] = useState(currentImage || defaultAvatar);
  const [zoom, setZoom] = useState(1);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    setImageSrc(currentImage || null);
    setHasError(false);
  }, [currentImage, isOpen]);

  if (!isOpen) return null;

  // File Upload Handler
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setHasError(true);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setHasError(false);
        stopCamera();
      };
      reader.readAsDataURL(file);
    }
  };

  // Camera Handler
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      setIsCameraActive(true);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Camera access denied or unavailble:", err);
      // Fallback sample snapshot if camera is denied in webview
      setHasError(true);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = 300;
      canvas.height = 300;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, 300, 300);
      const dataUrl = canvas.toDataURL('image/png');
      setImageSrc(dataUrl);
      setHasError(false);
      stopCamera();
    }
  };

  const handleSave = () => {
    if (hasError || !imageSrc) return;
    onSaveImage(imageSrc);
    onClose();
  };

  const handleDelete = () => {
    setImageSrc(null);
    setHasError(false);
    stopCamera();
  };

  const handleCloseModal = () => {
    stopCamera();
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(5, 10, 95, 0.4)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        fontFamily: "'Lexend', 'Poppins', sans-serif",
      }}
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/jpeg,image/png,image/jpg,image/webp"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Modal Box */}
      <div
        style={{
          width: '717px',
          maxWidth: '92vw',
          background: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(5, 10, 95, 0.15)',
          padding: '24px 32px 32px 32px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {/* Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#050A5F' }}>
              Edit Profile Picture
            </h3>
            {hasError && (
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '14px' }}>🔴</span> Error: This picture is not upto the requirements.
              </span>
            )}
          </div>
          
          <button
            onClick={handleCloseModal}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              color: '#6B7280',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Main Content (2 Columns) */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginBottom: '24px' }}>
          
          {/* LEFT COLUMN: Main Avatar / Crop Area (280.5px x 280.5px) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            
            <div
              style={{
                width: '280.5px',
                height: '280.5px',
                borderRadius: imageSrc ? '50%' : '50%',
                border: hasError ? '2.5px solid #EF4444' : '2.5px solid #3038BD',
                background: '#F3F7FF',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: hasError ? '0 0 12px rgba(239, 68, 68, 0.2)' : '0 8px 24px rgba(48, 56, 189, 0.12)',
              }}
            >
              {isCameraActive ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : imageSrc ? (
                <>
                  <img
                    src={imageSrc}
                    alt="Uploaded Face"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: `scale(${zoom})`,
                      transition: 'transform 0.1s ease-out',
                    }}
                  />
                  {/* Circle Dashed Guide */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '10px',
                      borderRadius: '50%',
                      border: '1.5px dashed rgba(255, 255, 255, 0.85)',
                      pointerEvents: 'none',
                    }}
                  />
                </>
              ) : (
                /* Default Vector Avatar Placeholder */
                <svg width="240" height="240" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" fill="#E6EFFF" />
                  {/* Head & Neck */}
                  <circle cx="100" cy="75" r="32" fill="#0A0F2E" />
                  <path d="M70 75C70 58.4 83.4 45 100 45C116.6 45 130 58.4 130 75V80H70V75Z" fill="#050A5F" />
                  {/* White face inner */}
                  <path d="M78 80C78 68 88 58 100 58C112 58 122 68 122 80V92C122 104 112 114 100 114C88 114 78 104 78 92V80Z" fill="#FFFFFF" />
                  {/* Green Shirt / Body */}
                  <path d="M45 165C45 135 70 118 100 118C130 118 155 135 155 165V180H45V165Z" fill="#22C55E" />
                </svg>
              )}
            </div>

            {/* Controls Bar under Avatar (Zoom & Delete) */}
            {imageSrc && !isCameraActive && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', justifyContent: 'center' }}>
                <button
                  onClick={handleDelete}
                  title="Delete image"
                  style={{
                    background: '#F3F4F6',
                    border: 'none',
                    borderRadius: '8px',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6B7280',
                    fontSize: '14px',
                  }}
                >
                  🗑️
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, maxWidth: '200px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#6B7280' }}>Zoom</span>
                  <span style={{ fontSize: '14px', cursor: 'pointer', userSelect: 'none' }} onClick={() => setZoom(Math.max(1, zoom - 0.2))}>-</span>
                  <input
                    type="range"
                    min="1"
                    max="2.5"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    style={{
                      flex: 1,
                      accentColor: '#10B981',
                      height: '4px',
                      borderRadius: '2px',
                      cursor: 'pointer',
                    }}
                  />
                  <span style={{ fontSize: '14px', cursor: 'pointer', userSelect: 'none' }} onClick={() => setZoom(Math.min(2.5, zoom + 0.2))}>+</span>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Instructions & Preview Circles */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: 700, color: '#050A5F' }}>
                Show clients the best version of yourself!
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', lineHeight: 1.5 }}>
                {imageSrc 
                  ? "Arrange your face in the marked circle. Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not allowed."
                  : "Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not allowed."}
              </p>
            </div>

            {/* 4 Preview Circles of decreasing sizes */}
            <div style={{ marginTop: '12px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                Preview Sizes
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {[64, 48, 36, 24].map((size, idx) => (
                  <div
                    key={size}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      borderRadius: '50%',
                      background: '#F3F7FF',
                      border: '1.5px solid #E6EFFF',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    }}
                  >
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={`Preview ${idx}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transform: `scale(${zoom})`,
                        }}
                      />
                    ) : (
                      <div style={{ width: '60%', height: '60%', borderRadius: '50%', background: '#22C55E' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid #F3F4F6', paddingTop: '16px' }}>
          {isCameraActive ? (
            <>
              <button
                onClick={stopCamera}
                style={{
                  background: 'transparent',
                  color: '#6B7280',
                  border: '1px solid #D1D5DB',
                  borderRadius: '18px',
                  padding: '8px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={capturePhoto}
                style={{
                  background: '#22C55E',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '8px 24px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                }}
              >
                📸 Take Snapshot
              </button>
            </>
          ) : !imageSrc ? (
            <>
              <button
                onClick={startCamera}
                style={{
                  background: '#3038BD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '8px 24px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(48, 56, 189, 0.25)',
                }}
              >
                <span>Camera</span>
                <span style={{ fontSize: '14px' }}>📷</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  background: '#FFFFFF',
                  color: '#3038BD',
                  border: '1.5px solid #3038BD',
                  borderRadius: '18px',
                  padding: '8px 24px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>Upload Picture</span>
                <span style={{ fontSize: '14px' }}>🖼️</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => fileInputRef.current?.click()}
                style={{
                  background: '#F3F7FF',
                  color: '#3038BD',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '8px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Change Photo
              </button>

              <button
                onClick={handleSave}
                disabled={hasError}
                style={{
                  background: hasError ? '#D1D5DB' : '#3038BD',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '8px 32px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: hasError ? 'not-allowed' : 'pointer',
                  boxShadow: hasError ? 'none' : '0 4px 12px rgba(48, 56, 189, 0.25)',
                }}
              >
                Save
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

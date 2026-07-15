import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export default function VerifyOTP() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp.join(''));
    navigate('/new-password');
  };

  return (
    <div
      className="animate-slide-in login-card relative"
      role="main"
      aria-label="Verify OTP form"
      style={{
        width: '477.75px',
        background: '#FFFFFF',
        borderRadius: '40.5px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        padding: '48px',
      }}
    >
      <Link
        to="/forgot-password"
        className="absolute top-12 left-12 text-[#6F7894] hover:text-[#202B52] transition-colors"
        aria-label="Back"
      >
        <ArrowLeft size={24} />
      </Link>
      
      <div className="flex justify-center mb-6">
        <Logo />
      </div>

      <h1
        className="font-poppins text-center"
        style={{
          fontSize: '26px',
          fontWeight: 700,
          color: '#202B52',
          marginBottom: '12px',
        }}
      >
        Verify OTP
      </h1>
      
      <p 
        className="text-center font-poppins mb-8"
        style={{ color: '#6F7894', fontSize: '14px' }}
      >
        Enter the 4-digit code sent to your email.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-16 text-center text-2xl font-semibold text-[#202B52] bg-white border border-[#E0E5F2] rounded-[16px] focus:border-[#4F5BFF] focus:ring-1 focus:ring-[#4F5BFF] outline-none transition-all"
            />
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <button
            type="button"
            className="font-poppins font-medium transition-opacity hover:opacity-75 focus-ring rounded"
            style={{ fontSize: '14px', color: '#4F5BFF' }}
          >
            Resend Code
          </button>
        </div>

        <Button type="submit" id="verify-btn">
          Verify
        </Button>
      </form>
    </div>
  );
}

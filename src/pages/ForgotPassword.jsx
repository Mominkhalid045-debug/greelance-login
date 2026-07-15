import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    // Move to verify OTP for demo purposes
    navigate('/verify-otp');
  };

  return (
    <div
      className="animate-slide-in login-card relative"
      role="main"
      aria-label="Forgot Password form"
      style={{
        width: '477.75px',
        background: '#FFFFFF',
        borderRadius: '40.5px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        padding: '48px',
      }}
    >
      <Link
        to="/login"
        className="absolute top-12 left-12 text-[#6F7894] hover:text-[#202B52] transition-colors"
        aria-label="Back to login"
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
        Forgot Password?
      </h1>
      
      <p 
        className="text-center font-poppins mb-8"
        style={{ color: '#6F7894', fontSize: '14px' }}
      >
        Enter your email address to receive a verification code.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <div className="mt-8">
          <Button type="submit" id="send-code-btn">
            Send Code
          </Button>
        </div>
      </form>
    </div>
  );
}

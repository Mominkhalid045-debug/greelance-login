import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Assessment() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState('list'); // 'list' | 'instructions' | 'test' | 'result'
  const [testTime, setTestTime] = useState(80); // 1:20 in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [testResult, setTestResult] = useState(null); // 'pass' | 'fail'
  const [resumeStatus, setResumeStatus] = useState(false);

  const questions = [
    {
      q: 'Which language is primarily used for writing Smart Contracts on Ethereum?',
      options: ['Solidity', 'Python', 'Swift', 'PHP']
    },
    {
      q: 'What is the purpose of gas fees in blockchain transactions?',
      options: ['To compensate miners/validators for computational energy', 'To speed up internet speed', 'To pay web domain hostings', 'To store images on server']
    },
    {
      q: 'Which of the following is a popular React state management hook?',
      options: ['useState', 'useDatabase', 'useServer', 'useCompiler']
    }
  ];

  useEffect(() => {
    let timer;
    if (activeStep === 'test' && testTime > 0) {
      timer = setInterval(() => setTestTime(t => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [activeStep, testTime]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s} / 02:36`;
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Complete test
      setTestResult('pass');
      setActiveStep('result');
    }
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#EEF0FA', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header / Progress Bar */}
      <div style={{ display: 'flex', background: '#fff', padding: '16px 32px', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/connect-wallet')}
          style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#22C55E', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Steps */}
        <div style={{ display: 'flex', flex: 1, gap: '40px' }}>
          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/form')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 1</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Upload Resume</p>
          </div>
          
          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/setup-profile')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 2</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Setup Profile</p>
          </div>

          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/skills')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 3</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Choose Skill</p>
          </div>

          <div style={{ padding: '8px 0', opacity: 0.5, cursor: 'pointer' }} onClick={() => navigate('/connect-wallet')}>
            <p style={{ margin: 0, fontSize: '12px', color: '#6B7280', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 4</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#9CA3AF', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Connect Wallet</p>
          </div>
          
          <div style={{ background: '#E0E7FF', padding: '8px 24px', borderRadius: '8px', borderLeft: '4px solid #3741D4' }}>
            <p style={{ margin: 0, fontSize: '12px', color: '#22C55E', fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>Step 5</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#3741D4', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>Complete Profile</p>
          </div>
        </div>

        {/* Exit Icon */}
        <button onClick={() => navigate('/')} style={{ width: '48px', height: '48px', borderRadius: '24px', background: '#F3F4F6', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
          </svg>
        </button>
      </div>

      {/* Main Content View */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* VIEW 1: Test List */}
        {activeStep === 'list' && (
          <div style={{ width: '100%', maxWidth: '800px', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px' }}>
                Start Assessment
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', margin: 0 }}>
                Your profile is all set. Now you have to go through following tests to get onboard.
              </p>
            </div>

            {/* Test Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', border: '1px solid #E5E7EB', borderRadius: '16px', background: '#F9FAFB' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#0A0F2E' }}>Senior Blockchain Developer Assessment</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6B7280' }}>Number of Questions: 15 • Time: 15 mins</p>
                </div>
                <button 
                  onClick={() => setActiveStep('instructions')}
                  style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '20px', padding: '10px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
                >
                  Start Test
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', border: '1px solid #E5E7EB', borderRadius: '16px', background: '#F9FAFB' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 700, color: '#0A0F2E' }}>UI / UX Test Assessment</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6B7280' }}>Number of Questions: 10 • Time: 10 mins</p>
                </div>
                <button 
                  onClick={() => setActiveStep('instructions')}
                  style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '20px', padding: '10px 24px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
                >
                  Start Test
                </button>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#9CA3AF', textAlign: 'center', margin: 0 }}>
              *You can also take it within two days by following the link sent to your mail.
            </p>
          </div>
        )}

        {/* VIEW 2: Instructions & Camera Reminder */}
        {activeStep === 'instructions' && (
          <div style={{ width: '100%', maxWidth: '700px', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#0A0F2E', marginBottom: '12px' }}>
              Prepare For Test
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
              Read the instructions carefully to answer the questions.
            </p>

            {/* Camera Frame Preview */}
            <div style={{ width: '160px', height: '160px', borderRadius: '80px', background: '#E0E7FF', border: '4px stroke #3741D4', borderStyle: 'dashed', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '40px' }}>📷</span>
            </div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#3741D4', marginBottom: '32px' }}>
              Reminder: Show clients the best version of yourself! Set your face in the circle.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button 
                onClick={() => setActiveStep('list')}
                style={{ background: 'transparent', color: '#6B7280', border: '1px solid #D1D5DB', borderRadius: '30px', padding: '12px 28px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
              >
                Skip Test
              </button>
              <button 
                onClick={() => setActiveStep('test')}
                style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '12px 36px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}
              >
                Join Assessment →
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: Interactive Question & Timer */}
        {activeStep === 'test' && (
          <div style={{ width: '100%', maxWidth: '800px', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            
            {/* Header Timer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #E5E7EB', paddingBottom: '16px' }}>
              <span style={{ fontWeight: 700, color: '#3741D4', fontSize: '16px' }}>Section 1 • Senior Blockchain Developer</span>
              <span style={{ background: '#FEF3C7', color: '#D97706', fontWeight: 700, padding: '6px 16px', borderRadius: '20px', fontSize: '14px' }}>
                ⏱ {formatTime(testTime)}
              </span>
            </div>

            {/* Question Text */}
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0A0F2E', marginBottom: '24px', lineHeight: 1.5 }}>
              Q{currentQuestion + 1}: {questions[currentQuestion].q}
            </h3>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {questions[currentQuestion].options.map((opt, idx) => (
                <div
                  key={opt}
                  onClick={() => setSelectedOption(idx)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: selectedOption === idx ? '2px solid #3741D4' : '1px solid #E5E7EB',
                    background: selectedOption === idx ? '#EEF2FF' : '#F9FAFB',
                    color: selectedOption === idx ? '#3741D4' : '#374151',
                    fontWeight: selectedOption === idx ? 600 : 500,
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.2s'
                  }}
                >
                  {String.fromCharCode(65 + idx)}. {opt}
                </div>
              ))}
            </div>

            {/* Submit Question */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
                style={{
                  background: selectedOption !== null ? '#3741D4' : '#9CA3AF',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '12px 36px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: selectedOption !== null ? 'pointer' : 'not-allowed'
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Submit Test'}
              </button>
            </div>

          </div>
        )}

        {/* VIEW 4: Result Modal & Resume Generation */}
        {activeStep === 'result' && (
          <div style={{ width: '100%', maxWidth: '600px', background: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            
            {testResult === 'pass' ? (
              <>
                <div style={{ width: '80px', height: '80px', borderRadius: '40px', background: '#DCFCE7', color: '#166534', fontSize: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  ✓
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px' }}>
                  Congratulations!
                </h2>
                <p style={{ fontSize: '15px', color: '#22C55E', fontWeight: 600, marginBottom: '24px' }}>
                  You have passed the Skill Test
                </p>

                {resumeStatus ? (
                  <div style={{ background: '#F3F4F6', borderRadius: '16px', padding: '20px', marginBottom: '24px' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600, color: '#374151' }}>Your Greelance Verified Profile is Ready!</p>
                    <button style={{ background: '#22C55E', color: '#fff', border: 'none', borderRadius: '20px', padding: '10px 24px', fontWeight: 600, cursor: 'pointer' }}>
                      Download Verified Resume
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setResumeStatus(true)}
                    style={{ background: '#EEF2FF', color: '#3741D4', border: '1px solid #3741D4', borderRadius: '20px', padding: '10px 24px', fontWeight: 600, marginBottom: '24px', cursor: 'pointer' }}
                  >
                    Generate Verified Resume
                  </button>
                )}

                <div>
                  <button 
                    onClick={() => navigate('/dashboard')}
                    style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '14px 40px', fontWeight: 600, fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(55,65,212,0.3)' }}
                  >
                    Go to Home Dashboard →
                  </button>
                </div>
              </>
            ) : (
              <>
                <div style={{ width: '80px', height: '80px', borderRadius: '40px', background: '#FEE2E2', color: '#991B1B', fontSize: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  ✕
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0A0F2E', marginBottom: '8px' }}>
                  Ops! Failed
                </h2>
                <p style={{ fontSize: '15px', color: '#EF4444', fontWeight: 600, marginBottom: '24px' }}>
                  You are not qualified for Greelance at this time.
                </p>
                <button 
                  onClick={() => setActiveStep('list')}
                  style={{ background: '#3741D4', color: '#FFFFFF', border: 'none', borderRadius: '30px', padding: '12px 36px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}
                >
                  Try Again
                </button>
              </>
            )}

          </div>
        )}

      </div>

    </div>
  );
}

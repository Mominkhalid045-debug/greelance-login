import LoginCard from '../components/LoginCard';

/**
 * LoginSection — right 60% panel that centers the LoginCard.
 */
export default function LoginSection() {
  return (
    <section
      className="flex flex-1 items-center justify-center"
      style={{ background: '#F8FAFF', height: '100%', overflowY: 'auto' }}
      aria-label="Login section"
    >
      <LoginCard />
    </section>
  );
}

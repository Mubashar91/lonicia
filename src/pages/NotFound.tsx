export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-primary-gold font-poppins font-bold text-5xl md:text-6xl mb-4">404</h1>
        <p className="text-white/80 font-poppins text-base md:text-lg mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block bg-primary-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition uppercase tracking-wide"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Price List', path: '/price-list' },
    { name: 'Shops', path: '/shops' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-primary-dark border-b border-white/5">
      <nav className="container mx-auto px-[30px] lg:px-[90px] py-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpeg" alt="MK" className="h-10 md:h-16 lg:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`link-underline text-neutral-300 text-sm tracking-wide transition-colors hover:text-white ${
                  location.pathname === item.path ? 'text-white font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA (Desktop) */}
          <div className="hidden lg:flex ml-auto">
            <a
              href="https://n1275221.alteg.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-white px-4 py-2 rounded-md font-bold uppercase text-xs tracking-wider shadow-sm border border-black/30 hover:brightness-95 transition"
            >
              Book an Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 transition-colors hover:bg-gray-800 rounded ${
                  location.pathname === item.path
                    ? 'text-white font-semibold bg-gray-800'
                    : 'text-neutral-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://n1275221.alteg.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center w-full bg-[#D4AF37] text-white px-4 py-2 rounded-md font-bold uppercase text-xs tracking-wider border border-black/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Book an Appointment
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


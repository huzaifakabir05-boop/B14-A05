import { useState } from 'react';
import logoText from '../assets/logo-text.png';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="flex items-center">
          <img src={logoText} alt="Dev Stack" className="h-8" />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <li key={link}>
              <a
                href="#"
                className={
                  idx === 0
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600 transition-colors'
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sign In
          </a>

          <a
            href="#"
            className="rounded-full bg-pink-600 px-4 md:px-5 py-2 text-sm font-semibold text-white hover:bg-pink-700 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    idx === 0
                      ? 'text-pink-600'
                      : 'text-gray-700 hover:text-pink-600 transition-colors'
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
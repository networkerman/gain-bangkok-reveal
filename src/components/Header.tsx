
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://netcorecloud.com/wp-content/themes/netcore/assets/images/logo.svg" 
            alt="Netcore Logo" 
            className="h-10"
          />
          <span className={`font-bold text-xl ${isScrolled ? 'text-netcore-purple' : 'text-white'}`}>
            GAIN 2025
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Agenda", "Guidelines", "Code of Conduct", "Contact", "Resources"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`font-medium hover:text-netcore-gold transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={closeMenu}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-netcore-purple p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            {["Home", "Agenda", "Guidelines", "Code of Conduct", "Contact", "Resources"].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-medium text-gray-700 hover:text-netcore-gold transition-colors"
                onClick={closeMenu}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

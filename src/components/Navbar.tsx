import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo7 from '@/assets/logos/logo7.png'; // Add this import

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position (only on home page)
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname === '/') {
        // Already on home, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      setActiveSection(sectionId);
    }
  };

  const isActive = (href: string) => {
    if (href === '/about') return location.pathname === '/about';
    if (href === '/contact') return location.pathname === '/contact';
    if (href.startsWith('/#')) {
      return location.pathname === '/' && activeSection === href.substring(2);
    }
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - UPDATED WITH logo7.png */}
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setActiveSection('home')}>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden border-2 border-primary/50 transition-all duration-300 group-hover:border-primary group-hover:scale-105">
                {/* Replace text with logo7 image */}
                <img
                  src={logo7}
                  alt="Hirazed Design Logo"
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <span className="text-foreground font-semibold text-lg tracking-wide hidden sm:block">
                HIRAZED <span className="text-primary">DESIGN</span>
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`nav-link ${isActive(link.href) ? 'active text-primary' : ''}`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`nav-link ${isActive(link.href) ? 'active text-primary' : ''}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button 
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            link.href.startsWith('/#') ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 0.05}s` : '0s',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 0.05}s` : '0s',
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
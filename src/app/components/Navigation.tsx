import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isHome = location.pathname === '/';

  const homeNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const pageLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: '/resume' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-xl font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {'<JY/>'}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHome ? (
              <>
                {homeNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  to="/projects"
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  Projects
                </Link>
                <Link
                  to="/resume"
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  Resume
                </Link>
              </>
            ) : (
              pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors font-mono ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {isHome ? (
              <>
                {homeNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  to="/projects"
                  className="block text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  Projects
                </Link>
                <Link
                  to="/resume"
                  className="block text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  Resume
                </Link>
              </>
            ) : (
              pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block transition-colors font-mono ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

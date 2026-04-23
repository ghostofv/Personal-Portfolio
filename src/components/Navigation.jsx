import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  const navClass = `${isScrolled || location.pathname !== '/' ? 'solid scrolled' : ''} ${isOpen ? 'nav-open' : ''}`.trim();

  return (
    <nav id="nav" className={navClass}>
      <Link className="nav-logo" to="/"><span>//</span> aaron.sec</Link>
      <button 
        className="nav-toggle" 
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </button>
      <ul className="nav-links">
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>Profile</NavLink></li>
        <li><NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
        <li><NavLink to="/experience" className={({isActive}) => isActive ? 'active' : ''}>Experience</NavLink></li>
        <li><NavLink to="/certifications" className={({isActive}) => isActive ? 'active' : ''}>Certs</NavLink></li>
        <li><NavLink to="/contact" className="nav-cta">Hire Me</NavLink></li>
      </ul>
    </nav>
  );
}

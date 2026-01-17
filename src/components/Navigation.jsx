import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'historia', label: 'Nuestra Historia' },
    { id: 'evento', label: 'El Gran Día' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'musica', label: 'Música' },
    { id: 'info', label: 'Información' },
    { id: 'galeria', label: 'Galería' },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="navbar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
                    padding: '15px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                }}
            >
                <div
                    onClick={() => scrollToSection('hero')}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    {scrolled && (
                        <img
                            src="/images/3.png"
                            alt="Logo"
                            style={{ height: '40px', width: 'auto' }}
                        />
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '20px' }}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '0.9rem',
                                color: 'var(--color-text-primary)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 500
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        display: 'block' // block on mobile
                    }}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'var(--color-bg-warm)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '30px'
                        }}
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--color-text-primary)',
                                    cursor: 'pointer'
                                }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .navbar button:last-child { display: none !important; } /* Hide hamburger */
        }
      `}</style>
        </>
    );
};

export default Navigation;

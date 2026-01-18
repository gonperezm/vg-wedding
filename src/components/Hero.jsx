import { motion } from 'framer-motion';
import Countdown from './Countdown';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(to bottom, var(--color-bg-warm), #fff)',
            textAlign: 'center'
        }}>
            {/* Background Decorative Layers */}
            <motion.img
                src="/images/10.png"
                alt="Decoration"
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '50vw',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
                src="/images/11.png"
                alt="Decoration"
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '60vw',
                    opacity: 0.1,
                    pointerEvents: 'none',
                    transform: 'rotate(180deg)'
                }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Invitation Main Block */}
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 'var(--font-weight-light)',
                        fontSize: '1.5rem',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                        textTransform: 'none', /* Elegant refined look often lowercase or normal ease */
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    Nos casamos
                </motion.h2>

                {/* Names with Floating Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    style={{ marginBottom: '1.5rem' }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        <span style={{
                            fontFamily: 'var(--font-names)',
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', /* Responsive scaling */
                            color: 'var(--color-text-primary)'
                        }}>
                            VICKY
                        </span>

                        <span style={{
                            fontFamily: 'var(--font-ampersand)',
                            fontSize: 'clamp(1.6rem, 3.3vw, 3rem)', /* ~1.5 ratio smaller */
                            fontStyle: 'italic',
                            color: 'var(--color-gold)',
                            margin: '0 0.5rem'
                        }}>
                            &
                        </span>

                        <span style={{
                            fontFamily: 'var(--font-names)',
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            color: 'var(--color-text-primary)'
                        }}>
                            GON
                        </span>
                    </motion.div>
                </motion.div>

                {/* Date */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 'var(--font-weight-light)',
                        fontSize: '1.25rem',
                        marginBottom: '0.5rem',
                        color: 'var(--color-text-primary)'
                    }}
                >
                    Sábado 22 de Agosto
                </motion.p>

                {/* Location */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 'var(--font-weight-light)',
                        fontSize: '1rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    IGUAZÚ
                </motion.p>

                {/* Countdown (Kept subtle below) */}
                <div style={{ marginTop: '3rem', transform: 'scale(0.8)' }}>
                    <Countdown />
                </div>
            </div>

        </section>
    );
};

export default Hero;

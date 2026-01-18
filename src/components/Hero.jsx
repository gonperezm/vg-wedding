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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: '1rem', /* Reduced for better balance */
                        letterSpacing: '0.4em', /* More elegant spacing */
                        marginBottom: '0.5rem', /* Much tighter */
                        textTransform: 'uppercase',
                        color: '#4a4a46'
                    }}
                >
                    NOS CASAMOS
                </motion.h2>

                {/* Central Image 1.png */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    style={{ marginBottom: '1rem' }} /* Tighter gap */
                >
                    <motion.img
                        src="/images/1.png"
                        alt="Vicky & Gon"
                        animate={{ y: [0, -8, 0] }} /* Subtle floating */
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '85vw',
                            maxWidth: '550px',
                            height: 'auto',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </motion.div>

                {/* Date */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: '1.2rem',
                        marginBottom: '0.2rem',
                        color: '#4a4a46'
                    }}
                >
                    Sábado, 22 de agosto 2026
                </motion.p>

                {/* Location */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: '0.9rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#4a4a46'
                    }}
                >
                    IGUAZÚ
                </motion.p>

                {/* Countdown (Kept subtle below) */}
                <div style={{ marginTop: '2.5rem', transform: 'scale(0.85)' }}>
                    <Countdown />
                </div>
            </div>

        </section>
    );
};

export default Hero;

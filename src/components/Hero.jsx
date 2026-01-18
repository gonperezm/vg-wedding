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

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.8rem' /* Very tight gaps */
                }}>
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: "var(--font-weight-light)",
                            fontSize: '0.9rem',
                            letterSpacing: '0.4em',
                            margin: 0,
                            textTransform: 'uppercase',
                            color: '#4a4a46'
                        }}
                    >
                        NOS CASAMOS
                    </motion.h2>

                    {/* Central Image vickigonvickigon.png */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        style={{
                            margin: '0',
                            zIndex: 2
                        }}
                    >
                        <motion.img
                            src="/images/vickigonvickigon.png"
                            alt="Vicky & Gon"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: '100vw',
                                maxWidth: '600px',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </motion.div>

                    {/* Date & Location Group */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'center' }}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: "var(--font-weight-light)",
                                fontSize: '1.2rem',
                                margin: 0,
                                color: '#4a4a46'
                            }}
                        >
                            Sábado, 22 de agosto 2026
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: "var(--font-weight-light)",
                                fontSize: '0.85rem',
                                letterSpacing: '0.4em',
                                textTransform: 'uppercase',
                                margin: 0,
                                color: '#4a4a46'
                            }}
                        >
                            IGUAZÚ
                        </motion.p>
                    </div>

                    {/* Countdown (Tighter wrap) */}
                    <div style={{ marginTop: '1.5rem', transform: 'scale(0.8)' }}>
                        <Countdown />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;

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
            backgroundImage: 'url("/images/posible portada2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center'
        }}>
            {/* Overlay for readability */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.45)', /* Creamy/White overlay */
                backdropFilter: 'blur(1px)', /* Very subtle blur for depth */
                zIndex: 0
            }} />


            {/* Invitation Main Block */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                padding: '0 20px'
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.6rem', /* Slightly tighter gaps for better fit */
                    width: '100%'
                }}>
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: "var(--font-weight-light)",
                            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
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
                            zIndex: 2,
                            width: '100%',
                            maxWidth: '550px' /* Reduced slightly for safety */
                        }}
                    >
                        <motion.img
                            src="/images/vickigonvickigon.png"
                            alt="Vicky & Gon"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                margin: '0 auto'
                            }}
                        />
                    </motion.div>

                    {/* Date & Location Group */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: "var(--font-weight-light)",
                                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                                letterSpacing: '0.1em',
                                margin: 0,
                                color: '#4a4a46',
                                whiteSpace: 'nowrap'
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
                                fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                                letterSpacing: '0.4em',
                                textTransform: 'uppercase',
                                margin: 0,
                                color: '#4a4a46'
                            }}
                        >
                            IGUAZÚ
                        </motion.p>
                    </div>

                    {/* Countdown (Responsive scale) */}
                    <div style={{
                        marginTop: '1.2rem',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div style={{ transform: 'scale(0.85)' }}>
                            <Countdown />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;

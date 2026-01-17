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
            background: 'linear-gradient(to bottom, var(--color-bg-warm), #fff)'
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

            {/* Main Content */}
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

                {/* Animated Logo VG */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ marginBottom: '2rem' }}
                >
                    <motion.img
                        src="/images/3.png"
                        alt="V&G Logo"
                        animate={{
                            y: [0, -15, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: '200px',
                            height: 'auto',
                            display: 'block',
                            margin: '0 auto',
                            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                        }}
                    />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        fontSize: '2rem',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}
                >
                    Nos Casamos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}
                >
                    Sábado, 22 de Agosto 2026
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px'
                    }}
                >
                    <span>📍</span> Foz do Iguaçu, Brasil
                </motion.p>

                <Countdown />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        marginTop: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontStyle: 'italic',
                        fontSize: '0.9rem'
                    }}
                >
                    “Gracias por ser parte de esta etapa tan importante para nosotros. Nos emociona compartir este día con vos. 💛”
                </motion.p>
            </div>

        </section>
    );
};

export default Hero;

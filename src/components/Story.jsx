import { motion } from 'framer-motion';

const stories = [
    {
        year: '2018',
        title: 'Nuestro Primer Encuentro',
        text: 'Nos conocimos en una tarde de verano en Córdoba. Desde la primera mirada supimos que había algo especial.'
    },
    {
        year: '2020',
        title: 'Primeros Pasos',
        text: 'Nuestra decisión de vivir juntos. Empezamos a construir un hogar lleno de amor, risas y proyectos compartidos.'
    },
    {
        year: '2020',
        title: 'Primera Aventura Juntos',
        text: 'Nuestro primer viaje a Bariloche. Descubrimos que éramos el equipo perfecto para cualquier aventura.',
        image: '/images/brc gemini.png'
    },
    {
        year: '2023',
        title: 'Crecer Juntos',
        text: 'Aprendimos que amar también es acompañarse, empujar sueños y sostenerse en todo momento.'
    },
    {
        year: '2025',
        title: 'La Propuesta',
        text: 'En Mendoza, entre viñedos y la paz de los Andes, Gon le propuso matrimonio a Vicky bajo un atardecer inolvidable.',
        image: '/images/mendoza1.JPG'
    },
    {
        year: '2026',
        title: '¡Nos Casamos!',
        text: 'Celebraremos nuestro amor rodeados de familia y amigos en el día más especial de nuestras vidas.'
    }
];

const Story = () => {
    return (
        <section id="historia" style={{ padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                    style={{ marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-gold)' }}>Nuestra Historia de Amor</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', fontStyle: 'italic' }}>
                        "Dicen que algunas historias se escriben solas… la nuestra se escribió en risas, viajes, desafíos, charlas eternas y un amor que creció sin pedir permiso."
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', position: 'relative' }}>
                    {/* Elegant Vertical Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        bottom: '40px',
                        width: '2px',
                        background: 'linear-gradient(to bottom, transparent, var(--color-gold), transparent)',
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }}></div>

                    {stories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                background: 'white',
                                padding: '35px 30px',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                position: 'relative',
                                zIndex: 1,
                                maxWidth: '600px',
                                margin: '0 auto',
                                width: '100%'
                            }}
                        >
                            {/* Timeline Dot */}
                            <div style={{
                                position: 'absolute',
                                top: '-25px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background: 'var(--color-gold)',
                                border: '3px solid white',
                                boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.2)',
                                zIndex: 2
                            }}></div>

                            <span style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '2rem',
                                color: 'var(--color-gold)',
                                marginBottom: '12px',
                                display: 'block',
                                fontWeight: '300'
                            }}>
                                {item.year}
                            </span>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                            <p style={{ lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>{item.text}</p>
                            {item.image && (
                                <div style={{ marginTop: '25px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <img src="/images/13.png" alt="" style={{
                position: 'absolute',
                top: '5%',
                left: '-10%',
                width: '50vw',
                maxWidth: '400px',
                opacity: 0.1,
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'grayscale(100%) sepia(20%) saturate(50%)'
            }} />
            <img src="/images/a10.png" alt="" style={{
                position: 'absolute',
                top: '40%',
                right: '-10%',
                width: '40vw',
                maxWidth: '300px',
                opacity: 0.08,
                zIndex: 0,
                pointerEvents: 'none',
                transform: 'rotate(15deg)'
            }} />
            <img src="/images/12.png" alt="" style={{
                position: 'absolute',
                bottom: '5%',
                left: '-5%',
                width: '45vw',
                maxWidth: '350px',
                opacity: 0.1,
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <style>{`
                @media (max-width: 768px) {
                    section#historia > div > div:last-child > div:first-child {
                        left: 20px !important;
                        transform: none !important;
                    }
                    section#historia > div > div:last-child > div > div:first-child {
                        left: -28px !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Story;

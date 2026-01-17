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
        text: 'En Mendoza, entre viñedos y la paz de los Andes, Gon le propuso matrimonio a Vicky bajo un atardecer inolvidable.'
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
            <div className="container">
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
                        “Dicen que algunas historias se escriben solas… la nuestra se escribió en risas, viajes, desafíos, charlas eternas y un amor que creció sin pedir permiso.”
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
                    {/* Vertical Line for Desktop */}
                    <div className="timeline-line"></div>

                    {stories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                background: 'white',
                                padding: '30px',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            <span style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '2rem',
                                color: 'var(--color-gold)',
                                marginBottom: '10px',
                                display: 'block'
                            }}>
                                {item.year}
                            </span>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                            <p>{item.text}</p>
                            {item.image && (
                                <div style={{ marginTop: '20px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
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
        </section>
    );
};

export default Story;

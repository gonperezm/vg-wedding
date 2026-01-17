import { motion } from 'framer-motion';
import { FaSun, FaTaxi, FaCar, FaPassport, FaMoneyBillWave } from 'react-icons/fa';

const Info = () => {
    const infos = [
        { icon: FaSun, title: 'Clima', text: 'Agosto es ideal en Foz do Iguaçu—templado y perfecto para celebrar.' },
        { icon: FaTaxi, title: 'Transporte', text: 'Taxis y apps funcionan perfectamente.' },
        { icon: FaCar, title: 'Estacionamiento', text: 'Disponible sin cargo.' },
        { icon: FaPassport, title: 'Documentación', text: 'Para argentinos: solo DNI.' },
        { icon: FaMoneyBillWave, title: 'Moneda', text: 'ARS, BRL y tarjetas de crédito.' }
    ];

    return (
        <section id="info" style={{ padding: '80px 20px', background: 'var(--color-bg-warm)', position: 'relative', overflow: 'hidden' }}>
            {/* Environmental Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.15,
                zIndex: 0,
                backgroundImage: 'url("/images/cataratas v3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(30%) sepia(20%)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '50px' }}>Información Útil</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    {infos.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                padding: '30px',
                                borderRadius: '12px',
                                textAlign: 'center',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            <item.icon size={30} color="var(--color-gold)" style={{ marginBottom: '15px' }} />
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.95rem' }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Info;

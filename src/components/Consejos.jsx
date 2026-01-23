import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaTaxi, FaCar, FaPassport, FaMoneyBillWave } from 'react-icons/fa';

const Consejos = () => {
    const [activeTab, setActiveTab] = useState('todos');

    const hoteles = [
        {
            name: 'Hotel Emiliano',
            phone: '(11) 3728-2060',
            website: 'https://emiliano.com.br/',
            image: '/images/hotel-placeholder.jpg'
        }
    ];

    const restaurantes = [
        { name: 'Restaurante 1', info: 'Información próximamente' },
        { name: 'Restaurante 2', info: 'Información próximamente' }
    ];

    const salonesBelleza = [
        { name: 'Salón 1', info: 'Información próximamente' },
        { name: 'Salón 2', info: 'Información próximamente' }
    ];

    const infoUtil = [
        { icon: FaSun, title: 'Clima', text: 'Agosto es ideal en Foz do Iguaçu—templado y perfecto para celebrar.' },
        { icon: FaTaxi, title: 'Transporte', text: 'Taxis y apps funcionan perfectamente.' },
        { icon: FaCar, title: 'Estacionamiento', text: 'Disponible sin cargo.' },
        { icon: FaPassport, title: 'Documentación', text: 'Para argentinos: solo DNI.' },
        { icon: FaMoneyBillWave, title: 'Moneda', text: 'ARS, BRL y tarjetas de crédito.' }
    ];

    const tabs = [
        { id: 'todos', label: 'Todos' },
        { id: 'hoteles', label: 'Hotéis' },
        { id: 'salones', label: 'Salões de Beleza' },
        { id: 'restaurantes', label: 'Restaurantes' }
    ];

    const renderContent = () => {
        if (activeTab === 'todos' || activeTab === 'hoteles') {
            return (
                <div style={{ marginTop: '30px' }}>
                    {hoteles.map((hotel, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                padding: '30px',
                                borderRadius: '12px',
                                marginBottom: '20px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--color-text-primary)' }}>
                                {hotel.name}
                            </h3>
                            <p style={{ marginBottom: '5px', color: '#666' }}>
                                <strong>📞</strong> {hotel.phone}
                            </p>
                            <a
                                href={hotel.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: '500' }}
                            >
                                {hotel.website}
                            </a>
                        </motion.div>
                    ))}
                </div>
            );
        }

        if (activeTab === 'restaurantes') {
            return (
                <div style={{ marginTop: '30px' }}>
                    {restaurantes.map((rest, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                        }}>
                            <h4>{rest.name}</h4>
                            <p style={{ color: '#999', fontSize: '0.9rem' }}>{rest.info}</p>
                        </div>
                    ))}
                </div>
            );
        }

        if (activeTab === 'salones') {
            return (
                <div style={{ marginTop: '30px' }}>
                    {salonesBelleza.map((salon, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                        }}>
                            <h4>{salon.name}</h4>
                            <p style={{ color: '#999', fontSize: '0.9rem' }}>{salon.info}</p>
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <section id="consejos" style={{
            padding: '80px 20px',
            background: 'var(--color-bg-warm)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Image */}
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

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '40px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-gold)' }}>
                        Dicas
                    </h2>
                    <p style={{ fontSize: '1.1rem', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto' }}>
                        Aqui deixamos algumas dicas para ajudar vocês, nossos queridos convidados, a se prepararem para o nosso grande dia! Separamos algumas opções de saídas e restaurantes e também incluímos os hotéis que terão transporte para o casamento!
                    </p>
                </motion.div>

                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '30px'
                }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '12px 24px',
                                background: activeTab === tab.id ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.9)',
                                color: activeTab === tab.id ? 'white' : 'var(--color-text-primary)',
                                border: activeTab === tab.id ? 'none' : '1px solid rgba(212, 175, 55, 0.3)',
                                borderRadius: '25px',
                                fontSize: '0.95rem',
                                fontWeight: activeTab === tab.id ? '600' : '400',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: activeTab === tab.id ? '0 4px 15px rgba(212, 175, 55, 0.3)' : 'none'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {renderContent()}

                {/* Información Útil Section */}
                <div style={{ marginTop: '60px' }}>
                    <h3 className="text-center" style={{
                        fontSize: '2rem',
                        marginBottom: '40px',
                        color: 'var(--color-gold)'
                    }}>
                        Informação Útil
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px'
                    }}>
                        {infoUtil.map((item, index) => (
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
            </div>
        </section>
    );
};

export default Consejos;

import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaCar, FaTshirt } from 'react-icons/fa';

const EventDetails = () => {
    return (
        <section id="evento" style={{ padding: '80px 20px', background: 'var(--color-bg-warm)', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '50px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-text-primary)' }}>El Gran Día</h2>
                    <p>Todos los detalles importantes para nuestro casamiento</p>
                </motion.div>

                <div className="details-grid">
                    {/* Date */}
                    <motion.div className="detail-card" whileHover={{ y: -5 }}>
                        <FaCalendar className="icon" />
                        <h3>Sábado</h3>
                        <p className="highlight">22 de Agosto 2026</p>
                    </motion.div>

                    {/* Time */}
                    <motion.div className="detail-card" whileHover={{ y: -5 }}>
                        <FaClock className="icon" />
                        <h3>Horario</h3>
                        <p className="highlight">16:00 hs</p>
                        <p className="subtext">Puntualidad importante</p>
                    </motion.div>

                    {/* Location */}
                    <motion.div className="detail-card" whileHover={{ y: -5 }}>
                        <FaMapMarkerAlt className="icon" />
                        <h3>Lugar</h3>
                        <p className="highlight">Hotel LAS Boutique</p>
                        <p>Foz do Iguaçu, Brasil</p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{
                        textAlign: 'center',
                        margin: '40px 0',
                        fontStyle: 'italic',
                        fontSize: '1.1rem'
                    }}
                >
                    “Será una ceremonia íntima, cálida y llena de buena energía. <br /> Te pedimos puntualidad para que no te pierdas ni un segundo.”
                </motion.p>

                {/* Map */}
                <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.467406982424!2d-54.55523952367156!3d-25.55611107743567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68579ca3fb501%3A0x6e76878832a87d0c!2sHotel%20LAS%20Hotel%20Boutique!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Extra Info */}
                <div className="extra-info" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                        <FaTshirt size={24} color="var(--color-gold)" style={{ marginBottom: '10px' }} />
                        <h4 style={{ marginBottom: '5px' }}>Dress Code</h4>
                        <p>Formal elegante</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <FaCar size={24} color="var(--color-gold)" style={{ marginBottom: '10px' }} />
                        <h4 style={{ marginBottom: '5px' }}>Estacionamiento</h4>
                        <p>Disponible (Sin cargo)</p>
                    </div>
                </div>

            </div>
            {/* Venue Images Showcase */}
            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ borderRadius: '12px', overflow: 'hidden', height: '200px' }}
                >
                    <img
                        src="/images/lasv1-1.png"
                        alt="Capilla"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ borderRadius: '12px', overflow: 'hidden', height: '200px' }}
                >
                    <img
                        src="/images/lasv13-13.png"
                        alt="Salón"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ gridColumn: '1 / -1', borderRadius: '12px', overflow: 'hidden', height: '200px' }}
                >
                    <img
                        src="/images/lasv111.png"
                        alt="Capilla Detalle"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                        loading="lazy"
                    />
                </motion.div>
            </div>

            {/* Background decoration */}
            <img src="/images/14.png" alt="" style={{
                position: 'absolute',
                top: '-5%',
                right: '-5%',
                width: '300px',
                opacity: 0.1,
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <img src="/images/15.png" alt="" style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '400px',
                opacity: 0.08,
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <style>{`
        .details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .details-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .detail-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .icon {
          font-size: 2rem;
          color: var(--color-gold);
          margin-bottom: 15px;
        }
        .highlight {
          font-weight: 600;
          font-size: 1.1rem;
          margin: 5px 0;
        }
        .subtext {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }
      `}</style>
        </section>
    );
};

export default EventDetails;

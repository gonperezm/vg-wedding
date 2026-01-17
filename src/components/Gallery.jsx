import { motion } from 'framer-motion';

// Hardcoded list of existing images in the directory
const galleryImages = [
    '/images/10.png', '/images/11.png', '/images/7.png', '/images/15.png',
    '/images/9.png', '/images/16.png', '/images/8.png', '/images/a9.png',
    '/images/13.png', '/images/14.png', '/images/12.png'
];

const Gallery = () => {
    return (
        <section id="galeria" style={{ padding: '80px 20px', background: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="container">

                {/* Nuestros Momentos */}
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-gold)' }}>Nuestros Momentos</h2>
                    <p style={{ fontStyle: 'italic' }}>
                        “Esta es solo una muestra. Después de la boda compartiremos todas las fotos profesionales aquí.”
                    </p>
                </div>

                {/* CSS Masonry / Grid */}
                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ borderRadius: '12px', overflow: 'hidden' }}
                        >
                            <img
                                src={src}
                                alt={`Moment ${index}`}
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Fotos y Videos / Hashtag - Placed as a footer to the gallery */}
                <div className="text-center" style={{ marginTop: '80px', padding: '40px', background: 'var(--color-bg-warm)', borderRadius: '16px' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Fotos y Videos 📸</h3>
                    <p style={{ marginBottom: '20px' }}>“Tendremos fotógrafos profesionales, pero nos encantaría ver el día desde tu mirada.”</p>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px 30px',
                        border: '2px dashed var(--color-gold)',
                        borderRadius: '50px',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--color-gold)'
                    }}>
                        #VickyYGon2026
                    </div>
                </div>

            </div>
            {/* Background decoration */}
            <img src="/images/16.png" alt="" style={{
                position: 'absolute',
                top: '5%',
                right: '0%',
                width: '30vw',
                minWidth: '200px',
                opacity: 0.05,
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <img src="/images/7.png" alt="" style={{
                position: 'absolute',
                bottom: '20%',
                left: '-5%',
                width: '30vw',
                minWidth: '250px',
                opacity: 0.05,
                zIndex: 0,
                pointerEvents: 'none',
                filter: 'grayscale(100%)'
            }} />

            <style>{`
        .gallery-grid {
          column-count: 2;
          column-gap: 15px;
        }
        .gallery-grid > div {
          margin-bottom: 15px;
          break-inside: avoid;
        }
        @media (min-width: 768px) {
          .gallery-grid {
            column-count: 3;
            column-gap: 20px;
          }
        }
        @media (min-width: 1024px) {
          .gallery-grid {
             column-count: 4;
          }
        }
      `}</style>
        </section>
    );
};

export default Gallery;

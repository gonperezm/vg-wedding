import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';

const Music = () => {
    const [song, setSong] = useState({ name: '', title: '', artist: '', reason: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por tu sugerencia musical! 🎶');
        setSong({ name: '', title: '', artist: '', reason: '' });
    };

    return (
        <section id="musica" style={{ padding: '80px 20px', background: 'var(--color-bg-light)' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div className="text-center" style={{ marginBottom: '40px' }}>
                    <FaMusic size={40} color="var(--color-gold)" style={{ marginBottom: '20px' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Libro de Música</h2>
                    <p>Ayudanos a crear la playlist perfecta para nuestra fiesta.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input
                            type="text"
                            placeholder="Tu Nombre *"
                            required
                            className="input-field"
                            value={song.name}
                            onChange={e => setSong({ ...song, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Título de la Canción *"
                            required
                            className="input-field"
                            value={song.title}
                            onChange={e => setSong({ ...song, title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Artista *"
                            required
                            className="input-field"
                            value={song.artist}
                            onChange={e => setSong({ ...song, artist: e.target.value })}
                        />
                        <textarea
                            placeholder="¿Por qué esta canción? (Opcional)"
                            rows="3"
                            className="input-field"
                            value={song.reason}
                            onChange={e => setSong({ ...song, reason: e.target.value })}
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                            marginTop: '20px',
                            width: '100%',
                            padding: '12px',
                            background: 'var(--color-text-primary)',
                            color: 'white',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600'
                        }}
                    >
                        Agregar Canción
                    </motion.button>
                </form>
            </div>
            <style>{`
                .input-field {
                    padding: 10px;
                    border: 1px solid #eee;
                    border-radius: 6px;
                    width: 100%;
                    font-family: var(--font-sans);
                }
                .input-field:focus {
                    border-color: var(--color-gold);
                    outline: none;
                }
            `}</style>
        </section>
    );
};

export default Music;

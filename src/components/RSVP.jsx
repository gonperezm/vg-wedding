import { useState } from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        attendance: 'yes',
        companion: '',
        diet: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbwUPIp4aP-DYFiSMhPlIIK28BEY8GigyHsxxh-6bDcW_pFpD51PrFyKsFDug0SubYN6/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        attendance: formData.attendance,
                        companion: formData.companion,
                        diet: formData.diet,
                        message: formData.message,
                        code: "FREE"
                    })
                }
            );

            // ⚠️ con no-cors NO se puede leer response
            alert("Gracias 💛 Tu respuesta fue registrada");

            setFormData({
                name: '',
                email: '',
                phone: '',
                attendance: 'yes',
                companion: '',
                diet: '',
                message: ''
            });

        } catch (error) {
            console.error(error);
            alert("Error de conexión. Intentá nuevamente.");
        }
    };



    return (
        <section id="rsvp" style={{
            padding: '100px 20px',
            background: 'linear-gradient(to bottom, #fafaf8, #f5f3f0)',
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '650px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '50px' }}
                >
                    <h2 style={{
                        fontSize: '2.8rem',
                        marginBottom: '20px',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-serif)'
                    }}>
                        Confirmá tu Asistencia
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        fontStyle: 'italic',
                        color: 'var(--color-text-secondary)'
                    }}>
                        "Tu presencia es el mejor regalo. Por favor, completá el formulario."
                    </p>
                    <p style={{
                        fontSize: '0.85rem',
                        marginTop: '15px',
                        color: '#999',
                        fontStyle: 'normal'
                    }}>
                        Nota: Próximamente se agregará un código de acceso.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'white',
                        padding: '50px 40px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                        border: '1px solid rgba(212, 175, 55, 0.1)'
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>

                        <div className="form-group">
                            <label>Nombre Completo *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>Teléfono</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Número de contacto"
                            />
                        </div>

                        <div className="form-group">
                            <label>¿Asistís al evento?</label>
                            <div style={{ display: 'flex', gap: '20px', marginTop: '12px', flexWrap: 'wrap' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'normal', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="yes"
                                        checked={formData.attendance === 'yes'}
                                        onChange={handleChange}
                                    />
                                    Confirmo mi asistencia
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'normal', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="no"
                                        checked={formData.attendance === 'no'}
                                        onChange={handleChange}
                                    />
                                    No podré asistir
                                </label>
                            </div>
                        </div>

                        {formData.attendance === 'yes' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '25px' }}
                            >
                                <div className="form-group">
                                    <label>¿Traés acompañante? (Opcional)</label>
                                    <input
                                        type="text"
                                        name="companion"
                                        value={formData.companion}
                                        onChange={handleChange}
                                        placeholder="Nombre completo del acompañante"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>¿Tenés alguna restricción alimentaria?</label>
                                    <input
                                        type="text"
                                        name="diet"
                                        value={formData.diet}
                                        onChange={handleChange}
                                        placeholder="Ej: Celíaco, Vegetariano..."
                                    />
                                </div>
                            </motion.div>
                        )}

                        <div className="form-group">
                            <label>Mensaje para los novios (Opcional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Dejanos un mensaje..."
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)' }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="submit-btn"
                        >
                            ✨ Confirmar Asistencia ✨
                        </motion.button>

                    </form>
                </motion.div>
            </div>

            <style>{`
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 10px;
          font-weight: 600;
          color: var(--color-text-primary);
          font-size: 0.95rem;
        }
        
        .submit-btn {
          margin-top: 10px;
          background: var(--color-gold);
          color: white;
          padding: 16px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .submit-btn:hover {
          background: #C5A028;
        }
        
        @media (max-width: 640px) {
          section#rsvp .container > div:last-child {
            padding: 35px 25px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default RSVP;

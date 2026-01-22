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
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbze3sQ5ZQWyZVMUCq2udGXHLN_36efAGWyvPE_heDZ11cnlR_ueVONad8tz2iVYlvKM/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        attendance: formData.attendance,
                        companion: formData.companion,
                        diet: formData.diet,
                        message: formData.message,
                        code: formData.code || "FREE"
                    })
                }
            );

            const result = await response.json();

            if (result.success) {
                alert("Gracias 💛 Tu respuesta fue registrada");

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    attendance: 'yes',
                    companion: '',
                    diet: '',
                    message: '',
                    code: ''
                });
            } else {
                alert("Hubo un error al enviar el formulario 😢");
            }
        } catch (error) {
            console.error("RSVP error:", error);
            alert("Error de conexión. Intentá nuevamente.");
        }
    };


    return (
        <section id="rsvp" style={{ padding: '80px 20px', background: 'white' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                    style={{ marginBottom: '40px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-gold)' }}>Confirmá tu Asistencia</h2>
                    <p>“Tu presencia es el mejor regalo. Por favor, completá el formulario.”</p>
                    <p style={{ fontSize: '0.8rem', marginTop: '10px', color: '#999' }}>Nota: Próximamente se agregará un código de acceso.</p>
                </motion.div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

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
                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'normal' }}>
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="yes"
                                    checked={formData.attendance === 'yes'}
                                    onChange={handleChange}
                                />
                                Confirmo mi asistencia
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'normal' }}>
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
                            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '20px' }}
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
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="submit-btn"
                    >
                        ✨ Confirmar Asistencia ✨
                    </motion.button>

                </form>
            </div>

            <style>{`
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .form-group label {
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        /* input/textarea styles handled globally in index.css */
        
        .submit-btn {
          margin-top: 20px;
          background: var(--color-gold);
          color: white;
          padding: 15px;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          transition: background 0.3s;
        }
        .submit-btn:hover {
          background: #C5A028;
        }
      `}</style>
        </section>
    );
};

export default RSVP;

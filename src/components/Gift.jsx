import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGift, FaCopy } from 'react-icons/fa';

const Gift = () => {
    const [copied, setCopied] = useState(false);
    const cbu = "0110-1234-5678-9012-3456";

    const handleCopy = () => {
        navigator.clipboard.writeText(cbu);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="regalo" style={{ padding: '80px 20px', background: 'var(--color-bg-light)' }}>
            <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                <FaGift size={50} color="var(--color-gold)" style={{ marginBottom: '20px' }} />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Regalo de Bodas</h2>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '40px' }}>
                    “Tu presencia es nuestro mejor regalo. <br /> Si deseás hacernos un regalo, te dejamos esta opción con cariño.”
                </p>

                <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <h3 style={{ marginBottom: '20px', color: 'var(--color-text-primary)' }}>Banco Nación</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '5px' }}>CBU</p>
                        <div style={{
                            fontSize: '1.2rem',
                            fontFamily: 'monospace',
                            background: '#f5f5f5',
                            padding: '10px',
                            borderRadius: '8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            {cbu}
                            <button onClick={handleCopy} style={{ background: 'none', color: 'var(--color-gold)', fontSize: '1rem' }}>
                                <FaCopy />
                            </button>
                        </div>
                        {copied && <span style={{ display: 'block', color: 'green', fontSize: '0.8rem', marginTop: '5px' }}>¡Copiado!</span>}
                    </div>
                    <div>
                        <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '5px' }}>Alias</p>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>boda.gv</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gift;

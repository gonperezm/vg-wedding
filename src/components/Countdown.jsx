import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const targetDate = new Date('2026-08-22T16:00:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +targetDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                días: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                seg: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'DÍAS', value: timeLeft.días || 0 },
        { label: 'HS', value: timeLeft.hs || 0 },
        { label: 'MIN', value: timeLeft.min || 0 },
        { label: 'SEG', value: timeLeft.seg || 0 },
    ];

    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
            {timeUnits.map((unit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-serif)',
                        color: 'var(--color-gold)',
                        fontWeight: 'bold'
                    }}>
                        {unit.value < 10 ? `0${unit.value}` : unit.value}
                    </div>
                    <div style={{
                        fontSize: '0.7rem',
                        letterSpacing: '1px',
                        color: 'var(--color-text-secondary)'
                    }}>
                        {unit.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Countdown;

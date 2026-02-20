import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const ICONS = [
    { emoji: '⚛️', label: 'React', x: '6%', y: '22%', delay: 0, dur: 6 },
    { emoji: '🟢', label: 'Node.js', x: '90%', y: '18%', delay: 0.8, dur: 7 },
    { emoji: '🍃', label: 'MongoDB', x: '4%', y: '70%', delay: 1.6, dur: 5.5 },
    { emoji: '🐳', label: 'Docker', x: '89%', y: '65%', delay: 0.4, dur: 8 },
    { emoji: '🐍', label: 'Python', x: '12%', y: '85%', delay: 2.2, dur: 6.5 },
    { emoji: '🔷', label: 'TypeScript', x: '84%', y: '82%', delay: 1.2, dur: 7.5 },
];

const STATS = [
    { num: '1000+', label: 'Learners Mentored' },
    { num: '5+', label: 'Products Shipped' },
    { num: '3+', label: 'Years Experience' },
];

export default function Hero() {
    return (
        <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

            {/* ── Background gradient blobs ── */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                background: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59,130,246,0.07) 0%, transparent 60%), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(139,92,246,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(6,182,212,0.05) 0%, transparent 60%), linear-gradient(180deg, #020810 0%, #080c1a 100%)',
            }} />

            {/* ── Floating Tech Icons ── */}
            {ICONS.map(ic => (
                <motion.div
                    key={ic.label}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + ic.delay, duration: 0.5, type: 'spring', stiffness: 200 }}
                    style={{
                        position: 'absolute', left: ic.x, top: ic.y, zIndex: 1,
                        animation: `float ${ic.dur}s ease-in-out ${ic.delay}s infinite`,
                    }}
                >
                    <div style={{
                        background: 'rgba(255,255,255,0.045)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: 14,
                        padding: '0.55rem 0.9rem',
                        display: 'flex', alignItems: 'center', gap: '0.45rem',
                    }}>
                        <span style={{ fontSize: '1.2rem' }}>{ic.emoji}</span>
                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(200,210,240,0.55)', display: 'none' }}
                            className="sm:block"
                        >{ic.label}</span>
                    </div>
                </motion.div>
            ))}

            {/* ── Hero Content ── */}
            <div className="section-wrap" style={{ position: 'relative', zIndex: 2, width: '100%', paddingTop: '5rem', paddingBottom: '4rem' }}>

                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.55 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <span className="badge badge-green" style={{ fontSize: '0.78rem' }}>
                        <span style={{ width: 7, height: 7, background: '#34d399', borderRadius: '50%', display: 'inline-block', animation: 'float 1.5s ease-in-out infinite' }} />
                        Open to Opportunities
                    </span>
                </motion.div>

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    style={{ fontSize: '1rem', color: 'rgba(200,210,240,0.5)', marginBottom: '0.5rem', fontWeight: 500, letterSpacing: '0.04em' }}
                >
                    👋 Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 800,
                        fontSize: 'clamp(2.4rem, 7vw, 5rem)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.035em',
                        marginBottom: '1.25rem',
                    }}
                >
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #93c5fd 0%, #a78bfa 40%, #5eead4 80%, #93c5fd 100%)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'gradient-pan 6s linear infinite',
                        }}
                    >
                        Paindla Narendar Reddy
                    </span>
                </motion.h1>

                {/* Typing Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{ marginBottom: '1.5rem', minHeight: '2.2rem' }}
                >
                    <span style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', fontWeight: 500, color: 'rgba(200,210,240,0.55)' }}>
                        I build as a{' '}
                    </span>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Engineer', 2200,
                            'Technical Educator', 2200,
                            'System Design Mentor', 2200,
                            'Product Builder', 2200,
                        ]}
                        wrapper="span"
                        speed={52}
                        repeat={Infinity}
                        style={{
                            fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #60a5fa, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontFamily: 'Space Grotesk, sans-serif',
                        }}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.55 }}
                    style={{
                        fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                        color: 'rgba(200,210,240,0.55)',
                        lineHeight: 1.75,
                        maxWidth: 540,
                        marginBottom: '2.25rem',
                    }}
                >
                    Shipping robust web products and empowering the next generation of engineers through structured mentorship and project-based learning.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.55 }}
                    style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}
                >
                    <motion.button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-primary"
                        whileHover={{ y: -2, boxShadow: '0 10px 36px rgba(99,102,241,0.45)' }}
                        whileTap={{ scale: 0.97 }}
                    >
                        View My Work
                        <ArrowRight size={16} />
                    </motion.button>
                    <motion.button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-ghost"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Download size={16} />
                        Download CV
                    </motion.button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}
                >
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + i * 0.1 }}
                        >
                            <div style={{
                                fontFamily: 'Space Grotesk, sans-serif',
                                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                lineHeight: 1,
                            }}>{s.num}</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(200,210,240,0.45)', marginTop: '0.3rem', fontWeight: 500 }}>
                                {s.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                    position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                    background: 'none', border: 'none', color: 'rgba(200,210,240,0.3)', zIndex: 2,
                }}
            >
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Scroll</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
                    <ChevronDown size={18} />
                </motion.div>
            </motion.button>
        </section>
    );
}

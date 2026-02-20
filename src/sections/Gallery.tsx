import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, X, Users, Monitor, Presentation } from 'lucide-react';

// Training photo gallery data
// Replace `placeholder` colors with real image src when you have actual photos
const GALLERY = [
    {
        id: 1,
        bg: 'linear-gradient(135deg, #1A0F05 0%, #3D1A00 100%)',
        emoji: '🎤',
        title: 'Live Workshop — MERN Stack Bootcamp',
        desc: 'Conducting live sessions for 80+ students',
        tag: 'Workshop',
        icon: <Presentation size={32} />,
        date: 'Jan 2024',
        color: 'var(--fire)',
    },
    {
        id: 2,
        bg: 'linear-gradient(135deg, #0A0F1A 0%, #001A3D 100%)',
        emoji: '💻',
        title: 'Hands-on Coding Bootcamp',
        desc: 'Project-based learning with real-world tasks',
        tag: 'Bootcamp',
        icon: <Monitor size={32} />,
        date: 'Mar 2024',
        color: 'var(--sky)',
    },
    {
        id: 3,
        bg: 'linear-gradient(135deg, #0A1A0A 0%, #003D00 100%)',
        emoji: '🧑‍🏫',
        title: '1:1 Mentorship Session',
        desc: 'Personalized guidance on system design & DSA',
        tag: '1:1 Mentoring',
        icon: <Users size={32} />,
        date: 'Feb 2024',
        color: 'var(--sage)',
    },
    {
        id: 4,
        bg: 'linear-gradient(135deg, #1A1505 0%, #3D3300 100%)',
        emoji: '🚀',
        title: 'Startup Ideation Workshop',
        desc: 'Teaching product thinking & MVP building',
        tag: 'Workshop',
        icon: <Presentation size={32} />,
        date: 'Nov 2023',
        color: 'var(--ember)',
    },
    {
        id: 5,
        bg: 'linear-gradient(135deg, #1A0A0A 0%, #3D0000 100%)',
        emoji: '📊',
        title: 'System Design Masterclass',
        desc: 'Deep dive into distributed systems for 200+ learners',
        tag: 'Masterclass',
        icon: <Monitor size={32} />,
        date: 'Dec 2023',
        color: '#F87171',
    },
    {
        id: 6,
        bg: 'linear-gradient(135deg, #100A1A 0%, #23003D 100%)',
        emoji: '🏆',
        title: 'Hackathon Mentoring',
        desc: 'Guiding 20 teams through 36-hour build sprint',
        tag: 'Hackathon',
        icon: <Users size={32} />,
        date: 'Oct 2023',
        color: '#A78BFA',
    },
];

export default function Gallery() {
    const [selected, setSelected] = useState<typeof GALLERY[0] | null>(null);
    const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });

    return (
        <section id="gallery" ref={ref} style={{ background: 'var(--bg-1)' }} className="section angle-top">
            <div className="wrap" style={{ position: 'relative' }}>

                <div className="section-num" style={{ position: 'absolute', left: 0, top: '-3rem', zIndex: 0 }}>06</div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}
                >
                    <span className="eyebrow"><Camera size={12} /> 06 — Training Gallery</span>
                    <h2 className="h2">
                        Teaching in <span className="fire-text">Action</span>
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--t2)', marginTop: '0.75rem', maxWidth: 500, lineHeight: 1.7 }}>
                        A glimpse into the workshops, bootcamps, and 1:1 sessions where I help engineers level up.
                    </p>
                </motion.div>

                {/* Gallery grid — masonry-like with varying row spans */}
                <div style={{
                    position: 'relative', zIndex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gridAutoRows: '200px',
                    gap: '1rem',
                }}>
                    {GALLERY.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.55 }}
                            onClick={() => setSelected(item)}
                            className="gallery-card"
                            style={{
                                background: item.bg,
                                gridRow: i === 0 || i === 4 ? 'span 2' : 'span 1',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Placeholder content (replace with <img> when you have real photos) */}
                            <div style={{
                                width: '100%', height: '100%',
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center',
                                gap: '0.75rem',
                            }}>
                                <div style={{ color: item.color, opacity: 0.5 }}>{item.icon}</div>
                                <div style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}>{item.emoji}</div>
                            </div>

                            {/* Tag badge */}
                            <div style={{
                                position: 'absolute', top: '0.75rem', left: '0.75rem',
                                fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600,
                                padding: '0.2rem 0.6rem', borderRadius: 6,
                                background: `${item.color}22`, border: `1px solid ${item.color}45`, color: item.color,
                                letterSpacing: '0.06em',
                            }}>
                                {item.tag}
                            </div>

                            {/* Hover overlay */}
                            <div className="overlay">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                                    <span style={{ color: item.color, fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em' }}>{item.date}</span>
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--t1)', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                                    {item.title}
                                </h4>
                                <p style={{ fontSize: '0.78rem', color: 'var(--t2)' }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Replace photos note */}
                <motion.div
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
                    style={{
                        marginTop: '2rem', padding: '1rem 1.25rem',
                        background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: 10,
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                    }}
                >
                    <Camera size={16} style={{ color: 'var(--fire)', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.82rem', color: 'var(--t3)', lineHeight: 1.5 }}>
                        <strong style={{ color: 'var(--t2)' }}>Add your real training photos:</strong>{' '}
                        In <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fire)' }}>src/sections/Gallery.tsx</code>, replace the placeholder <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fire)' }}>background</code> gradient with{' '}
                        an <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fire)' }}>{'<img src="..." />'}</code> inside each card.
                    </p>
                </motion.div>
            </div>

            {/* ── Modal ── */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 200,
                            background: 'rgba(11,10,9,0.9)', backdropFilter: 'blur(16px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.85, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.85, y: 30 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                            onClick={e => e.stopPropagation()}
                            style={{
                                maxWidth: 520, width: '100%', borderRadius: 16, overflow: 'hidden',
                                background: 'var(--card)', border: '1px solid var(--border-2)', position: 'relative',
                            }}
                        >
                            {/* Image area */}
                            <div style={{
                                height: 280, background: selected.bg,
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                            }}>
                                <div style={{ color: selected.color, opacity: 0.6 }}>{selected.icon}</div>
                                <div style={{ fontSize: '4rem' }}>{selected.emoji}</div>
                            </div>

                            {/* Close */}
                            <button onClick={() => setSelected(null)} style={{
                                position: 'absolute', top: '0.75rem', right: '0.75rem',
                                background: 'rgba(11,10,9,0.6)', border: '1px solid var(--border-2)',
                                borderRadius: 8, padding: '0.35rem', color: 'var(--t2)', display: 'flex',
                            }}>
                                <X size={16} />
                            </button>

                            {/* Info */}
                            <div style={{ padding: '1.75rem' }}>
                                <div style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: selected.color,
                                    fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.6rem',
                                }}>
                                    {selected.tag} · {selected.date}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--t1)', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                                    {selected.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--t2)', lineHeight: 1.65 }}>{selected.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

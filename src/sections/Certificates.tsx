import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certificates } from '../data/portfolio';
import { Award, X, ExternalLink } from 'lucide-react';

export default function Certificates() {
    const [selected, setSelected] = useState<typeof certificates[0] | null>(null);
    const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });

    return (
        <section id="certificates" ref={ref} style={{ background: 'linear-gradient(180deg, #020810 0%, #060a18 100%)' }}>
            <div className="section-wrap section-pad">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55 }}
                    style={{ marginBottom: '3.5rem' }}
                >
                    <span className="section-label">🏅 Certificates</span>
                    <h2 className="section-title">
                        Credentials &amp;{' '}
                        <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="section-subtitle">Continuous learning — backed by globally recognized certifications.</p>
                    <div className="glow-line" />
                </motion.div>

                {/* ── Grid ── */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    {certificates.map((cert, i) => (
                        <motion.button
                            key={cert.id}
                            onClick={() => setSelected(cert)}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass"
                            style={{
                                textAlign: 'left', border: '1px solid rgba(255,255,255,0.08)',
                                padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                                background: 'rgba(255,255,255,0.04)',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = 'translateY(-4px)';
                                el.style.borderColor = 'rgba(250,204,21,0.3)';
                                el.style.boxShadow = '0 0 0 1px rgba(250,204,21,0.15), 0 12px 40px rgba(0,0,0,0.4)';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = 'translateY(0)';
                                el.style.borderColor = 'rgba(255,255,255,0.08)';
                                el.style.boxShadow = 'none';
                            }}
                        >
                            {/* Icon + issuer */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: 40, height: 40, borderRadius: 10, background: 'rgba(250,204,21,0.08)',
                                    border: '1px solid rgba(250,204,21,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem', flexShrink: 0,
                                }}>
                                    {cert.issuerIcon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fcd34d', letterSpacing: '0.06em' }}>
                                        {cert.issuer}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: 'rgba(200,210,240,0.4)', marginTop: '0.1rem' }}>{cert.date}</div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.95rem', color: '#f0f4ff', lineHeight: 1.35, margin: 0 }}>
                                {cert.title}
                            </h3>

                            {/* Credential + View hint */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                <span style={{ fontSize: '0.72rem', color: 'rgba(200,210,240,0.35)', fontFamily: 'monospace' }}>
                                    ID: {cert.credentialId}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#60a5fa', fontWeight: 600 }}>
                                    <Award size={12} /> View
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* ── Modal ── */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 200,
                            background: 'rgba(2,8,16,0.85)',
                            backdropFilter: 'blur(12px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: '1.5rem',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.88, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.88, y: 30, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                            onClick={e => e.stopPropagation()}
                            className="glass"
                            style={{ maxWidth: 480, width: '100%', padding: '2rem', position: 'relative' }}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setSelected(null)}
                                style={{
                                    position: 'absolute', top: '1rem', right: '1rem',
                                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 8, padding: '0.35rem',
                                    color: 'rgba(200,210,240,0.6)', display: 'flex',
                                }}
                            >
                                <X size={16} />
                            </button>

                            {/* Issuer */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '2rem' }}>{selected.issuerIcon}</span>
                                <div>
                                    <div style={{ fontWeight: 700, color: '#fcd34d', fontSize: '0.85rem' }}>{selected.issuer}</div>
                                    <div style={{ color: 'rgba(200,210,240,0.4)', fontSize: '0.8rem', marginTop: '0.1rem' }}>{selected.date}</div>
                                </div>
                            </div>

                            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.3rem', color: '#f0f4ff', marginBottom: '1rem', lineHeight: 1.3 }}>
                                {selected.title}
                            </h2>
                            <p style={{ fontSize: '0.88rem', color: 'rgba(200,210,240,0.6)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                {selected.description}
                            </p>

                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)', marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.72rem', color: 'rgba(200,210,240,0.35)', marginBottom: '0.3rem' }}>Credential ID</div>
                                <div style={{ fontFamily: 'monospace', color: '#a78bfa', fontSize: '0.88rem' }}>{selected.credentialId}</div>
                            </div>

                            <a
                                href={selected.link} target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ textDecoration: 'none', display: 'flex', width: '100%', justifyContent: 'center', borderRadius: 12 }}
                            >
                                <ExternalLink size={15} /> Verify Credential
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

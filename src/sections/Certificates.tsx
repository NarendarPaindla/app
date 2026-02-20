import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certificates } from '../data/portfolio';
import { Award, X, ExternalLink } from 'lucide-react';

export default function Certificates() {
    const [selected, setSelected] = useState<typeof certificates[0] | null>(null);
    const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });

    return (
        <section id="certificates" ref={ref} style={{ background: 'var(--bg)' }} className="section">
            <div className="wrap" style={{ position: 'relative' }}>

                <div className="section-num" style={{ position: 'absolute', right: 0, top: '-3rem', zIndex: 0 }}>07</div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}
                >
                    <span className="eyebrow">07 — Certificates</span>
                    <h2 className="h2">
                        Credentials &amp;<br />
                        <span className="fire-text">Recognition</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid-auto" style={{ position: 'relative', zIndex: 1 }}>
                    {certificates.map((cert, i) => (
                        <motion.button
                            key={cert.id}
                            onClick={() => setSelected(cert)}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.09, duration: 0.5 }}
                            className="card card-accent-b"
                            style={{
                                textAlign: 'left', padding: '1.5rem',
                                display: 'flex', flexDirection: 'column', gap: '0.875rem',
                                transition: 'background 0.25s, box-shadow 0.25s',
                            }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--card-2)'; el.style.boxShadow = '0 4px 32px -8px rgba(249,115,22,0.2)'; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--card)'; el.style.boxShadow = 'none'; }}
                        >
                            {/* Icon + issuer */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                                    background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
                                }}>
                                    {cert.issuerIcon}
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.06em' }}>
                                        {cert.issuer}
                                    </div>
                                    <div className="mono" style={{ marginTop: '0.1rem' }}>{cert.date}</div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="h3" style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.35 }}>{cert.title}</h3>

                            {/* Footer */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--t3)' }}>
                                    {cert.credentialId}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--fire)', fontWeight: 700 }}>
                                    <Award size={12} /> View
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(11,10,9,0.88)', backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
                    >
                        <motion.div
                            initial={{ scale: 0.88, y: 28, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.88, y: 28, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                            onClick={e => e.stopPropagation()}
                            className="card"
                            style={{ maxWidth: 460, width: '100%', padding: '2rem', position: 'relative' }}
                        >
                            <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: 8, padding: '0.3rem', color: 'var(--t2)', display: 'flex' }}>
                                <X size={16} />
                            </button>

                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '2rem' }}>{selected.issuerIcon}</span>
                                <div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.06em' }}>{selected.issuer}</div>
                                    <div className="mono" style={{ marginTop: '0.15rem' }}>{selected.date}</div>
                                </div>
                            </div>

                            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--t1)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{selected.title}</h2>
                            <p style={{ fontSize: '0.88rem', color: 'var(--t2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{selected.description}</p>

                            <div style={{ padding: '0.875rem 1rem', background: 'var(--bg-2)', borderRadius: 8, border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
                                <div className="mono" style={{ marginBottom: '0.25rem' }}>Credential ID</div>
                                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--fire)', fontSize: '0.85rem' }}>{selected.credentialId}</div>
                            </div>

                            <a href={selected.link} target="_blank" rel="noopener noreferrer" className="btn btn-fire"
                                style={{ textDecoration: 'none', justifyContent: 'center', width: '100%', borderRadius: 10 }}>
                                <ExternalLink size={15} /> Verify Credential
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

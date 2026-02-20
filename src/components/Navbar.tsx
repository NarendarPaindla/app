import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
];

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            for (let i = NAV.length - 1; i >= 0; i--) {
                const el = document.getElementById(NAV[i].id);
                if (el && window.scrollY + 120 >= el.offsetTop) { setActive(NAV[i].id); break; }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                borderBottom: scrolled ? '1px solid #2A2720' : '1px solid transparent',
                background: scrolled ? 'rgba(11,10,9,0.94)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                transition: 'background 0.35s ease, border-color 0.35s ease',
                padding: scrolled ? '0.8rem 0' : '1.2rem 0',
            }}
        >
            <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Logo */}
                <button onClick={() => go('home')} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                        width: 36, height: 36, borderRadius: 8,
                        background: 'var(--fire)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.8rem', color: '#0B0A09', letterSpacing: '-0.02em',
                    }}>
                        PNR
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--t1)', letterSpacing: '-0.02em' }}>
                            Narendar Reddy
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--t3)', letterSpacing: '0.08em' }}>
                            ENG · EDU
                        </span>
                    </div>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    {NAV.map(n => (
                        <button
                            key={n.id}
                            onClick={() => go(n.id)}
                            style={{
                                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.82rem',
                                background: 'none', border: 'none',
                                borderRadius: 8, padding: '0.4rem 0.75rem',
                                color: active === n.id ? 'var(--fire)' : 'var(--t2)',
                                transition: 'color 0.2s ease',
                                letterSpacing: '-0.01em',
                            }}
                            onMouseEnter={e => { if (active !== n.id) (e.target as HTMLElement).style.color = 'var(--t1)'; }}
                            onMouseLeave={e => { if (active !== n.id) (e.target as HTMLElement).style.color = 'var(--t2)'; }}
                        >
                            {n.label}
                        </button>
                    ))}
                </nav>

                {/* CTA + Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button onClick={() => go('contact')} className="btn btn-fire" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem' }}
                        hidden={false}>
                        Hire Me →
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        style={{ background: 'none', border: 'none', color: 'var(--t1)', display: 'none', padding: '0.25rem' }}
                        className="mobile-toggle"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden', background: '#0F0E0D', borderTop: '1px solid var(--border)' }}
                    >
                        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                            {NAV.map(n => (
                                <button key={n.id} onClick={() => { go(n.id); setOpen(false); }}
                                    style={{
                                        background: active === n.id ? 'rgba(249,115,22,0.08)' : 'none', border: 'none',
                                        borderLeft: active === n.id ? '3px solid var(--fire)' : '3px solid transparent',
                                        borderRadius: 8, padding: '0.75rem 1rem', textAlign: 'left',
                                        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem',
                                        color: active === n.id ? 'var(--fire)' : 'var(--t2)',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {n.label}
                                </button>
                            ))}
                            <button onClick={() => { go('contact'); setOpen(false); }} className="btn btn-fire"
                                style={{ marginTop: '0.75rem', justifyContent: 'center' }}>
                                Hire Me →
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 820px) {
          .mobile-toggle { display: flex !important; }
          nav.hidden { display: none !important; }
          .btn.btn-fire:not(.mobile-toggle + .btn-fire) { display: none; }
        }
      `}</style>
        </motion.header>
    );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
];

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            for (let i = NAV.length - 1; i >= 0; i--) {
                const el = document.getElementById(NAV[i].id);
                if (el && window.scrollY + 140 >= el.offsetTop) {
                    setActive(NAV[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease',
                padding: scrolled ? '0.75rem 0' : '1.25rem 0',
                background: scrolled
                    ? 'rgba(2,8,16,0.88)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
        >
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <button
                    onClick={() => scrollTo('home')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none' }}
                >
                    <div style={{
                        width: 34, height: 34, borderRadius: 10,
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.85rem', fontWeight: 700, color: '#fff',
                        fontFamily: 'Space Grotesk, sans-serif',
                    }}>
                        PNR
                    </div>
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#f0f4ff', letterSpacing: '-0.01em' }}>
                        Narendar
                    </span>
                </button>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
                    {NAV.map(n => (
                        <button
                            key={n.id}
                            onClick={() => scrollTo(n.id)}
                            style={{
                                background: active === n.id ? 'rgba(255,255,255,0.07)' : 'none',
                                border: active === n.id ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                                borderRadius: 8,
                                padding: '0.4rem 0.9rem',
                                fontSize: '0.85rem',
                                fontWeight: active === n.id ? 600 : 400,
                                color: active === n.id ? '#f0f4ff' : 'rgba(200,210,240,0.55)',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => {
                                if (active !== n.id) (e.currentTarget as HTMLButtonElement).style.color = '#f0f4ff';
                            }}
                            onMouseLeave={e => {
                                if (active !== n.id) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(200,210,240,0.55)';
                            }}
                        >
                            {n.label}
                        </button>
                    ))}
                </nav>

                {/* CTA */}
                <button
                    onClick={() => scrollTo('contact')}
                    className="btn btn-primary hidden md:flex"
                    style={{ padding: '0.55rem 1.35rem', fontSize: '0.85rem', borderRadius: 10 }}
                >
                    Hire Me
                </button>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    style={{ background: 'none', border: 'none', color: '#f0f4ff', padding: '0.25rem' }}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        style={{
                            overflow: 'hidden',
                            background: 'rgba(8,12,26,0.96)',
                            backdropFilter: 'blur(20px)',
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {NAV.map(n => (
                                <button
                                    key={n.id}
                                    onClick={() => { scrollTo(n.id); setOpen(false); }}
                                    style={{
                                        background: active === n.id ? 'rgba(99,102,241,0.1)' : 'none',
                                        border: 'none',
                                        borderRadius: 10,
                                        padding: '0.75rem 1rem',
                                        textAlign: 'left',
                                        fontSize: '0.9rem',
                                        fontWeight: active === n.id ? 600 : 400,
                                        color: active === n.id ? '#a5b4fc' : 'rgba(200,210,240,0.6)',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {n.label}
                                </button>
                            ))}
                            <button
                                onClick={() => { scrollTo('contact'); setOpen(false); }}
                                className="btn btn-primary"
                                style={{ marginTop: '0.75rem', borderRadius: 12 }}
                            >
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hide on mobile
        if (window.innerWidth < 768) return;

        let mouseX = 0, mouseY = 0;
        let outerX = 0, outerY = 0;
        let animId: number;

        const handleMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isVisible) setIsVisible(true);
            if (dotRef.current) {
                dotRef.current.style.left = `${mouseX}px`;
                dotRef.current.style.top = `${mouseY}px`;
            }
        };

        const animate = () => {
            outerX += (mouseX - outerX) * 0.12;
            outerY += (mouseY - outerY) * 0.12;
            if (cursorRef.current) {
                cursorRef.current.style.left = `${outerX}px`;
                cursorRef.current.style.top = `${outerY}px`;
            }
            animId = requestAnimationFrame(animate);
        };

        const handleEnter = () => setIsHovering(true);
        const handleLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', handleMove);
        document.querySelectorAll('a, button, [data-hover]').forEach(el => {
            el.addEventListener('mouseenter', handleEnter);
            el.addEventListener('mouseleave', handleLeave);
        });

        animId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMove);
            cancelAnimationFrame(animId);
        };
    }, [isVisible]);

    if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

    return (
        <>
            {/* Outer ring – follows with lag */}
            <div
                ref={cursorRef}
                style={{ position: 'fixed', zIndex: 9999, pointerEvents: 'none', transform: 'translate(-50%, -50%)' }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 48 : 36,
                        height: isHovering ? 48 : 36,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                        border: '1.5px solid rgba(59, 130, 246, 0.6)',
                        borderRadius: '50%',
                        boxShadow: isHovering
                            ? '0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(168,85,247,0.3)'
                            : '0 0 10px rgba(59,130,246,0.2)',
                    }}
                />
            </div>

            {/* Inner dot – instant */}
            <div
                ref={dotRef}
                style={{ position: 'fixed', zIndex: 10000, pointerEvents: 'none', transform: 'translate(-50%, -50%)' }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 8 : 5,
                        height: isHovering ? 8 : 5,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.15 }}
                    style={{
                        background: isHovering
                            ? 'linear-gradient(135deg, #3b82f6, #a855f7)'
                            : '#60a5fa',
                        borderRadius: '50%',
                        boxShadow: '0 0 8px rgba(59,130,246,0.8)',
                    }}
                />
            </div>
        </>
    );
}

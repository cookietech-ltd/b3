'use client';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Store mouse position in refs to avoid re-renders during movement
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    useEffect(() => {
        let rafId: number;

        const updatePosition = () => {
            if (cursorRef.current && followerRef.current) {
                const transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
                cursorRef.current.style.transform = transform;
                followerRef.current.style.transform = transform;
            }
            rafId = requestAnimationFrame(updatePosition);
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;

            if (!isVisible) setIsVisible(true);

            // Check for clickable targets
            const target = e.target as HTMLElement;
            const computedStyle = window.getComputedStyle(target);
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                computedStyle.cursor === 'pointer';

            setIsPointer(isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        // Start loop
        rafId = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, []); // Dependency on isVisible to ensure we don't start the loop too early if needed, but actually [] is better for stability. Let's stick to [] for the loop stability.

    // Actually, looking at the previous failed attempts, the dependency on isVisible might be re-triggering the effect. 
    // Let's remove isVisible from dependencies and handle it differently or just let it be. 
    // The issue is likely that when isVisible changes, the effect cleans up and restarts, resetting everything.
    // So we must remove isVisible from the dependency array or perform the setup outside it.

    return (
        <>
            <style jsx global>{`
                @media (min-width: 768px) {
                    body, a, button, input, textarea, select {
                        cursor: none !important;
                    }
                }
            `}</style>

            {/* Wrapper to handle Visibility (Opacity) - React Controlled */}
            <div className={`hidden md:block fixed inset-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Position Marker - React should NOT touch this node's style */}
                <div ref={cursorRef} className="absolute top-0 left-0 will-change-transform">
                    {/* Visual Dot */}
                    <div className="w-2 h-2 bg-white rounded-full -translate-x-1 -translate-y-1" />
                </div>
            </div>

            {/* Wrapper to handle Visibility (Opacity) - React Controlled */}
            <div className={`hidden md:block fixed inset-0 pointer-events-none z-[9998] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Position Marker - React should NOT touch this node's style */}
                <div ref={followerRef} className="absolute top-0 left-0 will-change-transform transition-transform duration-300 ease-out">
                    {/* Visual Ring - React Controlled (Scale/Color) */}
                    <div className={`
                        w-12 h-12 rounded-full border border-white -translate-x-6 -translate-y-6 transition-all duration-300 ease-out
                        ${isPointer ? 'scale-150 bg-white/10' : 'scale-100 border-white/50'}
                        ${isClicking ? 'scale-75 bg-white/20' : ''}
                    `} />
                </div>
            </div>
        </>
    );
}

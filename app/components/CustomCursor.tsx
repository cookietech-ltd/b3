'use client';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update positions directly
            if (cursorRef.current && followerRef.current) {
                const transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                cursorRef.current.style.transform = transform;
                followerRef.current.style.transform = transform;

                // Show on first movement
                if (!isVisible) setIsVisible(true);
            }

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

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                @media (min-width: 768px) {
                    body, a, button, input, textarea, select {
                        cursor: none !important;
                    }
                }
            `}</style>

            {/* Main Cursor (Dot) - Immediate movement */}
            <div
                ref={cursorRef}
                className={`hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="w-2 h-2 bg-teal-400 rounded-full mix-blend-difference -translate-x-1 -translate-y-1" />
            </div>

            {/* Follower (Ring) - Smoothed movement via CSS transition */}
            <div
                ref={followerRef}
                className={`hidden md:block fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform transition-transform duration-300 ease-out transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className={`
                    w-12 h-12 border border-teal-500/50 -translate-x-6 -translate-y-6 transition-transform duration-300 ease-out
                    ${isPointer ? 'scale-150 bg-teal-500/10 border-teal-400' : 'scale-100'}
                    ${isClicking ? 'scale-75 bg-teal-400/20' : ''}
                `} />
            </div>
        </>
    );
}

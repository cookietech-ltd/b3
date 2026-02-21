'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let dpr = window.devicePixelRatio || 1;

        const resize = () => {
            dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        // Grid parameters
        const gridSize = 80;
        const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
        const nodeCount = 50;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                radius: Math.random() * 1.5 + 0.5,
            });
        }

        let animationId: number;

        const draw = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            ctx.clearRect(0, 0, w, h);

            // Draw subtle grid lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 0.5;
            for (let x = 0; x < w; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            for (let y = 0; y < h; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }

            // Draw grid intersection dots
            ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
            for (let x = 0; x < w; x += gridSize) {
                for (let y = 0; y < h; y += gridSize) {
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Draw connections between moving nodes
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 180) {
                        const opacity = (1 - dist / 180) * 0.12;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update moving nodes
            for (const node of nodes) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();

                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > w) node.vx *= -1;
                if (node.y < 0 || node.y > h) node.vy *= -1;
            }

            // Draw a few geometric accent shapes
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
            ctx.lineWidth = 1;

            // Rotated square
            ctx.save();
            ctx.translate(w * 0.7, h * 0.3);
            ctx.rotate(Math.PI / 4);
            ctx.strokeRect(-60, -60, 120, 120);
            ctx.restore();

            // Circle
            ctx.beginPath();
            ctx.arc(w * 0.2, h * 0.6, 40, 0, Math.PI * 2);
            ctx.stroke();

            // Triangle
            ctx.beginPath();
            ctx.moveTo(w * 0.85, h * 0.7);
            ctx.lineTo(w * 0.85 + 50, h * 0.7 + 80);
            ctx.lineTo(w * 0.85 - 50, h * 0.7 + 80);
            ctx.closePath();
            ctx.stroke();

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center pb-12 md:pb-24 pt-32 md:pt-48">
            {/* Pure CSS Background — resolution independent */}
            <div className="absolute inset-0 bg-black z-0">
                {/* Diagonal accent lines via CSS */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `
                        linear-gradient(135deg, white 1px, transparent 1px),
                        linear-gradient(225deg, white 1px, transparent 1px)
                    `,
                    backgroundSize: '120px 120px',
                }} />
            </div>

            {/* Animated Canvas Overlay — always crisp */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-[2] pointer-events-none"
            />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-[3]" />

            <div className="relative z-10 container-custom w-full">
                <div className="max-w-4xl space-y-8">
                    <h1 className="text-5xl md:text-8xl font-heading font-thin tracking-tighter text-white leading-[1.05] animate-fade-in-up">
                        Operational Systems for <span className="font-normal">Growing Service Businesses</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl font-body text-gray-200 leading-relaxed">
                        We design and implement operational systems for service businesses — from strategy through execution.
                    </p>

                    <a href="https://calendly.com/brad-horner-b-3solutions/30min" target="_blank" className="inline-flex items-center gap-2 bg-white text-black font-body font-bold uppercase tracking-widest px-8 py-4 sharp transition-all hover:bg-black hover:text-white hover:border hover:border-white active:scale-95 group border border-transparent">
                        Schedule Strategic Call
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}

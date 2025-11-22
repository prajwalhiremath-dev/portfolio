"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Server, FileText, Terminal, ShieldCheck, Cpu } from "lucide-react";

// --- Utility: Neural Network Background ---
const NeuralBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles: { x: number; y: number; vx: number; vy: number }[] = [];
        const particleCount = 60; // Number of nodes

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
            });
        }

        const draw = () => {
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, width, height);

            // Draw connections
            ctx.strokeStyle = "rgba(0, 255, 65, 0.1)"; // Neon green lines
            ctx.lineWidth = 1;

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];

                // Move particles
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw particle
                ctx.fillStyle = "rgba(0, 255, 65, 0.5)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();

                // Connect to neighbors
                for (let j = i + 1; j < particleCount; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        };

        const animId = requestAnimationFrame(draw);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30 pointer-events-none" />;
};

// --- Utility: Glitch Text ---
const GlitchText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split("").map((char, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 2;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
};

export default function About() {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const stats = [
        { label: "Experience", value: "4+ Years" },
        { label: "Architectures", value: "RAG & Agents" },
        { label: "Clearance", value: "Top Secret" },
    ];

    return (
        <section className="py-32 bg-deep-black relative overflow-hidden" id="about">
            <NeuralBackground />

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16 relative z-10">

                {/* 3D Dossier Card */}
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    onMouseMove={onMouseMove}
                    onMouseLeave={() => { x.set(0); y.set(0); }}
                    className="w-full max-w-sm relative group perspective-1000"
                >
                    <div className="absolute inset-0 bg-neon-green/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />

                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-green/50 shadow-[0_0_15px_#00ff41] animate-scan opacity-50" />

                        <div className="flex flex-col items-center text-center relative" style={{ transform: "translateZ(30px)" }}>
                            <div className="w-28 h-28 rounded-full border-2 border-neon-green/30 p-1 mb-6 relative">
                                <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center overflow-hidden relative">
                                    <Terminal className="w-12 h-12 text-neon-green animate-pulse" />
                                    {/* Grid overlay on avatar */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff41_1px,transparent_1px),linear-gradient(to_bottom,#00ff41_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
                                </div>
                                {/* Spinning rings */}
                                <div className="absolute inset-[-4px] border border-neon-green/30 rounded-full border-t-transparent animate-spin-slow" />
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-white mb-1">
                                <GlitchText text="Prajwal Hiremath" />
                            </h3>
                            <p className="text-neon-green font-mono text-xs mb-6 tracking-widest">ID: DATA_SCIENTIST_L4</p>

                            <div className="w-full space-y-3">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 text-sm font-mono">
                                        <span className="text-slate-500">{stat.label}</span>
                                        <span className="text-white">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Decrypted Bio */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="w-6 h-6 text-neon-green" />
                            <span className="text-neon-green font-mono text-sm tracking-widest">ACCESS GRANTED // DECRYPTING BIO...</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-cyan-400">Systems</span> of Tomorrow.
                        </h2>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
                            I don't just train models; I engineer the <strong className="text-white">intelligence infrastructure</strong> that powers them.
                            Currently at <span className="text-white">Deloitte USI</span>, I'm deploying autonomous SQL Agents and RAG pipelines
                            that outperform standard benchmarks by <span className="text-neon-green">18-31%</span>.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Brain,
                                    title: "LLM Architectures",
                                    desc: "Specializing in Agentic workflows, CoT prompting, and FastMCP protocols."
                                },
                                {
                                    icon: FileText,
                                    title: "Research Translation",
                                    desc: "Turning arXiv papers into production-grade code (e.g., Self-Correction mechanisms)."
                                },
                                {
                                    icon: Server,
                                    title: "Distributed Systems",
                                    desc: "Building multi-tenant platforms (OmniScout) that scale to enterprise needs."
                                },
                                {
                                    icon: Cpu,
                                    title: "Deep Learning",
                                    desc: "Custom CNNs for Audio/Vision and fine-tuning Transformer models."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-neon-green/50 transition-all hover:-translate-y-1 group">
                                    <item.icon className="w-6 h-6 text-slate-500 group-hover:text-neon-green mb-3 transition-colors" />
                                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
"use client";

import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Terminal, Download, ChevronRight, Cpu, Code2, Network } from "lucide-react";

// --- Utility Components ---

// 1. Matrix Rain Background
const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const chars = "ABCDEF0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
        const charArray = chars.split("");

        const fontSize = 14;
        const columns = width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#00ff41"; // Neon Green
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                if (Math.random() > 0.98) {
                    ctx.fillStyle = "#fff";
                } else {
                    ctx.fillStyle = "#00ff41";
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none" />;
};

// 2. Glitch Text Effect
const GlitchText = ({ text, className }: { text: string, className?: string }) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

// --- Main Hero Component ---

// Profile Roles based on your Resume
const profiles = [
    { role: "Data Scientist", desc: "I build RAG systems with 95-99% query accuracy." },
    { role: "Backend Engineer", desc: "I architect scalable multi-tenant AI platforms." },
    { role: "Deep Learning Engineer", desc: "I train end-to-end PyTorch models for Audio & Vision." },
    { role: "ML Engineer", desc: "I reduce operational time by 80% using automated ML pipelines." },
    { role: "GenAI Specialist", desc: "I deploy autonomous Multi agents using MCP & LangGraph." }
];

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    // --- Dynamic Typing Logic for Roles ---
    const [profileIndex, setProfileIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [currentDesc, setCurrentDesc] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentProfile = profiles[profileIndex];
        // The full text to type: "Role : Description"
        const fullText = `${currentProfile.role} : ${currentProfile.desc}`;

        const controls = animate(count, fullText.length, {
            type: "tween",
            duration: isDeleting ? 1 : 3,
            ease: "linear",
            onUpdate: (latest) => {
                setCurrentDesc(fullText.slice(0, Math.round(latest)));
            },
            onComplete: () => {
                if (!isDeleting) {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                } else {
                    // Move to next role
                    setIsDeleting(false);
                    setProfileIndex((prev) => (prev + 1) % profiles.length);
                    count.set(0); // Reset count for next animation
                }
            }
        });

        // If deleting, we animate backwards from length to 0 manually conceptually,
        // but framer motion animate handles 'to' value. 
        // To implement delete, we actually need to restart animation from length to 0.
        if (isDeleting) {
            controls.stop(); // Stop the forward animation
            animate(count, 0, { // Animate backwards
                type: "tween",
                duration: 1.5,
                ease: "linear",
                onUpdate: (latest) => {
                    setCurrentDesc(fullText.slice(0, Math.round(latest)));
                },
                onComplete: () => {
                    setIsDeleting(false);
                    setProfileIndex((prev) => (prev + 1) % profiles.length);
                }
            });
        }

        return () => controls.stop();
    }, [profileIndex, isDeleting, count]);


    // --- Terminal Auto-Typing ---
    const [terminalLines, setTerminalLines] = useState<string[]>([
        "> System initializing...",
    ]);

    useEffect(() => {
        const sequence = [
            { text: "> Loading neural modules...", delay: 800 },
            { text: "> Connecting to LangChain Agents...", delay: 1600 },
            { text: "> Verifying OmniScout architecture...", delay: 2400 },
            { text: "> Access granted. Welcome, Prajwal.", delay: 3200, highlight: true },
        ];

        let timeouts: NodeJS.Timeout[] = [];

        sequence.forEach(({ text, delay, highlight }) => {
            const timeout = setTimeout(() => {
                setTerminalLines(prev => [
                    ...prev,
                    highlight ? `<span class="text-neon-green font-bold">${text}</span>` : text
                ]);
            }, delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black selection:bg-neon-green selection:text-black">

            {/* 1. Matrix Rain Background */}
            <MatrixRain />

            {/* 2. Vignette & Grid Overlay */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#00ff41_1px,transparent_1px),linear-gradient(to_bottom,#00ff41_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.03] pointer-events-none" />

            {/* 3. Main Content */}
            <div className="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">

                {/* Left Column: Text Identity */}
                <motion.div
                    style={{ y }}
                    className="text-left space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded border border-neon-green/30 bg-neon-green/5 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                        </span>
                        <span className="text-xs font-mono text-neon-green tracking-wider">NEURAL LINK: ACTIVE</span>
                    </motion.div>

                    <div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-2 tracking-tight">
                            <GlitchText text="PRAJWAL" />
                        </h1>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-400 mb-6 tracking-tight">
                            <GlitchText text="HIREMATH" className="opacity-70" />
                        </h1>
                    </div>

                    {/* Dynamic Typing Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-lg md:text-xl text-slate-300 font-mono h-20 md:h-16 leading-relaxed border-l-2 border-neon-green/50 pl-6 flex items-center"
                    >
                        <span>
                            {/* Split the currentDesc to style the Role differently if needed */}
                            {currentDesc.split(":").map((part, index) => (
                                <span key={index} className={index === 0 ? "text-neon-green font-bold" : "text-slate-300"}>
                                    {index === 1 ? " : " : ""}{part}
                                </span>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-5 bg-neon-green ml-1 align-middle"
                            />
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a href="#projects" className="group relative px-8 py-3 bg-neon-green text-black font-bold font-mono rounded overflow-hidden">
                            <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-300 ease-out -skew-x-12 -translate-x-full" />
                            <span className="relative flex items-center gap-2">
                                <Cpu className="w-5 h-5" />
                                INITIATE_PROJECTS
                            </span>
                        </a>

                        <a
                            href="/prajwal_hiremath_resume_v2.pdf"
                            download="A_S_Prajwal_Hiremath_Resume.pdf"
                            className="px-8 py-4 bg-neon-green text-black font-bold rounded hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                        >    <Download className="w-5 h-5 group-hover:animate-bounce" />
                            DOWNLOAD_RESUME
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Floating Holographic Terminal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:block relative"
                >
                    {/* Glass Card */}
                    <div className="relative w-full max-w-lg mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">

                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-xs font-mono text-slate-500 flex items-center gap-1">
                                <Terminal className="w-3 h-3" />
                                bash — 80x24
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm md:text-base h-80 flex flex-col">
                            <div className="flex-1 space-y-2">
                                {terminalLines.map((line, i) => (
                                    <div
                                        key={i}
                                        className="text-slate-300"
                                        dangerouslySetInnerHTML={{ __html: line }}
                                    />
                                ))}
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2 h-5 bg-neon-green inline-block align-middle ml-1"
                                />
                            </div>

                            {/* Stats Grid inside Terminal */}
                            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">MODEL ACCURACY</div>
                                    <div className="text-xl text-neon-green font-bold">99.4%</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">UPTIME</div>
                                    <div className="text-xl text-neon-green font-bold">99.99%</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">USERS SERVED</div>
                                    <div className="text-xl text-neon-green font-bold">300+</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">REVENUE SAVED</div>
                                    <div className="text-xl text-neon-green font-bold">$150K+</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements behind terminal */}
                    <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-neon-green/20 rounded-full blur-[100px]" />
                    <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-electric-violet/20 rounded-full blur-[100px]" />
                </motion.div>
            </div>
        </section>
    );
}
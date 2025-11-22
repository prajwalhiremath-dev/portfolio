"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, Download, Code, ChevronRight } from "lucide-react";

const roles = [
    { text: "GenAI Specialist", prefix: "I build 99% Accurate Agentic Systems." },
    { text: "Data Scientist", prefix: "I architect Scalable ML Pipelines." },
    { text: "Backend Engineer", prefix: "I develop Multi-Tenant AI Platforms." },
];

const terminalLogs = [
    "Initializing neural networks...",
    "Loading LangChain agents...",
    "Connecting to AWS Bedrock...",
    "> Architecting SQL Agents...",
    "Optimizing RAG pipelines...",
    "Deploying FastMCP servers...",
    "System status: ONLINE",
    "Fetching vector embeddings...",
    "Running XGBoost inference...",
    "Acquiring lock: PostgreSQL...",
    "Executing: sudo apt-get install success",
    "Compiling CUDA kernels...",
    "Fine-tuning BERT models...",
    "Mounting S3 buckets...",
    "Allocating GPU resources...",
    "Starting celery workers...",
    "Hydrating Redux store...",
    "Verifying JWT tokens..."
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [currentDisplayText, setCurrentDisplayText] = useState("");

    // Background Logs State
    const [logs, setLogs] = useState<string[]>([]);

    // Terminal Typing Animation Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLog = terminalLogs[Math.floor(Math.random() * terminalLogs.length)];
                const newLogs = [...prev, newLog];
                if (newLogs.length > 15) newLogs.shift(); // Keep last 15 lines
                return newLogs;
            });
        }, 600); // Speed of typing

        return () => clearInterval(interval);
    }, []);

    // Role Typing Effect
    useEffect(() => {
        const unsubscribe = rounded.onChange((latest) => {
            setCurrentDisplayText(roles[roleIndex].prefix.slice(0, latest));
        });
        return () => unsubscribe();
    }, [rounded, roleIndex]);

    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const controls = animate(count, roles[roleIndex].prefix.length, {
            type: "tween",
            duration: 2,
            ease: "linear",
            onComplete: () => {
                setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            },
        });
        return controls.stop;
    }, [roleIndex, isDeleting, count]);

    useEffect(() => {
        if (isDeleting) {
            const controls = animate(count, 0, {
                type: "tween",
                duration: 1,
                ease: "linear",
                onComplete: () => {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                },
            });
            return controls.stop;
        }
    }, [isDeleting, roleIndex, count]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black pt-20">
            {/* Background Terminal Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden font-mono text-xs md:text-sm leading-relaxed p-6 flex flex-col justify-end pb-32 opacity-20 select-none pointer-events-none">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0, 1, 0.8] }}
                        transition={{ duration: 0.2 }}
                        className="text-neon-green whitespace-nowrap"
                    >
                        <span className="text-slate-500 mr-2">root@system:~$</span>
                        {log}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-neon-green mt-1"
                />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff41_1px,transparent_1px),linear-gradient(to_bottom,#00ff41_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                        </span>
                        <span className="text-sm font-mono text-neon-green">System Online</span>
                    </div>

                    <div className="h-40 md:h-48 mb-6 flex flex-col items-center justify-center">
                        <motion.h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-2 text-slate-100">
                            {currentDisplayText}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-1 h-8 md:h-12 bg-neon-green ml-1 align-middle"
                            />
                        </motion.h1>
                        <motion.div
                            key={roleIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-4xl md:text-6xl font-bold text-neon-green text-glow"
                        >
                            {roles[roleIndex].text}
                        </motion.div>
                    </div>

                    <p className="text-xl md:text-2xl text-slate-400 mb-10 font-mono max-w-3xl mx-auto leading-relaxed">
                        A S Prajwal Hiremath | Data Scientist & ML Engineer
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-none border border-neon-green bg-neon-green/10 text-neon-green font-mono font-bold text-lg flex items-center gap-2 hover:bg-neon-green hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]"
                        >
                            Execute Protocol
                            <Code className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="/api/resume"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-none border border-white/20 bg-black text-slate-300 font-mono font-bold text-lg flex items-center gap-2 hover:bg-white/5 hover:border-neon-green/50 hover:text-neon-green transition-all duration-300 group"
                        >
                            <span className="group-hover:hidden">sudo fetch resume</span>
                            <span className="hidden group-hover:inline">Download Resume</span>
                            <Download className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
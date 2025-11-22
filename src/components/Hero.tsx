"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, Download } from "lucide-react";

const roles = [
    { text: "GenAI Specialist", prefix: "I build 99% Accurate Agentic Systems." },
    { text: "Backend Engineer", prefix: "I developed the OmniScout Multi-Tenant Platform." },
    { text: "Deep Learning Engineer", prefix: "I train End-to-End Transformer Models." },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    // The original displayText was a MotionValue. To ensure it's a string,
    // we use a state variable that updates when the MotionValue changes.
    const [currentDisplayText, setCurrentDisplayText] = useState("");

    // Update the string state whenever the MotionValue changes
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
    }, [roleIndex, isDeleting]); // eslint-disable-line react-hooks/exhaustive-deps

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
    }, [isDeleting, roleIndex]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black pt-20">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20">
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

                    <div className="h-32 md:h-40 mb-6 flex flex-col items-center justify-center">
                        <motion.h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-2">
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

                    <p className="text-xl md:text-2xl text-slate-400 mb-10 font-mono max-w-3xl mx-auto">
                        Data Scientist | 4+ Years Experience | Ex-Cisco | Deloitte Consultant
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-none border border-neon-green bg-neon-green/10 text-neon-green font-mono font-bold text-lg flex items-center gap-2 hover:bg-neon-green hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]"
                        >
                            Execute_Portfolio()
                            <Terminal className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="/prajwal_resume.pdf"
                            download="prajwal_resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-none border border-white/20 bg-black text-slate-300 font-mono font-bold text-lg flex items-center gap-2 hover:bg-white/5 hover:border-neon-green/50 hover:text-neon-green transition-all duration-300"
                        >
                            sudo apt-get resume.tex
                            <Download className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Power, MapPin, Wifi } from "lucide-react";
import { useState, useEffect } from "react";

// --- Blinking Cursor Component ---
const Cursor = () => (
    <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-2 h-4 bg-neon-green ml-1 align-middle"
    />
);

export default function Footer() {
    const [time, setTime] = useState<string>("");

    // Clock for the "System Time"
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        {
            name: "GITHUB_UPLINK",
            url: "https://github.com/prajwalhiremath-dev",
            icon: Github
        },
        {
            name: "LINKEDIN_Secure",
            url: "https://linkedin.com/in/prajwal-hiremath-dev/",
            icon: Linkedin
        },
        {
            name: "MAIL_PROTOCOL",
            url: "mailto:prajwalhiremath2017@gmail.com",
            icon: Mail
        }
    ];

    return (
        <footer className="bg-black border-t border-white/10 font-mono relative overflow-hidden pt-16 pb-8">

            {/* Background Matrix Grid (Faint) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Row: Command Prompt Interface */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/10 pb-12">

                    {/* Left: Identity */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 text-neon-green text-xs mb-2 opacity-70">
                            <Terminal className="w-3 h-3" />
                            <span>root@prajwal:~/portfolio/footer</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            A S Prajwal Hiremath
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            <span className="text-neon-green">{">"}</span> GenAI & ML Specialist executing scalable architectures.
                            <br />
                            <span className="text-neon-green">{">"}</span> Based in Bengaluru, India.
                        </p>
                    </div>

                    {/* Right: "Execute" Social Links */}
                    <div className="flex p-4 flex-col gap-3 w-full md:w-auto">
                        <div className="text-xs text-slate-500 mb-1 uppercase tracking-widest">Establish Connection</div>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded hover:border-neon-green/50 hover:bg-neon-green/10 transition-all duration-300 w-full md:w-64"
                            >
                                <div className="flex items-center gap-3">
                                    <link.icon className="w-4 h-4 text-slate-400 group-hover:text-neon-green transition-colors" />
                                    <span className="text-xs text-slate-300 group-hover:text-white transition-colors tracking-wider">
                                        {link.name}
                                    </span>
                                </div>
                                <span className="text-neon-green opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">
                                    [CONNECT]
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: System Stats & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">

                    {/* Left: System Status */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                            <span className="text-neon-green/80">SYSTEM ONLINE</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                            <Wifi className="w-3 h-3" />
                            <span>LATENCY: 12ms</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            <span>LOC: BLR, IN</span>
                        </div>
                    </div>

                    {/* Right: The "Typing" Copyright */}
                    <div className="flex items-center gap-2 bg-black px-3 py-1 border border-white/10 rounded font-mono">
                        <span className="text-neon-green">$</span>
                        <span>echo "© {new Date().getFullYear()} All Systems Operational."</span>
                        <Cursor />
                    </div>
                </div>

                {/* "End of Line" Decorator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
            </div>
        </footer>
    );
}
"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 bg-deep-black border-t border-white/10 font-mono">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                            A S Prajwal Hiremath
                        </h3>
                        <p className="text-slate-400 text-sm">
                            GenAI & ML Specialist | Bengaluru, India
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                            © {new Date().getFullYear()} All Systems Operational.
                        </p>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="https://github.com/prajwalhiremath-dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/prajwal-hiremath-dev/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:prajwalhiremath2017@gmail.com" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
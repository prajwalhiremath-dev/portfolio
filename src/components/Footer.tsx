"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
                            Engineered by Prajwal Hiremath. © {new Date().getFullYear()}
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="mailto:contact@example.com" className="text-slate-400 hover:text-neon-green transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, Database, Layers, Radio, Lock, Unlock, Star, GitFork } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: "PROJ_01",
        title: "OmniScout Platform",
        category: "GenAI Infrastructure",
        status: "LIVE_OV", // Live Overlay
        security: "Lv. 4",
        description: "Multi-tenant GenAI platform consolidating OncoScout & VRDScout. Utilizes FastMCP with self-correcting agents achieving 99% SQL generation accuracy.",
        tech: ["FastMCP", "LangGraph", "FastAPI", "Docker"],
        stats: { stars: 128, forks: 34 },
        icon: Layers,
    },
    {
        id: "PROJ_02",
        title: "Neural SQL Agent",
        category: "Autonomous Systems",
        status: "DEPLOYED",
        security: "Lv. 5",
        description: "Advanced SQL agent utilizing AWS Bedrock & Anthropic Claude. Engineered dynamic few-shot learning (OpenSearch) to boost query accuracy by 18%.",
        tech: ["LangChain", "AWS Bedrock", "OpenSearch", "CoT"],
        stats: { stars: 89, forks: 12 },
        icon: Database,
    },
    {
        id: "PROJ_03",
        title: "Deep Vision/Audio Suite",
        category: "R&D / Deep Learning",
        status: "PROTOTYPE",
        security: "Lv. 3",
        description: "Custom 2D-CNN architectures for audio classification (Mel Spectrograms) and multi-layer CNNs for image processing with stratified validation.",
        tech: ["PyTorch", "AudioLib", "CNNs", "Matplotlib"],
        stats: { stars: 45, forks: 8 },
        icon: Cpu,
    },
    {
        id: "PROJ_04",
        title: "Sentiment Decoder",
        category: "NLP / Transformers",
        status: "ARCHIVED",
        security: "Lv. 2",
        description: "Sarcasm detection engine using custom classification heads on frozen BERT [CLS] embeddings. Implemented batch tokenization via collate_fn.",
        tech: ["BERT", "HuggingFace", "Python", "Pandas"],
        stats: { stars: 67, forks: 15 },
        icon: Radio,
    },
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-black relative overflow-hidden" id="projects">

            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8"
                >
                    <div>
                        <div className="flex items-center gap-2 text-neon-green font-mono text-xs tracking-widest mb-2">
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-ping" />
                            ACCESSING_ARCHIVES
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
                            Project <span className="text-slate-600">Schematics</span>
                        </h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-slate-500 font-mono text-xs">TOTAL_MODULES: 0{projects.length}</div>
                        <div className="text-slate-500 font-mono text-xs">CLERANCE: ALPHA</div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative bg-[#080808] border border-white/10 rounded-xl overflow-hidden hover:border-neon-green/50 transition-all duration-500 h-full"
                        >
                            {/* Scanning Laser Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-neon-green/50 shadow-[0_0_15px_#00ff41] translate-y-[-10px] group-hover:translate-y-[400px] transition-transform duration-[1.5s] ease-linear z-20 pointer-events-none opacity-0 group-hover:opacity-100" />

                            {/* Card Header */}
                            <div className="p-6 border-b border-white/5 relative bg-white/[0.02]">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-black border border-white/10 rounded text-neon-green">
                                            <project.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-mono text-[10px] text-slate-500 tracking-widest">{project.id}</div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <div className={`text-[10px] px-2 py-0.5 rounded border ${project.status === 'DEPLOYED' || project.status === 'LIVE_OV' ? 'border-neon-green text-neon-green bg-neon-green/10' : 'border-slate-600 text-slate-500'}`}>
                                            {project.status}
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] text-slate-600 font-mono">
                                            <Lock className="w-3 h-3" />
                                            {project.security}
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack Mini-Grid */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono text-slate-400 bg-black border border-white/10 px-2 py-1 rounded hover:text-white transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 relative">
                                {/* Diagonal Lines Pattern */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#fff,#fff_1px,transparent_1px,transparent_10px)] pointer-events-none" />

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                                    {project.description}
                                </p>

                                {/* Simulated GitHub Stats (Revealed on Hover) */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="flex gap-4 text-slate-500 text-sm font-mono">
                                        <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                                            <Star className="w-4 h-4" />
                                            {project.stats.stars}
                                        </div>
                                        <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                                            <GitFork className="w-4 h-4" />
                                            {project.stats.forks}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-neon-green hover:text-black transition-all">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="p-2 rounded-full bg-white/5 text-slate-400 hover:bg-white hover:text-black transition-all">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corners */}
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon-green/0 group-hover:border-neon-green/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neon-green/0 group-hover:border-neon-green/50 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
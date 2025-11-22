"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Database, Layers, BookOpen } from "lucide-react";

const projects = [
    {
        title: "Deep Learning Suite",
        description: "Architected and trained five end-to-end PyTorch classification models across multiple domains (Audio, Image, Text, Tabular). Built custom 2D-CNN for audio with on-the-fly Mel Spectrogram generation.",
        tags: ["PyTorch", "Audio ML", "CNN", "Transfer Learning"],
        icon: Cpu,
        status: "RESEARCH"
    },
    {
        title: "Sarcasm Detector (NLP)",
        description: "Implemented transfer learning NLP solutions. Fine-tuned ResNet-18 and developed a sarcasm detector using custom classification layers on frozen BERT [CLS] embeddings.",
        tags: ["BERT", "NLP", "Transformers", "ResNet-18"],
        icon: BookOpen,
        status: "COMPLETED"
    },
    {
        title: "OmniScout Platform",
        description: "Multi-tenant GenAI platform consolidating OncoScout & VRDScout using FastMCP. Engineered a conversational AI tool achieving 99% accuracy in SQL generation.",
        tags: ["FastMCP", "GenAI", "FastAPI", "LangGraph"],
        icon: Layers,
        status: "DEPLOYED"
    },
    {
        title: "SQL Agent System",
        description: "Advanced SQL agent using Langchain and Anthropic Claude. Engineered dynamic few-shot learning with OpenSearch to boost accuracy by 18%.",
        tags: ["LangChain", "AWS Bedrock", "OpenSearch", "CoT"],
        icon: Database,
        status: "STABLE"
    }
];

export default function Projects() {
    return (
        <section className="py-20 bg-deep-black" id="projects">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-neon-green text-glow">Project</span> Blueprints
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-mono">
                        Executing deployment protocols from personal archives.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-1 rounded-xl bg-gradient-to-b from-white/10 to-white/5 hover:from-neon-green/50 hover:to-neon-green/10 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-deep-black m-[1px] rounded-xl" />

                            <div className="relative h-full p-6 flex flex-col justify-between z-10">
                                {/* Grid Background */}
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] rounded-xl pointer-events-none" />

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-neon-green/50 transition-colors">
                                            <project.icon className="w-6 h-6 text-neon-green" />
                                        </div>
                                        <span className="text-xs font-mono px-2 py-1 rounded border border-neon-green/30 text-neon-green bg-neon-green/5">
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-neon-green transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 font-mono text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 rounded text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-4 border-t border-white/10">
                                        <button className="flex-1 py-2 rounded bg-white/5 hover:bg-neon-green hover:text-black text-white text-sm font-bold font-mono transition-all duration-300 flex items-center justify-center gap-2">
                                            <Github className="w-4 h-4" />
                                            SOURCE
                                        </button>
                                        <button className="flex-1 py-2 rounded bg-white/5 hover:bg-neon-green hover:text-black text-white text-sm font-bold font-mono transition-all duration-300 flex items-center justify-center gap-2">
                                            <ExternalLink className="w-4 h-4" />
                                            DETAILS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
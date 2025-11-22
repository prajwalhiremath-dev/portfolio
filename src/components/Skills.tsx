"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Anthropic", category: "GenAI", symbol: "An" },
    { name: "OpenAI", category: "GenAI", symbol: "Gpt" },
    { name: "LangGraph", category: "GenAI", symbol: "Lg" },
    { name: "CrewAI", category: "GenAI", symbol: "Cr" },
    { name: "FastMCP", category: "GenAI", symbol: "Mc" },
    { name: "Python", category: "Lang", symbol: "Py" },
    { name: "SQL", category: "Lang", symbol: "Sql" },
    { name: "FastAPI", category: "Backend", symbol: "Fa" },
    { name: "Django", category: "Backend", symbol: "Dj" },
    { name: "AWS", category: "Backend", symbol: "Aws" },
    { name: "Docker", category: "Backend", symbol: "Dk" },
    { name: "PostgreSQL", category: "Backend", symbol: "Pg" },
    { name: "PyTorch", category: "DL", symbol: "Pt" },
    { name: "Transformers", category: "DL", symbol: "Tr" },
    { name: "CNNs", category: "DL", symbol: "Cn" },
    { name: "XGBoost", category: "DL", symbol: "Xg" },
    { name: "OpenSearch", category: "Vector", symbol: "Os" },
    { name: "FAISS", category: "Vector", symbol: "Fs" },
    { name: "ChromaDB", category: "Vector", symbol: "Ch" },
];

const categoryColors: Record<string, string> = {
    GenAI: "border-electric-violet text-electric-violet shadow-electric-violet/20",
    Lang: "border-blue-500 text-blue-500 shadow-blue-500/20",
    Backend: "border-emerald-500 text-emerald-500 shadow-emerald-500/20",
    DL: "border-rose-500 text-rose-500 shadow-rose-500/20",
    Vector: "border-amber-500 text-amber-500 shadow-amber-500/20",
};

export default function Skills() {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-gradient">Tech Stack</span> Matrix
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive arsenal of tools for building scalable, intelligent systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            className={`relative aspect-square p-4 rounded-xl bg-white/5 border backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group cursor-pointer ${categoryColors[skill.category]}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono opacity-70">{skill.category}</span>
                                <span className="text-xs font-mono opacity-50">0{index + 1}</span>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold font-heading mb-1 group-hover:text-white transition-colors">
                                    {skill.symbol}
                                </div>
                                <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                    {skill.name}
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

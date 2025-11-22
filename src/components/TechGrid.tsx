"use client";

import { motion } from "framer-motion";
import {
    SiPython, SiPostgresql, SiCplusplus,
    SiLangchain, SiAnthropic, SiOpenai,
    SiPytorch, SiHuggingface,
    SiFastapi, SiDjango, SiDocker, SiAmazon, SiRedis,
    SiOpensearch
} from "react-icons/si";
import { Database, Brain, Server, Code2, Search } from "lucide-react";

const techStack = [
    {
        category: "Languages",
        icon: Code2,
        items: [
            { name: "Python", icon: SiPython },
            { name: "SQL", icon: Database },
            { name: "C++", icon: SiCplusplus },
        ]
    },
    {
        category: "GenAI & Agents",
        icon: Brain,
        items: [
            { name: "LangChain", icon: SiLangchain },
            { name: "CrewAI", icon: Brain }, // Fallback as no specific icon yet
            { name: "Claude", icon: SiAnthropic },
            { name: "OpenAI", icon: SiOpenai },
            { name: "RAG", icon: Database },
        ]
    },
    {
        category: "Deep Learning",
        icon: Brain,
        items: [
            { name: "PyTorch", icon: SiPytorch },
            { name: "Transformers", icon: SiHuggingface },
            { name: "CNNs", icon: Brain },
            { name: "XGBoost", icon: Brain },
        ]
    },
    {
        category: "Backend & Infra",
        icon: Server,
        items: [
            { name: "FastAPI", icon: SiFastapi },
            { name: "Django", icon: SiDjango },
            { name: "Docker", icon: SiDocker },
            { name: "AWS", icon: SiAmazon },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
        ]
    },
    {
        category: "Vector Search",
        icon: Search,
        items: [
            { name: "OpenSearch", icon: SiOpensearch },
            { name: "FAISS", icon: Search },
            { name: "ChromaDB", icon: Database },
        ]
    }
];

export default function TechGrid() {
    return (
        <section className="py-20 bg-deep-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        <span className="text-neon-green text-glow">System</span> Modules
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-mono">
                        Loaded Dependencies & Frameworks
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-green/50 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                <category.icon className="w-6 h-6 text-neon-green" />
                                <h3 className="font-heading font-bold text-xl">{category.category}</h3>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {category.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.1 }}
                                        className="flex flex-col items-center gap-2 group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-neon-green group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all duration-300">
                                            <item.icon className="w-6 h-6 text-slate-400 group-hover:text-neon-green group-hover:animate-pulse transition-colors" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500 group-hover:text-neon-green transition-colors text-center">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

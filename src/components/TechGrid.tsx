"use client";

import { motion } from "framer-motion";
import {
    SiPython, SiPostgresql, SiScikitlearn, SiPandas, SiNumpy,
    SiLangchain, SiAnthropic, SiOpenai, SiFastapi, SiDjango,
    SiFlask, SiAmazon, SiDocker, SiGit, SiPytorch,
    SiRedis, SiOpensearch
} from "react-icons/si";
import { Database, Brain, Server, Code2, Search, Workflow } from "lucide-react";

const techStack = [
    {
        category: "Languages & Core",
        icon: Code2,
        items: [
            { name: "Python (Expert)", icon: SiPython },
            { name: "SQL", icon: Database },
            { name: "Scikit-learn", icon: SiScikitlearn },
            { name: "Pandas", icon: SiPandas },
            { name: "NumPy", icon: SiNumpy },
        ]
    },
    {
        category: "Agentic AI & GenAI",
        icon: Brain,
        items: [
            { name: "LangGraph", icon: Workflow },
            { name: "CrewAI", icon: Brain },
            { name: "LangChain", icon: SiLangchain },
            { name: "FastMCP", icon: Server },
            { name: "Anthropic Claude", icon: SiAnthropic },
            { name: "OpenAI GPT-4", icon: SiOpenai },
        ]
    },
    {
        category: "Deep Learning & ML",
        icon: Brain,
        items: [
            { name: "PyTorch", icon: SiPytorch },
            { name: "Transformers", icon: Brain },
            { name: "CNNs", icon: Brain },
            { name: "XGBoost", icon: Brain },
            { name: "Audio ML", icon: Brain },
        ]
    },
    {
        category: "Backend & Infra",
        icon: Server,
        items: [
            { name: "FastAPI", icon: SiFastapi },
            { name: "Django", icon: SiDjango },
            { name: "Flask", icon: SiFlask },
            { name: "AWS (Bedrock, S3, RDS)", icon: SiAmazon },
            { name: "Docker", icon: SiDocker },
            { name: "Git", icon: SiGit },
        ]
    },
    {
        category: "Data & Vector DBs",
        icon: Search,
        items: [
            { name: "OpenSearch", icon: SiOpensearch },
            { name: "FAISS", icon: Search },
            { name: "ChromaDB", icon: Database },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
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
                        Core Capabilities & Frameworks
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

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <item.icon className="w-5 h-5 text-slate-400 group-hover:text-neon-green transition-colors shrink-0" />
                                        <span className="text-sm font-mono text-slate-300 group-hover:text-neon-green transition-colors break-words">
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
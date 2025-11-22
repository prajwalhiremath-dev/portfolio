"use client";

import { motion } from "framer-motion";
import {
    SiPython, SiPostgresql, SiScikitlearn, SiPandas, SiNumpy,
    SiLangchain, SiAnthropic, SiOpenai, SiFastapi, SiDjango,
    SiAmazon, SiDocker, SiRedis, SiOpensearch, SiHuggingface,
    SiPytorch,
    SiTensorflow,
    SiFlask,
    SiGooglegemini,
    SiGo,
    SiGraphql
} from "react-icons/si";
import { Database, Brain, Server, Code2, Search, Layers, Cpu, Zap } from "lucide-react";

// --- Circuit Trace Component ---
// Represents the conductive lines on a motherboard
const CircuitTrace = ({
    vertical = false,
    length = "100%",
    delay = 0,
    className = ""
}: {
    vertical?: boolean,
    length?: string,
    delay?: number,
    className?: string
}) => {
    return (
        <div className={`absolute overflow-hidden bg-white/5 ${vertical ? 'w-px' : 'h-px'} ${className}`} style={{ [vertical ? 'height' : 'width']: length }}>
            <motion.div
                initial={{ [vertical ? 'top' : 'left']: '-100%' }}
                animate={{ [vertical ? 'top' : 'left']: '100%' }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                    repeatDelay: 1
                }}
                className={`absolute bg-neon-green shadow-[0_0_8px_#00ff41] ${vertical ? 'w-full h-1/3' : 'h-full w-1/3'}`}
            />
        </div>
    );
};

const techNodes = [
    {
        id: "compute",
        label: "COMPUTE_UNIT",
        icon: Code2,
        description: "Core Logic & Algorithms",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "Go", icon: SiGo },
            { name: "NumPy", icon: SiNumpy },
            { name: "Pandas", icon: SiPandas },
            { name: "Scikit-Learn", icon: SiScikitlearn },
        ]
    },
    {
        id: "neural",
        label: "NEURAL_ENGINE",
        icon: Brain,
        description: "LLM & Agentic Workflows",
        skills: [
            { name: "LangChain", icon: SiLangchain },
            { name: "CrewAI", icon: Brain },
            { name: "Claude", icon: SiAnthropic },
            { name: "OpenAI", icon: SiOpenai },
            { name: "Gemini", icon: SiGooglegemini },
            { name: "HuggingFace", icon: SiHuggingface },
            { name: "PyTorch", icon: SiPytorch },
            { name: "TensorFlow", icon: SiTensorflow },
        ]
    },
    {
        id: "infra",
        label: "INFRA_BUS",
        icon: Server,
        description: "Scalable Architecture",
        skills: [
            { name: "FastAPI", icon: SiFastapi },
            { name: "Django", icon: SiDjango },
            { name: "AWS", icon: SiAmazon },
            { name: "Docker", icon: SiDocker },
            { name: "Redis", icon: SiRedis },
            { name: "Flask", icon: SiFlask }
        ]
    },
    {
        id: "memory",
        label: "MEMORY_BANK",
        icon: Database,
        description: "Vector & Relational Storage",
        skills: [
            { name: "OpenSearch", icon: SiOpensearch },
            { name: "ChromaDB", icon: Database },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "FAISS", icon: Database },
            { name: "Knowledge Graph", icon: SiGraphql },
            { name: "Neo4j", icon: Database }
        ]
    }
];

export default function TechGrid() {
    return (
        <section className="py-32 bg-black relative overflow-hidden" id="skills">

            {/* Background PCB Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#00ff41 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-neon-green font-mono text-sm tracking-[0.2em] mb-4">
                        <Cpu className="w-4 h-4 animate-pulse" />
                        SYSTEM_HARDWARE_V4.0
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
                        The <span className="text-neon-green text-glow">Sentient</span> Circuit
                    </h2>
                </motion.div>

                {/* The Motherboard Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Connecting Traces (Desktop Only Visuals) */}
                    <div className="absolute inset-0 hidden md:block pointer-events-none">
                        {/* Central Vertical Bus */}
                        <CircuitTrace vertical length="100%" className="left-1/2 -translate-x-1/2" delay={0} />

                        {/* Horizontal Connectors */}
                        <CircuitTrace length="100%" className="top-1/3 left-0" delay={1.5} />
                        <CircuitTrace length="100%" className="top-2/3 left-0" delay={0.5} />
                    </div>

                    {techNodes.map((node, index) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* "Chip" Container */}
                            <div className="relative bg-[#0a0a0a] border border-white/10 p-1 rounded-xl overflow-hidden hover:border-neon-green/50 transition-colors duration-500">

                                {/* Corner Accents (Cyberpunk style) */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green/50 rounded-tl-lg" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green/50 rounded-tr-lg" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green/50 rounded-bl-lg" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green/50 rounded-br-lg" />

                                {/* Inner Content */}
                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg relative z-10 h-full">

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-neon-green/10 rounded border border-neon-green/20 text-neon-green">
                                                <node.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-mono font-bold text-white tracking-wider">{node.label}</h3>
                                                <p className="text-xs text-slate-500 font-mono">{node.description}</p>
                                            </div>
                                        </div>
                                        <Zap className="w-4 h-4 text-white/20 group-hover:text-neon-green transition-colors" />
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {node.skills.map((skill) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ x: 5, backgroundColor: "rgba(0, 255, 65, 0.1)" }}
                                                className="flex items-center gap-3 p-2 rounded border border-transparent hover:border-neon-green/30 transition-all cursor-crosshair"
                                            >
                                                <skill.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                                <span className="text-sm text-slate-300 font-mono group-hover:text-neon-green transition-colors">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Scanline Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 pointer-events-none" />
                            </div>

                            {/* Connector Dot (Visual anchor to the circuit) */}
                            <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-1/2 w-3 h-3 bg-black border border-neon-green rounded-full hidden md:block z-20`}>
                                <div className="absolute inset-0 bg-neon-green animate-ping opacity-50 rounded-full" />
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
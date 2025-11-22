"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Terminal, GitCommit, Cpu, Shield, Activity, Code, Server, Database } from "lucide-react";

const experiences = [
    {
        id: "deloitte",
        role: "Data Scientist (Consultant)",
        company: "Deloitte USI",
        client: "Eli Lilly & Pfizer",
        period: "01/2025 - Present",
        status: "RUNNING",
        tech: ["LangChain", "CrewAI", "AWS Bedrock", "FastMCP", "OpenSearch"],
        projects: [
            { name: "OmniScout Platform", icon: Server, desc: "Multi-tenant AI consolidating OncoScout & VRDScout." },
            { name: "SQL Agent Core", icon: Database, desc: "Autonomous query engine with 95% accuracy." },
            { name: "RAG Pipeline", icon: Activity, desc: "4-Agent system with Hybrid Search (FAISS+BM25)." }
        ],
        details: [
            "Architected autonomous SQL agents using Claude & LangChain on AWS RDS.",
            "Engineered dynamic few-shot learning (OpenSearch) boosting accuracy by 18%.",
            "Deployed FastMCP servers for self-correcting validation agents.",
            "Optimized retrieval with Hybrid Search strategies for Pharma compliance."
        ]
    },
    {
        id: "cisco",
        role: "Software Engineer",
        company: "Cisco Systems",
        period: "01/2021 - 12/2024",
        status: "COMPLETED",
        tech: ["Django", "Celery", "Redis", "XGBoost", "PostgreSQL"],
        projects: [
            { name: "Testbed Reservation", icon: Cpu, desc: "High-availability system for 300+ engineers." },
            { name: "ML Predictor", icon: Activity, desc: "XGBoost pipeline for resource suitability." },
            { name: "Hardware Chatbot", icon: Terminal, desc: "RAG-based specs lookup tool." },
            { name: "Cisco Wiki Analytics Dashboard", icon: Activity, desc: "Dashboard for analyzing Cisco wiki data." }
        ],
        details: [
            "Eliminated 100% of race conditions using PostgreSQL row-level locking.",
            "Reduced idle time by 45% ($150K saved) via Celery-Redis notifications.",
            "Built automated Executive Dashboards using Flask & Pandas.",
            "Deployed scalable ML inference endpoints for real-time resource allocation."
        ]
    }
];

export default function ExperienceLog() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-32 bg-black relative overflow-hidden font-mono" id="experience" ref={containerRef}>

            {/* Background Circuitry */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent" />
                <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-neon-green/30 bg-neon-green/5 text-neon-green text-xs mb-4">
                        <Activity className="w-3 h-3 animate-pulse" />
                        KERNEL EXECUTION TRACE
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
                        System <span className="text-slate-600">Runtime</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">

                    {/* Central Data Bus Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-neon-green shadow-[0_0_15px_#00ff41]"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex flex-col md:flex-row gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Connection Node */}
                                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-black border-2 border-neon-green rounded-full -translate-x-1/2 z-20 shadow-[0_0_10px_#00ff41]">
                                    <div className="absolute inset-0 bg-neon-green animate-ping opacity-50 rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-20 md:ml-0 md:w-1/2 group">
                                    <div className="relative p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-neon-green/40 transition-colors duration-500">

                                        {/* Glowing Corner Accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-neon-green/10" />

                                        {/* Header Info */}
                                        <div className="flex items-start justify-between mb-6 relative z-10">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className={`text-xs px-2 py-0.5 rounded border ${exp.status === 'RUNNING' ? 'border-neon-green text-neon-green bg-neon-green/10 animate-pulse' : 'border-slate-500 text-slate-500'}`}>
                                                        {exp.status}
                                                    </span>
                                                    <span className="text-slate-500 text-xs">{exp.period}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-green transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <div className="text-lg text-slate-400">
                                                    {exp.company}
                                                    {exp.client && <span className="text-slate-600 text-sm ml-2"> // {exp.client}</span>}
                                                </div>
                                            </div>
                                            <Shield className="w-8 h-8 text-white/10 group-hover:text-neon-green/20 transition-colors" />
                                        </div>

                                        {/* Projects Grid */}
                                        <div className="mb-8">
                                            <div className="text-xs font-bold text-slate-500 mb-3 flex items-center gap-2">
                                                <Code className="w-3 h-3" />
                                                COMPILED MODULES
                                            </div>
                                            <div className="grid grid-cols-1 gap-2">
                                                {exp.projects.map((proj, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-2 rounded bg-black/40 border border-white/5 hover:border-neon-green/30 transition-colors">
                                                        <div className="p-1.5 rounded bg-white/5 text-neon-green">
                                                            <proj.icon className="w-3 h-3" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-white font-bold">{proj.name}</div>
                                                            <div className="text-[10px] text-slate-500 leading-tight">{proj.desc}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="px-2 py-1 text-[10px] border border-white/10 rounded text-slate-400 bg-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Detailed Logs */}
                                        <div className="space-y-2 border-t border-white/10 pt-4">
                                            {exp.details.map((detail, i) => (
                                                <div key={i} className="flex gap-3 text-sm text-slate-400">
                                                    <span className="text-neon-green shrink-0 mt-1">{">"}</span>
                                                    <span className="leading-relaxed">{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                {/* Empty Spacer for Timeline Alignment */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
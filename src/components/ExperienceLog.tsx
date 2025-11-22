"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Terminal, GitCommit, FolderGit2 } from "lucide-react";

const experiences = [
    {
        id: "deloitte",
        role: "Data Scientist (Consultant)",
        company: "Deloitte USI",
        client: "Eli Lilly & Pfizer",
        period: "01/2025 - Present",
        tech: ["LangChain", "CrewAI", "AWS Bedrock", "FastMCP", "OpenSearch"],
        projects: [
            "OmniScout Multi-Tenant Platform",
            "SQL Agent (95% Accuracy)",
            "Multi-Agent RAG Pipeline"
        ],
        details: [
            "Architected an advanced SQL agent using Langchain and Anthropic Claude on AWS Bedrock to enable natural language querying of a 7-table, auto-refreshing AWS RDS database.",
            "Engineered a dynamic few-shot learning system (OpenSearch) and CoT prompting to boost domain accuracy by 18%.",
            "Built 'OmniScout', a multi-tenant AI platform consolidating four specialized agentic applications into a single scalable codebase using FastAPI and FastMCP.",
            "Engineered a conversational AI tool using FastMCP with self-correcting validation, achieving 99% accuracy."
        ]
    },
    {
        id: "cisco",
        role: "Software Engineer",
        company: "Cisco Systems",
        period: "01/2021 - 12/2024",
        tech: ["Django", "Celery", "Redis", "XGBoost", "PostgreSQL"],
        projects: [
            "Testbed Reservation System",
            "ML Testbed Predictor",
            "Wiki Analytics Dashboard",
            "Hardware RAG Chatbot"
        ],
        details: [
            "Architected a high-availability Django platform scaled to serve 300+ engineers and 5,000+ monthly reservations.",
            "Eliminated 100% of double-booking race conditions by implementing PostgreSQL row-level locking.",
            "Engineered a non-blocking Celery-Redis asynchronous notification system reducing testbed idle time by 45%.",
            "Developed a Flask REST API to serve real-time ML predictions for testbed suitability."
        ]
    }
];

export default function ExperienceLog() {
    const [expandedId, setExpandedId] = useState<string | null>("deloitte");

    return (
        <section className="py-20 bg-deep-black font-mono" id="experience">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center gap-4"
                >
                    <Terminal className="w-8 h-8 text-neon-green" />
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-neon-green">~/</span>execution_logs
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 md:pl-12">
                            <div
                                className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${expandedId === exp.id
                                    ? "bg-deep-black border-neon-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                                    : "bg-deep-black border-white/20"
                                    }`}
                            />

                            <motion.div
                                initial={false}
                                animate={{
                                    borderColor: expandedId === exp.id ? "rgba(0, 255, 65, 0.3)" : "rgba(255, 255, 255, 0.1)"
                                }}
                                className="bg-white/5 border rounded-lg overflow-hidden cursor-pointer group hover:bg-white/10 transition-colors"
                                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                            >
                                <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                                            <span className="text-neon-green">commit {exp.id.substring(0, 7)}</span>
                                            <span>•</span>
                                            <span>{exp.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="text-slate-300">
                                            {exp.company} {exp.client && <span className="text-slate-500">({exp.client})</span>}
                                        </div>
                                    </div>

                                    <ChevronRight
                                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${expandedId === exp.id ? "rotate-90 text-neon-green" : ""
                                            }`}
                                    />
                                </div>

                                <AnimatePresence>
                                    {expandedId === exp.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-4 md:px-6 pb-6 border-t border-white/5 bg-black/20">

                                                {/* Project Modules Section */}
                                                <div className="mb-6">
                                                    <h4 className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                                                        <FolderGit2 className="w-4 h-4 text-neon-green" />
                                                        DEPLOYED MODULES
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.projects.map((proj, idx) => (
                                                            <span key={idx} className="px-3 py-1 bg-neon-green/5 border border-neon-green/20 text-neon-green text-xs rounded-md">
                                                                {proj}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <ul className="space-y-4">
                                                    {exp.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
                                                            <GitCommit className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
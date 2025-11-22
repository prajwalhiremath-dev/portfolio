"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Terminal, GitCommit } from "lucide-react";

const experiences = [
    {
        id: "deloitte",
        role: "Data Scientist (Consultant)",
        company: "Deloitte USI",
        client: "Eli Lilly & Pfizer",
        period: "01/2025 - Present",
        tech: ["LangChain", "CrewAI", "AWS Bedrock", "FastMCP", "OpenSearch", "DeepEval"],
        details: [
            "Architected an advanced SQL agent using Langchain and Anthropic Claude on AWS Bedrock to enable natural language querying of a 7-table, auto-refreshing AWS RDS (PostgreSQL) database.",
            "Engineered a dynamic few-shot learning system (using OpenSearch vector DB) and a specific Chain of Thought (CoT) prompt to boost domain accuracy by 18% and reduce hallucinations by 31%.",
            "Achieved 95% query accuracy, outperforming OpenAI models and securing the client's continued engagement with Anthropic's technology.",
            "Developed a 4-agent RAG pipeline (Query Router, Retriever, Synthesizer, Evaluator) using CrewAI to process complex natural language queries against clinical trial documents.",
            "Engineered a custom hybrid search engine (FAISS vector similarity + BM25 keyword matching) for high-precision retrieval and used DeepEval for automated relevancy evaluation.",
            "Built 'OmniScout', a multi-tenant AI platform consolidating four specialized agentic applications into a single scalable codebase using FastAPI and FastMCP."
        ]
    },
    {
        id: "cisco",
        role: "Software Engineer",
        company: "Cisco Systems",
        period: "01/2021 - 12/2024",
        tech: ["Django", "Celery", "Redis", "XGBoost", "PostgreSQL"],
        details: [
            "Architected a high-availability Testbed Reservation System serving 300+ users and 5,000+ monthly reservations.",
            "Eliminated 100% of double-booking race conditions by implementing PostgreSQL row-level locking within atomic transactions.",
            "Engineered a non-blocking Celery-Redis asynchronous notification system reducing testbed idle time by 45%, recovering $150K in annual value.",
            "Engineered an ML pipeline (XGBoost, Random Forest) to predict testbed suitability, serializing the pipeline with joblib to prevent training-serving skew.",
            "Built a RAG chatbot (FastAPI, OpenAI Embeddings, ChromaDB) that reduced hardware info lookup time by 75%.",
            "Developed a Cisco Wiki Analytics Dashboard using Flask/Pandas to automate executive reporting, reducing manual generation time by 40%."
        ]
    }
];

export default function ExperienceLog() {
    const [expandedId, setExpandedId] = useState<string | null>("deloitte");

    return (
        <section className="py-20 bg-deep-black font-mono" id="experience">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center gap-4"
                >
                    <Terminal className="w-8 h-8 text-neon-green" />
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-neon-green">~/</span>system_logs
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 md:pl-12">
                            {/* Timeline Node */}
                            <div
                                className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${expandedId === exp.id
                                    ? "bg-deep-black border-neon-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"
                                    : "bg-deep-black border-white/20"
                                    }`}
                            >
                                {expandedId === exp.id && (
                                    <div className="absolute inset-0 rounded-full bg-neon-green animate-ping opacity-20" />
                                )}
                            </div>

                            {/* Content Card */}
                            <motion.div
                                initial={false}
                                animate={{
                                    borderColor: expandedId === exp.id ? "rgba(0, 255, 65, 0.3)" : "rgba(255, 255, 255, 0.1)"
                                }}
                                className="bg-white/5 border rounded-lg overflow-hidden cursor-pointer group hover:bg-white/10 transition-colors"
                                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                            >
                                {/* Header */}
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

                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-wrap gap-2 justify-end max-w-[200px] md:max-w-none">
                                            {exp.tech.slice(0, 3).map((t) => (
                                                <span key={t} className="text-xs px-2 py-1 rounded bg-black border border-white/10 text-slate-400">
                                                    {t}
                                                </span>
                                            ))}
                                            {exp.tech.length > 3 && (
                                                <span className="text-xs px-2 py-1 text-slate-500">+{exp.tech.length - 3}</span>
                                            )}
                                        </div>
                                        <ChevronRight
                                            className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${expandedId === exp.id ? "rotate-90 text-neon-green" : ""
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                <AnimatePresence>
                                    {expandedId === exp.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-4 md:px-6 pb-6 border-t border-white/5 bg-black/20">
                                                <ul className="space-y-3 mt-4">
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
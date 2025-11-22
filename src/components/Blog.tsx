"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Rss } from "lucide-react";

const articles = [
    {
        title: "Architecting Agentic Systems",
        desc: "Deep dive into building autonomous SQL agents using LangGraph and Claude.",
        tag: "AI Agents"
    },
    {
        title: "Scaling FastMCP for Enterprise",
        desc: "Lessons learned deploying multi-tenant context protocols for Pharma giants.",
        tag: "System Design"
    },
    {
        title: "RAG Optimization Techniques",
        desc: "Improving retrieval accuracy using Hybrid Search (FAISS + BM25).",
        tag: "GenAI"
    }
];

export default function Blog() {
    return (
        <section className="py-20 bg-deep-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                            <span className="text-neon-green">Neural</span> Feed
                        </h2>
                        <p className="text-slate-400">Transmission from the research lab.</p>
                    </div>
                    <a
                        href="https://medium.com/@prajwalhiremath-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-white/20 text-white hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300 flex items-center gap-2"
                    >
                        View All Articles
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <a
                            key={i}
                            href="https://medium.com/@prajwalhiremath-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 bg-white/5 border border-white/10 hover:border-neon-green/50 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Rss className="w-5 h-5 text-slate-500 group-hover:text-neon-green transition-colors" />
                                <span className="text-xs font-mono text-neon-green border border-neon-green/20 px-2 py-1 rounded">
                                    {article.tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-slate-400 text-sm">
                                {article.desc}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
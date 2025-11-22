"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Deloitte USI",
        role: "Data Scientist (Consultant)",
        period: "Current",
        description: "Architected OmniScout Multi-Tenant AI Platform & SQL Agents for Pharma giants.",
        metrics: ["95-99% accuracy in SQL generation", "Secured $2M+ client engagement"],
        tags: ["GenAI", "SQL Agents", "Pharma"],
    },
    {
        company: "Cisco Systems",
        role: "Software Engineer",
        period: "Previous",
        description: "Architected high-availability Testbed Reservation Systems & ML Predictors.",
        metrics: ["Served 300+ users", "99%+ uptime", "Recovered $150K annual value"],
        tags: ["ML", "High Availability", "System Design"],
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-20 bg-slate-950 relative" id="experience" ref={containerRef}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        Professional <span className="text-gradient">Circuit</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-electric-violet to-cyan"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2">
                                    <div className={`p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan/30 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <div className={`flex items-center gap-2 mb-2 text-cyan font-mono text-sm ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <div className="text-lg text-electric-violet mb-4 font-medium flex items-center gap-2 md:inline-flex">
                                            <Briefcase className="w-4 h-4" />
                                            {exp.company}
                                        </div>
                                        <p className="text-slate-300 mb-4">{exp.description}</p>
                                        <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "items-start" : "md:items-end"
                                            } flex flex-col`}>
                                            {exp.metrics.map((metric, i) => (
                                                <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                                                    {metric}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "md:justify-end"
                                            }`}>
                                            {exp.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty side for layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

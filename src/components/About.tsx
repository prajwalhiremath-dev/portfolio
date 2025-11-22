"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Server, FileText, Terminal } from "lucide-react";

export default function About() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    return (
        <section className="py-32 bg-deep-black relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-16">

                {/* 3D Profile Card */}
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    onMouseMove={onMouseMove}
                    onMouseLeave={() => { x.set(0); y.set(0); }}
                    className="relative w-full max-w-md aspect-[4/5] rounded-xl bg-gradient-to-br from-white/10 to-black border border-white/20 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,65,0.15)]"
                >
                    <div className="absolute inset-4 border border-neon-green/30 rounded-lg flex flex-col items-center justify-center p-8 text-center" style={{ transform: "translateZ(50px)" }}>
                        <div className="w-32 h-32 rounded-full border-4 border-neon-green/50 bg-black mb-6 overflow-hidden relative group">
                            {/* Placeholder for Image - you can replace with <Image> */}
                            <Terminal className="w-16 h-16 text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-neon-green transition-colors" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-2">Prajwal Hiremath</h3>
                        <div className="px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-xs font-mono mb-6">
                            LEVEL 4 DATA SCIENTIST
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            "I don't just train models; I architect the infrastructure that makes them scalable, reliable, and agentic."
                        </p>
                    </div>
                </motion.div>

                {/* Content Side */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white">
                            Architecting <span className="text-neon-green">Intelligence</span>
                        </h2>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed border-l-2 border-neon-green pl-6">
                            Results-driven ML Engineer with 4+ years of experience. Currently deploying RAG systems and SQL agents with 95-99% accuracy for pharmaceutical giants at Deloitte USI. Previously architected enterprise platforms serving 300+ users at Cisco.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Brain,
                                    title: "LLM Architectures",
                                    desc: "Pushing the boundaries of RAG and Agentic workflows."
                                },
                                {
                                    icon: FileText,
                                    title: "Research Papers",
                                    desc: "Dissecting arXiv daily to implement SOTA techniques."
                                },
                                {
                                    icon: Server,
                                    title: "Huge Systems",
                                    desc: "Building distributed infrastructure that scales effortlessly."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-neon-green/50 transition-colors group">
                                    <item.icon className="w-8 h-8 text-slate-500 group-hover:text-neon-green mb-3 transition-colors" />
                                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
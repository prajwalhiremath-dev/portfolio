"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Rss, Loader2, Terminal, AlertCircle, Signal, Calendar, Tag } from "lucide-react";
import { useEffect, useState } from "react";

interface MediumPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    thumbnail: string;
    description: string;
    categories: string[];
}

export default function Blog() {
    const [posts, setPosts] = useState<MediumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                setLoading(true);

                // --- YOUR WORKING LOGIC START ---
                // Fetch the RSS feed using the allorigins CORS proxy
                const response = await fetch(
                    `https://api.allorigins.win/get?url=${encodeURIComponent(
                        "https://medium.com/feed/@prajwalhiremath-dev"
                    )}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch Medium posts");
                }

                const data = await response.json();

                // Parse the XML content embedded in the JSON response
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data.contents, "text/xml");
                const items = xmlDoc.querySelectorAll("item");

                const mediumPosts = Array.from(items).slice(0, 3).map((item) => { // Limit to top 3
                    // Extract basic fields
                    const title = item.querySelector("title")?.textContent
                        ?.replace("<![CDATA[", "").replace("]]>", "") || "Untitled Post";

                    const link = item.querySelector("link")?.textContent || "#";

                    const pubDateText = item.querySelector("pubDate")?.textContent;
                    const pubDate = pubDateText ? new Date(pubDateText).toLocaleDateString() : "";

                    const guid = item.querySelector("guid")?.textContent || link;

                    // Extract categories
                    const categories = Array.from(item.querySelectorAll("category"))
                        .map((cat) => cat.textContent?.replace("<![CDATA[", "").replace("]]>", "") || "")
                        .filter(Boolean)
                        .slice(0, 3); // Take top 3 tags

                    // Extract content for description & image
                    // Medium puts full HTML in content:encoded or description
                    const contentEncoded = item.getElementsByTagNameNS("*", "encoded")[0]?.textContent;
                    const descriptionRaw = item.querySelector("description")?.textContent;
                    const htmlContent = contentEncoded || descriptionRaw || "";

                    // Parse the HTML content to find image and text
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = htmlContent;

                    // 1. Find Image
                    let thumbnail = "";
                    const imgElement = tempDiv.querySelector("img");
                    if (imgElement && imgElement.src) {
                        thumbnail = imgElement.src;
                    }

                    // 2. Find Description (remove scripts/styles/images first)
                    const scripts = tempDiv.querySelectorAll("script, style, img, figure");
                    scripts.forEach((el) => el.remove());

                    // Clean text
                    let description = tempDiv.textContent || "";
                    description = description.replace(/\s+/g, " ").trim().substring(0, 120) + "...";

                    return {
                        title,
                        pubDate,
                        link,
                        guid,
                        thumbnail,
                        description,
                        categories,
                    };
                });
                // --- YOUR WORKING LOGIC END ---

                setPosts(mediumPosts);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching Medium posts:", err);
                setError("Failed to establish uplink with Medium.");
                setLoading(false);
            }
        };

        fetchMediumPosts();
    }, []);

    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/10" id="blog">

            {/* Background Noise/Signal Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            {/* Glowing Orb in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8"
                >
                    <div>
                        <div className="flex items-center gap-2 text-neon-green font-mono text-xs tracking-widest mb-2">
                            <Signal className="w-4 h-4 animate-pulse" />
                            LIVE_FEED // UPLINK_ESTABLISHED
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
                            Neural <span className="text-slate-600">Transmission</span>
                        </h2>
                        <p className="text-slate-400 mt-2 font-mono text-sm max-w-md">
                            Decoded thoughts on Agentic AI, Scalable Systems, and Research from the medium.com archives.
                        </p>
                    </div>

                    <a
                        href="https://medium.com/@prajwalhiremath-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-6 py-3 bg-white/5 hover:bg-neon-green hover:text-black border border-white/10 hover:border-neon-green transition-all duration-300 flex items-center gap-2 font-mono text-sm"
                    >
                        <span>ACCESS_FULL_ARCHIVE</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Content Area */}
                <div className="min-h-[300px]">
                    {loading ? (
                        // --- Loading State: Terminal Simulation ---
                        <div className="flex flex-col items-center justify-center h-64 font-mono text-neon-green space-y-4">
                            <Loader2 className="w-10 h-10 animate-spin" />
                            <div className="text-center space-y-1 text-sm">
                                <p className="animate-pulse">{">"} INITIALIZING_HANDSHAKE...</p>
                                <p className="opacity-70">{">"} CONNECTING_TO_PROXY: api.allorigins.win...</p>
                                <p className="opacity-50">{">"} PARSING_XML_PACKETS...</p>
                            </div>
                        </div>
                    ) : error ? (
                        // --- Error State ---
                        <div className="flex flex-col items-center justify-center h-64 text-red-500 font-mono">
                            <AlertCircle className="w-10 h-10 mb-4" />
                            <p>CONNECTION_REFUSED // {error}</p>
                            <p className="text-slate-500 text-sm mt-2">Manual Uplink Required.</p>
                        </div>
                    ) : (
                        // --- Success State: The Grid ---
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {posts.map((post, index) => (
                                    <motion.a
                                        key={post.guid}
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.15 }}
                                        className="group relative flex flex-col h-full bg-[#080808] border border-white/10 hover:border-neon-green/50 rounded-xl overflow-hidden transition-colors duration-500"
                                    >
                                        {/* Image Thumbnail with Overlay */}
                                        <div className="relative h-48 overflow-hidden border-b border-white/5">
                                            {post.thumbnail ? (
                                                <img
                                                    src={post.thumbnail}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                                    <Rss className="w-10 h-10 text-white/20" />
                                                </div>
                                            )}
                                            {/* Scanline overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />

                                            {/* Date Badge */}
                                            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur border border-white/10 px-2 py-1 text-[10px] font-mono text-neon-green rounded flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.pubDate}
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6 flex-1 flex flex-col relative">

                                            {/* Decorative Corner */}
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-neon-green transition-colors" />

                                            {/* Categories / Tags */}
                                            {post.categories.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.categories.map((tag, i) => (
                                                        <span key={i} className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 border border-white/10 rounded text-slate-400 group-hover:text-white group-hover:border-white/30 transition-colors uppercase">
                                                            <Tag className="w-3 h-3" />
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2 font-heading">
                                                {post.title}
                                            </h3>

                                            <p className="text-sm text-slate-400 line-clamp-3 font-mono leading-relaxed mb-6 flex-1">
                                                {post.description}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 group-hover:text-white transition-colors mt-auto">
                                                <Terminal className="w-3 h-3" />
                                                <span>READ_TRANSMISSION</span>
                                                <div className="h-px flex-grow bg-white/10 group-hover:bg-neon-green/50 transition-colors" />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
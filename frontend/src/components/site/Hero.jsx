import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/components/site/Reveal";

const H1_LINES = ["Textile Recovery.", "Built for Scale."];

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section id="home" ref={ref} data-testid="hero-section" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#01298A]">
            <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
                <motion.img
                    src="/assets/hero-facility.png"
                    alt="Sorted polyester textile waste bales inside the ReCircle InfiTex recovery facility"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.14, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2.2, ease: EASE }}
                />
            </motion.div>
            <div className="absolute inset-0 bg-[#01298A]/55" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01298A]/90 via-[#01298A]/45 to-[#01298A]/20" aria-hidden="true" />

            <motion.div className="container-x relative z-10 pb-28 pt-36 lg:pb-32 lg:pt-44" style={{ opacity: fade }}>
                <div className="max-w-4xl">
                    <h1 className="type-hero text-white" data-testid="hero-headline">
                        {H1_LINES.map((line, i) => (
                            <span key={line} className="block overflow-hidden pb-[0.08em]">
                                <motion.span
                                    className="block will-change-transform"
                                    initial={{ y: "112%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.15, delay: 0.45 + i * 0.14, ease: EASE }}
                                >
                                    {line}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        data-testid="hero-subheadline"
                        className="type-body mt-8 max-w-2xl text-white/90"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
                    >
                        India&apos;s largest textile recovery facility. Processing 1,200 tons of polyester textile
                        waste every month in Sachin GIDC, Surat.
                    </motion.p>

                    <motion.div
                        className="mt-11 flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
                    >
                        <a href="#contact" data-testid="hero-partner-cta-button" className="btn-invert">
                            Partner With the Facility
                        </a>
                        <a href="#how-it-works" data-testid="hero-how-it-works-secondary-button" className="btn-ghost-light">
                            See How It Works
                        </a>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}

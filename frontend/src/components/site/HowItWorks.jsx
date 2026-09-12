import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { Reveal, Chapter, EASE } from "@/components/site/Reveal";

export default function HowItWorks() {
    const [open, setOpen] = useState(false);

    return (
        <section id="how-it-works" data-testid="how-it-works-section" className="bg-white py-24 lg:py-32">
            <div className="container-x">
                <div className="mx-auto max-w-[800px] text-center">
                    <Reveal>
                        <Chapter index="04" label="How It Works" center />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">From Waste to Recovered Feedstock</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body-sm mt-7 text-[#2C2C2C]">
                            The facility runs a structured sorting and pre-processing workflow that turns mixed
                            textile waste into recycler-ready material. The flowchart below maps the complete
                            process, from sourcing through to final output.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.15}>
                    <div className="relative mx-auto mt-14 max-w-[1200px] lg:mt-20">
                        <button
                            type="button"
                            data-testid="lightbox-expand-button"
                            onClick={() => setOpen(true)}
                            className="group relative block w-full cursor-zoom-in rounded-lg border border-[#E3E8EE] bg-white p-2 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(1,41,138,0.3)] sm:p-4"
                            aria-label="Expand the technical workflow flowchart"
                        >
                            <img
                                src="/assets/workflow-v2.webp"
                                alt="Technical workflow flowchart — from sourcing and pre-processing at the ReCircle InfiTex TRF through mechanical and chemical recycling pathways"
                                loading="lazy"
                                className="aspect-square w-full rounded-md object-contain"
                            />
                            <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-md bg-[#01298A] px-4 py-2.5 text-sm font-medium text-white opacity-100 shadow-lg transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
                                <Maximize2 size={16} /> Tap to expand
                            </span>
                        </button>
                    </div>
                </Reveal>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="workflow-lightbox"
                        data-testid="workflow-lightbox"
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm sm:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.img
                            src="/assets/workflow-v2.webp"
                            alt="Technical workflow flowchart, expanded view"
                            className="max-h-[88vh] w-auto max-w-full rounded-md bg-white object-contain"
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            type="button"
                            data-testid="lightbox-close-button"
                            onClick={() => setOpen(false)}
                            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#01298A] transition-transform hover:scale-105"
                            aria-label="Close expanded flowchart"
                        >
                            <X size={22} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

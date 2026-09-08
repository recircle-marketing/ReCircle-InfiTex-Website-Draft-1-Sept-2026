import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "", ...rest }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
        className={className}
        {...rest}
    >
        {children}
    </motion.div>
);

export const Chapter = ({ index, label, dark = false, center = false }) => (
    <div
        className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}
        data-testid={`chapter-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
        <span className={`type-eyebrow ${dark ? "text-white" : "text-[#01298A]"}`}>{index}</span>
        <span className={`h-px w-12 ${dark ? "bg-white/40" : "bg-[#01298A]/40"}`} />
        <span className={`type-eyebrow ${dark ? "text-white/70" : "text-[#2C2C2C]"}`}>{label}</span>
    </div>
);

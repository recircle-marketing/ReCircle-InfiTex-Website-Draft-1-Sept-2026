import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { Reveal, Chapter, EASE } from "@/components/site/Reveal";

const Counter = ({ to }) => {
    const ref = useRef(null);
    const started = useRef(false);
    const [val, setVal] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const start = () => {
            if (started.current) return;
            started.current = true;
            animate(0, to, {
                duration: 2.4,
                ease: EASE,
                onUpdate: (v) => setVal(Math.round(v)),
            });
        };
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    start();
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [to]);

    return <span ref={ref}>{val.toLocaleString("en-IN")}</span>;
};

const COLUMNS = [
    {
        title: "Industrial",
        body: "Direct collection from mills, process houses, garment manufacturers, textile markets and aggregator networks across the textile production and manufacturing value chain.",
        testid: "capacity-col-industrial",
    },
    {
        title: "Municipal and Post-Consumer",
        body: "A future-ready channel. The facility will expand over time to include post-consumer textile waste (PCTW), strengthening circularity across the value chain.",
        testid: "capacity-col-municipal",
    },
];

export default function Capacity() {
    return (
        <section id="capacity" data-testid="capacity-section" className="bg-[#01298A] py-24 text-white lg:py-36">
            <div className="container-x">
                <Reveal>
                    <Chapter index="04" label="Capacity and Sourcing" dark />
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-14 lg:mt-20" data-testid="capacity-stat-lockup">
                        <div className="font-bold leading-none tracking-[-0.03em] text-[clamp(4.5rem,13vw,11rem)]">
                            <Counter to={1200} />
                            <span className="ml-4 text-[0.32em] font-semibold tracking-normal text-white/85">MT/month</span>
                        </div>
                        <p className="type-body-sm mt-6 max-w-xl text-white/80">
                            Combined mechanical and chemical recycling output, Sachin GIDC, Surat
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 grid gap-12 border-t border-white/20 pt-14 md:grid-cols-2 lg:mt-24 lg:gap-20 lg:pt-16">
                    {COLUMNS.map((col, i) => (
                        <Reveal key={col.title} delay={0.12 * i}>
                            <div data-testid={col.testid}>
                                <h3 className="type-h3 text-white">{col.title}</h3>
                                <p className="type-body-sm mt-5 text-white/80">{col.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <p
                        data-testid="capacity-supporting-line"
                        className="mx-auto mt-16 max-w-3xl border-t border-white/20 pt-12 text-center text-base leading-relaxed text-white/75 lg:mt-20 lg:text-lg"
                    >
                        Currently focused on post-industrial polyester-dominated materials, including chindi, cut-outs
                        and yarn or hard waste.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

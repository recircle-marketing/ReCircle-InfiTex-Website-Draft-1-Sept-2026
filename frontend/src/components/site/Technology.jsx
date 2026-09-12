import { Reveal, Chapter, ImageReveal } from "@/components/site/Reveal";

const STEPS = ["Collection", "Sorting", "Processing", "Recycling Destination"];

export default function Technology() {
    return (
        <section id="technology" data-testid="technology-section" className="bg-[#F4F6F8] py-24 lg:py-32">
            <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div>
                    <Reveal>
                        <Chapter index="05" label="Technology" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">Built on End-to-End Traceability</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body-sm mt-7 text-[#2C2C2C]">
                            ClimaOne for Textile, ReCircle&apos;s digital traceability platform, tracks material
                            movement from collection through sorting and processing to the final recycling
                            destination.
                        </p>
                        <p className="type-body-sm mt-5 text-[#2C2C2C]">
                            Every batch moves through ClimaOne, so buyers get full traceability from source to output.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <ol className="mt-10 border-t border-[#E3E8EE]" data-testid="traceability-steps">
                            {STEPS.map((step, i) => (
                                <li
                                    key={step}
                                    className="group flex items-center gap-6 border-b border-[#E3E8EE] py-5 transition-colors duration-300 hover:bg-white/60"
                                >
                                    <span className="type-eyebrow w-10 shrink-0 text-[#11821A]">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-lg font-medium text-black lg:text-xl">{step}</span>
                                    <span className="ml-auto h-px w-0 bg-[#01298A] transition-[width] duration-500 group-hover:w-16" aria-hidden="true" />
                                </li>
                            ))}
                        </ol>
                    </Reveal>
                </div>

                <Reveal delay={0.15}>
                    <ImageReveal className="frame-clip border border-[#E3E8EE] bg-white shadow-[0_24px_60px_-24px_rgba(1,41,138,0.25)]">
                        <img
                            src="/assets/climaone.jpg"
                            alt="ClimaOne, ReCircle's proprietary traceability platform, shown on a phone at a recovery site"
                            loading="lazy"
                            className="h-auto w-full"
                            data-testid="technology-climaone-image"
                        />
                    </ImageReveal>
                </Reveal>
            </div>
        </section>
    );
}

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Reveal, Chapter } from "@/components/site/Reveal";

export default function LegalPage({ content, testid }) {
    return (
        <main data-testid={testid} className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-44">
            <div className="container-x">
                <div className="max-w-[860px]">
                    <Reveal>
                        <Chapter index={content.index} label="Legal" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="mt-9 text-4xl font-bold tracking-[-0.02em] text-black lg:text-5xl">
                            {content.title}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="type-eyebrow mt-5 !text-xs text-[#2C2C2C]/50">{content.updated}</p>
                        <p className="type-body-sm mt-8 text-[#2C2C2C]">{content.intro}</p>
                    </Reveal>

                    <div className="mt-14 space-y-11">
                        {content.sections.map((section, i) => (
                            <Reveal key={section.heading} delay={0.03 * i} y={18}>
                                <section data-testid={`${testid}-section-${i + 1}`}>
                                    <h2 className="text-xl font-semibold text-[#01298A] lg:text-2xl">
                                        {i + 1}. {section.heading}
                                    </h2>
                                    {section.body.map((para) => (
                                        <p key={para.slice(0, 32)} className="mt-4 text-base leading-relaxed text-[#2C2C2C] lg:text-lg">
                                            {para}
                                        </p>
                                    ))}
                                </section>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.1}>
                        <Link to="/" data-testid={`${testid}-back-home-link`} className="btn-outline mt-16">
                            <ArrowLeft size={18} /> Back to Home
                        </Link>
                    </Reveal>
                </div>
            </div>
        </main>
    );
}

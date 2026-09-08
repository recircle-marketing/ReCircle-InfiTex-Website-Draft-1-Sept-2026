import { ArrowUpRight } from "lucide-react";
import { Reveal, Chapter, ImageReveal } from "@/components/site/Reveal";

export default function AboutAlliance() {
    return (
        <section id="about-alliance" data-testid="about-alliance-section" className="bg-[#F4F6F8] py-24 lg:py-32">
            <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div className="order-2 lg:order-1">
                    <Reveal>
                        <Chapter index="11" label="About Alliance InfiTex" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">About Alliance InfiTex</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-7 space-y-5">
                            <p className="type-body-sm text-[#2C2C2C]">
                                Alliance InfiTex is building a chemical textile-to-textile circularity platform, the
                                next step in Alliance Group&apos;s sustainability journey. Moving beyond
                                bottle-to-textile recycling, its long-term focus is converting polyester textile waste
                                into virgin-like recycled polyester for future textile applications.
                            </p>
                            <p className="type-body-sm text-[#2C2C2C]">
                                Alliance InfiTex is backed by textile recovery, complete feedstock traceability and
                                rigorous quality systems, built on the industrial foundation of Alliance Group. With
                                the group&apos;s experience in PET recycling, circular manufacturing, export-grade
                                production and feedstock handling, Alliance InfiTex delivers operational know-how
                                already proven at scale.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <a
                            href="https://allianceinfitex.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="visit-alliance-infitex-link"
                            className="btn-outline mt-9"
                        >
                            Visit Alliance InfiTex <ArrowUpRight size={18} />
                        </a>
                    </Reveal>
                </div>

                <Reveal className="order-1 lg:order-2">
                    <ImageReveal
                        className="flex aspect-[4/3] items-center justify-center rounded-lg border border-[#E3E8EE] bg-white p-12 lg:p-16"
                    >
                        <img
                            src="/assets/alliance-logo.webp"
                            alt="Alliance InfiTex logo"
                            loading="lazy"
                            className="w-full max-w-[420px]"
                            data-testid="alliance-logo-panel"
                        />
                    </ImageReveal>
                </Reveal>
            </div>
        </section>
    );
}

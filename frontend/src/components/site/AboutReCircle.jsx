import { ArrowUpRight } from "lucide-react";
import { Reveal, Chapter, ImageReveal } from "@/components/site/Reveal";

export default function AboutReCircle() {
    return (
        <section id="about" data-testid="about-recircle-section" className="bg-white py-24 lg:py-32">
            <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                    <ImageReveal
                        className="flex aspect-[4/3] items-center justify-center rounded-lg border border-[#E3E8EE] bg-white p-12 lg:p-16"
                    >
                        <img
                            src="/assets/recircle-logo.webp"
                            alt="ReCircle logo"
                            loading="lazy"
                            className="w-full max-w-[360px]"
                            data-testid="recircle-logo-panel"
                        />
                    </ImageReveal>
                </Reveal>

                <div>
                    <Reveal>
                        <Chapter index="09" label="About ReCircle" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">About ReCircle</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="mt-7 space-y-5">
                            <p className="type-body-sm text-[#2C2C2C]">
                                ReCircle is a tech-enabled resource recovery enterprise in India, accelerating the
                                transition to a sustainable, ethical circular economy. It diverts plastics, textiles
                                and recyclable materials from landfills and oceans, repurposing them into valuable
                                industrial raw materials. To date, ReCircle has diverted more than{" "}
                                <strong className="font-semibold text-[#01298A]">4,71,000 MT of waste</strong> from
                                polluting landfills and oceans.
                            </p>
                            <p className="type-body-sm text-[#2C2C2C]">
                                ReCircle runs on ClimaOne, its proprietary traceability platform, which brings
                                transparency and accountability to the resource value chain. In textiles, ReCircle
                                does not manufacture textiles, sell second-hand clothing or operate as a traditional
                                textile recycler. Instead, it builds the recovery ecosystem through collection,
                                traceability, segregation, channelisation, awareness and responsible recovery,
                                directing textile waste toward reuse, recycling, upcycling or repurposing.
                            </p>
                            <p className="type-body-sm text-[#2C2C2C]">
                                ReCircle works with brands, governments and Safai Saathis to enable EPR compliance and
                                responsible textile waste management, creating dignified livelihoods and connecting
                                technology, business and communities.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <a
                            href="https://recircle.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="visit-recircle-link"
                            className="btn-outline mt-9"
                        >
                            Visit ReCircle <ArrowUpRight size={18} />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

import { Reveal, Chapter } from "@/components/site/Reveal";

export default function Vision() {
    return (
        <section id="vision" data-testid="vision-section" className="bg-[#2C2C2C] py-24 text-white lg:py-36">
            <div className="container-x">
                <div className="mx-auto max-w-[800px] text-center">
                    <Reveal>
                        <Chapter index="09" label="Vision" dark center />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-white">A Paradigm Shift in Textile Waste Management</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body mt-9 text-white/85">
                            The facility moves India&apos;s polyester industry from traditional downcycling to
                            high-value mechanical and chemical recycling. It gives brands access to traceable,
                            high-quality recycled feedstock and builds a genuine circular economy for polyester
                            textiles.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mx-auto mt-12 h-px w-24 bg-[#11821A]" aria-hidden="true" />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

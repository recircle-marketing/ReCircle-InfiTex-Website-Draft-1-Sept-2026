import { Reveal, Chapter } from "@/components/site/Reveal";

export default function IntroStrip() {
    return (
        <section id="circularity" data-testid="intro-section" className="bg-white py-24 lg:py-36">
            <div className="container-x">
                <div className="mx-auto max-w-[800px] text-center">
                    <Reveal>
                        <Chapter index="01" label="Circularity" center />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">Leading India&apos;s Shift to Textile Circularity</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body mt-9 text-[#2C2C2C]">
                            ReCircle infiTex leads industrial-scale textile circularity in India. The facility
                            recovers polyester-rich textile waste and channels it into high-value recycling through
                            transparent, technology-backed processes.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

import { Reveal, Chapter } from "@/components/site/Reveal";

const PARTNERS = [
    {
        logo: "/assets/alliance-fibres.png",
        index: "01",
        title: "Alliance Fibres Limited",
        body: "A strategic partner with 20 years of experience in recycled polyester fibre and yarn production. Alliance Fibres has signed a strategic offtake agreement to purchase the mechanical recycling-grade polyester produced by the facility.",
        testid: "partner-card-alliance-fibres",
    },
    {
        logo: "/assets/caif-logo.webp",
        index: "02",
        title: "Circular Apparel Innovation Factory (CAIF) by Intellecap",
        body: "CAIF supports the project and works to accelerate the shift to a circular and sustainable apparel industry through innovation, collaboration and scalable solutions across the textile value chain.",
        testid: "partner-card-caif",
    },
];

export default function Partnerships() {
    return (
        <section id="partners" data-testid="partnerships-section" className="bg-[#F4F6F8] py-24 lg:py-32">
            <div className="container-x">
                <Reveal>
                    <Chapter index="07" label="Strategic Partnerships" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="type-h2 mt-9 text-black">Backed by Industry Experience</h2>
                </Reveal>

                <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
                    {PARTNERS.map((partner, i) => (
                        <Reveal key={partner.title} delay={0.12 * i} className="h-full">
                            <article
                                data-testid={partner.testid}
                                className="group h-full rounded-lg border border-[#E3E8EE] bg-white p-8 transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#01298A]/30 hover:shadow-[0_24px_60px_-24px_rgba(1,41,138,0.28)] lg:p-12"
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.title} logo`}
                                        loading="lazy"
                                        className="h-12 w-auto max-w-[240px] object-contain object-left lg:h-14"
                                        data-testid={`${partner.testid}-logo`}
                                    />
                                    <span className="type-eyebrow shrink-0 text-[#2C2C2C]/40">{partner.index}</span>
                                </div>
                                <h3 className="type-h3 mt-8 text-[#01298A]">{partner.title}</h3>
                                <p className="type-body-sm mt-5 text-[#2C2C2C]">{partner.body}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

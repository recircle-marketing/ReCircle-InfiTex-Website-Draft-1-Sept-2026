import { Reveal, Chapter, ImageReveal } from "@/components/site/Reveal";

const CARDS = [
    {
        index: "01",
        title: "Industrial and Scalable",
        body: "Built on high-volume processing capacity of 1,200 tons.",
        img: "/assets/jv-industrial.png",
        alt: "High-volume baling machinery processing textile waste",
        testid: "jv-card-industrial",
    },
    {
        index: "02",
        title: "Tech-Driven and Transparent",
        body: "Powered by ClimaOne digital traceability and AI-based automated sorting.",
        img: "/assets/jv-tech.png",
        alt: "Automated optical sorting line scanning textile pieces",
        testid: "jv-card-tech",
    },
    {
        index: "03",
        title: "Inclusive and Collaborative",
        body: "A trusted partner connecting mills, aggregators, brands and recyclers.",
        img: "/assets/jv-collab.png",
        alt: "Partners collaborating on the facility floor",
        testid: "jv-card-collaborative",
    },
];

export default function JointVenture() {
    return (
        <section id="joint-venture" data-testid="joint-venture-section" className="bg-[#F4F6F8] py-24 lg:py-32">
            <div className="container-x">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <Reveal>
                            <Chapter index="02" label="The Joint Venture" />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="type-h2 mt-9 text-black">Two Companies. One Recovery Ecosystem.</h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="type-body-sm mt-7 text-[#2C2C2C]">
                                ReCircle infiTex Private Limited is a joint venture between{" "}
                                <a href="https://recircle.in/" target="_blank" rel="noopener noreferrer" data-testid="jv-link-recircle" className="font-medium text-[#01298A] underline decoration-[#11821A]/60 underline-offset-4 transition-colors hover:text-[#11821A]">
                                    ReCircle
                                </a>{" "}
                                and{" "}
                                <a href="https://allianceinfitex.com/" target="_blank" rel="noopener noreferrer" data-testid="jv-link-alliance-infitex" className="font-medium text-[#01298A] underline decoration-[#11821A]/60 underline-offset-4 transition-colors hover:text-[#11821A]">
                                    Alliance InfiTex
                                </a>
                                , a subsidiary of{" "}
                                <a href="https://alliancefibres.com/" target="_blank" rel="noopener noreferrer" data-testid="jv-link-alliance-fibres" className="font-medium text-[#01298A] underline decoration-[#11821A]/60 underline-offset-4 transition-colors hover:text-[#11821A]">
                                    Alliance Fibres
                                </a>{" "}
                                Limited. The venture combines ReCircle&apos;s supply chain traceability and recovery
                                ecosystem with Alliance InfiTex&apos;s textile-to-textile manufacturing capabilities.
                                The partnership was signed during{" "}
                                <a href="https://bharat-tex.com/" target="_blank" rel="noopener noreferrer" data-testid="jv-link-bharat-tex" className="font-medium text-[#01298A] underline decoration-[#11821A]/60 underline-offset-4 transition-colors hover:text-[#11821A]">
                                    Bharat Tex
                                </a>{" "}
                                2026.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.3}>
                        <div className="flex shrink-0 flex-nowrap items-center gap-2.5 sm:gap-5" data-testid="jv-partner-logos">
                            <div className="flex h-[68px] items-center rounded-md border border-[#E3E8EE] bg-white px-4 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(1,41,138,0.25)] sm:h-28 sm:px-10">
                                <img
                                    src="/assets/recircle-logo.webp"
                                    alt="ReCircle — joint venture partner"
                                    className="max-h-10 w-auto sm:max-h-20"
                                    data-testid="jv-logo-recircle"
                                />
                            </div>
                            <span className="type-eyebrow text-[#2C2C2C]/40" aria-hidden="true">+</span>
                            <div className="flex h-[68px] items-center rounded-md border border-[#E3E8EE] bg-white px-4 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(1,41,138,0.25)] sm:h-28 sm:px-10">
                                <img
                                    src="/assets/alliance-logo.webp"
                                    alt="Alliance InfiTex — joint venture partner"
                                    className="max-h-10 w-auto sm:max-h-20"
                                    data-testid="jv-logo-alliance-infitex"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
                    {CARDS.map((card, i) => (
                        <Reveal key={card.index} delay={0.12 * i} className="h-full">
                            <article
                                data-testid={card.testid}
                                className="group flex h-full flex-col rounded-lg border border-[#E3E8EE] bg-white p-5 transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#01298A]/30 hover:shadow-[0_24px_60px_-24px_rgba(1,41,138,0.28)]"
                            >
                                <ImageReveal className="frame-clip aspect-[4/3]">
                                    <img
                                        src={card.img}
                                        alt={card.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />
                                </ImageReveal>
                                <div className="flex grow flex-col p-4 pt-6">
                                    <span className="type-eyebrow text-[#11821A]">{card.index}</span>
                                    <h3 className="type-h3 mt-4 text-[#01298A]">{card.title}</h3>
                                    <p className="type-body-sm mt-4 text-[#2C2C2C]">{card.body}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Reveal, Chapter } from "@/components/site/Reveal";

const CARDS = [
    {
        index: "01",
        title: "Industrial and Scalable",
        body: "Built on high-volume processing capacity of 1,200 tons per month in Sachin GIDC, Surat.",
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
        title: "Authoritative and Collaborative",
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
                <div className="max-w-3xl">
                    <Reveal>
                        <Chapter index="02" label="The Joint Venture" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">Two Companies. One Recovery Ecosystem.</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body-sm mt-7 text-[#2C2C2C]">
                            ReCircle infiTex Private Limited is a joint venture between ReCircle and Alliance
                            InfiTex, a subsidiary of Alliance Fibres Limited. The venture combines ReCircle&apos;s
                            supply chain traceability and recovery ecosystem with Alliance InfiTex&apos;s
                            textile-to-textile manufacturing capabilities. The Circular Apparel Innovation Factory
                            (CAIF) by Intellecap supports the project. The partnership was signed during Bharat Tex
                            2026.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
                    {CARDS.map((card, i) => (
                        <Reveal key={card.index} delay={0.12 * i} className="h-full">
                            <article
                                data-testid={card.testid}
                                className="group flex h-full flex-col rounded-lg border border-[#E3E8EE] bg-white p-5 transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#01298A]/30 hover:shadow-[0_24px_60px_-24px_rgba(1,41,138,0.28)]"
                            >
                                <div className="frame-clip aspect-[4/3]">
                                    <img
                                        src={card.img}
                                        alt={card.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                                    />
                                </div>
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

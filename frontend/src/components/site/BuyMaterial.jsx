import { Reveal, Chapter, ImageReveal } from "@/components/site/Reveal";

const PRODUCTS = [
    {
        badge: "Grade 01",
        title: "Mechanical Recycling Grade",
        img: "/assets/product-mechanical.png",
        alt: "Bales of 100% polyester feedstock segregated into white and coloured streams",
        specs: [
            { label: "Composition", value: "100% Polyester, Mono-Material" },
            { label: "Form", value: "Segregated into White and Coloured streams" },
            { label: "Use Case", value: "Conversion into recycled polyester products and materials by Textile-to-Textile Recyclers" },
        ],
        testid: "product-card-mechanical",
    },
    {
        badge: "Grade 02",
        title: "Chemical Recycling Grade",
        img: "/assets/product-chemical.png",
        alt: "Shredded polyester blend feedstock prepared for chemical recycling",
        specs: [
            { label: "Composition", value: "80%+ Polyester Blend, including polyester blended with cotton or viscose" },
            { label: "Form", value: "Segregated into White and Coloured streams" },
            { label: "Use Case", value: "Conversion into recycled polyester materials by chemical recycling partners" },
        ],
        testid: "product-card-chemical",
    },
];

export default function BuyMaterial() {
    return (
        <section id="buy-from-us" data-testid="buy-material-section" className="bg-white py-24 lg:py-32">
            <div className="container-x">
                <div className="max-w-3xl">
                    <Reveal>
                        <Chapter index="07" label="Recovered Material" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">
                            Source Recycled Polyester Feedstock Directly From the Facility
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body-sm mt-7 text-[#2C2C2C]">
                            The facility supplies recovered polyester feedstock to Textile-to-Textile Recyclers across
                            two recycling grades. Every batch moves through ClimaOne, so buyers get full traceability
                            from source to output.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
                    {PRODUCTS.map((product, i) => (
                        <Reveal key={product.title} delay={0.12 * i} className="h-full">
                            <article
                                data-testid={product.testid}
                                className="card group flex h-full flex-col overflow-hidden p-5 transition-[box-shadow,border-color] duration-500 hover:border-[#01298A]/30 hover:shadow-[0_24px_60px_-24px_rgba(1,41,138,0.28)]"
                            >
                                <ImageReveal className="frame-clip aspect-[16/9]">
                                    <img
                                        src={product.img}
                                        alt={product.alt}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                    />
                                </ImageReveal>
                                <div className="flex grow flex-col p-4 pt-7 lg:p-6 lg:pt-8">
                                    <span className="type-eyebrow text-[#11821A]">{product.badge}</span>
                                    <h3 className="type-h3 mt-4 text-[#01298A]">{product.title}</h3>
                                    <dl className="mt-7 space-y-5 border-t border-[#E3E8EE] pt-7">
                                        {product.specs.map((spec) => (
                                            <div key={spec.label} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-4">
                                                <dt className="text-sm font-medium uppercase tracking-[0.12em] text-[#2C2C2C]/60">
                                                    {spec.label}
                                                </dt>
                                                <dd className="text-base leading-relaxed text-black">{spec.value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div className="mt-16 text-center lg:mt-20">
                        <a href="#contact" data-testid="buy-material-cta-button" className="btn-primary">
                            Enquire About Buying Material
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

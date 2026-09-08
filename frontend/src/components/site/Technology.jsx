import { ScanLine, Route } from "lucide-react";
import { Reveal, Chapter } from "@/components/site/Reveal";

const COLUMNS = [
    {
        icon: ScanLine,
        title: "AI-Based Automated Sorting",
        body: "Sorting starts with manual touch-and-feel inspection. The facility is developing an in-house automated sorting system using hyperspectral cameras with UV and IR technology. This identifies material composition, such as 80% versus 100% polyester, at industrial scale.",
        testid: "tech-col-sorting",
    },
    {
        icon: Route,
        title: "End-to-End Traceability",
        body: "ClimaOne for Textile, ReCircle's digital traceability platform, tracks material movement from collection through sorting and processing to the final recycling destination.",
        testid: "tech-col-traceability",
    },
];

export default function Technology() {
    return (
        <section id="technology" data-testid="technology-section" className="bg-[#F4F6F8] py-24 lg:py-32">
            <div className="container-x">
                <Reveal>
                    <Chapter index="06" label="Technology" />
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="type-h2 mt-9 max-w-4xl text-black">Built on Traceability and Precision Sorting</h2>
                </Reveal>

                <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
                    {COLUMNS.map((col, i) => (
                        <Reveal key={col.title} delay={0.12 * i} className="h-full">
                            <article
                                data-testid={col.testid}
                                className="group h-full rounded-lg border border-[#E3E8EE] bg-white p-8 transition-[box-shadow,transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#01298A]/30 hover:shadow-[0_24px_60px_-24px_rgba(1,41,138,0.28)] lg:p-12"
                            >
                                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[#01298A] text-white transition-colors duration-500 group-hover:bg-[#11821A]">
                                    <col.icon size={26} strokeWidth={1.6} />
                                </span>
                                <h3 className="type-h3 mt-8 text-[#01298A]">{col.title}</h3>
                                <p className="type-body-sm mt-5 text-[#2C2C2C]">{col.body}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

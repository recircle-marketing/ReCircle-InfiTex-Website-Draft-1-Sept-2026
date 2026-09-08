import { useEffect, useRef } from "react";
import { Layers, Grid3x3, Droplets, Scissors, Shirt, Users } from "lucide-react";
import { Reveal, Chapter, ImageReveal } from "@/components/site/Reveal";

const ITEMS = [
    { icon: Layers, title: "Yarn Manufacturing", body: "Yarn waste, rejects and production remnants", testid: "surat-item-yarn" },
    { icon: Grid3x3, title: "Weaving and Knitting", body: "Fabric scraps, selvedge waste and rejected fabric", testid: "surat-item-weaving" },
    { icon: Droplets, title: "Process Houses", body: "Dyeing, printing and finishing waste", testid: "surat-item-process" },
    { icon: Scissors, title: "Garmenting Setups", body: "Cut-Make-Trim (CMT) waste, cutting scraps and rejected pieces", testid: "surat-item-garmenting" },
    { icon: Shirt, title: "Textile Markets", body: "Fabric scraps, trimmings and rejected material", testid: "surat-item-markets" },
    { icon: Users, title: "Aggregators", body: "Textile waste, fabric scraps and production rejects collected across the ecosystem", testid: "surat-item-aggregators" },
];

export default function WhySurat() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.defaultMuted = true;
        video.setAttribute("muted", "");
        video.muted = true;
        const tryPlay = () => {
            const promise = video.play();
            if (promise) promise.catch(() => {});
        };
        tryPlay();
        video.addEventListener("canplay", tryPlay);
        window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
        window.addEventListener("scroll", tryPlay, { once: true, passive: true });
        return () => {
            video.removeEventListener("canplay", tryPlay);
            window.removeEventListener("touchstart", tryPlay);
            window.removeEventListener("scroll", tryPlay);
        };
    }, []);

    return (
        <section id="why-surat" data-testid="why-surat-section" className="bg-white py-24 lg:py-32">
            <div className="container-x">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                    <div className="max-w-3xl">
                        <Reveal>
                            <Chapter index="03" label="Why Surat" />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="type-h2 mt-9 text-black">
                                Located at the Source of India&apos;s Largest Textile Waste Hub
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="type-body-sm mt-7 text-[#2C2C2C]">
                                Surat is one of India&apos;s largest hubs for polyester and synthetic textile
                                manufacturing. The city generates around{" "}
                                <strong className="font-semibold text-[#01298A]">762 MT of textile cut-piece waste</strong>,
                                known as chindi, every day, according to the Ministry of Textiles, India.
                            </p>
                            <p className="type-body-sm mt-5 text-[#2C2C2C]">
                                The facility sits in Sachin GIDC, Surat, giving it direct access to the city&apos;s major
                                waste-generating clusters. This cuts logistics costs and environmental impact while
                                creating structured pathways for responsible recovery.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.25} className="shrink-0 lg:w-[400px] xl:w-[440px]">
                        <ImageReveal
                            className="frame-clip border border-[#E3E8EE] bg-white shadow-[0_24px_60px_-24px_rgba(1,41,138,0.25)]"
                        >
                            <video
                                ref={videoRef}
                                data-testid="surat-location-video"
                                className="aspect-square w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                aria-label="Animated map zooming from India to Surat, Gujarat"
                            >
                                <source src="/assets/surat-location.mp4" type='video/mp4; codecs="avc1.64001f, mp4a.40.2"' />
                                <source src="/assets/surat-location.webm" type="video/webm" />
                            </video>
                        </ImageReveal>
                        <p className="mt-4 flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.14em] text-[#2C2C2C]/60">
                            <span className="inline-block h-2 w-2 rotate-45 bg-[#11821A]" aria-hidden="true" />
                            Sachin GIDC, Surat, Gujarat
                        </p>
                    </Reveal>
                </div>

                <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-[#E3E8EE] bg-[#E3E8EE] sm:grid-cols-2 lg:mt-20 lg:grid-cols-3" data-testid="surat-icon-grid">
                    {ITEMS.map((item, i) => (
                        <Reveal key={item.title} delay={0.07 * i} y={20} className="h-full">
                            <div
                                data-testid={item.testid}
                                className="group flex h-full flex-col gap-5 bg-white p-8 transition-colors duration-500 hover:bg-[#F4F6F8] lg:p-10"
                            >
                                <span className="flex h-14 w-14 items-center justify-center rounded-md border border-[#01298A]/15 text-[#01298A] transition-[background-color,color,border-color] duration-500 group-hover:border-[#01298A] group-hover:bg-[#01298A] group-hover:text-white">
                                    <item.icon size={26} strokeWidth={1.6} />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-black lg:text-xl">{item.title}</h3>
                                    <p className="mt-2.5 text-base leading-relaxed text-[#2C2C2C]">{item.body}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ITEMS = ["Mechanical Recycling", "Chemical Recycling"];

const TRACK = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

const Diamond = () => <span className="mx-10 inline-block h-2 w-2 rotate-45 bg-[#11821A] lg:mx-16" aria-hidden="true" />;

export default function Marquee() {
    const row = (ariaHidden) => (
        <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
            {TRACK.map((item) => (
                <span key={`${item}-${ariaHidden}`} className="flex items-center">
                    <span className="whitespace-nowrap text-sm font-medium tracking-[0.18em] text-[#01298A]/75 uppercase lg:text-base">
                        {item}
                    </span>
                    <Diamond />
                </span>
            ))}
        </div>
    );

    return (
        <div data-testid="editorial-marquee" className="overflow-hidden border-y border-[#E3E8EE] bg-white py-6 lg:py-7">
            <div className="marquee-track flex w-max">
                {row(false)}
                {row(true)}
            </div>
        </div>
    );
}

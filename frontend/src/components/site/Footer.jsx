import { MapPin, Phone, Mail } from "lucide-react";

const COMPANY_LINKS = [
    { label: "About", href: "#about", testid: "footer-link-about" },
    { label: "How It Works", href: "#how-it-works", testid: "footer-link-how-it-works" },
    { label: "Technology", href: "#technology", testid: "footer-link-technology" },
    { label: "Buy From Us", href: "#buy-from-us", testid: "footer-link-buy-from-us" },
    { label: "Partners", href: "#partners", testid: "footer-link-partners" },
];

const PARTNER_LINKS = [
    { label: "ReCircle", href: "https://recircle.in/", testid: "footer-link-recircle" },
    { label: "Alliance InfiTex", href: "https://allianceinfitex.com/", testid: "footer-link-alliance-infitex" },
];

export default function Footer() {
    return (
        <footer data-testid="site-footer" className="bg-[#01298A] text-white">
            <div className="container-x grid gap-14 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-20">
                <div>
                    <a href="#home" data-testid="footer-logo" aria-label="ReCircle infiTex — back to top">
                        <img
                            src="/assets/logo-white.png"
                            alt="ReCircle infiTex — Textile Recovery"
                            className="w-[190px] lg:w-[220px]"
                        />
                    </a>
                    <p className="mt-7 text-lg font-medium text-white/85">Textile Recovery. Built for Scale.</p>
                </div>

                <nav aria-label="Company">
                    <h3 className="type-eyebrow !text-sm text-white/60">Company</h3>
                    <ul className="mt-6 space-y-3.5">
                        {COMPANY_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    data-testid={link.testid}
                                    className="text-base text-white/85 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav aria-label="Partners">
                    <h3 className="type-eyebrow !text-sm text-white/60">Partners</h3>
                    <ul className="mt-6 space-y-3.5">
                        {PARTNER_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={link.testid}
                                    className="text-base text-white/85 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="type-eyebrow !text-sm text-white/60">Contact</h3>
                    <ul className="mt-6 space-y-4 text-base text-white/85">
                        <li className="flex gap-3">
                            <MapPin size={19} className="mt-0.5 shrink-0 text-white/60" />
                            <span>
                                Shop No. 711, Avadh Kontina, Luthra Circle, VIP Road, Vesu, Surat – 395007, Gujarat,
                                India
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={19} className="shrink-0 text-white/60" />
                            <a href="tel:+919537007436" data-testid="footer-phone-link" className="transition-colors hover:text-white">
                                +91 95370 07436
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={19} className="shrink-0 text-white/60" />
                            <a href="mailto:info@recircleinfitex.in" data-testid="footer-email-link" className="transition-colors hover:text-white">
                                info@recircleinfitex.in
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/15">
                <div className="container-x py-6">
                    <p data-testid="footer-copyright" className="text-sm text-white/60">
                        © 2026 ReCircle infiTex Private Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

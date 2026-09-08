import { useLocation, Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

const COMPANY_LINKS = [
    { label: "About", href: "#about", testid: "footer-link-about" },
    { label: "How It Works", href: "#how-it-works", testid: "footer-link-how-it-works" },
    { label: "Technology", href: "#technology", testid: "footer-link-technology" },
    { label: "Buy From Us", href: "#buy-from-us", testid: "footer-link-buy-from-us" },
    { label: "Partners", href: "#partners", testid: "footer-link-partners" },
];

const PARTNER_LINKS = [
    { label: "ReCircle", href: "https://recircle.in/", logo: "/assets/recircle-logo.webp", testid: "footer-link-recircle" },
    { label: "Alliance InfiTex", href: "https://allianceinfitex.com/", logo: "/assets/alliance-logo.webp", testid: "footer-link-alliance-infitex" },
];

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://www.instagram.com/recircle.infitex/", icon: Instagram, testid: "footer-social-instagram-link" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/recircle-infitex-pvt-ltd/", icon: Linkedin, testid: "footer-social-linkedin-link" },
    { label: "Email", href: "mailto:info@recircleinfitex.in", icon: Mail, testid: "footer-social-email-link" },
];

export default function Footer() {
    const { pathname } = useLocation();
    const resolve = (href) => (pathname === "/" ? href : `/${href}`);

    return (
        <footer data-testid="site-footer" className="bg-[#01298A] text-white">
            <div className="container-x grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1.3fr_0.9fr] lg:gap-10 lg:py-20">
                <div>
                    <a href={resolve("#home")} data-testid="footer-logo" aria-label="ReCircle infiTex — back to top">
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
                                    href={resolve(link.href)}
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
                    <ul className="mt-6 space-y-4">
                        {PARTNER_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={link.testid}
                                    className="group flex items-center gap-3.5"
                                >
                                    <span className="flex h-10 w-[86px] shrink-0 items-center justify-center rounded-md bg-white px-2.5 py-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                                        <img src={link.logo} alt={`${link.label} logo`} className="max-h-7 w-auto object-contain" />
                                    </span>
                                    <span className="text-base text-white/85 transition-colors group-hover:text-white">
                                        {link.label}
                                    </span>
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

                <div>
                    <h3 className="type-eyebrow !text-sm text-white/60">Follow Us</h3>
                    <div className="mt-6 flex gap-3" data-testid="footer-social-links">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                data-testid={link.testid}
                                aria-label={`ReCircle infiTex on ${link.label}`}
                                className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 text-white/85 transition-[background-color,color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#01298A]"
                            >
                                <link.icon size={19} />
                            </a>
                        ))}
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-white/60">
                        Follow the facility&apos;s journey toward textile circularity.
                    </p>
                </div>
            </div>

            <div className="border-t border-white/15">
                <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <p data-testid="footer-copyright" className="text-sm text-white/60">
                        © 2026 ReCircle infiTex Private Limited. All rights reserved.
                    </p>
                    <div className="flex items-center gap-7">
                        <Link
                            to="/privacy-policy"
                            data-testid="footer-link-privacy-policy"
                            className="text-sm text-white/60 transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms-of-usage"
                            data-testid="footer-link-terms-of-usage"
                            className="text-sm text-white/60 transition-colors hover:text-white"
                        >
                            Terms of Usage
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

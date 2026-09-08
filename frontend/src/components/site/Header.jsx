import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "@/components/site/Reveal";

const NAV_LINKS = [
    { label: "Home", href: "#home", testid: "header-nav-home-link" },
    { label: "About", href: "#joint-venture", testid: "header-nav-about-link" },
    { label: "How It Works", href: "#how-it-works", testid: "header-nav-how-it-works-link" },
    { label: "Technology", href: "#technology", testid: "header-nav-technology-link" },
    { label: "Buy From Us", href: "#buy-from-us", testid: "header-nav-buy-from-us-link" },
    { label: "Partners", href: "#partners", testid: "header-nav-partners-link" },
    { label: "Contact", href: "#contact", testid: "header-nav-contact-link" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const resolve = (href) => (pathname === "/" ? href : `/${href}`);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={`fixed inset-x-0 top-0 z-[80] bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
                scrolled ? "border-b border-[#E3E8EE] shadow-[0_8px_30px_rgba(1,41,138,0.06)]" : "border-b border-transparent"
            }`}
        >
            <div className="container-x flex h-20 items-center justify-between gap-6 lg:h-[88px]">
                <a href={resolve("#home")} data-testid="header-logo" className="shrink-0 py-2" aria-label="ReCircle infiTex — home">
                    <img
                        src="/assets/logo-color.png"
                        alt="ReCircle infiTex — Textile Recovery"
                        className="w-[180px] lg:w-[216px]"
                    />
                </a>

                <nav className="hidden items-center gap-7 xl:gap-9 lg:flex" aria-label="Primary">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={resolve(link.href)}
                            data-testid={link.testid}
                            className="group relative text-[15px] font-medium text-[#2C2C2C] transition-colors duration-300 hover:text-[#01298A]"
                        >
                            {link.label}
                            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-[#11821A] transition-[width] duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a href={resolve("#contact")} data-testid="header-contact-cta-button" className="btn-primary hidden whitespace-nowrap !px-4 !py-2.5 !text-sm sm:inline-flex sm:!px-6 sm:!py-3 sm:!text-base">
                        Get in Touch
                    </a>
                    <button
                        type="button"
                        data-testid="mobile-menu-button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#E3E8EE] text-[#01298A] lg:hidden"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        key="mobile-nav"
                        data-testid="mobile-nav-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden border-b border-[#E3E8EE] bg-white lg:hidden"
                        aria-label="Mobile"
                    >
                        <div className="container-x flex flex-col gap-1 py-5">
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={resolve(link.href)}
                                    data-testid={`mobile-${link.testid}`}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, x: -14 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                                    className="rounded-md px-2 py-3 text-lg font-medium text-[#2C2C2C] transition-colors hover:bg-[#F4F6F8] hover:text-[#01298A]"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href={resolve("#contact")}
                                data-testid="mobile-header-contact-cta-button"
                                onClick={() => setOpen(false)}
                                className="btn-primary mt-3 sm:hidden"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

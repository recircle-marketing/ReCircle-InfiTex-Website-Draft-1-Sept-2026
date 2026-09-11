import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import IntroStrip from "@/components/site/IntroStrip";
import JointVenture from "@/components/site/JointVenture";
import WhySurat from "@/components/site/WhySurat";
import Capacity from "@/components/site/Capacity";
import HowItWorks from "@/components/site/HowItWorks";
import Technology from "@/components/site/Technology";
import BuyMaterial from "@/components/site/BuyMaterial";
import Partnerships from "@/components/site/Partnerships";
import AboutReCircle from "@/components/site/AboutReCircle";
import AboutAlliance from "@/components/site/AboutAlliance";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import LegalPage from "@/components/site/LegalPage";
import { PRIVACY_POLICY, TERMS_OF_USAGE } from "@/components/site/legalContent";

const HomePage = () => (
    <main>
        <Hero />
        <Marquee />
        <IntroStrip />
        <JointVenture />
        <WhySurat />
        <Capacity />
        <HowItWorks />
        <Technology />
        <BuyMaterial />
        <Partnerships />
        <AboutReCircle />
        <AboutAlliance />
        <Contact />
    </main>
);

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const timer = setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ block: "start" });
            }, 150);
            return () => clearTimeout(timer);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname, hash]);
    return null;
};

function App() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        const onClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            const hash = anchor.getAttribute("href");
            if (hash && hash.length > 1 && document.querySelector(hash)) {
                e.preventDefault();
                lenis.scrollTo(hash, { offset: -84 });
            }
        };
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("click", onClick);
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App" data-testid="app-root">
            <div className="grain" aria-hidden="true" />
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/privacy-policy" element={<LegalPage content={PRIVACY_POLICY} testid="privacy-policy-page" />} />
                    <Route path="/terms-of-usage" element={<LegalPage content={TERMS_OF_USAGE} testid="terms-of-usage-page" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <WhatsAppButton />
            <Toaster position="bottom-left" richColors />
        </div>
    );
}

export default App;

import { useEffect } from "react";
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
import Vision from "@/components/site/Vision";
import AboutReCircle from "@/components/site/AboutReCircle";
import AboutAlliance from "@/components/site/AboutAlliance";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

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
            <Header />
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
                <Vision />
                <AboutReCircle />
                <AboutAlliance />
                <Contact />
            </main>
            <Footer />
            <Toaster position="bottom-right" richColors />
        </div>
    );
}

export default App;

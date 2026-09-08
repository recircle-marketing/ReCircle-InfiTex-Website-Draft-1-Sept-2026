# PRD — ReCircle infiTex Landing Website

## Original Problem Statement
Single-page scrolling landing website for ReCircle infiTex Private Limited (India's largest textile recovery facility, 1,200 MT/month polyester textile waste, Sachin GIDC, Surat). 15 sections per a detailed build spec: strict brand tokens (Royal Blue #01298A, Eco Green #11821A, Graphite #2C2C2C, Slate Light #F4F6F8, Inter typeface only), sticky anchor nav, all CTAs pointing to one Contact & Enquiry section with the site's only form. Frontend-only; form shows simulated success. Award-worthy art direction: kinetic hero with masked line-by-line reveal, editorial marquee, numbered chapter markers, lenis smooth scrolling, framer-motion scroll reveals, parallax hero.

## Architecture
- Frontend-only React (CRA/craco) + Tailwind; no backend endpoints used.
- `/app/frontend/src/App.js` — composition + Lenis smooth scroll + anchor scroll handler + sonner Toaster.
- `/app/frontend/src/components/site/` — Header, Hero, Marquee, IntroStrip, JointVenture, WhySurat, Capacity, HowItWorks (lightbox), Technology, BuyMaterial, Partnerships, Vision, AboutReCircle, AboutAlliance, Contact, Footer, Reveal (shared motion helpers).
- `/app/frontend/src/index.css` — brand tokens, Inter type scale (H1 64px / H2 44px / H3 32px / body up to 26px / eyebrow +18% tracking), button/card/field classes, marquee keyframes, grain overlay.
- `/app/frontend/public/assets/` — client-supplied logos (logo-color.png, logo-white.png, alliance-logo.webp, workflow.webp) + 6 AI-generated documentary-style facility photos (hero-facility, jv-industrial, jv-tech, jv-collab, product-mechanical, product-chemical).
- `/app/scripts/generate_images.py` — one-shot Gemini (Nano Banana) image generation script using EMERGENT_LLM_KEY.

## User Personas
- Textile-to-textile recyclers buying recovered polyester feedstock
- Mills/aggregators/brands seeking traceable waste recovery partnerships
- ESG/sustainability executives evaluating circular supply chains

## Core Requirements (static)
1. Sticky white header: color lockup left (min 180px), anchor nav, "Get in Touch" CTA; hamburger on mobile.
2. Hero: facility photo + Royal Blue overlay, masked line-by-line H1 reveal, dual CTAs.
3. Sections 3–13 exactly per spec copy, alternating white/slate with Royal Blue (capacity) + Graphite (vision) dark chapters.
4. Technical workflow flowchart (4:3, no crop) with tap-to-expand lightbox.
5. One form only (Section 14): Name*, Company, Email*, Phone*, Reason* select, Material select, Quantity, Message* → simulated success.
6. Footer: Royal Blue, knockout logo, 3 link columns, copyright bar.

## Implemented (2026-09-08)
- All 15 sections built and verified via screenshots + interactive Playwright flows (lightbox open/close, form validation errors, successful submit with toast).
- Kinetic hero (parallax bg, staggered mask reveal), kinetic 1,200 MT counter, slow editorial marquee, numbered manifesto chapters 01–12, scroll-reveal micro-interactions, Lenis momentum scrolling, grain texture.
- 6 AI-generated placeholder photos in documentary style (PPE-compliant) pending client Elementor assets.
- Client logos integrated (2026-09-08): real ReCircle logo in About ReCircle panel; JV partner logos (ReCircle + Alliance infiTex) right of the Joint Venture section title; Alliance Fibres + CAIF logos on the Strategic Partnerships cards.

## Backlog / Next Tasks
- P0: Wire enquiry form to real email delivery (Resend → info@recircleinfitex.in) when client wants live enquiries.
- P1: Replace AI placeholder photos with real facility photography.
- P1: Mobile viewport QA pass on physical devices.
- P2: SEO meta/OG images, sitemap; performance pass (image weight optimization to webp).

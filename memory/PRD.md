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
- Footer expanded (2026-09-08): partner logo chips (ReCircle, Alliance infiTex) beside partner links, "Follow Us" social column (Instagram, LinkedIn, Email), Privacy Policy + Terms of Usage links in copyright bar.
- Legal pages (2026-09-08): /privacy-policy and /terms-of-usage routes (react-router), shared LegalPage component, content in legalContent.js, route-aware header/footer anchors, scroll-to-top on route change.
- Mobile polish (2026-09-08): header CTA visible on phones per spec, JV logo pair resized for 390px, footer stacks cleanly; verified via 390x844 screenshots (hero, JV, workflow lightbox chip, footer, hamburger menu).
- Why Surat location video (2026-09-08): client-supplied Surat map tag animation embedded right of the section title — autoplay/muted/loop/playsInline, dual-source MP4 (H.264) + WebM (VP9, transcoded via imageio-ffmpeg) with square aspect frame, verified playing and looping.
- Technology section images (2026-09-08): replaced icon tiles with imagery — AI-generated hyperspectral sorting line photo (tech-sorting.png) on "AI-Based Automated Sorting", client-supplied ClimaOne platform image (climaone.jpg) on "End-to-End Traceability". Header "About" nav link now targets #joint-venture.

- Full mobile QA pass (2026-09-08, 390x844): zero horizontal overflow on home + both legal pages; video autoplays/loops; lightbox, form validation+submit+toast, hamburger navigation, footer all verified. Fixed: capacity counter stuck at 0 (moved from framer useInView to direct IntersectionObserver) and legal-page-to-home anchor links landing at top (hash-aware scroll restore in ScrollToTop). Desktop regression check passed.
- Polish round 2 (2026-09-08): header CTA hidden below sm breakpoint (kept inside hamburger menu); JV partner logos enlarged with hover lift, kept on one line on mobile; Why Surat video autoplay hardened for real mobile browsers (defaultMuted + muted attribute via JS, play retries on canplay/touchstart/scroll); ImageReveal clip+scale scroll animation applied to JV/Technology/Buy cards, About panels and video frame; Reveal gained subtle blur-settle; buttons gained hover lift + shadow.
- Content revision round (2026-09-11): hero eyebrow + scroll cue removed; marquee item "100% Offtake Secured" removed; JV copy trimmed (CAIF sentence removed, card 1 body shortened, card 3 retitled "Inclusive and Collaborative"); Why Surat grid gained "Where the Waste Comes From" title; Capacity subtext trimmed and supporting line removed; Technology section rewritten as ClimaOne-only traceability feature (split layout, numbered Collection→Sorting→Processing→Recycling Destination steps); Buy proof line removed; Partnerships "100%" claim removed; Vision section deleted and chapters renumbered 01–11; new facility address (Plot No. B/4, Block No. 249/B, Sachin Industrial Estate GIDC, Taluka, Choryasi, Un, Surat, Gujarat 394230) applied to Contact, Footer and both legal pages; enquiry reasons updated to General Enquiry / Buy Recovered Material / Raw Material to Us / Carriers / Other. All verified via automated browser checks (17 content assertions + desktop/mobile screenshots).
- Marquee + video swap (2026-09-11): marquee now alternates two points — "Mechanical Recycling" and "Chemical Recycling" (repeated for a seamless loop); Why Surat video replaced with client's updated Surat map animation (facility-video.mp4 + VP9 webm fallback), verified playing on desktop and mobile.

## Backlog / Next Tasks
- P0: Wire enquiry form to real email delivery (Resend → info@recircleinfitex.in) when client wants live enquiries.
- P1: Replace AI placeholder photos with real facility photography.
- P1: Legal pages hold standard template copy — have legal counsel review before public launch.
- P2: SEO meta/OG images, sitemap; performance pass (image weight optimization to webp).

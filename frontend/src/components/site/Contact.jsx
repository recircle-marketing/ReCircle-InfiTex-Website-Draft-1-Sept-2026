import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, FileText, CheckCircle2, Send } from "lucide-react";
import { Reveal, Chapter } from "@/components/site/Reveal";

const REASONS = ["General Enquiry", "Buy Recovered Materials", "Sell / Supply Raw Materials", "Careers", "Other"];
const MATERIALS = [
    "Mechanical Recycling Grade (100% Polyester)",
    "Chemical Recycling Grade (80%+ Polyester Blend)",
    "Not Applicable",
];

const INITIAL = { name: "", company: "", email: "", phone: "", reason: "", material: "", quantity: "", message: "" };

const Field = ({ label, required, error, children, testid }) => (
    <div data-testid={testid}>
        <label className="mb-2 block text-sm font-medium text-black">
            {label} {required && <span className="text-[#11821A]">*</span>}
        </label>
        {children}
        {error && (
            <p className="mt-1.5 text-sm text-red-600" role="alert">
                {error}
            </p>
        )}
    </div>
);

export default function Contact() {
    const [form, setForm] = useState(INITIAL);
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const set = (key) => (e) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
        setErrors((err) => ({ ...err, [key]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = {};
        if (!form.name.trim()) next.name = "Please enter your name";
        if (!form.email.trim()) next.email = "Please enter your email";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email";
        if (!form.phone.trim()) next.phone = "Please enter your phone number";
        if (!form.reason) next.reason = "Please select a reason";
        if (!form.message.trim()) next.message = "Please enter a message";
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            toast.success("Thank you for reaching out. The team will get back to you shortly.");
        }, 900);
    };

    return (
        <section id="contact" data-testid="contact-section" className="bg-white py-24 lg:py-36">
            <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-20">
                <div>
                    <Reveal>
                        <Chapter index="10" label="Contact and Enquiry" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="type-h2 mt-9 text-black">Build Circularity Into Your Supply Chain</h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="type-body-sm mt-7 text-[#2C2C2C]">
                            Connect with the team to buy recovered polyester feedstock, explore offtake partnerships,
                            channel your textile waste through a traceable recovery process, or ask a general question.
                            One form, one team, one response.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-12 space-y-7 border-t border-[#E3E8EE] pt-10" data-testid="contact-company-details">
                            <p className="text-xl font-semibold text-black">ReCircle InfiTex Private Limited</p>
                            <div className="flex gap-4">
                                <MapPin size={22} className="mt-1 shrink-0 text-[#01298A]" />
                                <p className="text-base leading-relaxed text-[#2C2C2C]">
                                    <a
                                        href="https://maps.app.goo.gl/e7FqC9cuU8soJhdW9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid="contact-address-link"
                                        className="underline decoration-[#11821A]/50 underline-offset-4 transition-colors hover:text-[#01298A]"
                                    >
                                        Plot No. B/4, Block No. 249/B, Sachin Industrial Estate GIDC, Taluka,
                                        Choryasi, Un, Surat, Gujarat 394230
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={22} className="shrink-0 text-[#01298A]" />
                                <a href="tel:+919537007436" data-testid="contact-phone-link" className="text-base text-[#2C2C2C] transition-colors hover:text-[#01298A]">
                                    +91 95370 07436
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={22} className="shrink-0 text-[#01298A]" />
                                <a href="mailto:info@recircleinfitex.in" data-testid="contact-email-link" className="text-base text-[#2C2C2C] transition-colors hover:text-[#01298A]">
                                    info@recircleinfitex.in
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <FileText size={22} className="mt-1 shrink-0 text-[#01298A]" />
                                <p className="text-base leading-relaxed text-[#2C2C2C]">
                                    CIN: U38300GJ2026PTC181359
                                    <br />
                                    PAN: AAQCR1428N
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.15}>
                    <div className="card p-6 sm:p-8 lg:p-10" data-testid="contact-form-card">
                        <h3 className="type-h3 text-[#01298A]">Get in Touch</h3>

                        {sent ? (
                            <div className="mt-10 flex flex-col items-start gap-5" data-testid="contact-form-success">
                                <CheckCircle2 size={44} className="text-[#11821A]" />
                                <p className="type-body-sm text-black">
                                    Thank you for reaching out. The team will get back to you shortly.
                                </p>
                                <button
                                    type="button"
                                    data-testid="contact-form-reset-button"
                                    className="btn-outline"
                                    onClick={() => {
                                        setSent(false);
                                        setForm(INITIAL);
                                    }}
                                >
                                    Send Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2" data-testid="contact-enquiry-form">
                                <Field label="Name" required error={errors.name} testid="contact-field-name">
                                    <input
                                        type="text"
                                        data-testid="contact-form-name-input"
                                        className="field"
                                        value={form.name}
                                        onChange={set("name")}
                                        autoComplete="name"
                                    />
                                </Field>
                                <Field label="Company" error={errors.company} testid="contact-field-company">
                                    <input
                                        type="text"
                                        data-testid="contact-form-company-input"
                                        className="field"
                                        value={form.company}
                                        onChange={set("company")}
                                        autoComplete="organization"
                                    />
                                </Field>
                                <Field label="Email" required error={errors.email} testid="contact-field-email">
                                    <input
                                        type="email"
                                        data-testid="contact-form-email-input"
                                        className="field"
                                        value={form.email}
                                        onChange={set("email")}
                                        autoComplete="email"
                                    />
                                </Field>
                                <Field label="Phone Number" required error={errors.phone} testid="contact-field-phone">
                                    <input
                                        type="tel"
                                        data-testid="contact-form-phone-input"
                                        className="field"
                                        value={form.phone}
                                        onChange={set("phone")}
                                        autoComplete="tel"
                                    />
                                </Field>
                                <Field label="Reason for Enquiry" required error={errors.reason} testid="contact-field-reason">
                                    <select data-testid="contact-form-reason-select" className="field" value={form.reason} onChange={set("reason")}>
                                        <option value="">Select a reason</option>
                                        {REASONS.map((r) => (
                                            <option key={r} value={r}>
                                                {r}
                                            </option>
                                        ))}
                                    </select>
                                </Field>
                                <Field label="Material Interested In" error={errors.material} testid="contact-field-material">
                                    <select data-testid="contact-form-material-select" className="field" value={form.material} onChange={set("material")}>
                                        <option value="">Select a material (optional)</option>
                                        {MATERIALS.map((m) => (
                                            <option key={m} value={m}>
                                                {m}
                                            </option>
                                        ))}
                                    </select>
                                </Field>
                                <div className="sm:col-span-2">
                                    <Field label="Quantity Required" error={errors.quantity} testid="contact-field-quantity">
                                        <input
                                            type="text"
                                            data-testid="contact-form-quantity-input"
                                            className="field"
                                            placeholder="e.g. 10 MT per month"
                                            value={form.quantity}
                                            onChange={set("quantity")}
                                        />
                                    </Field>
                                </div>
                                <div className="sm:col-span-2">
                                    <Field label="Message" required error={errors.message} testid="contact-field-message">
                                        <textarea
                                            rows={5}
                                            data-testid="contact-form-message-textarea"
                                            className="field resize-y"
                                            value={form.message}
                                            onChange={set("message")}
                                        />
                                    </Field>
                                </div>
                                <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        data-testid="contact-form-submit-button"
                                        disabled={sending}
                                        className="btn-primary w-full disabled:opacity-70 sm:w-auto"
                                    >
                                        {sending ? "Sending…" : "Send Enquiry"} <Send size={17} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

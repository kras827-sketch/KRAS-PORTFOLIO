"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  MapPin,
  Link as LinkIcon,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { submitContact } from "@/lib/api";

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [debugInfo, setDebugInfo] = useState("");

  // Validate form
  const getValidationErrors = () => {
    const errors = [];
    if (!form.full_name.trim()) errors.push("Full name is required");
    if (!form.full_name.trim() || form.full_name.length < 2) errors.push("Full name must be at least 2 characters");
    if (!form.email.trim()) errors.push("Email is required");
    if (!form.email.includes("@")) errors.push("Email must be valid (e.g., user@example.com)");
    if (!form.subject.trim()) errors.push("Subject is required");
    if (!form.subject.trim() || form.subject.length < 2) errors.push("Subject must be at least 2 characters");
    if (!form.message.trim()) errors.push("Message is required");
    if (!form.message.trim() || form.message.length < 10) errors.push("Message must be at least 10 characters");
    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Check validation first
    const validationErrors = getValidationErrors();
    if (validationErrors.length > 0) {
      setStatus("error");
      setStatusMessage(validationErrors[0]);
      setDebugInfo(`Validation failed: ${validationErrors.join(", ")}`);
      console.error("Validation errors:", validationErrors);
      return;
    }

    setStatus("loading");
    setDebugInfo("Submitting form...");
    console.log("Form data being submitted:", form);

    try {
      console.log("Calling submitContact function");
      const res = await submitContact(form);
      console.log("Response received:", res);
      
      setStatus("success");
      setStatusMessage(res.message || "Message sent successfully!");
      setForm({ full_name: "", email: "", subject: "", message: "" });
      setDebugInfo("✓ Form submitted successfully");
      
      setTimeout(() => {
        setStatus("idle");
        setDebugInfo("");
      }, 5000);
    } catch (err: unknown) {
      setStatus("error");
      let errorMsg = "Something went wrong";
      
      if (err instanceof Error) {
        errorMsg = err.message;
      } else if (typeof err === "object" && err !== null) {
        errorMsg = JSON.stringify(err);
      } else if (typeof err === "string") {
        errorMsg = err;
      }
      
      console.error("Error details:", {
        errorMsg,
        errorObj: err,
        formData: form
      });
      
      setStatusMessage(errorMsg);
      setDebugInfo(`Error: ${errorMsg}`);
      
      setTimeout(() => {
        setStatus("idle");
      }, 7000);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 text-sm bg-[var(--navy-50)] border border-[var(--navy-200)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--navy-400)] transition-all duration-200 dark:bg-black dark:border-[#333] dark:text-zinc-100 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)]";

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <AnimatedSection direction="left">
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s collaborate
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-10 max-w-md">
              Have a complex data problem or need a robust backend architecture?
              I&apos;m currently open to new projects and technical
              consultations.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] text-[var(--blue-600)] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-1">
                    Email Me
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--blue-600)] transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] text-[var(--blue-600)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-1">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {SITE.location}
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--blue-50)] text-[var(--blue-600)] flex items-center justify-center flex-shrink-0">
                  <LinkIcon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-1">
                    Socials
                  </p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--blue-600)] transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection direction="right">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              id="contact-form"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="full_name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="John Doe"
                    required
                    value={form.full_name}
                    onChange={(e) =>
                      setForm({ ...form, full_name: e.target.value })
                    }
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project needs..."
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClasses} resize-vertical`}
                />
              </div>

              {/* Loading state */}
              {status === "loading" && (
                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <Loader2 size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 animate-spin" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">Sending your message...</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300 mt-0.5">{debugInfo || "Connecting to server"}</p>
                  </div>
                </div>
              )}

              {/* Status message */}
              {status === "success" && (
                <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                  <CheckCircle size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">✓ {statusMessage}</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">Your message has been received. I'll get back to you shortly!</p>
                  </div>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-900 dark:text-red-200">Oops! {statusMessage}</p>
                    <p className="text-xs text-red-700 dark:text-red-300 mt-0.5">
                      {debugInfo || "Please check your form and try again. If the problem persists, contact me directly."}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status !== "idle"}
                id="contact-submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[var(--navy-900)] rounded-xl hover:bg-[var(--navy-800)] transition-all duration-200 hover:shadow-xl hover:shadow-navy-900/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={16} />
                    Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

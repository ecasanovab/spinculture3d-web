"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, company, message }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message || "Message sent successfully.");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-xl border border-[#b9e7f0] bg-white px-4 py-3 text-[#014b5c] outline-none transition placeholder:text-[#7196a0] focus:border-[#028aac] focus:ring-2 focus:ring-[#8ad5e5]/40 disabled:cursor-not-allowed disabled:opacity-60";
  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-6 text-[#014b5c] shadow-xl shadow-black/10 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            disabled={isLoading}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            disabled={isLoading}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-company" className="block text-sm font-medium">
          Company / Institution
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={150}
          disabled={isLoading}
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className={inputClassName}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="block text-sm font-medium">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          disabled={isLoading}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${inputClassName} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 inline-flex min-w-40 items-center justify-center rounded-full bg-[#028aac] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#017590] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#028aac] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Sending..." : "Send message"}
      </button>

      <p
        aria-live="polite"
        className={`mt-4 min-h-5 text-sm ${
          status === "success" ? "text-emerald-700" : "text-red-700"
        }`}
      >
        {statusMessage}
      </p>
    </form>
  );
}

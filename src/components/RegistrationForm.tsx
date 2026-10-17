"use client";

import { FormEvent, useState } from "react";

export const FORM_RECIPIENT = "innoexpomember@gmail.com";
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${FORM_RECIPIENT}`;

type FormStatus = "idle" | "sending" | "success" | "error";

export default function RegistrationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (String(data.get("_honey") || "").trim()) return;

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean | string } | null;
      if (!response.ok || result?.success === false) throw new Error("FormSubmit rejected the registration");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action={FORM_ENDPOINT} method="POST" onSubmit={submit} className="grid gap-5">
      <input type="hidden" name="_subject" value="New InnoExpo GL member registration" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold" htmlFor="full-name">
          Full name
          <input id="full-name" name="full_name" type="text" autoComplete="name" required minLength={2} className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold" htmlFor="email">
          Email
          <input id="email" name="email" type="email" autoComplete="email" required className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-3 py-3 font-normal" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold" htmlFor="phone">
          Phone
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-semibold" htmlFor="organization">
          Organization
          <input id="organization" name="organization" type="text" autoComplete="organization" required className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-3 py-3 font-normal" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold" htmlFor="role">
        Role
        <select id="role" name="role" required defaultValue="" className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-3 py-3 font-normal">
          <option value="" disabled>Select your role</option>
          <option value="Student">Student</option>
          <option value="Mentor">Mentor</option>
          <option value="School or club">School or club</option>
          <option value="Volunteer">Volunteer</option>
        </select>
      </label>

      <label className="hidden" aria-hidden="true">
        Leave this field empty
        <input tabIndex={-1} autoComplete="off" name="_honey" />
      </label>

      <button type="submit" disabled={status === "sending"} className="rounded-[var(--radius)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d3c4e] disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Register"}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && <p role="status" className="text-sm text-[var(--primary)]">Thanks — your registration was sent to the InnoExpo GL team.</p>}
        {status === "error" && <p role="alert" className="text-sm text-red-700">We couldn’t send your registration. Please try again or email <a className="underline" href={`mailto:${FORM_RECIPIENT}`}>{FORM_RECIPIENT}</a>.</p>}
      </div>
      <p className="text-sm text-[var(--muted)]">Or email us at <a className="font-semibold text-[var(--primary)] underline" href={`mailto:${FORM_RECIPIENT}`}>{FORM_RECIPIENT}</a>.</p>
    </form>
  );
}

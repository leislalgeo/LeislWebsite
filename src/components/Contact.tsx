"use client";

import { Reveal } from "@/components/Reveal";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

function encodeForm(formData: FormData) {
  const params = new URLSearchParams();
  formData.forEach((value, key) => params.append(key, value.toString()));
  return params.toString();
}

const fieldClass =
  "border-0 border-b border-on-dark/25 bg-transparent px-0.5 py-[9px] text-[17px] text-on-dark outline-none transition-colors duration-200 placeholder:text-on-dark/40 focus:border-accent";

export function Contact() {
  const { ref } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(new FormData(form)),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-near-black bg-dot-dark text-on-dark"
    >
      <div className="mx-auto flex max-w-[1320px] flex-wrap gap-[clamp(40px,6vw,90px)] px-[clamp(20px,5vw,64px)] py-[clamp(80px,11vw,150px)]">
        <Reveal as="div" className="flex-[1.1_1_380px] min-w-[340px]">
          <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
            Let&apos;s talk
          </div>
          <h2 className="font-display text-[clamp(34px,5.2vw,68px)] font-extrabold leading-none tracking-[-0.025em]">
            The first step is a conversation.
          </h2>
          <p className="mt-[26px] max-w-[44ch] font-body text-[clamp(16px,1.7vw,18.5px)] font-normal leading-[1.65] text-on-dark-muted">
            If you think there might be a fit — a real problem, an honest
            team, a mostly-blank page — tell me what you&apos;re building.
          </p>
          <div className="mt-[clamp(32px,4vw,44px)]">
            <a
              href="mailto:leisl.algeo@gmail.com"
              className="border-b-2 border-accent pb-[3px] font-display text-[clamp(19px,2.2vw,26px)] font-semibold text-on-dark transition-colors duration-200 hover:text-accent"
            >
              leisl.algeo@gmail.com
            </a>
          </div>
        </Reveal>

        <div
          ref={ref}
          className="flex flex-[1_1_340px] min-w-[320px] flex-col self-start"
        >
          {status === "success" ? (
            <div className="rounded-md border border-on-dark/[0.12] bg-white/[0.03] px-6 py-8">
              <p className="font-display text-[22px] font-semibold text-on-dark">
                Thanks — got it.
              </p>
              <p className="mt-2 font-body text-[15.5px] leading-[1.6] text-on-dark-muted">
                I&apos;ll read what you sent and get back to you soon.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-[22px]"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label className="flex flex-col gap-[9px]">
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-on-dark-muted">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="Jane Founder"
                  required
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-[9px]">
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-on-dark-muted">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-[9px]">
                <span className="text-[12.5px] font-semibold uppercase tracking-[0.1em] text-on-dark-muted">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="A sentence or two is plenty."
                  required
                  className={`${fieldClass} resize-y`}
                />
              </label>
              {status === "error" && (
                <p className="text-[14px] text-[#e0a99c]">
                  Something went wrong sending that — mind trying again?
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1.5 inline-flex w-fit items-center gap-[11px] rounded-full bg-accent px-[30px] py-[15px] text-[16px] font-semibold text-warm-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "submitting" ? "Sending…" : "Send it over"}{" "}
                <span aria-hidden className="text-[17px]">→</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-on-dark/[0.12]">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-[clamp(20px,5vw,64px)] py-8">
          <div className="font-display text-base font-bold text-on-dark">
            Leisl Algeo{" "}
            <span className="font-normal text-muted-3">
              — Builder. Founder. Operator.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[13.5px] text-on-dark-muted">
            <span>Cape Town, South Africa</span>
            <span className="h-[3px] w-[3px] rounded-full bg-muted-3" />
            <a
              href="mailto:leisl.algeo@gmail.com"
              className="text-on-dark-muted transition-colors duration-200 hover:text-on-dark"
            >
              leisl.algeo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

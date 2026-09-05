"use client"

import React, { useState } from "react"
import { useSound } from "@/lib/sound-context"
import { Mail, Github, Linkedin, Copy, Check, Send, Phone, ArrowUpRight } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { playHoverTick, playSuccessChime } = useSound()

  const copyEmail = () => {
    navigator.clipboard.writeText("adarshraghuwanshi072@gmail.com")
    setCopied(true)
    playSuccessChime()
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    playSuccessChime()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative px-4 sm:px-8 lg:px-12 py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Outreach Console */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1 w-fit">
              <Mail className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-[10px] font-semibold tracking-wider text-cyan-300 uppercase">
                INITIATE CONTACT
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Let&apos;s Build Systems That Matter.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
              Whether you have an enterprise integration to architect, high-concurrency systems to scale, or an impactful engineering role to fill — my inbox is open.
            </p>

            {/* Quick 1-Click Copy Email Console */}
            <div className="rounded-2xl border border-cyan-500/25 bg-[#090d18]/90 p-5 backdrop-blur-2xl">
              <span className="font-mono text-[11px] text-cyan-400/80 uppercase tracking-wider">
                Direct Electronic Mail
              </span>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm font-semibold text-white truncate">
                  adarshraghuwanshi072@gmail.com
                </span>
                <button
                  onClick={copyEmail}
                  onMouseEnter={() => playHoverTick()}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 px-3 py-1.5 font-mono text-xs font-medium text-cyan-200 transition-all hover:border-cyan-400 hover:bg-cyan-900/50 hover:text-white w-fit cursor-pointer"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-cyan-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/adarsh-raghuwanshi072/"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => playHoverTick()}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-cyan-500/35 hover:bg-cyan-950/20"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-white group-hover:text-cyan-200 transition-colors">LinkedIn</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
              </a>

              <a
                href="https://github.com/trailblazer072"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => playHoverTick()}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-cyan-500/35 hover:bg-cyan-950/20"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-white group-hover:text-cyan-200 transition-colors">GitHub</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
              </a>

              <a
                href="tel:+918823008688"
                onMouseEnter={() => playHoverTick()}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-cyan-500/35 hover:bg-cyan-950/20"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-white group-hover:text-cyan-200 transition-colors">+91-8823008688</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
              </a>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="font-mono text-xs text-zinc-400">Location</span>
                <span className="font-mono text-xs font-semibold text-white">Indore, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Encrypted Message Transmission Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-cyan-500/25 bg-[#090d18]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-3xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  TRANSMIT MESSAGE
                </span>
                <span className="font-mono text-[10px] text-cyan-400/80">
                  PROTOCOL: HTTPS_SECURE
                </span>
              </div>

              <div>
                <label htmlFor="contact-name" className="block font-mono text-xs text-zinc-300 mb-2">
                  NAME / ORGANIZATION
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Satya Nadella / YC Founder"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-xs text-zinc-300 mb-2">
                  RETURN ELECTRONIC MAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="contact@company.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs text-zinc-300 mb-2">
                  PROJECT SPECIFICATION OR MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your distributed pipeline, product idea, or opportunity..."
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-xs text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => playHoverTick()}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 py-3.5 font-mono text-xs font-bold text-black shadow-[0_0_22px_rgba(0,242,254,0.35)] transition-all hover:shadow-[0_0_32px_rgba(0,242,254,0.5)] active:scale-98 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4 text-black" />
                    <span>TRANSMISSION CONFIRMED!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span>TRANSMIT DISPATCH</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

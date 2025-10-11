"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Magnetic from "./magnetic"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type React from "react"

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // You can wire this to a route action/API later.
    console.log("[v0] contact form submitted")
  }

  return (
    <section id="contact" className="px-6 md:px-10 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl border border-(--color-border) bg-(--color-card)/30 backdrop-blur-xl p-6 gap-5 flex flex-col">
          <p className="text-2xl md:text-3xl ">{"Let’s create something impactful together."}</p>
          <div className="mt-6 flex items-center gap-4">
            <Magnetic>
              <a
                className="glow-hover inline-flex items-center gap-2 p-2 rounded-full border border-(--color-border)"
                href="adarshraghuwanshi072@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="glow-hover inline-flex items-center gap-2 p-2 rounded-full border border-(--color-border)"
                href="https://github.com/trailblazer072"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="glow-hover inline-flex items-center gap-2 p-2 rounded-full border border-(--color-border)"
                href="https://www.linkedin.com/in/adarsh-raghuwanshi072/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </Magnetic>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-(--color-border) bg-(--color-card)/30 backdrop-blur-xl p-6 space-y-4"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" className="mt-2" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-2" required />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="How can I help?" className="mt-2 min-h-28" required />
          </div>
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}

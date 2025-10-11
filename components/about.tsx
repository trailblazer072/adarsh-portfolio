"use client";

import React from "react";
import { ensureGsap } from "@/lib/animations";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "SQL",
  "C++",
  "Python",
];

export default function About() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    if (!ref.current) return;

    const el = ref.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
    tl.fromTo(
      el.querySelector(".about-line"),
      { x: -24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      el.querySelector(".divider-line"),
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
    return () => {
      ScrollTrigger.getAll().forEach((s) => s.refresh());
    };
  }, []);

  return (
    <section id="about" className="px-6 md:px-10 lg:px-16 py-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="about-line text-2xl md:text-3xl font-medium">
          About Me
        </h2>
        <div className="divider-line mt-4 h-px bg-(--color-border) origin-left" />

        <div className="mt-8 rounded-2xl  border-(--color-border) border bg-(--color-card)/30 backdrop-blur-xl p-6 card-pattern-noise card-outline-subtle">
          <p className="text-muted-foreground leading-relaxed">
            Entrepreneurial Computer Science undergrad who’s built and scaled
            real products blending full-stack development, product strategy, and
            execution to turn ideas into production-grade systems.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-(--color-border) bg-(--color-card)/40 backdrop-blur-xl p-4  card-pattern-grid">
              <h3 className="text-base md:text-lg font-medium">Education</h3>
              <ul className="mt-2 text-sm md:text-base text-muted-foreground space-y-1">
                <li>B.Tech Computer Science, From a not so good college :)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-(--color-border) bg-(--color-card)/40 backdrop-blur-xl p-4 card-pattern-grid">
              <h3 className="text-base md:text-lg font-medium">Interests</h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                Gen-AI, LLMs, DevOps, Automation, and building scalable SaaS products
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-base md:text-lg font-medium">Core Skills</h3>
            <div ref={ref} className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span key={s} className="skill-pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

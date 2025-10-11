"use client";

type Item = {
  title: string;
  subtitle?: string;
  points?: string[];
};

const items: Item[] = [
  {
    title: "Beiyo : Co-Founder & CMO",
    subtitle: "2023-2025",
    points: [
      "• Built and scaled a D2C brand to a $1M valuation in its first year.",
      "• Ledmarketing, business development, and product strategy at Beiyo.",
    ],
  },
  {
    title: "Freelancing : Full‑stack & Design",
    subtitle: "2024-2025",
    points: [
      "• Developed and maintained web applications using React, Node.js, and MongoDB.",
      "• Implemented RESTful APIs.",
      "• Collaborated with design and product teams to deliver high-quality features.",
    ],
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="px-6 md:px-10 lg:px-16 py-20 text-foreground"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 md:mb-10">
          <h2
            id="experience-title"
            className="text-2xl md:text-3xl font-medium text-pretty"
          >
            Work Experience
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">
            Roadmap of roles and responsibilities
          </p>
        </div>

        {/* Roadmap vertical line */}
        <div className="relative">
          <div
            className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-(--color-border)/40"
            aria-hidden
          />

          <ul className="space-y-6 md:space-y-8">
            {items.map((item, i) => (
              <li key={i} className="relative pl-14 md:pl-16">
                {/* Step marker */}
                <div
                  className="absolute left-2.5 md:left-3.5 top-4 h-6 w-6 md:h-7 md:w-7 rounded-full bg-foreground ring-2 ring-(--color-border)/40"
                  aria-hidden
                />

                <div className="glow-hover rounded-2xl border border-(--color-border)/50 bg-(--color-card)/60 backdrop-blur-xl p-6 shadow-lg md:p-8">
                  <h3 className="text-lg font-medium md:text-2xl">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="mt-2 text-muted-foreground">
                      {item.subtitle}
                    </p>
                  )}

                  {item.points && (
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

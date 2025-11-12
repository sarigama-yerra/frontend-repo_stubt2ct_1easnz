import { CheckCircle2 } from "lucide-react";

const tracks = [
  {
    name: "AI Foundations",
    audience: "All employees",
    bullets: ["Prompting essentials", "Safety & compliance", "Everyday copilots"],
  },
  {
    name: "Ops & Support",
    audience: "Service teams",
    bullets: ["Agent handoffs", "Knowledge grounding", "QA & evals"],
  },
  {
    name: "Sales & Marketing",
    audience: "Go-to-market",
    bullets: ["Cadence automation", "Content generation", "CRM assistants"],
  },
  {
    name: "Engineering & Data",
    audience: "Builders",
    bullets: ["Code copilots", "RAG pipelines", "Observability"],
  },
];

export default function Training() {
  return (
    <section id="training" className="relative bg-[#0b0614] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">AI training designed for enterprises</h2>
          <p className="mt-3 text-white/70">Role-based academies with hands-on sandboxes, certifications, and ROI tracking.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {tracks.map((t) => (
            <div key={t.name} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span className="text-sm text-white/70">{t.audience}</span>
              </div>
              <ul className="mt-4 grid gap-2">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600">
            Build your academy
          </a>
        </div>
      </div>
    </section>
  );
}

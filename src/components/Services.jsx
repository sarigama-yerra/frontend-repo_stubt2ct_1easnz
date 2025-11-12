import { Bot, CircuitBoard, GraduationCap, Workflow, ShieldCheck, BrainCircuit } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "AI Training & Upskilling",
    desc: "Role-based academies and hands-on sandboxes that turn employees into AI-native operators.",
    highlights: ["Curricula for all functions", "Sandbox labs", "Certifications"]
  },
  {
    icon: Bot,
    title: "Agentic Automations",
    desc: "Multi-step agents that plan, reason, and execute across your stack with human-in-the-loop.",
    highlights: ["Planning + Tools + Memory", "Approvals & audit", "Secure by design"]
  },
  {
    icon: CircuitBoard,
    title: "Platform & Integrations",
    desc: "Connect to CRMs, docs, data warehouses and comms tools. Ship value fast with our prebuilt adapters.",
    highlights: ["Salesforce, Slack, GSuite", "Snowflake/BigQuery", "RAG & vector search"]
  },
  {
    icon: BrainCircuit,
    title: "Model Strategy",
    desc: "Model selection, evals, cost control and observability to keep quality high as usage grows.",
    highlights: ["Eval suites", "Guardrails", "FinOps"]
  },
  {
    icon: Workflow,
    title: "Change Management",
    desc: "Adoption playbooks, enablement content, and measurement frameworks for sustainable outcomes.",
    highlights: ["Champions program", "Comms kits", "ROI dashboards"]
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Data governance, access control and audit trails aligned with enterprise requirements.",
    highlights: ["PII redaction", "SSO/SCIM", "SOC2-ready"]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b0614] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">What we deliver</h2>
          <p className="mt-3 text-white/70">End-to-end expertise to move from idea to impact across your organization.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, highlights }) => (
            <div key={title} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
              <ul className="mt-4 grid gap-1 text-sm text-white/80 list-disc list-inside">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

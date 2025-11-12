import { Play, Sparkles } from "lucide-react";

export default function ToolPeek() {
  return (
    <section id="tool" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
              <Sparkles className="h-3.5 w-3.5" /> Sneak peek
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">Your AI control center</h2>
            <p className="mt-3 text-slate-600">Design workflows, assign tools, review runs and measure ROI in one place. Built for enterprise scale with role-based access.</p>
            <div className="mt-6 flex gap-3">
              <a href="#demo" className="px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600">Get a walkthrough</a>
              <a href="#pricing" className="px-5 py-2.5 rounded-full text-slate-700 bg-slate-100 hover:bg-slate-200">See pricing</a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-fuchsia-400/10 to-indigo-500/20 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1974&auto=format&fit=crop"
              alt="Product preview"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-slate-900 text-sm">
              <Play className="h-4 w-4" /> Watch 60s demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 flex items-center justify-center overflow-hidden bg-[#0a0612]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25)_0%,rgba(10,6,18,0.2)_40%,rgba(10,6,18,1)_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur">
          Premium AI Tools & Agentic AI Services
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-violet-100 to-purple-200">
          Accelerate your enterprise with VectorSense
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          We design, deploy and scale production-grade AI agents. From workflow automation to AI-powered training and upskilling, elevate your teams with measurable impact.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#demo" className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 shadow-lg shadow-purple-600/30">
            Book a demo
          </a>
          <a href="#tool" className="px-6 py-3 rounded-full font-medium text-white/90 bg-white/10 hover:bg-white/15 border border-white/20">
            Explore the tools
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          {[
            ['99.9% uptime', 'Enterprise-ready SLAs'],
            ['SOC2-ready', 'Compliance built in'],
            ['<30 days', 'To value in production'],
            ['Global', 'Multi-cloud deployments'],
          ].map(([title, subtitle]) => (
            <div key={title} className="rounded-2xl p-4 bg-white/5 border border-white/10">
              <p className="text-sm text-white/70">{subtitle}</p>
              <p className="mt-1 text-white font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Footer(){
  return (
    <footer id="contact" className="bg-[#0b0614] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-blue-500" />
            <span className="text-xl font-semibold tracking-tight text-white">VectorSense</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md">Premium AI tools and agentic services for enterprises. Built with security, scale and measurable ROI.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#training" className="hover:text-white">Training</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-3 grid gap-2 text-sm">
            <li><a href="#demo" className="hover:text-white">Book a demo</a></li>
            <li><a href="mailto:hello@vectorsense.ai" className="hover:text-white">hello@vectorsense.ai</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-white/50 flex items-center justify-between">
          <p>© {new Date().getFullYear()} VectorSense. All rights reserved.</p>
          <p>Security • Privacy • Terms</p>
        </div>
      </div>
    </footer>
  )
}

export default function Logos() {
  const logos = [
    'Acme Co', 'Skyline', 'NovaWare', 'HyperGrid', 'OmniLabs', 'Pulse AI'
  ]
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest">Trusted by modern teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {logos.map((name) => (
            <div key={name} className="text-center text-slate-400 text-sm">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start small, scale as you grow. Custom enterprise plans available.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$999/mo', features: ['Up to 100 users', '1 agent workflow', 'Email support']
          },{
            name: 'Growth', price: '$3,999/mo', features: ['Up to 500 users', '5 agent workflows', 'SAML SSO']
          },{
            name: 'Enterprise', price: 'Talk to us', features: ['Unlimited users', 'Custom agents', 'Dedicated CSM']
          }].map(t => (
            <div key={t.name} className="rounded-2xl p-6 ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold">{t.price}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#demo" className="mt-6 inline-block w-full text-center rounded-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

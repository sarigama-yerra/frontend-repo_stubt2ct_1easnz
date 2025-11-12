import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import ToolPeek from './components/ToolPeek'
import Training from './components/Training'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <ToolPeek />
      <Training />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App

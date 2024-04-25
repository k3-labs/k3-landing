import About from '@/components/About'
import Contact from '@/components/Contact'
import Deploy from '@/components/Deploy/Deploy'
import Design from '@/components/Design'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <main className="bg-transparent flex min-h-screen w-[(100vh-12px)]  flex-col items-center gap-y-32  ">
      <Navigation />
      <Hero />
      <Deploy />
      <About />
      <Design />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

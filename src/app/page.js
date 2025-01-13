import About from '@/components/About'
import Connect from '@/components/Connect'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Investors from '@/components/Investors'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="  bg-transparent text-black  max-w-[1390px] min-h-screen w-full  mx-auto xl:border-x border-x-whiteStroke">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Investors />
      <Connect />
      {/* <Design />
      <Deploy />
      
      
      <Contact /> */}
      <Footer />
    </main>
  )
}

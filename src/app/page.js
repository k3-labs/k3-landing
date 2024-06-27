import About from '@/components/About'
import Contact from '@/components/Contact'
import Deploy from '@/components/Deploy/Deploy'
import Design from '@/components/Design'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Investors from '@/components/Investors'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className=" overflow-x-hidden bg-transparent text-white  flex min-h-screen w-full md:w-[calc(100vw-12px]  flex-col items-center gap-y-16 md:gap-y-32 md:px-20  ">
      <Navigation />
      <Hero />
      <Deploy />
      <About />
      <Design />
      <Investors />
      <Contact />
      <Footer />
    </main>
  )
}

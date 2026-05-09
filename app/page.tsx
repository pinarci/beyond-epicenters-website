import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Consortium from '@/components/Consortium'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar variant="overlay" />
      <main>
        <Hero />
        <About />
        <Consortium />
        <Footer />
      </main>
    </>
  )
}

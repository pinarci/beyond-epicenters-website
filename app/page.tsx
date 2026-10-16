import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Consortium from '@/components/Consortium'
import Footer from '@/components/Footer'
import MoulayBrahimUpdate from '@/components/MoulayBrahimUpdate'

export default function Home() {
  return (
    <>
      <Navbar variant="overlay" />
      <main>
        <Hero />
        <About />
        <MoulayBrahimUpdate compact />
        <Consortium />
        <Footer />
      </main>
    </>
  )
}

'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-navy">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/heropicture(main%20pic).jpeg"
          alt="Beyond Epicenters hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-blue/90 via-slate-navy/75 to-eu-dark-blue/45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(33,211,213,0.22),transparent_35%),radial-gradient(circle_at_35%_70%,rgba(109,72,216,0.16),transparent_32%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <span className="inline-block px-4 py-2 bg-logo-aqua/15 border border-logo-aqua/40 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            Horizon Europe MSCA
          </span>
          <span className="inline-block px-4 py-2 bg-logo-purple/20 border border-logo-purple/50 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            Grant No. 101296660
          </span>
          <span className="inline-block px-4 py-2 bg-logo-sky/15 border border-logo-sky/45 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            48-Month Project
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Beyond Epicenters
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Assessing Earthquake Vulnerability Through Economic and Social Networks
        </p>

        <p className="text-lg text-gray-300 mb-12 italic max-w-4xl mx-auto">
          Transforming disaster risk assessment by addressing interconnected
          economic, social, and infrastructural impacts of disasters.
        </p>

        <button
          onClick={scrollToAbout}
          className="inline-block px-8 py-4 bg-gradient-to-r from-eu-blue to-logo-purple hover:from-logo-aqua hover:to-eu-dark-blue text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Discover the Project
        </button>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce rounded-full p-2 text-white transition-colors hover:text-logo-aqua focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-aqua"
      >
        <ChevronDown className="w-8 h-8" aria-hidden="true" />
      </button>
    </section>
  )
}

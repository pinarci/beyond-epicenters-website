'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/heropicture(main%20pic).jpeg"
          alt="Beyond Epicenters Hero Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-navy/80 via-slate-navy/60 to-slate-navy/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <span className="inline-block px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            🇪🇺 Funded by Horizon Europe (MSCA)
          </span>
          <span className="inline-block px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 text-white rounded-full text-sm font-medium backdrop-blur-sm">
            ⏱️ 48-Month Project
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Beyond Epicenters
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Assessing Earthquake Vulnerability Through Economic and Social Networks
        </p>

        {/* Tagline */}
        <p className="text-lg text-gray-300 mb-12 italic">
          A Holistic and Systemic Approach to Disaster Risk
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="inline-block px-8 py-4 bg-eu-blue hover:bg-eu-dark-blue text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Discover the Project
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}

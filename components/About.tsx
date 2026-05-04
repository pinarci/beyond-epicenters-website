'use client'

import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            The Vision
          </h2>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        {/* Content with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-navy mb-6">
              About the Project
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond Epicenters: Assessing Earthquake Vulnerability Through Economic and Social Networks is a 48-month project funded by the European Union&apos;s Horizon Europe MSCA program. Coordinated by TED University&apos;s Sustainable Trade Research Center (TEDUsTRC), the project aims to analyze the cascading effects of disasters like earthquakes and tsunamis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We go beyond assessing physical damage by focusing on the complex interdependencies across economic, social, and infrastructural networks. Through case studies from Turkey, Morocco, and Portugal, we aim to provide concrete, strategic models for policymakers.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-eu-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-navy mb-1">Systemic Analysis</h4>
                  <p className="text-gray-600">Understanding cascading effects across interconnected networks</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-eu-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-navy mb-1">Regional Case Studies</h4>
                  <p className="text-gray-600">In-depth analysis from Turkey, Morocco, and Portugal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-eu-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-navy mb-1">Policy Impact</h4>
                  <p className="text-gray-600">Concrete, strategic models for policymakers and decision-makers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/horizoneuropegrantawardedbeyondepicenters.jpeg"
              alt="Horizon Europe Grant Awarded Project"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

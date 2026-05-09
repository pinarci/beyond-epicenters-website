'use client'

import { useState } from 'react'

interface Partner {
  name: string
  abbreviation: string
  role: string
  country: string
  pic: string
  description: string
}

const partners: Partner[] = [
  {
    name: 'TED University',
    abbreviation: 'TEDU',
    role: 'Coordinator',
    country: 'Turkiye',
    pic: '954235658',
    description: 'Project coordination and strategic leadership.',
  },
  {
    name: 'Abdullah Gul University',
    abbreviation: 'AGU',
    role: 'Partner',
    country: 'Turkiye',
    pic: '947519960',
    description: 'Research partner contributing to disaster risk and resilience analysis.',
  },
  {
    name: 'COFAC Cooperativa de Formacao e Animacao Cultural CRL',
    abbreviation: 'ULusofona',
    role: 'Partner',
    country: 'Portugal',
    pic: '997605425',
    description: 'Partner contributing to regional applications and tsunami risk assessment.',
  },
  {
    name: 'University of Hamburg',
    abbreviation: 'UHAM',
    role: 'Partner',
    country: 'Germany',
    pic: '999905101',
    description: 'Research partner supporting advanced modelling and systemic risk analysis.',
  },
  {
    name: 'Universitetet i Bergen',
    abbreviation: 'UiB',
    role: 'Partner',
    country: 'Norway',
    pic: '999974456',
    description: 'Partner contributing expertise in resilience planning and disaster research.',
  },
  {
    name: 'Limited Liability Company ECOMM CO',
    abbreviation: 'ECOMM',
    role: 'Partner',
    country: 'Ukraine',
    pic: '909149379',
    description: 'Technology partner supporting data and implementation activities.',
  },
  {
    name: 'Quantag IT Solutions GmbH',
    abbreviation: 'QUANTAG',
    role: 'Partner',
    country: 'Germany',
    pic: '902572294',
    description: 'SME partner contributing software, analytics, and digital solution development.',
  },
  {
    name: 'SETM Limited Liability Company',
    abbreviation: 'SETM',
    role: 'Partner',
    country: 'Azerbaijan',
    pic: '883928409',
    description: 'SME partner contributing regional and technical implementation expertise.',
  },
  {
    name: 'Universite Cadi Ayyad',
    abbreviation: 'UCAM',
    role: 'Partner',
    country: 'Morocco',
    pic: '998639930',
    description: 'Partner supporting methodology validation through seismic risk applications.',
  },
]

export default function Consortium() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="consortium-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            The Consortium & Global Network
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Universities and SMEs from Portugal, Germany, Norway, Turkiye,
            Ukraine, Morocco, and Azerbaijan
          </p>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.pic}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-xl p-6 transition-all duration-300 cursor-pointer transform ${
                index === 0
                  ? 'md:col-span-2 bg-gradient-to-br from-eu-blue via-eu-blue to-eu-dark-blue text-white'
                  : 'bg-white border border-gray-200 hover:border-eu-blue text-slate-navy'
              } ${
                hoveredId === index
                  ? 'shadow-2xl scale-105'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {index !== 0 && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-eu-blue/5 rounded-full -mr-10 -mt-10"></div>
              )}

              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className={`text-sm font-bold ${index === 0 ? 'text-blue-100' : 'text-eu-blue'}`}>
                    {partner.abbreviation}
                  </p>
                  <p className={`text-xs mt-1 ${index === 0 ? 'text-blue-100' : 'text-gray-500'}`}>
                    PIC {partner.pic}
                  </p>
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  index === 0
                    ? 'bg-blue-200 text-eu-dark-blue'
                    : 'bg-eu-blue/10 text-eu-blue'
                }`}>
                  {partner.role}
                </span>
              </div>

              <h3 className={`text-lg font-bold mb-3 ${index === 0 ? 'text-white' : 'text-slate-navy'}`}>
                {partner.name}
              </h3>

              <p className={`text-sm mb-4 ${index === 0 ? 'text-blue-100' : 'text-gray-600'}`}>
                {partner.country}
              </p>

              <div className={`transition-all duration-300 overflow-hidden ${
                hoveredId === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className={`text-xs leading-relaxed pt-4 border-t ${
                  index === 0 ? 'border-blue-200 text-blue-50' : 'border-gray-200 text-gray-700'
                }`}>
                  {partner.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">48</div>
            <p className="text-gray-700 font-medium">Months Duration</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">9</div>
            <p className="text-gray-700 font-medium">Partner Organisations</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">7</div>
            <p className="text-gray-700 font-medium">Countries</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">3</div>
            <p className="text-gray-700 font-medium">Validation Regions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

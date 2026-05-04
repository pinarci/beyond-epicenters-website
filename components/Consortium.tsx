'use client'

import React, { useState } from 'react'

interface Partner {
  name: string
  abbreviation: string
  role: string
  country: string
  flag: string
  city: string
  description: string
}

export default function Consortium() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const partners: Partner[] = [
    {
      name: 'TED University',
      abbreviation: 'TEDU',
      role: 'Coordinator',
      country: 'Turkey',
      flag: '🇹🇷',
      city: 'Ankara',
      description: 'Project leadership and strategic coordination. Center for sustainable trade research and innovation.',
    },
    {
      name: 'Abdullah Gül University',
      abbreviation: 'AGU',
      role: 'Partner',
      country: 'Turkey',
      flag: '🇹🇷',
      city: 'Kayseri',
      description: 'Research partner focusing on economic impact assessment and network analysis.',
    },
    {
      name: 'Universidade Lusófona',
      abbreviation: 'COFAC',
      role: 'Partner',
      country: 'Portugal',
      flag: '🇵🇹',
      city: 'Lisbon',
      description: 'Case study coordination for Portugal. Cultural and economic network research.',
    },
    {
      name: 'University of Hamburg',
      abbreviation: 'UHAM',
      role: 'Partner',
      country: 'Germany',
      flag: '🇩🇪',
      city: 'Hamburg',
      description: 'Advanced modeling and simulation. Infrastructure vulnerability analysis.',
    },
    {
      name: 'University of Bergen',
      abbreviation: 'UIB',
      role: 'Partner',
      country: 'Norway',
      flag: '🇳🇴',
      city: 'Bergen',
      description: 'Risk assessment methodologies. Disaster resilience research and development.',
    },
    {
      name: 'ECOMM IT Solutions',
      abbreviation: 'ECOMM',
      role: 'Partner',
      country: 'Ukraine',
      flag: '🇺🇦',
      city: 'Kyiv',
      description: 'Technology implementation and data management solutions.',
    },
    {
      name: 'Quantag IT Solutions',
      abbreviation: 'QIS',
      role: 'Partner',
      country: 'Germany',
      flag: '🇩🇪',
      city: 'Munich',
      description: 'Advanced analytics and software development for risk modeling.',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            The Consortium & Global Network
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Partners from across Europe and beyond
          </p>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-xl p-6 transition-all duration-300 cursor-pointer transform ${
                index === 0
                  ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-eu-blue via-eu-blue to-eu-dark-blue text-white'
                  : 'bg-white border border-gray-200 hover:border-eu-blue text-slate-navy'
              } ${
                hoveredId === index
                  ? 'shadow-2xl scale-105'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Background accent */}
              {index !== 0 && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-eu-blue/5 rounded-full -mr-10 -mt-10"></div>
              )}

              {/* Header with flag and role */}
              <div className="flex items-start justify-between mb-4">
                <span className={`text-5xl ${index === 0 ? 'opacity-100' : 'opacity-100'}`}>
                  {partner.flag}
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  index === 0
                    ? 'bg-blue-200 text-eu-dark-blue'
                    : 'bg-eu-blue/10 text-eu-blue'
                }`}>
                  {partner.role}
                </span>
              </div>

              {/* Institution Name */}
              <h3 className={`text-lg font-bold mb-1 ${index === 0 ? 'text-white' : 'text-slate-navy'}`}>
                {partner.name}
              </h3>

              {/* Abbreviation */}
              <p className={`text-sm font-bold mb-3 ${index === 0 ? 'text-blue-100' : 'text-eu-blue'}`}>
                {partner.abbreviation}
              </p>

              {/* Location */}
              <p className={`text-xs mb-4 ${index === 0 ? 'text-blue-100' : 'text-gray-600'}`}>
                📍 {partner.city} • {partner.country}
              </p>

              {/* Description - shows on hover */}
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

        {/* Key Facts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">48</div>
            <p className="text-gray-700 font-medium">Months Duration</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">7</div>
            <p className="text-gray-700 font-medium">Partner Institutions</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">6</div>
            <p className="text-gray-700 font-medium">Countries</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-eu-blue mb-2">3</div>
            <p className="text-gray-700 font-medium">Case Study Regions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

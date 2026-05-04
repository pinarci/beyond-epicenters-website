'use client'

import React from 'react'
import Image from 'next/image'

interface TeamMember {
  id: string
  name: string
  title: string
  role: string
  bio: string
  image: string
}

export default function Team() {
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Prof. Dr. Nazire Nergiz Dinçer',
      title: 'Project Coordinator',
      role: 'Principal Investigator',
      bio: 'TEDUsTAM Deputy Director, leading the consortium in earthquake vulnerability assessment and disaster risk reduction.',
      image: '/images/nazirenergizdinçer_3.jpg..webp',
    },
    {
      id: '2',
      name: 'Prof. Dr. Ayça Tekin-Koru',
      title: 'Senior Researcher',
      role: 'TEDUsTAM Director',
      bio: 'Directing research initiatives and providing strategic oversight for the project\'s academic and research components.',
      image: '/images/ayçatekinkoru.jpeg',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Guiding the research with expertise and vision
          </p>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {team.map((member) => (
            <div
              key={member.id}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-gray-200 hover:border-eu-blue flex flex-col items-center pt-8"
            >
              {/* Image */}
              <div className="relative w-40 h-52 overflow-hidden bg-gradient-to-br from-eu-blue/10 to-slate-navy/10 rounded-lg mb-4">
                {member.image && member.image !== '' ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={208}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-3xl font-bold text-gray-300 opacity-50">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-8 pb-8 text-center">
                <h3 className="text-xl font-bold text-slate-navy mb-3">
                  {member.name}
                </h3>
                <div className="flex gap-2 mb-4 justify-center flex-wrap">
                  <span className="inline-block px-3 py-1 bg-eu-blue/10 text-eu-blue rounded-full text-xs font-semibold">
                    {member.title}
                  </span>
                  <span className="inline-block px-3 py-1 bg-slate-navy/10 text-slate-navy rounded-full text-xs font-semibold">
                    {member.role}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-slate-navy mb-4">
            About the Team
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our leadership team brings together decades of combined expertise in disaster risk reduction, economic modeling, and network analysis. Based at TED University's TEDUsTAM research center, we are committed to advancing innovative approaches to understanding and mitigating earthquake vulnerability across interconnected systems.
          </p>
        </div>
      </div>
    </section>
  )
}

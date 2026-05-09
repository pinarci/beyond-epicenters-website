'use client'

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
      name: 'Prof. Dr. Nazire Nergiz Dincer',
      title: 'Project Coordinator',
      role: 'Principal Investigator',
      bio: 'TEDUsTAM Deputy Director, leading the consortium in earthquake vulnerability assessment and disaster risk reduction.',
      image: '/images/nazire-nergiz-dincer.webp',
    },
    {
      id: '2',
      name: 'Prof. Dr. Ayca Tekin-Koru',
      title: 'Senior Researcher',
      role: 'TEDUsTAM Director',
      bio: "Directing research initiatives and providing strategic oversight for the project's academic and research components.",
      image: '/images/ayca-tekin-koru.jpeg',
    },
  ]

  return (
    <section id="team-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-slate-navy/70 mb-4">
            Guiding the research with expertise and vision
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-logo-aqua to-logo-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {team.map((member) => (
            <div
              key={member.id}
              className="group rounded-lg overflow-hidden shadow-lg shadow-logo-sky/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-logo-sky/40 hover:border-logo-aqua flex flex-col items-center pt-8"
            >
              <div className="relative w-40 h-52 overflow-hidden bg-gradient-to-br from-logo-aqua/10 via-logo-sky/25 to-logo-purple/10 rounded-lg mb-4 ring-1 ring-logo-sky/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={208}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="px-8 pb-8 text-center">
                <h3 className="text-xl font-bold text-slate-navy mb-3">
                  {member.name}
                </h3>
                <div className="flex gap-2 mb-4 justify-center flex-wrap">
                  <span className="inline-block px-3 py-1 bg-logo-aqua/15 text-eu-dark-blue rounded-full text-xs font-semibold">
                    {member.title}
                  </span>
                  <span className="inline-block px-3 py-1 bg-logo-purple/10 text-logo-purple rounded-full text-xs font-semibold">
                    {member.role}
                  </span>
                </div>
                <p className="text-slate-navy/75 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ice-blue rounded-lg p-8 border border-logo-sky/40 shadow-lg shadow-logo-sky/10">
          <h3 className="text-2xl font-bold text-slate-navy mb-4">
            About the Team
          </h3>
          <p className="text-slate-navy/75 leading-relaxed">
            Our leadership team brings together expertise in disaster risk
            reduction, economic modelling, and network analysis. Based at TED
            University&apos;s research ecosystem, the team advances innovative
            approaches to understanding and mitigating earthquake vulnerability
            across interconnected systems.
          </p>
        </div>
      </div>
    </section>
  )
}

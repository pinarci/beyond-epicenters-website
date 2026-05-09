import Image from 'next/image'
import { FileText, ImageIcon, Share2 } from 'lucide-react'

const mediaItems = [
  {
    title: 'Project Announcement',
    image: '/images/horizoneuropegrantawardedbeyondepicenters.jpeg',
    alt: 'Horizon Europe Grant Awarded Beyond Epicenters visual',
  },
  {
    title: 'Coordination Update',
    image: '/images/tedustrccoordinates.jpeg',
    alt: 'TEDUsTRC coordinates Beyond Epicenters visual',
  },
  {
    title: 'Aim & Team',
    image: '/images/aim%26team.jpeg',
    alt: 'Beyond Epicenters aim and team visual',
  },
]

export default function Media() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Media
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Project visuals, meeting materials, and communication updates
          </p>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-3">
              Kick-Off Meeting Agenda
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The kick-off agenda will be available here as a downloadable PDF
              once the final file is placed in the website assets.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center mb-6">
              <ImageIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-3">
              Photo Gallery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Photos from meetings, fieldwork, stakeholder events, and project
              activities will be collected on this page.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-3">
              Social Media
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Social media channels and dissemination updates will be added as
              the project communication plan is launched.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <article
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-navy">
                  {item.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

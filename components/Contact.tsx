import { Mail, MapPin, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Contacts
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Get in touch with the Beyond Epicenters coordination team
          </p>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-4">
              Coordination
            </h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p className="font-semibold text-slate-navy">TED University</p>
              <p>Sustainable Trade Research Center</p>
              <p>Ankara, Turkiye</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-4">
              Email
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For project information, dissemination activities, or consortium
              enquiries, contact the coordination team by email.
            </p>
            <a
              href="mailto:beyondepicenters@gmail.com"
              className="inline-block px-6 py-3 bg-eu-blue hover:bg-eu-dark-blue text-white font-semibold rounded-lg transition-colors"
            >
              beyondepicenters@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-4">
              Project Enquiries
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The contact page will support requests about project information,
              partnership, dissemination, and media communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

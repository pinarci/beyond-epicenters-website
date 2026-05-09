import { Building2, ExternalLink, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const mapQuery = 'TED University, Ziya Gokalp Cd. 48/A, 06420 Cankaya, Ankara, Turkiye'
const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.790364278317!2d32.859381801554065!3d39.92370734329771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e53cc243af7%3A0xafa8419945f5d098!2sTED%20Universitesi!5e0!3m2!1sen!2str!4v1638345179235!5m2!1sen!2str'
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

const contactItems = [
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:beyondepicenters@gmail.com',
    content: (
      <span className="break-all font-semibold text-eu-dark-blue transition-colors">
        beyondepicenters@gmail.com
      </span>
    ),
  },
  {
    label: 'Phone',
    icon: Phone,
    content: (
      <a
        href="tel:+903125850211"
        className="font-semibold text-eu-dark-blue hover:text-logo-purple transition-colors"
      >
        +90 (312) 585 02 11
      </a>
    ),
  },
  {
    label: 'Address',
    icon: Building2,
    content: (
      <address className="not-italic leading-relaxed">
        <span className="block font-semibold text-slate-navy">TED University</span>
        <span className="block">Ziya Gokalp Caddesi 48/A</span>
        <span className="block">06420, Kolej Cankaya</span>
        <span className="block">Ankara, Turkiye</span>
      </address>
    ),
  },
  {
    label: 'Social Media',
    icon: Instagram,
    content: <span className="font-semibold text-slate-navy">Instagram</span>,
  },
]

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Contacts
          </h1>
          <p className="text-xl text-slate-navy/70 mb-4">
            Get in touch with the Beyond Epicenters coordination team
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-logo-aqua to-logo-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch">
          <div className="bg-ice-blue rounded-lg p-6 sm:p-8 border border-logo-sky/40 shadow-lg shadow-logo-sky/10">
            <h2 className="text-3xl font-bold text-slate-navy mb-8">
              Contact Information
            </h2>

            <div className="space-y-7">
              {contactItems.map((item) => {
                const Icon = item.icon
                const rowContent = (
                  <>
                    <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-logo-aqua to-logo-purple flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-navy mb-1">
                        {item.label}
                      </h3>
                      <div className="text-slate-navy/75">{item.content}</div>
                    </div>
                  </>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex gap-4 rounded-lg transition-colors hover:text-logo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-aqua"
                  >
                    {rowContent}
                  </a>
                ) : (
                  <div key={item.label} className="flex gap-4">
                    {rowContent}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-ice-blue rounded-lg border border-logo-sky/40 shadow-lg shadow-logo-sky/10 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-5">
                <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-eu-dark-blue to-logo-purple flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-navy">Location</h2>
                  <p className="text-slate-navy/70">TED University, Ankara</p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-eu-dark-blue hover:text-logo-purple transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="h-[360px] md:h-[430px] border-t border-logo-sky/40 bg-white">
              <iframe
                title="TED University location on Google Maps"
                src={googleMapsEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

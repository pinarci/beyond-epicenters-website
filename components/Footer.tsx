import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

const instagramUrl = 'https://www.instagram.com/beyond_epicenters/'
const linkedInUrl = 'https://www.linkedin.com/company/beyond-epicenters/posts/?feedView=all'

export default function Footer() {
  return (
    <footer className="bg-ink-blue text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="relative w-48 h-40 rounded-lg overflow-hidden bg-slate-navy mb-4">
                <Image
                  src="/images/beyond-epicenters-full-logo-cropped.jpeg"
                  alt="Beyond Epicenters logo"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A Horizon Europe MSCA project assessing earthquake vulnerability
                through economic and social networks.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    About the Project
                  </a>
                </li>
                <li>
                  <a href="/consortium" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    Consortium
                  </a>
                </li>
                <li>
                  <a href="/media" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    Media
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://cordis.europa.eu/project/id/101296660" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    CORDIS Project Record
                  </a>
                </li>
                <li>
                  <a href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/staff-exchanges" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    MSCA Staff Exchanges
                  </a>
                </li>
                <li>
                  <a href="https://commission.europa.eu/funding-and-tenders/find-funding/eu-funding-programmes/horizon-europe_en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    Horizon Europe
                  </a>
                </li>
                <li>
                  <a href="https://www.tedu.edu.tr/en/whats-happening-tedu/horizon-europe-msca-success-ted-university" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-logo-aqua transition-colors">
                    TEDU Announcement
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">TED University</span>
                </p>
                <p>
                  <a
                    href="https://strc.tedu.edu.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-logo-aqua transition-colors"
                  >
                    Sustainable Trade Research Center
                  </a>
                </p>
                <p>Ankara, Turkiye</p>
                <p>
                  Email:{' '}
                  <a href="mailto:beyondepicenters@gmail.com" className="text-logo-aqua hover:underline">
                    beyondepicenters@gmail.com
                  </a>
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Beyond Epicenters on Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-logo-aqua/40 text-gray-300 hover:border-logo-aqua hover:text-logo-aqua transition-colors"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Beyond Epicenters on LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-logo-aqua/40 text-gray-300 hover:border-logo-aqua hover:text-logo-aqua transition-colors"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>
              &copy; 2026 Beyond Epicenters Project. Funded by the European Union
              Horizon Europe MSCA programme.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-xs text-gray-400 mb-4">
              This project has received funding from the European Union&apos;s
              Horizon Europe research and innovation programme under the Marie
              Sklodowska-Curie Actions grant agreement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-logo-aqua/15 border border-logo-aqua/40 rounded-full text-xs text-gray-300">
                Horizon Europe
              </span>
              <span className="px-4 py-2 bg-logo-purple/15 border border-logo-purple/40 rounded-full text-xs text-gray-300">
                MSCA Staff Exchanges
              </span>
              <span className="px-4 py-2 bg-logo-sky/15 border border-logo-sky/40 rounded-full text-xs text-gray-300">
                Grant No. 101296660
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

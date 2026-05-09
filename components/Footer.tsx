import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-navy text-white">
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
                  <a href="/about" className="text-gray-300 hover:text-eu-blue transition-colors">
                    About the Project
                  </a>
                </li>
                <li>
                  <a href="/consortium" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Consortium
                  </a>
                </li>
                <li>
                  <a href="/media" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Media
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://horizoneurope.eu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Horizon Europe
                  </a>
                </li>
                <li>
                  <a href="https://commission.europa.eu/research/participants/portal/home_en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-eu-blue transition-colors">
                    CORDIS Portal
                  </a>
                </li>
                <li>
                  <a href="https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes/horizon-europe_en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-eu-blue transition-colors">
                    EU Research & Innovation
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
                <p>Sustainable Trade Research Center</p>
                <p>Ankara, Turkiye</p>
                <p>
                  Email:{' '}
                  <a href="mailto:beyondepicenters@gmail.com" className="text-eu-blue hover:underline">
                    beyondepicenters@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; 2026 Beyond Epicenters Project. Funded by the European Union
              Horizon Europe MSCA programme.
            </p>
            <div className="flex gap-6">
              <a href="https://tedu.edu.tr/en/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-eu-blue transition-colors">
                Privacy Policy
              </a>
              <a href="https://tedu.edu.tr/en/terms" target="_blank" rel="noopener noreferrer" className="hover:text-eu-blue transition-colors">
                Terms of Use
              </a>
              <a href="https://tedu.edu.tr/en/accessibility" target="_blank" rel="noopener noreferrer" className="hover:text-eu-blue transition-colors">
                Accessibility
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-xs text-gray-400 mb-4">
              This project has received funding from the European Union&apos;s
              Horizon Europe research and innovation programme under the Marie
              Sklodowska-Curie Actions grant agreement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 rounded-full text-xs text-gray-300">
                Horizon Europe
              </span>
              <span className="px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 rounded-full text-xs text-gray-300">
                MSCA Staff Exchanges
              </span>
              <span className="px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 rounded-full text-xs text-gray-300">
                Grant No. 101296660
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

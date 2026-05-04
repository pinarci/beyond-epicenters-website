'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-navy text-white">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-eu-blue">Beyond Epicenters</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A Horizon Europe MSCA funded project assessing earthquake vulnerability through economic and social networks. Coordinated by TED University&apos;s Sustainable Trade Research Center (TEDUsTRC).
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about-section" className="text-gray-300 hover:text-eu-blue transition-colors">
                    About the Project
                  </a>
                </li>
                <li>
                  <a href="#consortium-section" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Consortium
                  </a>
                </li>
                <li>
                  <a href="#team-section" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="https://tedu.edu.tr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-eu-blue transition-colors">
                    TED University
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://horizoneurope.eu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Horizon Europe
                  </a>
                </li>
                <li>
                  <a href="mailto:trc@tedu.edu.tr" className="text-gray-300 hover:text-eu-blue transition-colors">
                    Contact Us
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

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">TED University</span>
                </p>
                <p>Sustainable Trade Research Center (TEDUsTRC)</p>
                <p>Ankara, Turkey</p>
                <p>
                  Email:{' '}
                  <a href="mailto:trc@tedu.edu.tr" className="text-eu-blue hover:underline">
                    trc@tedu.edu.tr
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <p>
                © 2026 Beyond Epicenters Project. Funded by the European Union Horizon Europe (MSCA) program.
              </p>
            </div>
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

          {/* Horizon Europe Badge */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-xs text-gray-400 mb-4">
              This project has received funding from the European Union&apos;s Horizon Europe research and innovation programme under the Marie Skłodowska-Curie grant agreement.
            </p>
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 rounded-full text-xs text-gray-300">
                🇪🇺 Horizon Europe
              </span>
              <span className="px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 rounded-full text-xs text-gray-300">
                🎓 MSCA Postdoctoral Fellowships
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

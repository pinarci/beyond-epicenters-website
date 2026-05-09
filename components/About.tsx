import Image from 'next/image'

const projectFacts = [
  { label: 'Call', value: 'HORIZON-MSCA-2025-SE-01' },
  { label: 'Type of Action', value: 'HORIZON-TMA-MSCA-SE' },
  { label: 'Grant Number', value: '101296660' },
  { label: 'Duration', value: '48 months' },
  { label: 'Requested EU Contribution', value: 'EUR 1,422,840.00' },
  { label: 'Start Date', value: '01 May 2026' },
]

const innovations = [
  'Dynamic disaster classification maps',
  'Multi-layered vulnerability modelling',
  'Identification of cascading and systemic risks',
  'Integration of socio-economic and infrastructural interdependencies',
  'Adaptable methodology across multiple disaster scenarios',
]

const workPackages = [
  {
    id: 'WP1',
    title: 'Regional Interdependency Metrics Establishment',
    tasks: [
      'Fieldwork and survey evaluations',
      'Comprehensive data collection',
      'Development of interdependency metrics',
    ],
  },
  {
    id: 'WP2',
    title: 'Regional Resilience Index Determination',
    tasks: [
      'Infrastructure quality assessment',
      'Economic resilience analysis',
      'Population dynamics and social structures',
      'Healthcare system and emergency services analysis',
      'Preparedness and planning assessment',
      'Integration of infrastructure resilience into the Regional Resilience Index',
    ],
  },
  {
    id: 'WP3',
    title: 'Disaster Risk Mapping',
    tasks: [
      'Data collection and integration',
      'Development of risk assessment metrics',
      'Creation of earthquake disaster risk maps',
    ],
  },
  {
    id: 'WP4',
    title: 'Innovative Disaster Management Methodology Creation',
    tasks: [
      'Assessment of multi-dimensional data',
      'Development of systemic vulnerability mapping tools',
      'Methodology testing',
    ],
  },
  {
    id: 'WP5',
    title: 'Pilot Implementation and Methodology Validation',
    tasks: [
      'Pilot testing in selected regions',
      'Optimization for decision support',
      'Stakeholder collaboration and feedback',
    ],
  },
  {
    id: 'WP6',
    title: 'Management',
    tasks: [
      'Project management plan and consortium coordination framework',
      'Dissemination and communication plans',
      'Exploitation plan',
    ],
  },
]

const deliverables = [
  'D1.1 Standardized metrics and methodologies to evaluate interdependencies, systemic vulnerabilities, and resilience.',
  'D2.1 Regional Resilience Index.',
  'D3.1 High-resolution risk maps identifying areas of increased seismic hazard and vulnerability.',
  'D4.1 Advanced methodology for real-time analysis of systemic vulnerabilities, critical risks, and recovery strategies.',
  'D5.1 Refined methodology protocol based on real-world testing and stakeholder feedback.',
  'D6.1 Data Management Plan.',
  'D6.2 Plan for dissemination and exploitation including communication activities.',
  'D6.3 1st Progress Report.',
  'D6.4 Mid-Term Meeting.',
]

export default function About() {
  return (
    <section id="about-section" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            About the Project
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            A systemic disaster intelligence framework for interconnected regional risks
          </p>
          <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-slate-navy mb-6">
              Project Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond Epicenters aims to transform disaster risk assessment by
              moving beyond traditional epicenter-focused approaches and
              addressing the interconnected economic, social, and infrastructural
              impacts of disasters.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By combining advanced data analytics, remote sensing, and systemic
              risk modelling, the project seeks to strengthen disaster
              resilience, improve preparedness, and support more effective
              decision-making for complex disaster scenarios across different
              regions and hazards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The methodology will be validated through seismic risk applications
              in Turkiye and Morocco, as well as tsunami risk assessments in
              Portugal.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl bg-slate-navy">
            <Image
              src="/images/horizoneuropegrantawardedbeyondepicenters.jpeg"
              alt="Horizon Europe grant awarded for Beyond Epicenters"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projectFacts.map((fact) => (
            <div key={fact.label} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-lg">
              <p className="text-sm font-bold uppercase text-eu-blue mb-2">{fact.label}</p>
              <p className="text-lg font-semibold text-slate-navy">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-navy mb-4">Our Idea</h3>
            <p className="text-gray-700 leading-relaxed">
              Beyond Epicenters develops an innovative disaster intelligence
              framework capable of identifying cascading impacts and systemic
              vulnerabilities across interconnected regional systems. Instead of
              analysing disasters only through direct physical damage, the project
              integrates economic, social, infrastructural, and environmental
              interdependencies into a unified risk assessment methodology.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-navy mb-4">Key Innovations</h3>
            <div className="space-y-4">
              {innovations.map((innovation) => (
                <div key={innovation} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-eu-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">+</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{innovation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-navy mb-4">
              Project Structure
            </h3>
            <div className="h-1 w-20 bg-eu-blue mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workPackages.map((workPackage) => (
              <div key={workPackage.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <p className="text-sm font-bold text-eu-blue mb-2">{workPackage.id}</p>
                <h4 className="text-xl font-bold text-slate-navy mb-4">{workPackage.title}</h4>
                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                  {workPackage.tasks.map((task) => (
                    <li key={task}>- {task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-navy rounded-xl p-8 md:p-10 text-white">
          <h3 className="text-3xl font-bold mb-6">Deliverables</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((deliverable) => (
              <p key={deliverable} className="text-gray-200 leading-relaxed">
                {deliverable}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'

const base = '/media/tedu-ucam-wp1-secondment'
const title = 'TEDU and UCAM Advance the Morocco Case Study'
const paragraphs = [
  'From 19 October to 1 November 2026, Prof. Ayça Tekin-Koru from TED University (TEDU) joined Prof. Nazire Nergiz Dinçer, project lead, at Cadi Ayyad University (UCAM) in Marrakech for a secondment under WP1, Regional Interdependency Metrics Establishment.',
  'Their work focused on preparing the Morocco case study in the Marrakech-Safi/Al Haouz region, where the 2023 earthquake affected interconnected economic, social and infrastructure systems. Building on the data preparation Prof. Dinçer had initiated, they reviewed and refined information on socio-economic conditions, businesses, infrastructure and spatial characteristics, and identified further data needs and research tasks with the UCAM team.',
  'Meetings with the team leader at UCAM, Prof. Hassan Ibouh, along with UCAM colleagues and doctoral students helped coordinate preparations for the further fieldwork and primary data collection. Visits to the earthquake-affected area also gave the TEDUteam first-hand insight into the region’s geography and local conditions, informing the research and interview preparation.',
  'During the secondment, the institutional protocol between TEDU and UCAM was signed. The necessary permissions for interviews are now being sought from the relevant public institutions. Once these are in place, UCAM doctoral students will conduct interviews in Arabic, French and Berber, with guidance and regular follow-up from the project team.',
  'The secondment advanced the case study’s secondary data preparation, further fieldwork planning and institutional arrangements for collecting local evidence.',
]
const hashtags = '#BEYONDEPICENTERS #HorizonEurope #MSCA #Morocco #ResearchCollaboration'
// Photo numbers follow the original WhatsApp send sequence, oldest first.
const photoOrder = [10, 11, 8, 2, 3, 4, 5, 6, 7, 9, 1]
const photoPath = (number: number) => `${base}/wp1-secondment-${String(number).padStart(2, '0')}.jpeg`
const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-purple'

export default function MoroccoCaseStudyUpdate({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section aria-labelledby="latest-update-title" className="bg-ice-blue px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Latest update · Research collaboration</p>
          <article className="grid overflow-hidden rounded-2xl border border-logo-sky/40 bg-white shadow-lg shadow-logo-sky/10 lg:grid-cols-2">
            <div className="flex items-center justify-center bg-ice-blue p-4 sm:p-6">
              <div className="relative aspect-[16/9] w-full">
                <Image src={photoPath(10)} alt="Meeting around a conference table during the TEDU–UCAM secondment" fill className="object-contain" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center p-6 sm:p-10">
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-logo-purple"><MapPin className="h-4 w-4" aria-hidden="true" />Marrakech, Morocco</p>
              <h2 id="latest-update-title" className="text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
              <p className="mt-4 text-sm font-semibold text-eu-dark-blue">19 October – 1 November 2026 · WP1</p>
              <p className="mt-5 leading-relaxed text-slate-navy/75">{paragraphs[0]}</p>
              <Link href="/media#morocco-case-study-secondment" className={`mt-7 inline-flex items-center gap-2 rounded-lg bg-eu-dark-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple ${focus}`}>Read the update <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </section>
    )
  }

  return (
    <article id="morocco-case-study-secondment" aria-labelledby="morocco-case-study-title" className="mb-20 scroll-mt-28">
      <div className="mb-8 border-b border-logo-sky/40 pb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Research collaboration · WP1</p>
        <h2 id="morocco-case-study-title" className="max-w-4xl text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-navy/75">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-logo-purple" aria-hidden="true" /><span><time dateTime="2026-10-19">19 October</time> – <time dateTime="2026-11-01">1 November 2026</time></span></span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-logo-purple" aria-hidden="true" />Cadi Ayyad University, Marrakech, Morocco</span>
        </div>
      </div>
      <div className="max-w-4xl space-y-5 leading-relaxed text-slate-navy/75">
        {paragraphs.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? 'text-xl leading-relaxed text-slate-navy' : undefined}>{paragraph}</p>
        ))}
        <p className="break-words text-sm leading-relaxed text-eu-dark-blue">{hashtags}</p>
      </div>
      <div className="mt-10">
        <h3 id="morocco-secondment-gallery-title" className="mb-5 text-2xl font-bold text-slate-navy">Secondment Photo Gallery</h3>
        <ol aria-labelledby="morocco-secondment-gallery-title" className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {photoOrder.map((number, index) => (
            <li key={number} className="overflow-hidden rounded-xl border border-logo-sky/40 bg-ice-blue">
              <a href={photoPath(number)} target="_blank" rel="noopener noreferrer" aria-label={`Open secondment photo ${index + 1} of 11 in a new tab`} className={`relative block aspect-[4/3] ${focus}`}>
                <Image src={photoPath(number)} alt={`TEDU–UCAM Morocco secondment, photo ${index + 1} of 11`} fill className="object-contain" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </article>
  )
}

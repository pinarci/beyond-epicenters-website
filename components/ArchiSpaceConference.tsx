import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock, Download, ExternalLink, MapPin, Users } from 'lucide-react'

const base = '/media/archispace-conference'
const poster = `${base}/conference-poster-2026-10-08.pdf`
const title = 'ArchiSpace and Beyond: Remote Sensing, Space Gravimetry and Infrastructure Resilience Across Earth and Moon'
const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-purple'

function Poster({ compact = false }: { compact?: boolean }) {
  return (
    <a href={poster} target="_blank" rel="noopener noreferrer" aria-label="Open the ArchiSpace and Beyond conference poster PDF in a new tab" className={`block ${focus}`}>
      <Image
        src={`${base}/conference-poster.jpg`}
        alt="Official poster for the ArchiSpace and Beyond conference on 8 October 2026, featuring Dr. João Encarnação and Dr. Giorgia Giardina of Delft University of Technology"
        width={990}
        height={1400}
        className={`mx-auto h-auto w-full ${compact ? 'max-w-[220px]' : 'max-w-sm'} rounded-md`}
        sizes={compact ? '220px' : '(min-width: 640px) 384px, 100vw'}
      />
    </a>
  )
}

export default function ArchiSpaceConference({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section aria-labelledby="latest-update-title" className="bg-ice-blue px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Latest update · Conference</p>
          <article className="grid overflow-hidden rounded-2xl border border-logo-sky/40 bg-white shadow-lg shadow-logo-sky/10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="flex items-center justify-center bg-ice-blue p-6 sm:p-8"><Poster compact /></div>
            <div className="flex flex-col items-start justify-center p-6 sm:p-10">
              <p className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-logo-purple">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" /><time dateTime="2026-10-08">8 October 2026</time></span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" />Marrakech, Morocco</span>
              </p>
              <h2 id="latest-update-title" className="text-3xl font-bold leading-tight text-slate-navy md:text-4xl">ArchiSpace and Beyond: Conference in Marrakech</h2>
              <p className="mt-5 leading-relaxed text-slate-navy/75">Remote sensing, space gravimetry, and infrastructure resilience across Earth and Moon, with Dr. João Encarnação and Dr. Giorgia Giardina of Delft University of Technology.</p>
              <Link href="/media#archispace-conference" className={`mt-7 inline-flex items-center gap-2 rounded-lg bg-eu-dark-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple ${focus}`}>View conference details <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </section>
    )
  }

  return (
    <article id="archispace-conference" aria-labelledby="archispace-title" className="mb-20 scroll-mt-28">
      <div className="mb-8 border-b border-logo-sky/40 pb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Conference · October 2026</p>
        <h2 id="archispace-title" className="max-w-5xl text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
        <div>
          <p className="text-xl leading-relaxed text-slate-navy">A conference programme connecting remote sensing and space gravimetry with infrastructure resilience, from Earth to the Moon.</p>
          <dl className="mt-7 space-y-5 rounded-xl border border-logo-sky/40 bg-ice-blue p-6 sm:p-8">
            <div className="flex gap-4">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-logo-purple" aria-hidden="true" />
              <div><dt className="text-sm font-bold uppercase text-eu-dark-blue">Date</dt><dd className="mt-1 text-slate-navy/75"><time dateTime="2026-10-08">8 October 2026</time></dd></div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-logo-purple" aria-hidden="true" />
              <div><dt className="text-sm font-bold uppercase text-eu-dark-blue">Time</dt><dd className="mt-1 text-slate-navy/75">10:30 (local time)</dd></div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-logo-purple" aria-hidden="true" />
              <div><dt className="text-sm font-bold uppercase text-eu-dark-blue">Venue</dt><dd className="mt-1 leading-relaxed text-slate-navy/75">Earth Science meeting room<br />Faculty of Sciences and Techniques, Cadi Ayyad University<br />Marrakech, Morocco</dd></div>
            </div>
            <div className="flex gap-4">
              <Users className="mt-1 h-5 w-5 shrink-0 text-logo-purple" aria-hidden="true" />
              <div><dt className="text-sm font-bold uppercase text-eu-dark-blue">Speakers</dt><dd className="mt-1 leading-relaxed text-slate-navy/75">Dr. João Encarnação and Dr. Giorgia Giardina<br />Associate Professors, Delft University of Technology</dd></div>
            </div>
          </dl>
          <p className="mt-6 leading-relaxed text-slate-navy/75">The official poster brings together the Beyond Epicenters, EWALD, and ArchiSpace projects under the Marie Skłodowska-Curie Actions Staff Exchanges programme.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={poster} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-lg bg-eu-dark-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple ${focus}`}><ExternalLink className="h-4 w-4" aria-hidden="true" />Open poster</a>
            <a href={poster} download className={`inline-flex items-center gap-2 rounded-lg border border-logo-purple/40 bg-white px-5 py-3 text-sm font-bold text-logo-purple transition-colors hover:border-logo-aqua hover:text-eu-dark-blue ${focus}`}><Download className="h-4 w-4" aria-hidden="true" />Download poster (PDF)</a>
          </div>
        </div>
        <aside aria-label="Official conference poster" className="rounded-xl border border-logo-sky/40 bg-ice-blue p-4 sm:p-6">
          <Poster />
          <p className="mt-4 text-center text-sm text-slate-navy/70">Select the poster to open the full-size PDF.</p>
        </aside>
      </div>
    </article>
  )
}

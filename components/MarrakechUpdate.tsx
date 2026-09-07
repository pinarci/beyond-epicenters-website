import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Download, MapPin, Users } from 'lucide-react'

const base = '/media/marrakech-secondment'
const title = 'Secondment activities begin in Marrakech'
const introduction = 'Beyond Epicenters Project Coordinator Prof. Nazire Nergiz Dinçer has started her secondment activities in Marrakech, Morocco, as a member of the TED University team.'
const photos = [
  { file: 'team.jpeg', alt: 'Beyond Epicenters colleagues gathered for a group photo in the meeting room', caption: 'Connecting the TED University and Moroccan teams.' },
  { file: 'research-meeting.jpeg', alt: 'Project research presentation and discussion around a conference table in Marrakech', caption: 'Discussing the research agenda and planned activities in Morocco.' },
  { file: 'campus.jpeg', alt: 'Three colleagues outside the Faculty of Sciences and Techniques in Marrakech', caption: 'A visit to the University Cadi Ayyad campus.' },
]

export default function MarrakechUpdate({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section aria-labelledby="latest-update-title" className="bg-ice-blue px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Latest news · September 2026</p>
          <article className="grid overflow-hidden rounded-2xl border border-logo-sky/40 bg-white shadow-lg shadow-logo-sky/10 lg:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image src={`${base}/team.jpeg`} alt={photos[0].alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col items-start justify-center p-6 sm:p-10">
              <p className="mb-4 flex items-center gap-2 text-sm font-medium text-logo-purple"><MapPin className="h-4 w-4" aria-hidden="true" />Marrakech, Morocco</p>
              <h2 id="latest-update-title" className="text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
              <p className="mt-5 leading-relaxed text-slate-navy/75">{introduction}</p>
              <Link href="/media#marrakech-secondment" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-eu-dark-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-purple">Read the update <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </section>
    )
  }

  return (
    <article id="marrakech-secondment" aria-labelledby="marrakech-title" className="mb-20 scroll-mt-28">
      <div className="mb-8 border-b border-logo-sky/40 pb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Project update · Secondment</p>
        <h2 id="marrakech-title" className="max-w-4xl text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-navy/75">
          <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-logo-purple" aria-hidden="true" /><time dateTime="2026-09">September 2026</time></span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-logo-purple" aria-hidden="true" />UCAM, Marrakech, Morocco</span>
          <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-logo-purple" aria-hidden="true" />TED University team</span>
        </div>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
        <div>
          <p className="text-xl leading-relaxed text-slate-navy">{introduction}</p>
          <div className="mt-5 space-y-5 leading-relaxed text-slate-navy/75">
            <p>During the first stage of the secondment, she met with the Moroccan team to discuss the project’s research agenda, including earthquake vulnerability, regional interdependencies, and cascading seismic risks.</p>
            <p>As part of the activities, Prof. Dinçer delivered a conference at University Cadi Ayyad on <time dateTime="2026-09-04">4 September 2026</time>, presenting the project’s overall objectives, WP1 research, and planned activities in Morocco.</p>
            <p>This secondment contributes to strengthening collaboration and knowledge exchange among Beyond Epicenters partners.</p>
          </div>
          <figure className="mt-8 overflow-hidden rounded-xl border border-logo-sky/40">
            <a href={`${base}/team.jpeg`} target="_blank" rel="noopener noreferrer" aria-label="Open Marrakech team photo in a new tab" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-purple">
              <Image src={`${base}/team.jpeg`} alt={photos[0].alt} width={1600} height={1200} className="h-auto w-full" sizes="(min-width: 1024px) 60vw, 100vw" />
            </a>
            <figcaption className="bg-ice-blue px-5 py-4 text-sm text-slate-navy/75">{photos[0].caption}</figcaption>
          </figure>
        </div>

        <aside aria-label="Conference poster" className="overflow-hidden rounded-xl border border-logo-sky/40 bg-ice-blue">
          <div className="p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Conference · 4 September 2026</p>
            <h3 className="mt-2 text-xl font-bold text-slate-navy">An overview for the Moroccan team</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-navy/75">Project objectives, the first work package, and activities in Morocco.</p>
          </div>
          <a href={`${base}/conference-poster-2026-09-04.pdf`} target="_blank" rel="noopener noreferrer" aria-label="Open the conference poster PDF in a new tab" className="block px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-purple">
            <Image src={`${base}/conference-poster.jpeg`} alt="Conference poster for Prof. Nazire Nergiz Dinçer’s presentation at University Cadi Ayyad on 4 September 2026" width={842} height={1190} className="h-auto w-full rounded-md" sizes="(min-width: 1024px) 35vw, 100vw" />
          </a>
          <div className="p-6">
            <a href={`${base}/conference-poster-2026-09-04.pdf`} download className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-eu-dark-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-purple"><Download className="h-4 w-4" aria-hidden="true" />Download poster (PDF)</a>
          </div>
        </aside>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {photos.slice(1).map((photo) => (
          <figure key={photo.file} className="overflow-hidden rounded-xl border border-logo-sky/40 bg-ice-blue">
            <a href={`${base}/${photo.file}`} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${photo.caption} (new tab)`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-purple">
              <Image src={`${base}/${photo.file}`} alt={photo.alt} width={1600} height={1200} className="h-auto w-full" sizes="(min-width: 640px) 50vw, 100vw" />
            </a>
            <figcaption className="px-5 py-4 text-sm text-slate-navy/75">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}

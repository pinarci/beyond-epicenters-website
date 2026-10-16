import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

const base = '/media/moulay-brahim-field-visit'
const title = 'Field Visit to Moulay Brahim, Morocco'
const introduction = 'Beyond Epicenters Project Coordinator Prof. Nazire Nergiz Dinçer conducted a field visit to Moulay Brahim, Morocco, during her secondment at Cadi Ayyad University in Marrakech.'
const photos = [
  { file: 'moulay-brahim-03.jpeg', width: 1600, height: 960, alt: 'Prof. Nazire Nergiz Dinçer during the field visit, with buildings and a street in Moulay Brahim behind her', caption: 'Prof. Nazire Nergiz Dinçer during the field visit to Moulay Brahim.' },
  { file: 'moulay-brahim-01.jpeg', width: 1600, height: 1294, alt: 'Street lined with buildings and a local produce shop in Moulay Brahim', caption: 'Local shops and everyday activity in Moulay Brahim.' },
  { file: 'moulay-brahim-02.jpeg', width: 1600, height: 1200, alt: 'Hillside settlement with buildings and rows of temporary shelters in Moulay Brahim', caption: 'A view of the settlement and temporary shelters.' },
  { file: 'moulay-brahim-04.jpeg', width: 1600, height: 1200, alt: 'Damaged building facade with a green and blue door in Moulay Brahim', caption: 'Building conditions observed during the visit.' },
  { file: 'moulay-brahim-05.jpeg', width: 1600, height: 1200, alt: 'Buildings and rubble beside a road in the Moulay Brahim area', caption: 'Buildings and surrounding terrain in the affected area.' },
  { file: 'moulay-brahim-06.jpeg', width: 1600, height: 1200, alt: 'Buildings beside a road and construction materials in the Moulay Brahim area', caption: 'Roadside views of the local built environment.' },
  { file: 'moulay-brahim-07.jpeg', width: 1600, height: 734, alt: 'Panoramic view of buildings and mountain slopes in the Moulay Brahim area', caption: 'The settlement within its wider mountain landscape.' },
]

export default function MoulayBrahimUpdate({ compact = false }: { compact?: boolean }) {
  const lead = photos[0]

  if (compact) {
    return (
      <section aria-labelledby="latest-update-title" className="bg-ice-blue px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Latest news · Field visit</p>
          <article className="grid overflow-hidden rounded-2xl border border-logo-sky/40 bg-white shadow-lg shadow-logo-sky/10 lg:grid-cols-2">
            <div className="relative aspect-[5/3] lg:aspect-auto lg:min-h-[360px]">
              <Image src={`${base}/${lead.file}`} alt={lead.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col items-start justify-center p-6 sm:p-10">
              <p className="mb-4 flex items-center gap-2 text-sm font-medium text-logo-purple"><MapPin className="h-4 w-4" aria-hidden="true" />Moulay Brahim, Morocco</p>
              <h2 id="latest-update-title" className="text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
              <p className="mt-5 leading-relaxed text-slate-navy/75">{introduction}</p>
              <Link href="/media#moulay-brahim-field-visit" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-eu-dark-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-logo-purple">Read the update <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </article>
        </div>
      </section>
    )
  }

  return (
    <article id="moulay-brahim-field-visit" aria-labelledby="moulay-brahim-title" className="mb-20 scroll-mt-28">
      <div className="mb-8 border-b border-logo-sky/40 pb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-eu-dark-blue">Field Visit</p>
        <h2 id="moulay-brahim-title" className="max-w-4xl text-3xl font-bold leading-tight text-slate-navy md:text-4xl">{title}</h2>
        <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-navy/75"><MapPin className="h-4 w-4 text-logo-purple" aria-hidden="true" />Moulay Brahim, Morocco</p>
      </div>
      <div className="mb-8 max-w-4xl space-y-5 leading-relaxed text-slate-navy/75">
        <p className="text-xl text-slate-navy">{introduction}</p>
        <p>The visit provided an opportunity to observe recovery and reconstruction in an area affected by the September 2023 Al Haouz earthquake, with particular attention to local livelihoods and the restoration of economic and social activity.</p>
        <p>These field observations contribute to the project’s research on the wider effects of earthquakes and the factors shaping recovery and regional resilience.</p>
      </div>
      <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <figure key={photo.file} className={`overflow-hidden rounded-xl border border-logo-sky/40 bg-ice-blue ${index === 0 ? 'mx-auto w-full max-w-2xl sm:col-span-2 lg:col-span-3' : ''}`}>
            <a href={`${base}/${photo.file}`} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${photo.caption} (new tab)`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-purple">
              <Image src={`${base}/${photo.file}`} alt={photo.alt} width={photo.width} height={photo.height} className="h-auto w-full" sizes={index === 0 ? '(min-width: 768px) 672px, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'} />
            </a>
            <figcaption className="px-5 py-4 text-sm text-slate-navy/75">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}

import Image from 'next/image'
import {
  CalendarDays,
  Download,
  FileText,
  ImageIcon,
  MapPin,
  Share2,
  Users,
} from 'lucide-react'

const kickoffAgendaHref = '/media/kickoff-meeting/kickoff-meeting-agenda-2026.pdf'

const kickoffPhotos = [
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-01.jpeg',
    alt: 'Hybrid screen and room participants at the Beyond Epicenters kick-off meeting',
    caption: 'Hybrid participation during the Lisbon kick-off meeting',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-02.jpeg',
    alt: 'Participants seated in a classroom during the Beyond Epicenters kick-off meeting',
    caption: 'Consortium members gathered at Lusofona University',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-03.jpeg',
    alt: 'Meeting room and video conference screen at the Beyond Epicenters kick-off meeting',
    caption: 'Remote and in-person teams joining the opening sessions',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-04.jpeg',
    alt: 'Kick-off meeting discussion with participants around classroom desks',
    caption: 'Project discussions with consortium representatives',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-05.jpeg',
    alt: 'Participants following a Beyond Epicenters kick-off meeting session',
    caption: 'Working session during the first project meeting',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-06.jpeg',
    alt: 'Wide room view of the Beyond Epicenters kick-off meeting',
    caption: 'Consortium exchange on the project roadmap',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-07.jpeg',
    alt: 'Participants and meeting materials at the Lisbon kick-off meeting',
    caption: 'In-room collaboration at the Lisbon meeting',
  },
  {
    src: '/media/kickoff-meeting/kickoff-lisbon-08.jpeg',
    alt: 'Video conference grid for the Beyond Epicenters kick-off meeting',
    caption: 'Online participants connected to the kick-off meeting',
  },
]

const mediaItems = [
  {
    title: 'Project Announcement',
    image: '/images/horizoneuropegrantawardedbeyondepicenters.jpeg',
    alt: 'Horizon Europe Grant Awarded Beyond Epicenters visual',
  },
  {
    title: 'Coordination Update',
    image: '/images/tedustrccoordinates.jpeg',
    alt: 'TEDUsTRC coordinates Beyond Epicenters visual',
  },
  {
    title: 'Aim & Team',
    image: '/images/aim%26team.jpeg',
    alt: 'Beyond Epicenters aim and team visual',
  },
]

export default function Media() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-navy mb-4">
            Media
          </h1>
          <p className="text-xl text-slate-navy/70 mb-4">
            Project visuals, meeting materials, and communication updates
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-logo-aqua to-logo-purple mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-ice-blue border border-logo-sky/40 rounded-lg p-8 shadow-lg shadow-logo-sky/10">
            <div className="w-12 h-12 bg-gradient-to-br from-logo-aqua to-eu-dark-blue rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-3">
              Kick-Off Meeting Agenda
            </h2>
            <p className="text-slate-navy/75 leading-relaxed mb-6">
              Download the official agenda for the May 13-14, 2026 kick-off
              meeting hosted by Lusofona University in Lisbon.
            </p>
            <a
              href={kickoffAgendaHref}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-eu-dark-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-logo-purple"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Agenda
            </a>
          </div>

          <div className="bg-ice-blue border border-logo-sky/40 rounded-lg p-8 shadow-lg shadow-logo-sky/10">
            <div className="w-12 h-12 bg-gradient-to-br from-logo-aqua to-logo-purple rounded-full flex items-center justify-center mb-6">
              <ImageIcon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-3">
              Photo Gallery
            </h2>
            <p className="text-slate-navy/75 leading-relaxed">
              Browse photos from the Beyond Epicenters kick-off meeting and
              future project activities.
            </p>
          </div>

          <div className="bg-ice-blue border border-logo-sky/40 rounded-lg p-8 shadow-lg shadow-logo-sky/10">
            <div className="w-12 h-12 bg-gradient-to-br from-eu-dark-blue to-logo-purple rounded-full flex items-center justify-center mb-6">
              <Share2 className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-slate-navy mb-3">
              Social Media
            </h2>
            <p className="text-slate-navy/75 leading-relaxed">
              Social media channels and dissemination updates will be added as
              the project communication plan is launched.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-stretch mb-16">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-logo-sky/40 bg-slate-navy shadow-2xl shadow-logo-sky/15">
            <Image
              src={kickoffPhotos[0].src}
              alt={kickoffPhotos[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-blue/95 via-ink-blue/70 to-transparent p-6 md:p-8">
              <p className="text-sm font-bold uppercase text-logo-sky">
                Kick-Off Meeting
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Beyond Epicenters in Lisbon
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                The consortium launched the project with in-person and online
                participation, partner presentations, work package discussions,
                and the first roadmap session.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-logo-sky/40 bg-ice-blue p-8 shadow-lg shadow-logo-sky/10">
            <h2 className="text-2xl font-bold text-slate-navy mb-6">
              Meeting Details
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <CalendarDays className="mt-1 h-5 w-5 flex-shrink-0 text-logo-purple" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase text-eu-dark-blue">Date</p>
                  <p className="text-slate-navy/75">May 13-14, 2026</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-logo-purple" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase text-eu-dark-blue">Location</p>
                  <p className="text-slate-navy/75">Lusofona University, Lisbon, Portugal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="mt-1 h-5 w-5 flex-shrink-0 text-logo-purple" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase text-eu-dark-blue">Format</p>
                  <p className="text-slate-navy/75">Hybrid consortium meeting</p>
                </div>
              </div>
            </div>
            <a
              href={kickoffAgendaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-logo-purple/40 bg-white px-4 py-3 text-sm font-bold text-logo-purple transition-colors hover:border-logo-aqua hover:text-eu-dark-blue"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Open Agenda PDF
            </a>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <p className="text-sm font-bold uppercase text-eu-dark-blue">
                Gallery
              </p>
              <h2 className="text-3xl font-bold text-slate-navy">
                Kick-Off Meeting Photos
              </h2>
            </div>
            <p className="max-w-2xl text-slate-navy/70">
              Selected moments from the May 2026 project kick-off meeting in
              Lisbon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kickoffPhotos.map((photo) => (
              <article
                key={photo.src}
                className="overflow-hidden rounded-lg border border-logo-sky/40 bg-white shadow-lg shadow-logo-sky/10 transition-all duration-300 hover:border-logo-aqua/70 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] bg-slate-navy">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold leading-relaxed text-slate-navy">
                    {photo.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-bold uppercase text-eu-dark-blue">
            Communication Updates
          </p>
          <h2 className="text-3xl font-bold text-slate-navy">
            Project Visuals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <article
              key={item.title}
              className="bg-white border border-logo-sky/40 rounded-lg overflow-hidden shadow-lg shadow-logo-sky/10 hover:shadow-2xl hover:border-logo-aqua/70 transition-all duration-300"
            >
              <div className="relative h-80 bg-gradient-to-br from-slate-navy via-ink-blue to-eu-dark-blue p-3">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain p-3"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-navy">
                  {item.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

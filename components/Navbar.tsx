'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

type NavbarProps = {
  variant?: 'overlay' | 'solid'
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/consortium', label: 'Consortium' },
  { href: '/media', label: 'Media' },
  { href: '/contacts', label: 'Contacts' },
]

export default function Navbar({ variant = 'solid' }: NavbarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isOverlay = variant === 'overlay'

  const headerClass = isOverlay
    ? 'absolute top-0 left-0 right-0 z-50 border-b border-logo-sky/20 bg-slate-navy/70 backdrop-blur-sm'
    : 'sticky top-0 z-50 border-b border-logo-sky/15 bg-slate-navy shadow-lg'

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 py-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white min-[420px]:w-12 lg:h-12 lg:w-16">
                <Image
                  src="/images/beyond-epicenters-logo-mark-cropped.jpeg"
                  alt="Beyond Epicenters logo"
                  fill
                  className="object-contain lg:object-cover"
                  sizes="(min-width: 1024px) 64px, (min-width: 420px) 48px, 40px"
                  priority={isOverlay}
                />
              </span>
              <span className="hidden text-sm font-bold leading-tight tracking-tight text-white min-[380px]:block sm:whitespace-nowrap sm:text-lg lg:text-xl">
                Beyond <span className="block text-logo-sky sm:inline">Epicenters</span>
              </span>
            </Link>

            <div className="border-l border-logo-sky/25 pl-3 sm:pl-4">
              <div className="rounded-lg bg-white px-1.5 py-1 sm:px-2">
                <Image
                  src="/images/eu-funded-en-horizontal.png"
                  alt="Funded by the European Union"
                  width={4125}
                  height={919}
                  className="h-auto w-[152px] min-[420px]:w-[168px] sm:w-48 lg:w-56"
                  priority
                />
              </div>
            </div>
          </div>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-logo-aqua'
                          : 'text-white hover:text-logo-sky'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-logo-sky/40 text-white"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <nav aria-label="Mobile navigation" className="lg:hidden pb-4">
            <ul className="grid gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-logo-aqua/15 text-logo-sky'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

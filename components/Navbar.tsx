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
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative h-12 w-16 overflow-hidden rounded-lg bg-white">
              <Image
                src="/images/beyond-epicenters-logo-mark-cropped.jpeg"
                alt="Beyond Epicenters logo"
                fill
                className="object-cover"
                sizes="64px"
                priority={isOverlay}
              />
            </span>
            <span className="text-lg md:text-2xl font-bold text-white tracking-tight truncate">
              Beyond <span className="text-logo-sky">Epicenters</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:block">
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
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-logo-sky/40 text-white"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <nav aria-label="Mobile navigation" className="md:hidden pb-4">
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

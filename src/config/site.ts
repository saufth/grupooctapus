import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type MainNavItem } from '@/types'

interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: MainNavItem[]
}

export const author: Author = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const siteNav = [
  {
    title: 'Nosotros',
    href: '/nosotros'
  },
  {
    title: 'Contáctanos',
    href: '/contacto'
  }
]

export const domain = 'grupooctapus.com'
export const contactEmail = `contacto@${domain}`

export const siteConfig: SiteConfig = {
  name: 'Grupo Octapus',
  description: 'Venta, renta y distribución de productos metálicos, material de construcción, herramienta, maquinaria y equipo industrial y para la construcción',
  slogan: 'Diversidad, calidad y entrega inmediata a tu alcance',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Inicio',
      href: '/'
    },
    ...siteNav
  ]
}

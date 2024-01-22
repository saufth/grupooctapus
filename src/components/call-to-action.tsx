import Link from 'next/link'
import { siteNav } from '@/config/site'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export function CallToAction () {
  return (
    <Link href={contactLink.href}>
      <div className='group max-w-fit px-6 py-2.5 relative text-md leading-none'>
        <div className='z-20 text-white text-lg'>
          {contactLink.title} <span className='group-hover:ml-4 text-lg leading-none transition-[margin] duration-300 text-white'>&rarr;</span>
        </div>
        <div className='w-[48px] group-hover:w-full h-full absolute top-0 left-0 border border-secondary/40 rounded-full transition-[width,border] duration-300' />
      </div>
    </Link>
  )
}

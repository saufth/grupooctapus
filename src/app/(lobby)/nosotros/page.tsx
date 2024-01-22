import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackgroundVideo from '@/components/background-video'
import { Button } from '@/components/ui/button'
import { culture, filosophy, history } from '@/config/organization'
import { siteConfig, siteNav } from '@/config/site'
import { Icons } from '@/components/icons'
import React from 'react'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: `Conócenos – ${siteConfig.slogan}.`,
  description: siteConfig.description
}

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

const cultureIcons = [
  <Icons.Excellence className='w-auto h-8 fill-primary' key={0} />,
  <Icons.Progress className='w-auto h-8 fill-primary' key={1} />,
  <Icons.Teamwork className='w-auto h-8 fill-primary' key={2} />,
  <Icons.Innovation className='w-auto h-8 fill-primary' key={3} />,
  <Icons.Integrity className='w-auto h-8 fill-primary' key={4} />
]

export default function NosotrosPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[69px] lg:-mt-[85px] flex flex-col justify-center'>
          <div className='full-bleed-container h-full relative z-10 flex items-center px-4 sm:px-6'>
            <div className='w-full text-center'>
              <div className='max-w-6xl mx-auto'>
                <h1 className='f-display-2 max-w-[322px] xs:max-w-none text-white font-bold'>
                  Representamos una comunidad con enfoque humano. Estamos construyendo un legado en la industria
                </h1>
              </div>
              <Button className='mt-spacing-5' size='full' asChild>
                <Link href={contactLink.href}>
                  {contactLink.title}
                </Link>
              </Button>
            </div>
            <BackgroundVideo src='/video/about-hero.mp4' />
          </div>
        </div>
      </section>
      <section className='mt-spacing-7'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {filosophy.title}
            </h2>
            {filosophy.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {filosophy.description}
              </p>
            )}
            {filosophy.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={filosophy.image.src}
                  alt={filosophy.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          {filosophy.items.map((filosophyItem, key) => (
            <article className='cols-container flex-col-reverse lg:flex-row lg:odd:flex-row-reverse mt-spacing-6' key={key}>
              <div className='w-6-cols sm:w-8-cols lg:w-6-cols mt-10 lg:mt-0 flex items-center lg:pr-32'>
                <div className=''>
                  <h3 className='f-heading-1'>
                    {filosophyItem.title}
                  </h3>
                  <p className='f-subhead-1 mt-2 text-muted-foreground'>
                    {filosophyItem.description}
                  </p>
                </div>
              </div>
              <div className='w-6-cols sm:w-8-cols lg:w-6-cols'>
                {filosophyItem.image && (
                  <Image
                    src={filosophyItem.image.src}
                    alt={filosophyItem.image.alt}
                    width={filosophyItem.image.width}
                    height={filosophyItem.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full'
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className='mt-spacing-9 bg-white dark:bg-black py-24 lg:py-32 2xl:py-40 border-y border-primary'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {culture.title}
            </h2>
            {culture.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {culture.description}
              </p>
            )}
            {culture.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={culture.image.src}
                  alt={culture.image.alt}
                  width={1024}
                  height={1024}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            )}
          </div>
          <div className='cols-container mt-spacing-4'>
            {culture.items.map((cultureItem, key) => {
              const Icon = () => cultureIcons[key]!
              return (
                <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols flex gap-x-4 mt-spacing-6' key={key}>
                  <div className='mt-2'>
                    <div className='flex items-center gap-x-3'>
                      <Icon />
                      <h3 className='f-subhead-1 font-medium'>
                        {cultureItem.title}
                      </h3>
                    </div>
                    {cultureItem.description && (
                      <div className='mt-2'>
                        <p className='f-body-1 text-muted-foreground'>
                          {cultureItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section>
        <div className='container pt-spacing-7'>
          <div className='cols-container pt-spacing-3'>
            <div className='w-6-cols md:w-4-cols lg:w-6-cols'>
              <h1 className='f-display-2 md:pr-9 lg:pr-11'>
                {history.title}
              </h1>
            </div>
          </div>
        </div>
        <div className='full-bleed-container mt-spacing-7'>
          <Image
            src='/images/history-hero.webp'
            alt='Camión blanco conduciendo por la carretera serpenteando a través de un paisaje boscoso en colores otoñales al atardecer'
            width={3200}
            height={2400}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
            className='w-full'
          />
        </div>
        <div className='container mt-spacing-7'>
          {history.items.map((historyItem, key) => (
            <p className='f-subhead-2 mt-spacing-3' key={key}>
              {historyItem}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}

import Image from 'next/image'
import BackgroundVideo from '@/components/background-video'
import { Button } from '@/components/ui/button'
import { services } from '@/config/services'
import { siteConfig, siteNav } from '@/config/site'
import Link from 'next/link'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function IndexPage () {
  return (
    <>
      <section>
        <div className='w-full h-[100dvh] min-h-[500xp] lg:min-h-[600px] max-h-[1000px] relative z-10 -mt-[69px] lg:-mt-[85px] flex flex-col justify-center'>
          <div className='full-bleed-container h-full relative z-10 flex items-center px-4 sm:px-6'>
            <div className='w-full text-center'>
              <div className='max-w-5xl mx-auto'>
                <h1 className='f-display-2 max-w-[322px] xs:max-w-none text-white font-bold'>
                  {siteConfig.slogan}
                </h1>
                <p className='f-subhead-1 mt-spacing-3 text-white'>
                  {siteConfig.description}.
                </p>
              </div>
              <Button className='mt-spacing-5' size='full' asChild>
                <Link href={contactLink.href}>
                  {contactLink.title}
                </Link>
              </Button>
            </div>
            <BackgroundVideo src='/video/home-hero.mp4' />
          </div>
        </div>
      </section>
      <section id='soluciones' className='mt-spacing-7'>
        <div className='container'>
          <div>
            <h2 className='f-heading-1 md:pr-9 lg:pr-11'>
              {services.title}
            </h2>
            {services.description && (
              <p className='f-subhead-1 mt-spacing-4 max-w-6xl'>
                {services.description}
              </p>
            )}
            {services.image && (
              <div className='full-bleed-container mt-spacing-7'>
                <Image
                  src={services.image.src}
                  alt={services.image.alt}
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
            {services.items.map((serviceItem, key) => (
              <article className='w-8-cols md:w-4-cols lg:w-6-cols xl:w-4-cols mt-spacing-7' key={key}>
                <div>
                  {serviceItem.image && (
                    <Image
                      src={serviceItem.image.src}
                      alt={serviceItem.image.alt}
                      width={1260}
                      height={840}
                      sizes='(max-width: 744px) 100vw, (max-width: 1280px) 50vw, 500px'
                      loading='lazy'
                    />
                  )}
                </div>
                <div className='mt-4'>
                  <h3 className='f-subhead-1 text-primary font-bold'>
                    {serviceItem.title}
                  </h3>
                  {serviceItem.description && (
                    <div className='mt-4'>
                      <p className='f-body-1 text-muted-foreground'>
                        {serviceItem.description}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

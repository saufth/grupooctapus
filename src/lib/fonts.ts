import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../../public/fonts/sans/HelveticaNeueThin.woff2',
      weight: '100'
    },
    {
      path: '../../public/fonts/sans/HelveticaNeueLight.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/sans/HelveticaNeueRegular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/sans/HelveticaNeueMedium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/sans/HelveticaNeueBold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-sans'
})

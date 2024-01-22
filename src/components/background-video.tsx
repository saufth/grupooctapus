'use client'
import { useRef, type MouseEvent } from 'react'

interface BackgroundVideoProps {
  src: string
}

export default function BackgroundVideo ({ src }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  return (
    <div className='absolute inset-0 overflow-hidden -z-10'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
        ref={videoRef}
      >
        <source src={src} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black/20 z-10' />
    </div>
  )
}

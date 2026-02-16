import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='relative min-h-[85vh] mt-2 rounded-sm overflow-clip' >
      {/* image */}
      <div className='absolute inset-0 rounded-sm '>
        <Image
          src={'/hero.webp'}
          alt='landing hero image'
          height={1000}
          width={1000}
          className='h-full w-full'
        />
      </div>

      {/* overlay */}
      <div className='absolute inset-0 bg-black/45'></div>


      {/* content /tagline */}
    </section>
  )
}

export default Hero
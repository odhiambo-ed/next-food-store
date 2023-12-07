import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
      <div className="relative min-h-screen">
          <Image
              className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
              src="/images/hero.png"
              width={1000}
              height={600}
              alt="hero"
          /> 
      </div>
  )
}

export default Hero
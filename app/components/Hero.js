import React from 'react'
import Image from 'next/image'
import NavBar from './NavBar'

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
          <NavBar />
          <div className="container grid items-center h-[calc(100vh-120px)] p-4">
              <div className="w-fit p-4 space-y-4 bg-[#ffffff98]">
                  <p className='uppercase font-medium font-mono'>Lorem ipsum dolor sit amet</p>
                  <h2 className='text-4xl sm:text-6xl font-bold'>
                      Lorem <span className='text-blue-500'>ipsum</span>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, at!</p>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded'>View More</button>
              </div>
          </div>
      </div>
  )
}

export default Hero
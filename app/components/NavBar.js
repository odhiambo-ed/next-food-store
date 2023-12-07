import React from 'react'
import Image from 'next/image'
import { CiMenuKebab } from "react-icons/ci";

function NavBar() {
  return (
      <nav className="container pt-3">
          <div className="flex justify-between items-center">
              <Image src="/images/dish.png" width={50} height={50} alt="logo" className='ml-3 p-1' />
              <ul className='md:flex hidden gap-8 items-center text-[14px] font-semibold'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Why Us</li>
                  <li>Blog</li>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded">Sign Up</button>
              </ul>
              <CiMenuKebab className='md:hidden text-2xl text-blue-500 hover:text-blue-700' />
          </div>
    </nav>
  )
}

export default NavBar
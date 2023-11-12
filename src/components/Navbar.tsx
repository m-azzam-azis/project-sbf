import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 w-full bg-white'>
      <nav className="t-0 bg-gray-800 py-4 px-2 min-[320px]:px-6 sm:px-12 md:px-18 lg:px-24 xl:px-30">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-3xl md:mx-0 hidden sm:block">judul</div>
          <div className="text-white font-semibold text-lg md:mx-0 block sm:hidden">M.Azzam</div>
          <div className='border-r-2 border-white h-8 min-[320px]:hidden'></div>
          <ul className="flex sm:space-x-4 space-x-2 md:space-x-8 lg:space-x-12">
            <li><a href="/home" className="text-white hover:text-gray-300 text-xs sm:text-lg">About</a></li>
            <li><a href="/experience" className="text-white hover:text-gray-300 text-xs sm:text-lg">Courses</a></li>
            <li><a href="/experience" className="text-white hover:text-gray-300 text-xs sm:text-lg">Our Devs</a></li>

          </ul>
        </div>
      </nav> 
    </div>
  )
}

export default Navbar
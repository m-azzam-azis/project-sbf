import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function about() {
  return (
    <div>
      <Navbar/>
      <div className='absolute top-0' id='company'></div>
    <main className=" min-h-full bg-our-gray py-8 px-20 min-w-[1200px]">
      <div className=' bg-dark-purple rounded-3xl relative text-white mb-32' >
        <Image
            className='w-full z-0 opacity-50 rounded-3xl'
            src="/gedung/gedung.png"
            width={500}
            height={500}
            alt="icon"
              />
        <div className='flex w-1/2'>
          <div className='z-10 absolute top-[27%] pl-10 gap-10 grid grid-rows-2 w-[60%]'>
            <h1 className='text-7xl font-bold '>Company</h1>
            <p className='text-2xl'>Tim kami terdiri dari web developer dan desainer UI/UX ahli, menciptakan pengalaman web inovatif melalui kombinasi keahlian teknis dan kreativitas.</p>
          </div>
        </div>
      </div>
      <div className='grid grid-rows-2 items-center justify-center text-center gap-10 mb-32'>
        <h1 className='text-4xl font-bold'>Our Team</h1>
        <p className='mx-72 text-xl'>Tim kami terdiri dari web developer dan desainer UI/UX ahli, menciptakan pengalaman web inovatif melalui kombinasi keahlian teknis dan kreativitas.</p>
      </div>
      <h1 className='text-4xl font-bold text-purple-800 my-10'>UI / UX Designers</h1>
      <div className='grid grid-cols-3 w-full overflow-scroll gap-10 mb-32'>
        <div className='w-full h-full bg-gray-300 rounded-3xl p-8 grid grid-cols-2'>
        <Image
            className='w-full z-0 opacity-50 rounded-3xl'
            src="/gedung/gedung.png"
            width={500}
            height={500}
            alt="icon"
              />
        </div>
        <div className='w-full h-full bg-gray-300 rounded-3xl p-8 grid grid-cols-2'>
          
        </div>
        <div></div>
      </div>
      <h1 className='text-4xl font-bold text-purple-800 my-10'>Software Engineers</h1>
      <div className='grid grid-cols-3 w-full overflow-scroll gap-10 mb-32'>
        <div className='w-full h-full bg-gray-300 rounded-3xl'>aaa</div>
        <div className='w-full h-full bg-gray-300 rounded-3xl'>aaa</div>
        <div className='w-full h-full bg-gray-300 rounded-3xl'>aaa</div>
      </div>
    </main>
    </div>
  )
}
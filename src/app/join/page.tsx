import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function join() {
  return (
    <div>
      <Navbar/>
      <main className=" min-h-screen bg-our-gray min-w-[1200px] w-full">
        <div className='grid grid-cols-2 w-full min-h-screen overflow-hidden relative'>
          <div className='flex items-center justify-center h-full'>
            <h1 className='text-black text-5xl font-bold mx-20 '>
              Gabung dengan <span className='underline decoration-4 decoration-our-orange'>Syllogism</span> hari ini. 
            </h1>
          </div>
          
          <div className='bg-dark-purple flex items-center justify-center'>

            <div className='bg-our-gray text-black z-10 px-1/5 rounded-3xl'>
              <div className='relative grid grid-rows-2 py-10 px-12 w-full h-[95%] transition-all'>
                <div className='h-full w-full text-center'>
                  <p className='font-extrabold text-4xl top-10 flex px-12 py-5'>Join Us Now!</p>
                </div>
                <a target='_blank' href="https://www.youtube.com/watch?v=xvFZjo5PgG0" className='transition-all border-transparent border-4 text-white h-full w-full py-10 text-center bg-black rounded-full hover:bg-our-orange hover:border-black hover:text-black'>
                  <div className='text-3xl font-bold '>Sign Up</div>
                </a>
              </div>
            </div>

            <div className="absolute right-0 top-0 rounded-[50%] [background:radial-gradient(50%_80%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px]">
            </div>
            <div className="absolute right-20 top-20 rounded-[50%] [background:radial-gradient(50%_80%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px]">
            </div>
            <div className="absolute right-[28%] bottom-0 rounded-[50%] [background:radial-gradient(50%_80%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px]">
            </div>
            <div className="absolute right-[37%] bottom-[7%] rounded-[50%] [background:radial-gradient(50%_80%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px]">
            </div>
          </div>

            
        </div>
      </main>
    </div>
  )
}
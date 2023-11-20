import React from 'react'
import Image from 'next/image'


export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-dark-purple via-black to-dark-purple text-white px-2 min-w-[1200px] h-fit'>
      <div className="mx-10 grid grid-cols-4 gap-4 content-evenly mb-10 pt-10">
        <div className='text-xl text-white font-bold text-left inline-block w-52 h-full'>
          <h1 className='text-3xl mb-4'>Syllogism</h1>
          <div className='w-1/3 text-xl text-left font-normal'>
            <p className='mb-2 whitespace-nowrap text-lg'>Fakultas Ilmu Komputer,</p>
            <p className='mb-2 whitespace-nowrap text-lg'>Universitas Indonesia,</p>
            <p className='mb-2 whitespace-nowrap text-lg'>Depok</p>
            <p className='whitespace-nowrap text-lg'>16424</p>
          </div>
        </div>
        
        <div className='text-2xl text-white font-semibold text-left inline-block w-52 h-full'>
        <h1 className='text-2xl mb-4'>Tentang Kami</h1>
          <div className='w-1/3 text-xl text-left font-normal'>
            <a href="/about#company"><p className='mb-2 whitespace-nowrap text-lg'>Company</p></a>
            <p className='mb-2 whitespace-nowrap text-lg'>Our Team</p>
            <p className='mb-2 whitespace-nowrap text-lg'>Partner With Us</p>
            <p className='mb-2 whitespace-nowrap text-lg'>Pusat Bantuan</p>
          </div>
        </div>
        
        <div className='text-2xl text-white font-semibold text-left inline-block  h-full'>
          <h1 className='text-2xl mb-4'>Kelas</h1>
          <div className='w-1/3 text-xl text-left font-normal'>
            <a href='/kelas#materi'><p className='mb-2 hover:translate-x-1 transition-all whitespace-nowrap text-lg'>Materi</p></a>
            <a href='/kelas#penawaran'><p className='mb-2 hover:translate-x-1 transition-all whitespace-nowrap text-lg'>Penawaran</p></a>
            <a href='/kelas#testimoni'><p className='mb-2 hover:translate-x-1 transition-all whitespace-nowrap text-lg'>Testimoni</p></a>
          </div>
        </div>

        <div className='text-2xl text-white font-semibold text-left inline-block h-full' ><h1 className='text-2xl mb-4'>Contacts</h1>
          <ul className='w-1/3 text-xl text-left font-normal'>
            <li className='transition-all hover:translate-x-1 hover:text-pink-400'>
              <a className='mb-4 whitespace-nowrap text-lg w-6 h-6 flex' href="https://www.instagram.com/bemfasilkomui/" target='_blank'>
                <img src="/sosmed/ig.svg" className="" alt="icon" />

                <p className='self-center pl-4'>@bemfasilkomui</p>
              </a>
            </li>
            <li className='transition-all hover:translate-x-1 hover:text-green-500'>
              <a className='mb-4 whitespace-nowrap text-lg w-6 h-6 flex' href="tel:+622120921334" target='_blank'>
                <img src="/sosmed/telp.svg" className="" alt="icon" />
                <p className='self-center pl-4'>&#40;021&#41; 20921334</p>
              </a>
            </li>
            <li className='transition-all hover:translate-x-1 hover:text-blue-500'>
              <a className='mb-4 whitespace-nowrap text-lg w-6 h-6 flex' href="https://linkedin.com" target='_blank'>
                <img src="/sosmed/linkedin.svg" className="" alt="icon" />
                <p className='self-center pl-4'>bemfasilkomui</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mx-10 text-xl font-bold border-b-[1px] border-white '></div>
      <div>
        <h1 className='text-center py-4'>
          &copy; 2023 Copyright Syllogism
        </h1>
      </div>
    </div>
  )
}
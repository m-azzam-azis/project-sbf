import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-black text-white px-2 min-[320px]:px-6 sm:px-12 md:px-18 lg:px-24 xl:px-30 py-2 w-full'>
      <h1 id='contact' className='px-2 py-3 text-xl font-bold border-b-[1px] border-white mb-3'>Feel free to contact us</h1>
      <ul className='p-2 items-center'>
        <li id='insta'>
          <a href="https://www.instagram.com/" target='_blank' className='flex py-2'>
            <Image
              className='float-left mr-2 md:text-xl'
              src="/instagram.png"
              width={22}
              height={22}
              alt="icon"
            />
            Instagram
          </a>
        </li>
        <li id='line'>
          <a href="https://line.me" target='_blank' className=' flex py-2'>
            <Image
            className='float-left mr-2'
            src="/line.png"
            width={22}
            height={22}
            alt="icon"
          />
            Line
          </a>
        </li>
        <li id='email'>
          <a href="mailto:ui.ac.id" target='_blank' className=' flex py-2'>
          <Image
              className='float-left mr-2'
              src="/google-plus.png"
              width={22}
              height={22}
              alt="icon"
            />
            E-mail
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
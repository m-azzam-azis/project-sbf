import React from 'react'
import Image from 'next/image'


export default function Footer() {
  

  return (
    <div className='bg-black text-white px-30 py-2 min-w-[1200px]'>
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
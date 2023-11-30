import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function about() {
  return (
    <div>
      <Navbar />
      <div className='absolute top-0' id='company'></div>
      <main className=" min-h-full bg-our-gray py-8 px-20 min-w-[1200px]">
        <div className=' bg-dark-purple rounded-3xl relative text-white' >
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
        <div id='team' className='flex mb-32'></div>
        <div className='grid grid-rows-2 items-center justify-center text-center gap-10 mb-32' id='team'>
          <h1 className='text-4xl font-bold'>Our Team</h1>
          <p className='mx-72 text-xl'>Tim kami terdiri dari web developer dan desainer UI/UX ahli, menciptakan pengalaman web inovatif melalui kombinasi keahlian teknis dan kreativitas.</p>
        </div>
        <h1 className='text-4xl font-bold text-purple-800 my-10'>UI / UX Designers</h1>

        <div className='grid grid-cols-3 w-full overflow-scroll gap-10 mb-32'>

          <div className='w-full h-full bg-gray-300 rounded-3xl py-4 grid grid-rows-2 overflow-hidden relative border-4 border-transparent hover:border-pink-500 transition-all'>
            <div className='relative h-full w-full items-center justify-center pt-6'>
              <Image
                className='rounded-3xl mx-auto'
                src="/about/purple_box.png"
                width={300}
                height={300}
                alt="icon"
              />
              <Image
                className='w-full h-full pl-6 z-10 top-0 absolute object-contain rounded-3xl'
                src="/about/savitri.png"
                width={300}
                height={300}
                alt="icon"
              />
            </div>
            <div className='pt-6 grid grid-rows-3 px-10'>
              <div>
                <h1 className='text-3xl font-bold text-purple-900'>Kadek Savitri</h1>
                <p className='font-light text-sm text-purple-900'>UI UX designer</p>
              </div>
              <div>
                <p className=' pr-2 pb-2 text-justify'>
                  Mahasiswi Sistem Informasi angkatan Gaung 2023. Big interested in Project Manager and UI/UX design.
                </p>
              </div>

              <div className='pt-4  rounded-lg'>
                <a href="https://instagram.com/kadeksavitrii" target='_blank' className='flex'>
                  <Image
                    className='object-contain rounded-xl'
                    src="/sosmed/ig_colour.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <div className='self-start pl-3 hover:text-pink-600 transition-colors col-span-5 '>kadeksavitrii</div>
                </a>

              </div>
            </div>
          </div>


          <div className='w-full h-full bg-gray-300 rounded-3xl py-4 grid grid-rows-2 overflow-hidden relative border-4 border-transparent hover:border-pink-500 transition-all'>
            <div className='relative h-full w-full items-center justify-center pt-6'>
              <Image
                className='rounded-3xl mx-auto'
                src="/about/purple_box.png"
                width={300}
                height={300}
                alt="icon"
              />
              <Image
                className='w-full h-full pl-6 z-10 top-0 absolute object-contain rounded-b-[4.3rem]'
                src="/about/rania1.png"
                width={500}
                height={300}
                alt="icon"
              />
            </div>
            <div className='pt-6 grid grid-rows-3 px-10'>
              <div>
                <h1 className='text-3xl font-bold text-purple-900'>Rania Berliana</h1>
                <p className='font-light text-sm text-purple-900'>UI UX designer</p>
              </div>
              <div>
                <p className=' pr-2 pb-2 text-justify'>
                  Mahasiswi Sistem Informasi angkatan Gaung 2023. Hobi main piano dan dengerin lagu.
                </p>
              </div>

              <div className='pt-4  rounded-lg'>
                <a href="https://instagram.com/raniaberliana" target='_blank' className='flex'>
                  <Image
                    className='object-contain rounded-xl'
                    src="/sosmed/ig_colour.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <div className='self-start pl-3 hover:text-pink-600 transition-colors col-span-5 '>raniaberliana</div>
                </a>

              </div>
            </div>
          </div>

          <div></div>
        </div>



        <h1 className='text-4xl font-bold text-purple-800 my-10'>Software Engineers</h1>
        <div className='grid grid-cols-3 w-full overflow-scroll gap-10 mb-32'>
          <div className='w-full h-full bg-gray-300 rounded-3xl py-4 grid grid-rows-2 overflow-hidden relative border-4 border-transparent hover:border-pink-500 transition-all'>
            <div className='relative h-full w-full items-center justify-center pt-6'>
              <Image
                className='rounded-3xl mx-auto'
                src="/about/purple_box.png"
                width={300}
                height={300}
                alt="icon"
              />
              <Image
                className='w-full h-full pl-6 z-10 top-0 absolute object-contain rounded-br-[4.5rem] '
                src="/about/azzam.png"
                width={700}
                height={700}
                alt="icon"
              />
            </div>
            <div className='pt-6 grid grid-rows-3 px-10'>
              <div>
                <h1 className='text-3xl font-bold text-purple-900'>Muhammad Azzam</h1>
                <p className='font-light text-sm text-purple-900'>Software Engineer</p>
              </div>
              <div>
                <p className=' pr-2 pb-2 text-justify'>
                  Freshman in Information Systems CSUI. Have interest in nature, sports and entrepreneurship.
                </p>
              </div>

              <div className='pt-4  rounded-lg'>
                <a href="https://instagram.com/m.azzam.azis" target='_blank' className='flex'>
                  <Image
                    className='object-contain rounded-xl'
                    src="/sosmed/ig_colour.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <div className='self-start pl-3 hover:text-pink-600 transition-colors col-span-5 '>m.azzam.azis</div>
                </a>

              </div>
            </div>
          </div>


          <div className='w-full h-full bg-gray-300 rounded-3xl py-4 grid grid-rows-2 overflow-hidden relative border-4 border-transparent hover:border-pink-500 transition-all'>
            <div className='relative h-full w-full items-center justify-center pt-6'>
              <Image
                className='rounded-3xl mx-auto'
                src="/about/purple_box.png"
                width={300}
                height={300}
                alt="icon"
              />
              <Image
                className='w-full h-full pl-6 z-10 top-0 absolute object-contain rounded-bl-[4.3rem]'
                src="/about/grace.png"
                width={300}
                height={300}
                alt="icon"
              />
            </div>
            <div className='pt-6 grid grid-rows-3 px-10'>
              <div>
                <h1 className='text-3xl font-bold text-purple-900'>Grace Karina</h1>
                <p className='font-light text-sm text-purple-900'>Software Engineer</p>
              </div>
              <div>
                <p className=' pr-2 pb-2 text-justify'>
                  Mahasiswi Ilmu Komputer angkatan Gaung 2023. Big interested in data science dan netsos.
                </p>
              </div>

              <div className='pt-4  rounded-lg'>
                <a href="https://instagram.com/gracekarinn" target='_blank' className='flex'>
                  <Image
                    className='object-contain rounded-xl'
                    src="/sosmed/ig_colour.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <div className='self-start pl-3 hover:text-pink-600 transition-colors col-span-5 '>gracekarinn</div>
                </a>

              </div>
            </div>
          </div>


          <div className='w-full h-full bg-gray-300 rounded-3xl py-4 grid grid-rows-2 overflow-hidden relative border-4 border-transparent hover:border-pink-500 transition-all'>
            <div className='relative h-full w-full items-center justify-center pt-6 '>
              <Image
                className='rounded-3xl mx-auto'
                src="/about/purple_box.png"
                width={300}
                height={300}
                alt="icon"
              />
              <Image
                className='w-full h-full pl-6 z-10 top-0 absolute object-contain rounded-3xl'
                src="/about/fr.png"
                width={300}
                height={300}
                alt="icon"
              />
            </div>
            <div className='pt-6 grid grid-rows-3 px-10 group'>
              <div>
                <h1 className='text-3xl font-bold text-purple-900'>Fariz Muhammad</h1>
                <p className='font-light text-sm text-purple-900'>Software Engineer</p>
              </div>
              <div className=''>
                <p className=' pr-2 pb-2 text-justify'>
                  Mahasiswa Sistem Informasi angkatan Gaung 2023. Interested in DatSci and Netsos
                </p>

              </div>

              <div className='pt-4  rounded-lg'>
                <a href="https://instagram.com/farizmrr" target='_blank' className='flex'>
                  <Image
                    className='object-contain rounded-xl'
                    src="/sosmed/ig_colour.svg"
                    width={20}
                    height={20}
                    alt="icon"
                  />
                  <div className='self-start pl-3 hover:text-pink-600 transition-colors col-span-5 '>farizmrr</div>
                </a>

              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  )
}
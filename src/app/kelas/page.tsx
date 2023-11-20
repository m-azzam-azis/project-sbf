import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function kelas() {
  return (
    <div>
      <Navbar/>
    <main className=" min-h-full bg-our-gray py-8 px-20 min-w-[1200px]">
      <div className='absolute top-0 h-0' id='materi'></div>
      <div className='flex justify-center w-full mt-8' >
        <h1 className='text-6xl text-dark-purple font-extrabold text-center'>Materi&nbsp;</h1>
        <h1 className='text-6xl text-our-orange font-extrabold text-center'>UTBK</h1>
      </div>
      <div className='flex justify-center w-full text-xl mt-4'>
        <p>Tingkatkan Performa UTBK-mu Jadi Lebih Optimal</p>
      </div>

      <div className='grid grid-rows-2 gap-20 py-5 pt-20 mb-20'>
        <li className='grid grid-cols-4 place-content-evenly place-items-center'>
          <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/gear_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
            <div className='pt-4 text-center- text-lg'>
              <p className='text-center'>Penalaran Umum</p>
            </div>
          </ul>
          <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/x_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <div className='pt-4 text-center- text-lg'>
                <p className='text-center'>Pengetahuan</p>
                <p className='text-center'>Kuantitatif</p>
              </div>
          </ul>
          <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/check_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <div className='pt-4 text-center- text-lg'>
                <p className='text-center'>Penalaran</p>
                <p className='text-center'>Matematika</p>
              </div>
          </ul>
        
          <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/chart_icon.png"
                width={100}
                height={100}
                alt="icon"
                
              />
              <div className='pt-4 text-center- text-lg'>
                <p className='text-center'>Pengetahuan dan</p>
                <p className='text-center'>Penalaran Umum</p>
              </div>
          </ul>
        </li>
        <li className='grid grid-cols-3 place-content-evenly place-items-center'>
        <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/bubble_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <div className='pt-4 text-center- text-lg'>
                <p className='text-center'>Pemahaman Bacaan</p>
                <p className='text-center'>dan Menulis</p>
              </div>
          </ul>
          <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/book_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <div className='pt-4 text-center- text-lg'>
                <p className='text-center'>Literasi Bahasa</p>
                <p className='text-center'>Indonesia</p>
              </div>
          </ul>
          <ul className='grid grid-rows-2 w-full h-full hover:-translate-y-2 transition-all'>
          <Image
                className='flex justify-self-center '
                src="/icon2/square_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <div className='pt-4 text-center text-lg '>
                <p className=''>Literasi Bahasa</p>
                <p className=''>Inggris</p>
              </div>
          </ul>
        </li>
      </div>

      <div className='h-auto bg-dark-purple rounded-3xl justify-center' id='testimoni'>
        <div className='m-10 py-36 text-center text-white'>
          <h1 className='text-6xl font-extrabold'>Apa Kata Mereka?</h1>
          <h2 className='mt-6 text-xl'>Pengalaman dari mereka yang udah pernah berlajar bareng di Sylogism</h2>
        </div>

        <div className='grid grid-cols-2 gap-20 mb-64'>
          <div className='grid grid-rows-2 bg-our-gray px-8 rounded-3xl w-[80%] h-full py-2 place-self-end hover:bg-white transition-all hover:shadow-md hover:shadow-slate-200'>
            <div className='flex'>
              <Image
                className='object-contain'
                src="/reviewer/review_cw.png"
                width={80}
                height={80}
                alt="icon"
              />
              <div className='place-self-center  ml-4'>
                <h1 className='text-2xl font-bold text-start place-self-center'>Priscillia Adira</h1>
                <h2>Sistem Informasi - UI</h2>
              </div>
                
            </div>
            <div className='pb-3'>
              <h1 className='text-justify'>
                Setelah kenal sama Syllogism, aku yang awalnya pemales jadi suka banget belajar dan rajin bedah soal. Dengan materi belajar berkualitas dari Syllogism, aku yang berasal dari daerah terpencil bisa bersaing hingga akhirnya diterima di jurusan Sisfor UI. 
              </h1>
            </div>
          </div>
          <div className='grid grid-rows-2 bg-our-gray px-8 rounded-3xl w-[80%] h-full py-2 place-self-start hover:bg-white transition-all hover:shadow-md hover:shadow-slate-200 '>
            <div className='flex'>
              <Image
                className='object-contain'
                src="/reviewer/review_cwk.png"
                width={80}
                height={80}
                alt="icon"
              />
              <div className='place-self-center  ml-4'>
                <h1 className='text-2xl font-bold text-start place-self-center'>Devan Cashel</h1>
                <h2>Ilmu Komputer - UI</h2>
              </div>
                
            </div>
            <div className='pb-3'>
              <h1 className='text-justify'>
                Belajar pakai Sylogisme mantep! Tutornya jelasin sampe gue ngerti. Selama SMA konsep belajar gue cuman ngapalin rumus. Ketika gue kenal Sylogisme, pola belajar gue berubah drastis. Bravo buat Sylogisme!
              </h1>
            </div>
          </div>
        </div>
        <div className='m-10 px-[23%] text-center text-white'>
          <h1 className='text-6xl font-extrabold'>Kelas Dengan</h1>
          <h1 className='text-6xl font-extrabold'>Tutor Keren</h1>
          <h2 className='mt-12 text-xl mb-24'>&quot;Syllogism menyajikan tutor-tutor ahli yang tidak hanya berkompeten namun juga asik dan seru loh!.  Dijaminan belajar akan lebih terasa menyenangkan dan materi pembelajaran menjadi lebih mudah dipahami.&quot;</h2>
        </div>
        <div className='flex justify-center relative mt-10 h-[650px]'>
          <Image
            className='object-contain z-20 absolute bottom-0 left-[13%] max-[1200px]:left-[7%]'
            src="/bawah-review/kiri.png"
            width={600}
            height={600}
            alt="icon"
              />
          <Image
            className='object-contain absolute bottom-0 z-30'
            src="/bawah-review/tengah.png"
            width={500}
            height={500}
            alt="icon"
              />
          <Image
            className='object-contain z-10 absolute bottom-0 right-[13%] mac-[1200px]:right[3%]'
            src="/bawah-review/kanan.png"
            width={500}
            height={500}
            alt="icon"
              />
          <Image
            className=' bottom-0 absolute z-0 w-full'
            src="/bawah-review/Ellipse 21 1.png"
            width={800}
            height={500}
            alt="icon"
              />
        </div>
        
      </div>

      <div className='justify-center w-full my-10 px-10' id='penawaran'>
        <h1 className='text-center font-extrabold text-5xl text-dark-purple py-20'>Pilih Paket Langganan Anda</h1>
          <li className='grid grid-cols-3 place-content-evenly place-items-center gap-12'>


          <a href='/join' className='relative grid grid-rows-5 py-10 w-full h-[90%] hover:h-[95%] transition-all bg-light-purple rounded-[2.5rem] place-items-center shadow-inner shadow-dark-purple hover:shadow-none hover:border-pink-500 border-4 border-our-gray'>
            <div className='h-full w-full pt-10 text-center row-span-1'>
              <p className='text-black text-2xl font-medium'>Pintar</p>
            </div>
            <div className=' text-black h-full w-full py-10 text-center  row-span-2'>
              <h1 className='text-5xl font-bold '>
                Rp999.999
              </h1>
              <p>per bulan</p>
            </div>
            <div className='self-end h-full w-full py-10 text-start px-12  row-span-2'>
              <ul className='list-disc'>
                <li>Langganan <span className='font-semibold'>1 bulan</span></li>
                <li>Akses gratis video pembelajaran mata pelajaran terpilih</li>
                <li>Layanan 24 jam</li>
              </ul>
            </div>
          </a>


          <a href='/join' className='relative grid grid-rows-5 py-10 w-full h-[95%] hover:h-full transition-all bg-dark-purple rounded-[2.5rem] place-items-center shadow-inner shadow-black hover:shadow-none hover:border-pink-500 hover:border-[5px]'>
            <p className='absolute top-0 left-10 bg-our-orange rounded-b-2xl px-2 pb-2 text-white font-medium shadow-inner'>Best Value</p>
            <div className='h-full w-full pt-10 text-center row-span-1'>
              <p className='text-white text-2xl font-medium'>Genius</p>
            </div>
            <div className=' text-white h-full w-full py-10 text-center  row-span-2'>
              <h1 className='text-5xl font-bold '>
                Rp899.999
              </h1>
              <p>per bulan</p>
            </div>
            <div className='self-end h-full w-full py-10 text-start px-12  row-span-2 text-white'>
              <ul className='list-disc'>
                <li>Langganan <span className='font-semibold'>6 bulan</span> &#40;1 semester&#41;</li>
                <li>Akses gratis semua video pembelajaran</li>
                <li>Layanan 24 jam</li>
              </ul>
            </div>
          </a>


            <a href='/join' className='relative grid grid-rows-5 py-10 w-full h-[90%] hover:h-[95%] transition-all bg-light-purple rounded-[2.5rem] place-items-center shadow-inner shadow-dark-purple hover:shadow-none hover:border-pink-500 border-4 border-our-gray'>
              <div className='h-full w-full pt-10 text-center row-span-1'>
                <p className='text-black text-2xl font-medium'>Cerdas</p>
              </div>
              <div className=' text-black h-full w-full py-10 text-center row-span-2'>
                <h1 className='text-5xl font-bold '>
                  Rp949.999
                </h1>
                <p>per bulan</p>
              </div>
              <div className='self-end h-full w-full py-10 text-start px-12  row-span-2'>
                <ul className='list-disc'>
                  <li>Langganan <span className='font-semibold'>3 bulan</span> &#40;1/2 semester&#41;</li>
                  <li>Akses gratis video pembelajaran mata pelajaran terpilih</li>
                  <li>Layanan 24 jam</li>
                </ul>
              </div>
            </a>
        
          
        </li>
      </div>
    </main>
    </div>
  )
}
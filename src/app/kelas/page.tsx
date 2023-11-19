import React from 'react'
import Image from 'next/image'

export default function kelas() {
  return (
    <main className=" min-h-full bg-our-gray p-8">
      <div className='flex justify-center container m-8 '>
        <h1 className='text-4xl text-purple-700 font-bold'>Materi&nbsp;</h1>
        <h1 className='text-4xl text-orange-500 font-bold'>UTBK</h1>
      </div>
      <div className='flex justify-center w-full'>
        <p>Tingkatkan Performa UTBK-mu Jadi Lebih Optimal</p>
      </div>

      <div className='grid grid-rows-2 py-5 gap-20 pt-20 mb-20'>
        <li className='grid grid-cols-4 place-content-evenly place-items-center'>
          <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/gear_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
            <p className='text-center'>Penalaran Umum</p>
            <p></p>
          </ul>
          <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/x_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <p className='text-center'>Pengetahuan</p>
              <p className='text-center'>Kuantitatif</p>
          </ul>
          <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/check_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <p className='text-center'>Penalaran</p>
              <p className='text-center'>Matematika</p>
          </ul>
        
          <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/chart_icon.png"
                width={100}
                height={100}
                alt="icon"
                
              />
              <p className='text-center'>Pengetahuan dan</p>
              <p className='text-center'>Penalaran Umum</p>
          </ul>
        </li>
        <li className='grid grid-cols-3 place-content-evenly place-items-center'>
        <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/bubble_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <p className='text-center'>Pemahaman Bacaan</p>
              <p className='text-center'>dan Menulis</p>
          </ul>
          <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/book_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <p className='text-center'>Literasi Bahasa</p>
              <p className='text-center'>Indonesia</p>
          </ul>
          <ul className='w-35 h-35'>
          <Image
                className='items-center m-3'
                src="/icon2/square_icon.png"
                width={100}
                height={100}
                alt="icon"
              />
              <p className='text-center'>Literasi Bahasa</p>
              <p className='text-center'>Inggris</p>
          </ul>
        </li>
      </div>

      <div className='h-auto bg-dark-purple rounded-3xl justify-center'>
        <div className='m-10 py-10 text-center text-white'>
          <h1 className='text-4xl font-extrabold'>apa kata mereka?</h1>
          <h2>pengalaman hahahahahaha</h2>
        </div>
        <div className='grid grid-cols-2 place-items-center justify-evenly pb-20'>
          <div className='grid grid-rows-2 bg-our-gray p-5 rounded-lg w-2/3 h-64'>
            <div className=' flex'>
              <Image
                className='object-contain'
                src="/reviewer/review_cw.png"
                width={80}
                height={80}
                alt="icon"
              />
              <div className='place-self-center  ml-4'>
                <h1 className='text-2xl font-bold text-start bg-white span place-self-center'>Priscillia Adira</h1>
                <h2>Anak Ik</h2>
              </div>
                
            </div>
            <div className='mt-3'>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae distinctio blanditiis sed, praesentium aperiam, incidunt quam possimus placeat mollitia saepe consectetur? Animi odit, laudantium totam reiciendis nostrum quidem impedit.
              </h1>
            </div>
          </div>
          <div className='grid grid-rows-2 bg-our-gray p-2 rounded-lg w-2/3 h-52'>
            <div className=' flex'>
              <Image
                className='my-2 mx-4'
                src="/reviewer/review_cwk.png"
                width={80}
                height={80}
                alt="icon"
              />
              <div className='place-self-center'>
                <h1 className='text-2xl font-bold text-start bg-white span place-self-center'>Priscillia Adira</h1>
                <h2>Anak Ik</h2>
              </div>
                
            </div>
            <div>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae distinctio blanditiis sed, praesentium aperiam, incidunt quam possimus placeat mollitia saepe consectetur? Animi odit, laudantium totam reiciendis nostrum quidem impedit.
              </h1>
            </div>
          </div>
        </div>
        <div className='m-10 px-[23%] text-center text-white pb-64'>
          <h1 className='text-4xl font-extrabold'>Kelas Dengan</h1>
          <h1 className='text-4xl font-extrabold'>Tutor Keren</h1>
          <h2 className='mt-8'>&quot;Syllogism menyajikan tutor-tutor ahli yang tidak hanya berkompeten namun juga asik dan seru loh!.  Dijaminan belajar akan lebih terasa menyenangkan dan materi pembelajaran menjadi lebih mudah dipahami.&quot;</h2>
        </div>
        <div className='flex justify-center relative pt-72 mt-64'>
          <Image
            className='object-contain z-20 absolute bottom-0 left-[14%]'
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
            className='object-contain z-10 absolute bottom-0 right-[11%]'
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
    </main>
  )
}
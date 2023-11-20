import Image from 'next/image'
import Link from 'next/link'
import Navbar1 from '@/components/Navbar1'


export default function Home() {
  return (
    <div className='bg-gradient-to-r from-[#182862] via-black to-[#191233] min-w-[1200px]'>
      <Navbar1/>
    <main className=" bg-gradient-to-r from-[#182862] via-black to-[#191233] min-h-screen flex-col items-center p-24 relative overflow-x-hidden overflow-y-hidden min-w-[1200px] grid grid-rows-3 w-full">
        <div className=" text-[70px] text-white font-extrabold w-full text-center z-10">
        Platform Belajar UTBK 
        No. 1 di Indonesia
        </div>
        <div className="top-[469px] left-[220px] text-white inline-block w-full text-center text-xl">
        Bersama Syllogism belajar bukan lagi beban, tapi perjalanan 
        yang mengasyikkan!
        </div>
        <div className="flex items-center mx-auto">
          <a href="/join" className="flex items-center">
            <div className="bg-our-orange text-white text-center font-bold py-2 px-4 rounded-full hover:bg-white hover:text-our-orange hover:-translate-y-1 transition-all hover:border-4 hover:border-our-orange">
              Gabung Sekarang
            </div>
          </a>
        </div> 
        <div className="absolute top-[325px] left-[1130px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
        </div>
        <div className="absolute top-[325px] left-[1050px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
        </div>
        <div className="absolute top-[550px] left-[-74px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
        </div>
        <div className="absolute top-[550px] left-[-154px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#150123,_rgba(26,_16,_89,_0.82)_59.22%,_#502f7d)] w-[291px] h-[300px] [transform:_rotate(-90deg)] [transform-origin:0_0]">
        </div>

      
     
    </main></div>
  )
}

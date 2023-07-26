import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { // si el archivo es layout o page lo reconocera y usara la metadata
  title: 'About Us',
  description: 'Sobre, nosotros, guitarla',
}

export default function Nosotros() {
  return (
    <div>
      <h1 className='text-2xl font-extrabold text-[#d88506] text-center my-10'>About us</h1>
      <div className='mb-8 flex flex-col mx-10 md:mx-40 md:flex-row md:items-center md:gap-5'>
        <div className='w-full md:w-1/2'>
          <Image src='/assets/nosotros.jpg' alt='imagen sobre nosotros' width={500} height={500} />
        </div>
        <div className='w-full md:w-1/2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
      </div>
    </div>
  )
}

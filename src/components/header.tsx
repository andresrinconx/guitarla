"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <div className='h-full mx-4 flex flex-col justify-center items-center md:flex-row md:justify-between md:mx-40'>
      <div>
        <Link href='/'>
          <Image src="/assets/logo.svg" alt='imagen logo' width={180} height={180} />
        </Link>
      </div>

      <nav className='flex flex-col items-center space-y-1 text-center text-white font-bold mt-5 md:flex-row md:gap-3 md:mt-0'>
        <Link 
          className={`hover:bg-[#d88506] uppercase transition duration-300 ease-in-out ${pathname === '/' ? 'bg-[#d88506]' : ''}`} 
          href='/'
        >Inicio</Link>
        <Link 
          className={`hover:bg-[#d88506] uppercase transition duration-300 ease-in-out ${pathname === '/nosotros' ? 'bg-[#d88506]' : ''}`} 
          href='/nosotros'
        >Nosotros</Link>
        <Link 
          className={`hover:bg-[#d88506] uppercase transition duration-300 ease-in-out ${pathname === '/blog' ? 'bg-[#d88506]' : ''}`} 
          href='/blog'
        >Blog</Link>
        <Link 
          className={`hover:bg-[#d88506] uppercase transition duration-300 ease-in-out ${pathname === '/tienda' ? 'bg-[#d88506]' : ''}`} 
          href='/tienda'
        >Tienda</Link>
        <Link 
          className={`hover:bg-[#d88506] uppercase transition duration-300 ease-in-out ${pathname === '/carrito' ? 'bg-[#d88506]' : ''}`} 
          href='/carrito'
        >
          <Image src='/assets/carrito.png' alt='imagen carrito' width={30} height={25} />
        </Link>
      </nav>
    </div>
  )
}
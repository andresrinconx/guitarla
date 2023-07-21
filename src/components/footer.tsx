import Link from 'next/link'

export default function Footer() {
  return (
    <div className='md:flex md:flex-row md:justify-between md:mx-8'>
      <nav className='flex flex-col text-center text-white font-bold mt-5 md:flex-row md:gap-3 md:mt-0'>
        <Link
          className='text-xl'
          href='/'
        >Inicio</Link>
        <Link
          className='text-xl'
          href='/nosotros'
        >Nosotros</Link>
        <Link
          className='text-xl'
          href='/blog'
        >Blog</Link>
        <Link
          className='text-xl'
          href='/tienda'
        >Tienda</Link>
      </nav>
      <div>
        <p className='text-white text-xl text-center mt-5 md:mt-0'>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

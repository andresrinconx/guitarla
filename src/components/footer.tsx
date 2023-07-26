import Link from 'next/link'

export default function Footer() {
  return (
    <div className='md:flex md:flex-row md:justify-between md:mx-8'>
      <nav className='flex flex-col text-center text-white font-bold mt-5 md:flex-row md:gap-3 md:mt-0'>
        <Link
          className='text-xl'
          href='/'
        >Home</Link>
        <Link
          className='text-xl'
          href='/us'
        >About Us</Link>
        <Link
          className='text-xl'
          href='/blog'
        >Blog</Link>
        <Link
          className='text-xl'
          href='/store'
        >Store</Link>
      </nav>
      <div>
        <p className='text-white text-xl text-center mt-5 md:mt-0'>All rights reserved {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

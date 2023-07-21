import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'No encontrada',
  description: 'pagina no encontrada..',
}

export default function NotFound() {
  return (
    <div className='text-center my-20 space-y-10'>
      <h2 className='text-xl'>Pagina no encontrada</h2>
      <p className='text-[#d88506] text-lg'>
        <Link href="/tienda">Ir a la tienda</Link>
      </p>
    </div>
  )
}
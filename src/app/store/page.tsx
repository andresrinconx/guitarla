import Guitarra from '@/components/guitarra'
import type { Metadata } from 'next'
import { GuitarraInterface } from '@/interfaces/Guitarra'

export const metadata: Metadata = {
  title: 'Store',
  description: 'Esta es la tienda',
}

async function getGuitarras() { // se ejecuta en el servidor, por lo que cargara antes de mostrar el html y no en el proceso
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  return res.json()
}

export default async function Tienda() {
  const {data: guitarras} = await getGuitarras()
  return (
    <div>
      <h1 className='text-2xl font-extrabold text-[#d88506] text-center my-10'>Our Collection</h1>

      <div className='mx-20 mb-10 flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-7 md:mx-40'>
        {guitarras.map((guitarra: GuitarraInterface) => { // especificar el tipo de cada elemento 'guitarra'
          return (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra}
            />
          )
        })}
      </div>
    </div>
  )
}

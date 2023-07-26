import { GuitarraInterface } from "@/interfaces/Guitarra"
import Image from "next/image"
import Link from "next/link"

export default function Guitarra({guitarra}: {guitarra: GuitarraInterface}) { // se asigna un objeto en donde haya una propiedad que tenga todas las propiedades de GuitarraInterface
  const {nombre, precio, descripcion, imagen, url} = guitarra.attributes
  return (
    <div className='flex flex-col md:flex md:flex-row'>
      <div className='flex flex-col items-center md:justify-center md:w-2/5'>
        <Image src={imagen.data.attributes.formats.medium.url}
          alt={`imagen guitarra ${nombre}`} 
          width={90}
          height={40}
        />
      </div>
      <div className='md:w-3/5 md:flex md:flex-col'>
        <h1 className='uppercase text-[#d88506] font-bold mb-5'>{nombre}</h1>
        <p className='line-clamp-6'>{descripcion}</p>
        <p className='text-[#d88506] font-extrabold text-2xl my-3'>${precio}</p>
        <Link 
          className='uppercase bg-black text-white px-3 py-2 text-center mx-2 hover:bg-[#d88506]' 
          href={`/guitarras/${url}`}
        >See Product</Link>
      </div>
    </div>
  )
}

import Image from "next/image"
import { PostInterface } from '@/interfaces/Post'
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}: {post: PostInterface}) {
  const {titulo, contenido, publishedAt, imagen, url} = post.attributes

  // cambiar titulos
  const cambiarTitulo = () => {
    if(titulo == 'Primeros Pasos para Aprender') {
      return 'First Steps to Learn'
    }
    if(titulo == 'Como Elegir tu Próxima Guitarra') {
      return 'How to choose your next guitar'
    }
    if(titulo == 'Cómo Cambiar una Cuerda de Guitarra') {
      return 'How to Change a Guitar String'
    }
    if(titulo == 'Guitarras Eléctricas y Acústicas') {
      return 'Electric and Acoustic Guitars'
    }
    if(titulo == 'Como Lograr un Buen Sonido') {
      return 'How to get a good sound'
    }
    if(titulo == 'Partes de la Guitarra') {
      return 'Guitar Parts'
    }
  }
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center md:justify-center'>
        <Image src={imagen.data.attributes.formats.medium.url}
          alt={`imagen guitarra ${titulo}`} 
          width={400}
          height={300}
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-black my-5 text-2xl'>{cambiarTitulo()}</h1>
        <p className='text-[#d88506] font-extrabold my-3'>{formatearFecha(publishedAt)}</p>
        <p className='line-clamp-5'>{contenido}</p>
        <Link 
          className='mt-4 uppercase bg-black text-white px-3 py-2 text-center mx-2 hover:bg-[#d88506]' 
          href={`/posts/${url}`}
        >Read Post</Link>
      </div>
    </div>
  )
}

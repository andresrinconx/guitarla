import Image from "next/image"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GuitarLA:',
  description: 'la guitarra x es x y tiene las caracteristicas y',
}

async function getPost(path: string){
  const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${path}&populate=imagen`)
  return res.json()
}

export default async function Page({params}: {params: {url: string}}) {
  const path = params.url
  const {data} = await getPost(path)
  const {attributes: {titulo, contenido}} = data[0]

  // actualizar metadata
  metadata.title = `GuitarLA: ${titulo}`
  metadata.description = `GuitarLA: ${contenido}`

  //
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
    <div className='mb-10 mx-10 flex flex-col items-center md:flex-col md:mx-64'>
      <div className='my-5 w-full'>
        <Image
          src={data[0].attributes.imagen.data.attributes.formats.medium.url} 
          alt={`imagen guitarra ${data[0].attributes.nombre}`} 
          width={1000}
          height={500}
        />
      </div>
      <div className='md:flex md:flex-col md:justify-center'>
        <h1 className='font-black text-2xl mb-5'>{cambiarTitulo()}</h1>
        <p>{contenido}</p>
      </div>
    </div>
  )
}
"use client"
import { CursoInterface } from "@/interfaces/Curso"
import Image from "next/image"

export default function Curso({curso}: {curso: CursoInterface}) {
  const {titulo, contenido, imagen: {data: {attributes: {formats: {medium: {url}}}}}} = curso.attributes

  return (
    <>
      <div className='relative'>
        <div className='2xl:mx-52'>
          <Image src={url} alt='imagen curso' width={10000} height={10000} />
        </div>
        <div className='absolute top-2 mx-4 md:top-16 md:right-10 md:w-1/2'>
          <h1 className='text-2xl font-extrabold text-[#d88506] text-center my-4 md:my-10'>{titulo == 'Cursos con hasta 30% de descuento' ? 'Courses with up to 30% discount' : ''}</h1>
          <p className='text-white text-center line-clamp-2 md:line-clamp-none'>{contenido}</p>
        </div>
      </div>
    </>
  )
}

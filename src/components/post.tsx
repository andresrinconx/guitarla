import Image from "next/image"
import { PostInterface } from '@/interfaces/Post'
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"

export default function Post({post}: {post: PostInterface}) {
  const {titulo, contenido, publishedAt, imagen, url} = post.attributes
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
        <h1 className='font-black my-5 text-2xl'>{titulo}</h1>
        <p className='text-[#d88506] font-extrabold my-3'>{formatearFecha(publishedAt)}</p>
        <p className='line-clamp-5'>{contenido}</p>
        <Link 
          className='mt-4 uppercase bg-black text-white px-3 py-2 text-center mx-2 hover:bg-[#d88506]' 
          href={`/posts/${url}`}
        >Leer Post</Link>
      </div>
    </div>
  )
}

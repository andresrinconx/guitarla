import Curso from "@/components/curso"
import Guitarra from "@/components/guitarra"
import Post from "@/components/post"
import { GuitarraInterface } from "@/interfaces/Guitarra"
import { PostInterface } from "@/interfaces/Post"

async function getGuitarras() {
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  return res.json()
}

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  return res.json()
}

async function getCurso() {
  const res = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
  return res.json()
}

export default async function Home() {
  // para obtener las respuestas en paralelo, al mismo tiempo
  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([getGuitarras(), getPosts(), getCurso()]) // guitarras y posts son el respectivo JSON, es lo que devuelven las funciones cuando las promesa se resuelven

  return (
    <div>
      <section className='my-5'>
        <h1 className='text-2xl font-extrabold text-[#d88506] text-center my-10'>Nuestra Coleccion</h1>

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
      </section>

      <section className='my-5'>
        <Curso curso={curso} />
      </section>

      <section className='my-5'>
        <h1 className='text-2xl font-extrabold text-[#d88506] text-center my-10'>Nuestros Posts</h1>

        <div className='mx-20 mb-10 flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-7 md:mx-40'>
          {posts.map((post: PostInterface) => { // especificar el tipo de cada elemento 'guitarra'
            return (
              <Post
                key={post.id}
                post={post} 
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
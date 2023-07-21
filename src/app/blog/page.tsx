import { Metadata } from 'next'
import { PostInterface } from '@/interfaces/Post'
import Post from '@/components/post'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Este es el blog',
}

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  return res.json()
}

export default async function Blog() {
  const {data: posts} = await getPosts()
  return (
    <div>
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
    </div>
  )
}
import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { Post } from '@/interfaces'

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(r => r.json())
      .then(setPosts)
  }, [])

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4">
          {posts.map(p => (
            <PostCard key={p.id} title={p.title} content={p.body} userId={p.userId} />
          ))}
        </div>
      </main>
    </>
  )
}

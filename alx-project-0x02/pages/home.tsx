import { useState } from 'react'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { Post } from '@/interfaces'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([{
    id: 1,
    title: 'First Post',
    body: 'This is a starter post.'
  }])
  const [isOpen, setIsOpen] = useState(false)

  function handleAdd(post: Omit<Post, 'id'>) {
    const next: Post = { ...post, id: Date.now() }
    setPosts(p => [next, ...p])
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Home</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setIsOpen(true)}>New Post</button>
        </div>

        <PostModal open={isOpen} onClose={() => setIsOpen(false)} onSubmit={(data) => { handleAdd(data); setIsOpen(false) }} />

        <div className="grid gap-4">
          {posts.map(p => (
            <Card key={p.id} title={p.title} content={p.body} />
          ))}
        </div>
      </main>
    </>
  )
}

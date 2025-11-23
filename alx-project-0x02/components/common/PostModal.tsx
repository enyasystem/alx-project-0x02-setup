import { useState, FormEvent } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (data: { title: string; body: string }) => void
}

export default function PostModal({ open, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  if (!open) return null

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title) return
    onSubmit({ title, body })
    setTitle('')
    setBody('')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <form onSubmit={handleSubmit} className="bg-white rounded p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">New Post</h2>
        <label className="block mb-2">Title
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2 mt-1" />
        </label>
        <label className="block mb-4">Content
          <textarea value={body} onChange={e => setBody(e.target.value)} className="w-full border p-2 mt-1" />
        </label>
        <div className="flex gap-2 justify-end">
          <button type="button" onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
      </form>
    </div>
  )
}

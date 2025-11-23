type Props = {
  title: string
  content: string
  userId?: number
}

export default function PostCard({ title, content }: Props) {
  return (
    <article className="border rounded p-4 bg-white shadow-sm">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </article>
  )
}

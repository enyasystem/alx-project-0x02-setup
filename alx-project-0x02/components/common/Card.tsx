type CardProps = {
  title: string
  content: string
}

export default function Card({ title, content }: CardProps) {
  return (
    <article className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </article>
  )
}

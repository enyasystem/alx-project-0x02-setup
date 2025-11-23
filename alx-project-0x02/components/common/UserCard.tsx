type Props = {
  name: string
  email: string
}

export default function UserCard({ name, email }: Props) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  )
}

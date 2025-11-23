type Props = {
  name: string
  email?: string
  address?: {
    street?: string
    suite?: string
    city?: string
    zipcode?: string
  }
}

export default function UserCard({ name, email, address }: Props) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{email}</p>
      {address && (
        <p className="text-sm text-gray-500 mt-2">
          {address.street}{address.suite ? `, ${address.suite}` : ''}{address.city ? `, ${address.city}` : ''}{address.zipcode ? ` (${address.zipcode})` : ''}
        </p>
      )}
    </div>
  )
}

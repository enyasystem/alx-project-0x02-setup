import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { User } from '@/interfaces'

export default function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(setUsers)
  }, [])

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="grid gap-4">
          {users.map(u => (
            <UserCard key={u.id} name={u.name} email={u.email || ''} />
          ))}
        </div>
      </main>
    </>
  )
}

import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { User } from '@/interfaces'
import { GetStaticProps } from 'next'

type Props = {
  users: User[]
}

export default function Users({ users }: Props) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="grid gap-4">
          {users.map(u => (
            <UserCard key={u.id} name={u.name} email={u.email || ''} address={u.address} />
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return {
    props: {
      users,
    },
  }
}

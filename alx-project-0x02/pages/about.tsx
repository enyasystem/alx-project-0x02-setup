import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p className="mb-6">This page demonstrates reusable Button components with different sizes and shapes.</p>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </main>
    </>
  )
}

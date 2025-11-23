import Head from 'next/head'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>SoloForge — Next.js Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Welcome to SoloForge</h2>
        <p className="text-gray-700">This starter app demonstrates a Next.js project scaffolded with TypeScript and Tailwind CSS. Begin building components and pages under <code>components/</code> and <code>pages/</code>.</p>
      </main>
    </>
  )
}

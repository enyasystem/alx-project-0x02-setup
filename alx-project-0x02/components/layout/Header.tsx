import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">SoloForge — Next.js Starter</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/home" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/posts" className="hover:underline">Posts</Link>
            </li>
            <li>
              <Link href="/users" className="hover:underline">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

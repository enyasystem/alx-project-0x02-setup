import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">SoloForge — Next.js Starter</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="hover:underline">Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/users">
                <a className="hover:underline">Users</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

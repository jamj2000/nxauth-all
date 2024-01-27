import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1>Página principal</h1>
      <ul>
        <li><Link href="/admin">Panel de admin</Link></li>
        <li><Link href="/dashboard">Dashboard del usuario</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>

    </main>
  )
}

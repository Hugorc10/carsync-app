import Link from 'next/link'

export default async function Home() {
  const response = await fetch('https://api.github.com/users/diego3g')
  const data = await response.json()

  console.log(data)

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

// Server-side first

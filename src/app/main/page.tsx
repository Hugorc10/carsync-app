import Link from 'next/link'

export default async function Main() {
  return (
    <div>
      <h1>Main Page</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

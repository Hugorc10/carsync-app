import Link from 'next/link'

export default function FormSignIn() {
  return (
    <>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:outline-none focus:ring"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          Senha
        </label>
        <input
          type="password"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:outline-none focus:ring"
        />
        <Link
          href="/forget"
          className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
        >
          Esqueceu a senha?
        </Link>
        <div className="mt-2">
          <Link href="/dashboard">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Entrar
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

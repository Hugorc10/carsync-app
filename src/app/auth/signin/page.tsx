import { Logo } from '@/components'
import FormSignIn from '@/components/Forms/SignIn'
import Image from 'next/image'
import Link from 'next/link'

export default async function SignIn() {
  return (
    <section>
      <div className="flex items-center justify-center mx-auto md:flex-row md:h-screen">
        <a className="flex items-center justify-center w-full md:w-1/2">
          <Logo />
        </a>
        <div className="flex flex-col w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Bem vindo!
          </h1>
          <form className="mt-6">
            <FormSignIn />
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">ou</div>
          </div>
          <div className="flex mt-4 gap-x-2">
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <Image
                src="/images/google.svg"
                alt="Google"
                width={24}
                height={24}
              />
            </button>
            <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
              <Image
                src="/images/github.svg"
                alt="Google"
                width={24}
                height={24}
              />
            </button>
            <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
              <Image
                src="/images/twitter.svg"
                alt="Google"
                width={24}
                height={24}
              />
            </button>
          </div>

          <p className="mt-4 text-sm text-center text-gray-700">
            Não tem uma conta?{' '}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Cadastrar
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

// Server-side first

'use client'

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from './index'

function Navbar() {
  return (
    <header className="w-full  z-10 bg-slate-100">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sair"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handlerClick={() => console.log('Sair')}
        />
      </nav>
    </header>
  )
}

export default Navbar

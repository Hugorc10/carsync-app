import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarSync 2023
            <br />
            Todos direitos reservados &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{link.title}</h3>
              {link.links.map((link) => (
                <Link key={link.title} href={link.url}>
                  <p className="text-base text-gray-700">{link.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

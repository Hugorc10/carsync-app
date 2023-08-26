'use client'

import Image from 'next/image'
import { CustomButton } from './index'

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>

        <p className="hero__subtitle">
          We compare thousands of deals to get you there.
        </p>

        <CustomButton
          title="Explorar carro"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handlerClick={handleScroll}
        />
      </div>
      <div className="hero_image-container">
        <div className="hero__image">
          <Image src="/images/logo.png" alt="logo" width={400} height={400} />

          <div className="hero__image__overlay" />
        </div>
      </div>
    </div>
  )
}

export default Hero

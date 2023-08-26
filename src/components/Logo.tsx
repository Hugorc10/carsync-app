import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      width={700}
      height={700}
      alt="Logo da empresa"
    />
  )
}

export default Logo

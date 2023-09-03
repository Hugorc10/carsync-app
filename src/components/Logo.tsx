import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/images/logo.png"
      width={500}
      height={500}
      alt="Logo da empresa"
      className="h-auto hover:drop-shadow"
    />
  )
}

export default Logo

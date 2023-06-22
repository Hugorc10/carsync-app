interface ProductProps {
  params: {
    id: string
  }
}

export default function Page({ params }: ProductProps) {
  return (
    <div>
      <h1>Product: {params.id}</h1>
    </div>
  )
}

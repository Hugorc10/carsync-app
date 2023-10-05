import Image from 'next/image'

function Group({ groupNumber }: { groupNumber: number }) {
  return (
    <div className="flex flex-col items-center border rounded-lg p-5">
      <Image
        className="object-contain"
        src="/images/grupo.png"
        alt="hero"
        width={200}
        height={200}
      />
      <h2 className="font-bold text-xl mb-2">Grupo {groupNumber}</h2>
      <p className="text-gray-700 text-base mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <button className="mt-4 px-6 py-3 rounded-md bg-green-600">
        Ver info
      </button>
    </div>
  )
}

export default Group

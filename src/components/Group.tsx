import React from 'react'
import Image from 'next/image'

function GroupCard({ groupNumber }: { groupNumber: number }) {
  return (
    <div className="max-w-sm w-full border overflow-hidden rounded shadow-lg">
      <Image src="/images/grupo.png" alt="hero" width={200} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grupo {groupNumber}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  )
}

export default GroupCard

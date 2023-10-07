import React from 'react'
import Group from './Group'

function GroupCard({ groupNumber }: { groupNumber: number }) {
  return (
    <div className="flex items-center w-full overflow-hidden rounded shadow-lg">
      <div className="w-2/12 flex items-center">
        <div className="w-full text-right">
          <button className="p-3 rounded-full bg-white">Prev</button>
        </div>
      </div>
      <ul className="flex w-full border border-black-100">
        <li className="w-96 p-5">
          <Group groupNumber={groupNumber} />
        </li>
      </ul>
      <div className="w-2/12 flex items-center">
        <div className="w-full">
          <button className="p-3 rounded-full bg-white">Next</button>
        </div>
      </div>
    </div>
  )
}

export default GroupCard

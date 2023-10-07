import { groups } from '@/app/data'
import GroupCard from '@/components/Groups/GroupCarousel'

export default function Dashboard() {
  return (
    <div className="flex flex-row w-full m-auto p-4 border rounded-lg transition-all duration-500 mt-4">
      <h2 className="text-2xl font-semibold">Grupos</h2>
      <div className="flex flex-row ">
        {groups.map((group) => (
          <GroupCard key={group.id} groupNumber={group.id} />
        ))}
        {/* <GroupCard groupNumber={2} /> */}
      </div>
    </div>
  )
}

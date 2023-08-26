import GroupCard from '@/components/Group'

export default function Dashboard() {
  return (
    <div className="w-full relative h-full m-auto p-4 border rounded-lg bg-white transition-all duration-500 mt-4s">
      <h2 className="text-2xl font-semibold">Grupos</h2>
      <div className="grid grid-rows-1 grid-flow-row gap-4 mt-10">
        <GroupCard groupNumber={2} />
      </div>
    </div>
  )
}

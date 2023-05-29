import useNetwork from '@/data/network';
import { useRouter } from 'next/router'

export default function Station() {

  const { network, isLoading, isError } = useNetwork()
  const router = useRouter()
 
  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>

  const station = network.stations.find(station => station.id === router.query.stationID)

  return (
    <div>
    <h1>{station.name}</h1>
    <h1>{station.empty_slots}</h1>
    <h1>{station.free_bikes}</h1>
    </div>
  )
}
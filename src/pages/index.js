
import Navbar from '../components/Navbar'
import Bikes from '../components/Bikes'
import { useState } from 'react' ;
import useNetwork from '@/data/network'

export default function Home() {

  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>

  const stations = network.stations;

  return (
    <div>
      {stations.map(station => <p key={station.id}>{station.name}</p>)}
      {/*
      <Navbar/>
      <Bikes/>
      */}
    </div>
  )
}
import Bikes from '../components/Bikes'
import { useState } from "react";
import Navbar from '@/components/Navbar'
import useNetwork from '@/data/network'
import Link from 'next/link';

export default function Bike() {
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>

  return (
    <div>
      <Navbar/>
      <Bikes/>
    </div>
  )
}
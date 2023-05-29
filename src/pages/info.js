import Bikes from '../components/Bikes'
import Navbar from '@/components/Navbar'
import { useState } from "react";
import useNetwork from '@/data/network'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function Info() {
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>

  return (
    <div>
      <Navbar/>
      <Link href={`/`} className={styles.back}> BACK </Link>
      <div className={styles.info_page}>
        <h1>Station {network.name}</h1>
      </div>
    </div>
  )
}
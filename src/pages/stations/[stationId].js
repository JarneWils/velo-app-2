import useNetwork from '@/data/network';
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Station() {

  const { network, isLoading, isError } = useNetwork()
  const router = useRouter()
 
  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>

  const station = network.stations.find(station => station.id === router.query.stationID)

  return (
    <>
    <Navbar/>
    <Link href={`/`} className={styles.back}> BACK </Link>
    <div className={styles.station__info}>
      <div className={styles.station__naam}>{/*{station.name}*/}Antwerpen Centraal</div>
      <div className={styles.station__fietsen}>Fietsen: {/*{station.free_bikes}*/}1</div>
      <div className={styles.station__plaatsen}>Plaatsen: {/*{station.free_bikes}*/}26</div>
    </div>
    </>
  )
}
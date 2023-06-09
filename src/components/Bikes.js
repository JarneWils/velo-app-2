import React from "react";
import { useState } from "react";
import useNetwork from '@/data/network'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'
import Image from "next/image";

export default function Bikes() {
  const [filter, setFilter] = useState('');
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>loading</div>
  if (isError) return <div>error</div>

  const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  return (
    <>
    <div className={styles.container}>

        {/* bike1 */}
        <Link className={styles.bike1__link} href={`/info`}>
        <div className={styles.bike1}>
          <div className={styles.bike__title}>
            <div className={styles.bike__info__container}>
                <div className={styles.bike1__fietsen}><div className={styles.aantal_fietsen}>1</div>fietsen</div>
                <div className={styles.bike1__plaatsen}><div className={styles.aantal_plaatsen}>26</div>plaatsen</div>
                <button className={styles.go1}>go</button>
                </div>
                <Image
                    className={styles.pin_icon}
                    src="/pin-icon.png"
                    alt="pin"
                    width={25}
                    height={20}
                    priority/>
                    ANTWERPEN CENTRAAL
                <div className={styles.km1}>6,8 km</div>
            </div>
        </div>
        </Link>

        {/* bike2 */}
        <Link className={styles.bike1__link} href={`/info`}>
        <div className={styles.bike2}>
          <div className={styles.bike__title}>
            <div className={styles.bike__info__container}>
                <div className={styles.bike1__fietsen}><div className={styles.aantal_fietsen}>13</div>fietsen</div>
                <div className={styles.bike1__plaatsen}><div className={styles.aantal_plaatsen}>14</div>plaatsen</div>
                <button className={styles.go1}>go</button>
                </div>
                <Image
                    className={styles.pin_icon}
                    src="/pin-icon.png"
                    alt="pin"
                    width={25}
                    height={20}
                    priority/>
                    AP HOGESCHOOL
                <div className={styles.km1}>0,3 km</div>
            </div>
        </div>
        </Link>

        {/* bike3 */}
        <Link className={styles.bike1__link} href={`/info`}>
        <div className={styles.bike3}>
          <div className={styles.bike__title}>
            <div className={styles.bike__info__container}>
                <div className={styles.bike1__fietsen}><div className={styles.aantal_fietsen}>8</div>fietsen</div>
                <div className={styles.bike1__plaatsen}><div className={styles.aantal_plaatsen}>19</div>plaatsen</div>
                <button className={styles.go1}>go</button>
                </div>
                <Image
                    className={styles.pin_icon}
                    src="/pin-icon.png"
                    alt="pin"
                    width={25}
                    height={20}
                    priority/>
                    DE MEIR
                <div className={styles.km1}>7,2 km</div>
            </div>
        </div>
        </Link>

    </div>

    <div className={styles.zoek__titel}>zoek een station</div>
    <input className={styles.zoek} type="text" value={filter} onChange={handleFilterChange}/>
    <div className={styles.all_stations}>
    {stations.map(station => <Link href={`/stations/${station.id}`} key={station.id}>{station.name}</Link>)}
    </div>
    
    </>
  );
}

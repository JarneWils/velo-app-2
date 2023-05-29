import React from "react";
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import Image from "next/image";

export default function Bikes() {  

    const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>

        {/* bike1 */}
        <a className={styles.bike1__link} href="https://">
        <div className={styles.bike1} href="https://">
          <div className={styles.bike__title}>
            <div className={styles.bike__info__container}>
                <div className={styles.bike1__fietsen}><div className={styles.aantal_fietsen}>{count}</div>fietsen</div>
                <div className={styles.bike1__plaatsen}><div className={styles.aantal_plaatsen}>{count}</div>plaatsen</div>
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
                <div className={styles.km1}>0,8 km</div>
            </div>
        </div>
        </a>

        {/* bike2 */}
        <a className={styles.bike1__link} href="https://">
        <div className={styles.bike2} href="https://">
          <div className={styles.bike__title}>
            <div className={styles.bike__info__container}>
                <div className={styles.bike1__fietsen}><div className={styles.aantal_fietsen}>{count}</div>fietsen</div>
                <div className={styles.bike1__plaatsen}><div className={styles.aantal_plaatsen}>{count}</div>plaatsen</div>
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
                <div className={styles.km1}>0,8 km</div>
            </div>
        </div>
        </a>

        {/* bike3 */}
        <a className={styles.bike1__link} href="https://">
        <div className={styles.bike3} href="https://">
          <div className={styles.bike__title}>
            <div className={styles.bike__info__container}>
                <div className={styles.bike1__fietsen}><div className={styles.aantal_fietsen}>{count}</div>fietsen</div>
                <div className={styles.bike1__plaatsen}><div className={styles.aantal_plaatsen}>{count}</div>plaatsen</div>
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
                <div className={styles.km1}>0,8 km</div>
            </div>
        </div>
        </a>
    </div>

  );
}

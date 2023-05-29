import React, { Children, useState } from "react";
import styles from '@/styles/Home.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    
    const [isVisible, setIsVisible] = useState(false);
    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
        <>
        <nav className={styles.nav}>
            <a href="https://" className={styles.nav__logo}>
                <Image
                className={styles.logo}
                src="/velo-logo.png"
                alt="Logo"
                width={140}
                height={30}
                priority/>
            </a>

            <ul className={styles.nav__menu}>
                <li className={styles.nav__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.home}>Home</div> </Link> </li>
                <li className={styles.nav__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.bikes}>Bikes</div> </Link> </li>
                <li className={styles.nav__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.abonneer}>Abonneer</div> </Link> </li>
                <li className={styles.nav__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.help}>Help</div> </Link> </li>
            </ul>

            <button onClick={handleClick} className={styles.nav__toggler}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </button>
            {isVisible ? (
                <div className={styles.menu_mobile}>
                    <div className={styles.menu_mobile__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.home}>Home</div> </Link> </div>
                    <div className={styles.menu_mobile__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.bikes}>Bikes</div> </Link> </div>
                    <div className={styles.menu_mobile__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.abonneer}>Abonneer</div> </Link> </div>
                    <div className={styles.menu_mobile__item}> <Link href={`/`} className={styles.nav__link}> <div className={styles.help}>Help</div> </Link> </div>
                </div>
            ): null }
        </nav>
        </>
      );
  }

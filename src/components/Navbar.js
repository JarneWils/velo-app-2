import React, { useState } from "react";
import styles from '@/styles/Home.module.css'
import Image from "next/image";

export default function Navbar() {
    
    const [isVisible, setIsVisible] = useState(false);7
    function handleClick() {
        setIsVisible(!isVisible);
    }

    return (
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
                <li className={styles.nav__item}> <a href="https://" className={styles.nav__link}> <div className={styles.home}>Home</div> </a> </li>
                <li className={styles.nav__item}> <a href="https://" className={styles.nav__link}> <div className={styles.bikes}>Bikes</div> </a> </li>
                <li className={styles.nav__item}> <a href="https://" className={styles.nav__link}> <div className={styles.abonneer}>Abonneer</div> </a> </li>
                <li className={styles.nav__item}> <a href="https://" className={styles.nav__link}> <div className={styles.help}>Help</div> </a> </li>
            </ul>

            <button onClick={handleClick} className={styles.nav__toggler}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </button>
            {isVisible ? (
                <div className={styles.menu_mobile}>
                    <div className={styles.menu_mobile__item}> <a href="https://" className={styles.nav__link}> <div className={styles.home}>Home</div> </a> </div>
                    <div className={styles.menu_mobile__item}> <a href="https://" className={styles.nav__link}> <div className={styles.bikes}>Bikes</div> </a> </div>
                    <div className={styles.menu_mobile__item}> <a href="https://" className={styles.nav__link}> <div className={styles.abonneer}>Abonneer</div> </a> </div>
                    <div className={styles.menu_mobile__item}> <a href="https://" className={styles.nav__link}> <div className={styles.help}>Help</div> </a> </div>
                </div>
            ): null }
        </nav>
      );
  }

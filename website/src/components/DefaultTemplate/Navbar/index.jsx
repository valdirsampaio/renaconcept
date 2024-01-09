import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import React from "react"
import logoRena from "../../../assets/logomarca/logo5.png";
import { FiHeart } from "react-icons/fi";

export const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.containerBox}>
                <section className={styles.leftButtons}>
                    <Link to="/" className={styles.homeButton}>
                        <img src={logoRena} alt="logoimg" className={styles.logoImg} />
                    </Link>
                    <Link className={styles.interactionButton}>
                    Todos os produtos
                    </Link>
                    <Link className={styles.interactionButton}>
                    Sobre a rena
                    </Link>
                </section>
                <section className={styles.rightButtons}>
                    <button className={styles.favoriteButton}>
                        <FiHeart className={styles.favIcon} />
                        <span>2</span>
                    </button>
                </section>
            </div>
        </nav>
    )
};
import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const CarouselCard = ({ item }) => {
    return (
        <>
            <li className={styles.carouselItem}>
                <img src={item.image} alt="itemImg" className={styles.bannerImg} />
            </li>
        </>
    );
};
import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const CategoriesCard = ({ item }) => {
    return (
        <>
            <li className={styles.categorieItem}>
                <div className={styles.imageContainer}>
                <img src={item.image} alt="itemImg" className={styles.categorieImg} />
                </div>
                <h3 className={styles.categorieTitle}>{item.title}</h3>
            </li>
        </>
    );
};
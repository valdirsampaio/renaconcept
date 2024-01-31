import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const ColectionCard = ({ product }) => {
    return (
        <>
            <li className={styles.colectionProduct}>
                <section className={styles.imageContainer}>
                    <img src={product.image[0]} alt="itemImg" className={styles.productImg} />
                </section>
                <section className={styles.infoContainer}>
                    <h3 className={styles.productName}>{product.type} {product.name}</h3>
                    <h2 className={styles.productPrice}>R$ {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                    <p className={styles.productParcels}><span>3</span>x de <span>R$ {(product.price/3).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span> sem juros</p>
                </section>
            </li>
        </>
    );
};
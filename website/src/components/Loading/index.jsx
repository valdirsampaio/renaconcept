import styles from "./style.module.scss"
import React from "react";

export const Loading = () => {
    return (
        <div className={styles.loadingBox}>
            <img src={""} alt="Loading Icon" />
        </div>
    )
}
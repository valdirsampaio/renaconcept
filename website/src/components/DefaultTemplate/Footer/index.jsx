import styles from "./style.module.scss";
import React from "react"
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoRena from "../../../assets/logomarca/logo5.png";



export const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.footerContainer}>
                <section className={styles.aboutRena}>
                    <img src={logoRena} alt="logoimg" className={styles.logoImg} />
                    <h4 className={styles.descriptionRena}>Rena Concept é uma marca de roupas fundada por Renata Albuquerque.
                    </h4>
                    <p className={styles.paragraph}>@ 2024 Rena Concept LTDA - CNPJ: </p>
                </section>
                <section className={styles.infosSection}>
                    <h3 className={styles.sectionTitle}>INSTITUCIONAL</h3>
                    <Link className={styles.interactionButton}>
                        Quem Somos
                    </Link>
                    <Link className={styles.interactionButton}>
                        Imprensa
                    </Link>
                    <Link className={styles.interactionButton}>
                        Politicas de Privacidade
                    </Link>
                    <Link className={styles.interactionButton}>
                        Trocas e Devoluções
                    </Link>
                </section>
                <section className={styles.contactSection}>
                    <h3 className={styles.sectionTitle}>CONTATO</h3>
                    <p className={styles.contactParagraph}><FaInstagram className={styles.contactIcon} />@renaconcept</p>
                    <p className={styles.contactParagraph}><FiPhone className={styles.contactIcon} />(81) 996266264</p>
                    <p className={styles.contactParagraph}><IoIosMail className={styles.contactIcon} />renaconcept@contato.com.br</p>
                </section>
            </div>
            <div className={styles.footerCopyright}>
                All rights reserved Rena Concept © 2023
            </div>
        </footer>
    );
};
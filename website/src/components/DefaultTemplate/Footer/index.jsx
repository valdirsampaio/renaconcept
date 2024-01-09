import styles from "./style.module.scss";
import React from "react"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoRena from "../../../assets/logomarca/logo5.png";



export const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.footerContainer}>
                <section className={styles.aboutRena}>
                    <img src={logoRena} alt="logoimg" className={styles.logoImg} />
                    <p>Rena Concept é uma marca de roupas e fundada por Renata Albuquerque.
                    </p>
                    <p>@2024 Rena Concept LTDA - CNPJ: </p>
                </section>
                <section className={styles.infosSection}>
                    <h3 className={styles.sectionTitle}>INSTITUCIONAL</h3>
                    <Link>
                        Quem Somos
                    </Link>
                    <Link>
                        Imprensa
                    </Link>
                    <Link>
                        Politicas de Privacidade
                    </Link>
                    <Link>
                        Trocas e Devoluções
                    </Link>
                </section>
                <section className={styles.contactSection}>
                    <h3 className={styles.sectionTitle}><span>Entre em cont</span>ato</h3>
                    <p className={styles.contactSectionContainer}><FaPhoneAlt className={styles.contactSectionIcon} /> <a target="_blank" href="tel:+558399322-6363" className={styles.contactSectionParagraph}>(83) 99322-6363</a></p>
                    <p className={styles.contactSectionContainer}><FaInstagram className={styles.contactSectionIcon} /> <a target="_blank" href="https://www.instagram.com/toocoworking/" className={styles.contactSectionParagraph}>@toocoworking</a></p>
                    <p className={styles.contactSectionContainer}><IoMdMail className={styles.contactSectionIcon} /> <a href="mailto:contato@soutoocoworking.com.br?subject=Contato por meio do site!" target="_blank" className={styles.contactSectionParagraph}>contato@soutoocoworking.com.br</a></p>
                    <p className={styles.contactSectionContainer}><FaLocationDot className={styles.contactSectionIcon} /> <a target="_blank" className={styles.contactSectionParagraph}>Av. Rio Grande do Sul, 1345 - Estados, João Pessoa/PB</a></p>
                </section>
            </div>
            <div className={styles.footerCopyright}>
                All rights reserved Rena Concept © 2023
            </div>
        </footer>
    );
};
import React from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselList, categoriesList, products } from "../../providers/database";
import { CarouselCard } from "./CarouselCard";
import { CategoriesCard } from "./CategoriesCard";
import { ColectionCard } from "./ColectionCard";


export const Home = () => {

    return (
        <>
            <DefaultTemplate>
                <main className={styles.mainArea}>
                    <div className={styles.mainContainer}>
                        <section className={styles.headerSection}>
                            <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 5000 }} className={styles.sectionSwiper} style={{
                                "--swiper-pagination-color": "white",
                                "--swiper-pagination-bullet-inactive-color": "#999999",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "8px",
                                "--swiper-pagination-bullet-horizontal-gap": "4px",
                                "--swiper-navigation-color": "#263A32",
                                "--swiper-navigation-size": "2rem",
                                "--swiper-navigation-background-active-opacity": "1",
                                "--swiper-pagination-bullet-border-radius": "50%",
                            }}>
                                {
                                    carouselList.map((item) => (
                                        <SwiperSlide className={styles.swiperSlide} key={item.id}>
                                            <CarouselCard item={item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </section>
                        <section className={styles.secondSection}>
                            <h3 className={styles.sectionTitle}>Categorias</h3>
                            <ul className={styles.categoriesList}>
                                {
                                    categoriesList.map((item) => {
                                        return (
                                            <CategoriesCard key={item.id} item={item} />
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        <section className={styles.thirdSection}>
                            <h3 className={styles.sectionSubtitle}>Conheça nossa nova coleção</h3>
                            <div className={styles.titleContainer}>
                                <h3 className={styles.sectionTitle}>Novidades</h3>
                                <h3 className={styles.colectionTitle}>Alto Verão</h3>
                            </div>
                            <ul className={styles.colectionList}>
                                {
                                    products.map((product) => {
                                        if (product.colection === "new") {
                                        return (
                                        <ColectionCard key={product.id} product={product} />
                                        )
                                        } else {
                                            null
                                        }
                                    })
                                }
                            </ul>
                        </section>
                    </div>
                </main>
            </DefaultTemplate>
        </>
    )
};
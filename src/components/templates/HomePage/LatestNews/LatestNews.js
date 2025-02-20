"use client";
import React from "react";
import styles from "./latestnews.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import stripHTMLAndEntities from "@/lib/stripHTMLAndEntities";

function LatestNews({ LastNews }) {
  return (
    <div className={styles.container}>
      <div className={styles.titr}>آخرین اخبار</div>
      <div className={styles.newsContainer}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#b9b7b7",
            "--swiper-pagination-color": "#b9b7b7",
          }}
          spaceBetween={1}
          slidesPerView={3}
          dir="rtl"
          pagination={{ clickable: true }}
          navigation={true}
          //centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
        >
          {Object.keys(LastNews) > 0 ? (LastNews.map((post) => {
           return( 
           <SwiperSlide key={post.id} className={styles.swiperSlide}>
              <Link href={post.slug}>
                <div className={styles.newsCard}>
                  <div className={styles.newsImg}>
                    <img  src={post.featured_media_src_url || "/images/loading.gif"} />
                  </div>
                  <div className={styles.newsTitr}>
                  {post.title.rendered}
                  </div>
                  <div className={styles.newsShortDesc}>
                  {stripHTMLAndEntities(post.excerpt.rendered)}
                  </div>
                  <div className={styles.moreDetails}>
                    <p>بیشتر بخوانید...</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>);
          })) : (<div className={styles.connectionError}>ارتباط با سرور برقرار نشد</div>)}
        </Swiper>
      </div>
    </div>
  );
}

export default LatestNews;

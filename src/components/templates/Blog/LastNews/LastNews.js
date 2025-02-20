"use client";
import React, { useState, useEffect } from "react";
import styles from "./lastnews.module.css";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";
import stripHTMLAndEntities from "@/lib/stripHTMLAndEntities";

function LastNews({ news, total, current }) {
  return (
    <>
      {news.map((post) => (
        <Link key={post.id} href={post.slug} className={styles.postContainer}>
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              <img
                className={styles.image}
                src={post.featured_media_src_url || "/images/loading.gif"} // تصویر پیش‌فرض در صورت عدم وجود
                alt={post.title.rendered}
                loading="lazy"
              />
            </div>
            <div className={styles.texts}>
              <div className={styles.titr}>{post.title.rendered}</div>
              <div className={styles.desc}>
                {stripHTMLAndEntities(post.excerpt.rendered)}
              </div>
            </div>
          </div>
        </Link>
      ))}

      <Pagination totalPages={total} currentPage={current} />
    </>
  );
}

export default LastNews;

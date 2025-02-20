import React from "react";
import styles from "./blog.module.css";
import Sidebar from "@/components/modules/newsSidebar/sidebar";
import LastNews from "@/components/templates/Blog/LastNews/LastNews";
import { notFound } from "next/navigation";


async function Blog({ searchParams  }) {

  const page = searchParams.page || "1";  // پیش‌فرض 1 برای صفحه
  const data = await fetch(`https://www.riseco.co/wp-json/wp/v2/posts?page=${page}&per_page=10&lang=fa`);
  const news = await data.json();
  const total = data.headers.get("X-WP-Total");

 if(news?.data?.status == 400){
  return notFound();
 }

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <div className={styles.sidebar}>
        <Sidebar news={news} />
        </div>
        <div className={styles.mainContent}>
          <LastNews news={news} current={page} total={Math.ceil(total/10)}/>
        </div>
      </div>
    </div>
  );
}

export default Blog;

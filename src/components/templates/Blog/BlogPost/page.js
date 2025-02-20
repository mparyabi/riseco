import React, { Suspense } from "react";
import styles from "./post.module.css";
 import Sidebar from "@/components/modules/newsSidebar/sidebar";

const data = await fetch("https://www.riseco.co/wp-json/wp/v2/posts");
const news = await data.json();

function BlogPost({title,content,date,featImg}) {
  return (
    <Suspense fallback={<img className={styles.loading} src="/images/loading.gif"/>}>
     <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar news={news}/>
      </div>
      <div className={styles.main}>
        <div className={styles.newsImg}>
          <img src={featImg} />
          <div className={styles.newsTitle}>
            {title}
          </div>
          <div className={styles.date}>{new Date(date).toLocaleDateString('fa-IR')}</div>
        </div>

        <div className={styles.newsText} dangerouslySetInnerHTML={{ __html: content }}>
        </div>
      </div>
    </div>
  </Suspense>
  );
}

export default BlogPost;

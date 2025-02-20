import Link from "next/link";
import styles from "./pagination.module.css";

const Pagination = ({ totalPages, currentPage }) => {
  const array = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <div className={styles.pagination}>
        {array.map((item) => (
          <Link href={`?page=${item}`} key={item}>
          <div className={item == currentPage ? styles.pageNumberActive :styles.pageNumber}>
            {item.toLocaleString('fa-IR')}
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Pagination;

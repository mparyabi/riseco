"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  console.log("router", path);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <img src="/images/riseco-R.png" />
            <div className={styles.logoTexts}>
              <div className={styles.holdingName}>هلدینگ رایزکو</div>
            </div>
          </div>
        </Link>
        <nav className={styles.Navigation}>
          <Link href='/ActivityFields'>
          <div
            className={styles.menuItem}
            style={path == "/ActivityFields" ? { color: "#5d5b5b" } : null}
          >
            حوزه های فعالیت
          </div>
          </Link>
          <div
            className={styles.menuItem}
            style={
              path == "/blog" || path == "/magazines"
                ? { color: "#5d5b5b" }
                : null
            }
          >
            <RiArrowDownSLine />
            رسانه
            <div className={styles.subMenu}>
              <Link href="/blog">
                <div className={styles.subMenuItem}>اخبار رایزکو</div>
              </Link>
              <Link href="/magazines">
                <div className={styles.subMenuItem}>نشریه ها</div>
              </Link>
            </div>
          </div>
          <Link href="/aboutUs">
            <div
              className={styles.menuItem}
              style={path == "/aboutUs" ? { color: "#5d5b5b" } : null}
            >
              درباره ما
            </div>
          </Link>
          <Link href="/contactUs">
            <div
              className={styles.menuItem}
              style={path == "/contactUs" ? { color: "#5d5b5b" } : null}
            >
              ارتباط با ما
            </div>
          </Link>
          {/* <div className={styles.menuItem}>English</div> */}
        </nav>
      </div>
    </div>
  );
}

export default Header;

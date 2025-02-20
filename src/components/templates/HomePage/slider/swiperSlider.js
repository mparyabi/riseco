"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./swiper.module.css";
import Link from "next/link";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        dir="rtl"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.swiperContainer}>
            <div className={styles.rightSection}>
              <div className={styles.logoContainer}>
                <img src="/images/amper-150.png" />
              </div>
            </div>
            <div className={styles.descriptionSection}>
              <div className={styles.titleDescription}>کارخانه نوآوری آمپر</div>
              <div className={styles.textDescription}>
                کارخانه نوآوری آمپر با هدف جذب نیروی انسانی نخبه، شکل دهی به
                شرکت های دانش بنیان، نوپا و فناور و تقویت زیست بوم نوآوری، در
                راستای عمل به مسئولیت های اجتماعی و ورود به حوزه‌های نوآورانه
                هلدینگ رایزکو ایجاد و مسیر رشد شده است.
              </div>
              <Link href="https://amperinnovation.com">
                <div className={styles.buttonDesc}>مشاهده وب سایت</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.swiperContainer}>
            <div className={styles.rightSection}>
              <div className={styles.logoContainer}>
                <img src="/images/avrand-logo.png" />
              </div>
            </div>
            <div className={styles.descriptionSection}>
              <div className={styles.titleDescription}>شرکت اورند</div>
              <div className={styles.textDescription}>
                اورند پیشرو توليد کننده لوله هاي پليمري تك لايه ، سه لايه و پنج
                لايه، باك پليمري تك لایه و شش لايه، قطعات تزریقی، نوارهای آببندی
                می باشد هلدینگ رایزکو ایجاد و مسیر رشد شده است.
              </div>
              <Link href="https://avrand.com">
                <div className={styles.buttonDesc}>مشاهده وب سایت</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.swiperContainer}>
            <div className={styles.rightSection}>
              <div className={styles.logoContainer}>
                <img src="/images/en-logo.png" />
              </div>
            </div>
            <div className={styles.descriptionSection}>
              <div className={styles.titleDescription}>
                کارخانه اتحادیه نوین
              </div>
              <div className={styles.textDescription}>
                شرکت قطعات خودرو اتحادیه نوین از سال 1348 فعالیت خود را به عنوان
                اولین سازنده قطعات خودرو با شرکت ایران خودرو آغاز نموده است که
                به صورت تخصصی فعالیت بر روی چراغ های خودرو در کارنامه آن قرار
                دارد.
              </div>
              <Link href="https://enco.ir">
                <div className={styles.buttonDesc}>مشاهده وب سایت</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

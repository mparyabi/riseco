import React from "react";
import styles from "./workfields.module.css";

function WorkFields() {
  return (
    <div className={styles.container}>
      <div className={styles.titr}>کسب و کارهای هلدینگ رایزکو</div>
      <div className={styles.sections}>
        <div className={styles.section}>
          <div className={styles.sectionIcon}>
            <img src="/images/car.png" style={{ width: "110px" }} />
          </div>
          <div className={styles.sectionTitr}>خودروسازی</div>
          <div className={styles.sectionText}>
            هلدینگ راز حضور خود را در صنعت خودروسازی به منظور تکمیل زنجیره ارزش
            هلدینگ، در سال ۹۵ با مشارکت در خرید سهام مدیریت گروه خودروسازی بهمن
            به تحقق رساند.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionIcon}>
            <img src="/images/car-parts.png" style={{ width: "79px" }} />
          </div>
          <div className={styles.sectionTitr}>قطعات خودرو</div>
          <div className={styles.sectionText}>
            هلدینگ راز به عنوان یکی از مجموعه های پیشرو در صنعت قطعه سازی خودرو
            در کشور، با استفاده از دانش و تکنولوژی موجود در شرکت های زیرمجموعه،
            همگام با تامین نیاز داخل صنعت خودروسازی در ایران و با تکیه بر توسعه
            همکاری های بین المللی خود در راستای توسعه بازارهای صادراتی نیز
            فعالیت می نماید.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionIcon}>
            <img src="/images/oil-gas.png" style={{ width: "90px" }} />
          </div>
          <div className={styles.sectionTitr}>نفت و گاز</div>
          <div className={styles.sectionText}>
            سرمایه گذاری در حوزه نفت و گاز به سبب پتانسیل بالای کشور در این حوزه
            ،در برنامه ریزی استراتژی هلدینگ راز قرار گرفته است.
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionIcon}>
            <img src="/images/more-tech.png" style={{ width: "93px" }} />
          </div>
          <div className={styles.sectionTitr}>سایر حوزه های کسب و کار</div>
          <div className={styles.sectionText}>
            هلدینگ راز علاوه بر فعالیت در حوزه های خودروسازی ،قطعات خودرو و نفت
            وگاز، در حوزه های عام المنفعه ، بازرگانی ، کامپاندینگ ، آب معدنی و
            .. فعالیت های گسترده ای طی چند سال گذشته داشته است. به تحقق رساند.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFields;

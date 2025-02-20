import React from 'react'
import styles from './ceo.module.css';
function CeoMessage() {
  return (
    <div className={styles.Cartcontainer}>
    <div className={styles.Cartcontainerbox}>
      <div className={styles.CarttextContainer}>
        <div className={styles.Carttitr}>
          پیام رئیس هیئت مدیره - جناب آقای دکتر حمیدرضا صمدی
        </div>
        کسی که میخواهد بماند باید مبارزه کند و کسی که دست از مبارزه
        بردارد، آن هم در جهانی که هستی انسان بستگی به مبارزه دارد استحقاق
        ماندن ندارد.
      </div>
      <div className={styles.CartPic}>
        <img src="/images/boss.png" />
      </div>
    </div>
  </div>
  )
}

export default CeoMessage
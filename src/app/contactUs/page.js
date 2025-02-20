"use client";
import React from "react";
import styles from "./contactus.module.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";  // برای استفاده از آیکن‌ها
// import "leaflet/dist/leaflet.css";

function page() {
  // const position = [ 35.722703159510836,51.1755379389254]; // مختصات تهران به عنوان مثال
  //   // تنظیم آیکن پیش‌فرض
  //   delete L.Icon.Default.prototype._getIconUrl;
  //   L.Icon.Default.mergeOptions({
  //     iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  //     iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  //     shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  //   });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactUsContainer}>
          <div className={styles.card}>
            <div className={styles.cardTitr}>فرم تماس با ما</div>
            <form className={styles.formContainer}>
              <div className={styles.formItem}>
                <label className={styles.labelForm} htmlFor="firstName">
                  نام :
                </label>
                <input
                  className={styles.inputForm}
                  type="text"
                  name="firstName"
                />
              </div>
              <div className={styles.formItem}>
                <label className={styles.labelForm} htmlFor="lastName">
                  نام خانوادگی :
                </label>
                <input
                  className={styles.inputForm}
                  type="text"
                  name="lastName"
                />
              </div>
              <div className={styles.formItem}>
                <label className={styles.labelForm} htmlFor="mobileNumber">
                  تلفن همراه :
                </label>
                <input
                  className={styles.inputForm}
                  type="text"
                  name="mobileNumber"
                />
              </div>
              <div className={styles.formItem}>
                <label className={styles.labelForm} htmlFor="message">
                  پیغام :
                </label>
                <textarea
                  className={styles.inputForm}
                  name="message"
                  rows="4"
                  style={{ resize: "none", height: "100px", fontFamily: "Ray" }}
                />
              </div>
              <button type="submit" className={styles.button}>
                ارسال
              </button>
            </form>
          </div>
          <div className={styles.imageRight}></div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        {/* <MapContainer
          center={position}
          zoom={16}
          style={{ height: "286px", width: "100%" }}
          className={styles.map}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="/">Riseco Holding</a>'
          />
          <Marker position={position}>
            <Popup className={styles.popup}>اینجا هلدینگ رایزکو است!</Popup>
          </Marker>
        </MapContainer> */}
      </div>
    </>
  );
}

export default page;

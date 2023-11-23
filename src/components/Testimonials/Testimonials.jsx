/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./testimonials.module.css";
import Image from "next/image";
import img1 from "public/assets/1.png";
import img2 from "public/assets/3.png";
import img3 from "public/assets/2.png";
export default function Testimonials() {
  return (
    <div className={styles.main}>
      <div className="container">
        <h3 className={styles.title}>Clients' Testimonials</h3>
        <h2 className={styles.sub_title}>Unforgettable Travel Experiences</h2>
        <div className={`row ${styles.grid} pb-5 gx-3 gy-5 mb-2`}>
          <div className={styles.card}>
            <div className={`${styles.profile_image} `}>
              <Image src={img1} height={144} width={144} alt="image 1" />
            </div>
            <div>
              <p className={`${styles.quote} mb-3`}>
                I was looking for a unique travel experience, and I found it on
                Ithaka. I booked a private tour of the Pyramids with a local
                guide, and it was amazing! The guide was knowledgeable and
                passionate about Egypt.
              </p>
            </div>
            <div className={`${styles.name} mb-3`}>John Smith</div>
            <div className={`${styles.travel} mb-4`}>Travel Blogger</div>

            <div
              className={`${styles.stars} text-warning fa-xl text-center pb-5`}
            >
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
            </div>
          </div>

          <div className={`mb-5 mb-lg-0 ${styles.cardVIP}`}>
            <div>
              <div className={`${styles.profile_image} `}>
                <Image src={img3} height={144} width={144} alt="image 1" />
              </div>
              <div>
                <p className={`${styles.quote} mb-3`}>
                  I was looking for a unique travel experience, and I found it
                  on Ithaka. I booked a private tour of the Pyramids with a
                  local guide, and it was amazing! The guide was knowledgeable
                  and passionate about Egypt.
                </p>
              </div>
              <div className={`${styles.name} mb-3`}>John Smith</div>
              <div className={`${styles.travel} mb-3`}>Travel Blogger</div>

              <div
                className={`${styles.stars} text-warning fa-xl text-center pt-3 pb-4`}
              >
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.profile_image} `}>
              <Image src={img2} height={144} width={144} alt="image 1" />
            </div>
            <div>
              <p className={`${styles.quote} mb-3`}>
                I was looking for a unique travel experience, and I found it on
                Ithaka. I booked a private tour of the Pyramids with a local
                guide, and it was amazing! The guide was knowledgeable and
                passionate about Egypt.
              </p>
            </div>
            <div className={`${styles.name} mb-3`}>John Smith</div>
            <div className={`${styles.travel} mb-4`}>Travel Blogger</div>

            <div
              className={`${styles.stars} text-warning fa-xl text-center pb-5`}
            >
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
              <i className="fa-solid fa-star me-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

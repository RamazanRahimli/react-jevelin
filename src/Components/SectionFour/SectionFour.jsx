import React from "react";
import styles from "../SectionFour/SectionFour.module.scss";

const SectionFour = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <p>HOW IT WORKS</p>
          <h1><span>See for yourself.</span> Quick video introduction</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae</h5>
          <h5>odales lectus, non ultrices nisi. In varius, leo non gravida.</h5>
        </div>
        <div className={styles.bottomBox}>
        <iframe
              width="523"
              height="294"
              src="https://www.youtube.com/embed/g4n2yVPnQzs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;

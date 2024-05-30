import React from "react";
import logo1 from "../../assets/IMAGE/gallery5.jpg";
import logo2 from "../../assets/IMAGE/gallery6 (1).jpg";
import logo3 from "../../assets/IMAGE/gallery7.jpg";
import styles from "../SectionTwo/SectionTwo.module.scss";

const SectionTwo = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <p>ABOUT OUR WATCHES</p>
          <h1>
            <span>New</span>, <span>Improved</span> Design and Performance
          </h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae 
          </h5>
          <h5>odales lectus, non ultrices nisi. In varius, leo non gravida.</h5>
        </div>
        <div className={styles.bottomBox}>
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

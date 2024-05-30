import React from "react";
import logo from "../../../assets/IMAGE/Vector-Smart-Object-copy-3.png";
import styles from "../SectionOne/SectionOne.module.scss";

const Section = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1>Lifestyle <br /> Smart Watch</h1>
          <h4>technology of the future</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris </p>
          <p> vitae

odales lectus, non ultrices</p>
        </div>
        <div className={styles.rightBox}>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;

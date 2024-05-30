import React from "react";
import logo1 from "../../assets/IMAGE/Replace-screen-inside-this-SO3-1.jpg";
import styles from "../SectionThree/SectionThree.module.scss";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { SlFeed } from "react-icons/sl";
import logo2 from "../../assets/IMAGE/Group-811211112-copy-71-1.jpg";

const SectionThree = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.leftBox}>
            <img src={logo1} alt="" />
          </div>
          <div className={styles.rightBox}>
            <div className={styles.topBoxEntry}>
              <p>MEET WITH OUR</p>
              <h1>Splendid Features</h1>
            </div>
            <div className={styles.bottomBoxEntry}>
              <h3>
                <MdOutlineKeyboardVoice />
              </h3>
              <div className={styles.writeBox}>
                <span>Voice Recognition</span>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
            <div className={styles.bottomBoxEntry}>
              <h3>
                <MdPhoneAndroid />
              </h3>
              <div className={styles.writeBox}>
                <span>Connect with your phone</span>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
            <div className={styles.bottomBoxEntry}>
              <h3>
                <SlFeed />
              </h3>
              <div className={styles.writeBox}>
                <span>Any task at hand</span>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.rightBox}>
            <div className={styles.topBoxEntry}>
              <p>MEET WITH OUR</p>
              <h1>Splendid Features</h1>
            </div>
            <div className={styles.bottomBoxEntry}>
              <div className={styles.writeBox}>
                <span>+ Increased storage</span>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              <div className={styles.dereceBox}>
                <div className={styles.derece1}></div>
                <p>30%</p>
              </div>
            </div>
            <div className={styles.bottomBoxEntry}>
              <div className={styles.writeBox}>
                <span>+ Battery life</span>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              <div className={styles.dereceBox}>
                <div className={styles.derece2}></div>
                <p>80%</p>
              </div>
            </div>
            <div className={styles.bottomBoxEntry}>
              <div className={styles.writeBox}>
                <span>+ Display surface</span>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
              <div className={styles.dereceBox}>
                <div className={styles.derece3}></div>
                <p>60%</p>
              </div>
            </div>
          </div>
          <div className={styles.leftBox}>
            <img src={logo2} alt="" />
          </div>
        </div>
        {/* <div className={styles.bottomBox}></div> */}
      </div>
    </div>
  );
};

export default SectionThree;

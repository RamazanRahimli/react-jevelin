import React from "react";
import Logo from "../../assets/IMAGE/Jevelin_logo_light.png";
import styles from "../Header/Header.module.scss";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <img src={Logo} alt="" />
        <div className={styles.mediumBox}>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Reviews</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.iconBox}>
            <h5>
            <CiShoppingCart />
            </h5>
            <p>1</p>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

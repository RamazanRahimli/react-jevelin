import React, { useEffect, useState } from "react";
import styles from "../SectionFifty/SectionFifty.module.scss";
import axios from "axios";

const SectionFifty = () => {
  const [data, setData] = useState([]);
  const [seachItem, SetSearchItem] = useState("");


  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const sortedDataAZ = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    setData(sorted);
  };
  const sortedDataZA = () => {
    const sorted = [...data].sort((a, b) => b.price - a.price);
    setData(sorted);
  };

  const handleSearchChange = (item) => {
    SetSearchItem(item.target.value);
  };
  const FilterData = data.filter((item) =>
    item.title.toLowerCase().includes(seachItem.toLowerCase())
  );
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <p>ADJUSTABLE STRAPS</p>
          <h1>Choose the best</h1>
          <h1>color for your activity</h1>
        </div>
        <div className={styles.filtSearchBox}>
                <button onClick={sortedDataAZ}>Artan Qiymet</button>
                <button onClick={sortedDataZA}>Azalan Qiymet</button>
                <input type="text" placeholder="Search"
                onChange={handleSearchChange} />
            </div>
        <div className={styles.bottomBox}>
          {data &&
             FilterData.map((item) => (
              <div className={styles.productCard}>
                <img src={item.thumbnail} alt="" />
                <div className={styles.writeBox}>
                <p>{item.category}</p>
                <p>{item.title}</p>
                <p>{item.price}$</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFifty;

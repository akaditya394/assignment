import React from "react";
import styles from "./Item.module.css";

type Props = {
  item: {
    _id: String;
    productName: String;
    quantity: Number;
    price: Number;
    amount: Number;
    gstRate: Number;
  };
};

function Item({ item }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.detail}>
        <p>{item?.productName?.toString()}</p>
      </div>
      <div className={styles.detail}>
        <p>{item?.quantity?.toString()}</p>
      </div>
      <div className={styles.detail}>
        <p>{item?.price?.toString()}</p>
      </div>
      <div className={styles.detail}>
        <p>{item?.amount?.toString()}</p>
      </div>
      <div className={styles.detail}>
        <p>{item?.gstRate?.toString()}</p>
      </div>
    </div>
  );
}

export default Item;

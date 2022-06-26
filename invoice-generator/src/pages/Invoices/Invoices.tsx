import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Invoice from "../../components/Invoice/Invoice";
import styles from "./Invoices.module.css";

interface Bill {
  _id: String;
  name: String;
  dueDate: String;
  billNo: String;
  billDate: String;
  lineItem: [
    {
      _id: String;
      productName: String;
      quantity: Number;
      price: Number;
      amount: Number;
      gstRate: Number;
    }
  ];
  grossAmount: Number;
  gstAmount: Number;
  netAmount: Number;
  notes: String;
  status: String;
  createdAt: Date;
  updatedAt: Date;
  __v: Number;
}

function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(
        "https://rscdev.taxadda.com/api/invoice/list"
      );
      const data = await response.json();
      setInvoices(data.invoices);
    }

    fetchMyAPI();
  }, []);

  console.log(invoices);

  return (
    <div className={styles.invoices}>
      <Header />
      <h1>Invoices</h1>
      {invoices.map((invoice: Bill, index) => (
        <Invoice key={index} invoice={invoice} />
      ))}
    </div>
  );
}

export default Invoices;

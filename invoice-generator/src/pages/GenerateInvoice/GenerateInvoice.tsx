import React, { useRef } from "react";
import toast from "react-hot-toast";
import Header from "../../components/Header/Header";
import styles from "./GenerateInvoice.module.css";

function GenerateInvoice() {
  const nameRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const grossAmountRef = useRef<HTMLInputElement>(null);
  const billNoRef = useRef<HTMLInputElement>(null);
  const billDateRef = useRef<HTMLInputElement>(null);
  const productNameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const gstRateRef = useRef<HTMLInputElement>(null);
  const gstAmountRef = useRef<HTMLInputElement>(null);
  const netAmountRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);

  const formSubmitHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const notification = toast.loading("submitting form!");
    fetch("https://rscdev.taxadda.com/api/invoice/add", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name: nameRef.current?.value,
        dueDate: dueDateRef.current?.value,
        grossAmount: grossAmountRef.current?.value,
        billNo: billNoRef.current?.value,
        billDate: billDateRef.current?.value,
        lineItem: [
          {
            productName: productNameRef.current?.value,
            quantity: quantityRef.current?.value,
            price: priceRef.current?.value,
            amount: amountRef.current?.value,
            gstRate: gstRateRef.current?.value,
          },
        ],
        gstAmount: gstAmountRef.current?.value,
        netAmount: netAmountRef.current?.value,
        notes: notesRef.current?.value,
        status: statusRef.current?.value,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        console.log(json);
        toast.success("invoice successfully generated", {
          id: notification,
        });
      });
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.generate}>
        <form>
          <div className={styles.formLeft}>
            <div>
              {" "}
              <label htmlFor="billNo">Bill No. : </label>
              <input
                value={billNoRef.current?.value}
                ref={billNoRef}
                id="billNo"
                type="text"
                placeholder="Bill No."
              />
            </div>{" "}
            <div>
              {" "}
              <label htmlFor="name">Name : </label>
              <input
                value={nameRef.current?.value}
                ref={nameRef}
                id="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="billDate">Bill Date : </label>
              <input
                value={billDateRef.current?.value}
                ref={billDateRef}
                id="billDate"
                type="date"
                placeholder="Bill Date"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="grossAmount">Gross Amount : </label>
              <input
                value={grossAmountRef.current?.value}
                ref={grossAmountRef}
                id="grossAmount"
                type="number"
                placeholder="Gross Amount"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="dueDate">Due Date : </label>
              <input
                value={dueDateRef.current?.value}
                ref={dueDateRef}
                id="dueDate"
                type="date"
                placeholder="Due Date"
              />
            </div>
          </div>
          <div className={styles.formRight}>
            {" "}
            <div>
              {" "}
              <label htmlFor="productName">Product Name : </label>
              <input
                value={productNameRef.current?.value}
                ref={productNameRef}
                id="productName"
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="quantity">Quantity : </label>
              <input
                value={quantityRef.current?.value}
                ref={quantityRef}
                id="quantity"
                type="number"
                placeholder="Quantity"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="price">Price : </label>
              <input
                value={priceRef.current?.value}
                ref={priceRef}
                id="price"
                type="number"
                placeholder="Price"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="amount">Amount : </label>
              <input
                value={amountRef.current?.value}
                ref={amountRef}
                id="amount"
                type="number"
                placeholder="Amount"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="gstRate">GST Rate : </label>
              <input
                value={gstRateRef.current?.value}
                ref={gstRateRef}
                id="gstRate"
                type="number"
                placeholder="GST Rate"
              />
            </div>
          </div>
          <div className={styles.formRight}>
            {" "}
            <div>
              {" "}
              <label htmlFor="gstAmount">GST Amount : </label>
              <input
                value={gstAmountRef.current?.value}
                ref={gstAmountRef}
                id="gstAmount"
                type="number"
                placeholder="GST Amount"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="netAmount">Net Amount : </label>
              <input
                value={netAmountRef.current?.value}
                ref={netAmountRef}
                id="netAmount"
                type="number"
                placeholder="Net Amount"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="notes">Notes : </label>
              <input
                value={notesRef.current?.value}
                ref={notesRef}
                id="notes"
                type="text"
                placeholder="Notes"
              />
            </div>
            <div>
              <label htmlFor="status">Bill Status : </label>
              <select
                value={statusRef.current?.value}
                ref={statusRef}
                id="status"
                name="status"
              >
                <option value="due">Due</option>
                <option value="outstanding">Outstanding</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>
          <div>
            {" "}
            <button
              onClick={formSubmitHandler}
              type="submit"
              className={styles.button}
            >
              Generate Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GenerateInvoice;

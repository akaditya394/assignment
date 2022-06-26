import Item from "../Item/Item";
import styles from "./Invoice.module.css";
import "animate.css";

type Props = {
  invoice: {
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
  };
};

function Invoice({ invoice }: Props) {
  return (
    <div className={`${styles.invoice} animate__animated animate__fadeInUp`}>
      <div>
        <h3>Invoice</h3>
      </div>
      <div className={styles.upper}>
        <div>
          <div>
            <p>
              <b>Name:</b> <span>{invoice?.name}</span>
            </p>
          </div>
        </div>
        <div>
          <p>
            <b>Bill No: </b> {invoice?.billNo}
          </p>
          <p>
            <b>Bill Date: </b> {invoice?.billDate}
          </p>
          <p>
            <b>Due Date: </b> {invoice?.dueDate}
          </p>
        </div>
      </div>
      <div className={styles.headings}>
        <div className={styles.heading}>
          <p>Item Name</p>
        </div>
        <div className={styles.heading}>
          <p>Quantity</p>
        </div>
        <div className={styles.heading}>
          <p>Price (Rs.)</p>
        </div>
        <div className={styles.heading}>
          <p>Amount (Rs.)</p>
        </div>
        <div className={styles.heading}>
          <p>GST Rate (%)</p>
        </div>
      </div>
      <div className={styles.items}>
        {invoice.lineItem.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
      <div className={styles.footer}>
        <div>
          <div>
            <b>GST Amount: </b>Rs.
            {invoice?.gstAmount?.toString()}
          </div>
          <div>
            <b>NET Amount: </b>Rs.
            {invoice?.netAmount?.toString()}
          </div>
          <div>
            <b>Notes: </b>
            {invoice?.notes}
          </div>
          <div>
            <b>Status: </b>
            {invoice?.status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;

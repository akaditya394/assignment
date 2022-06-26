type Bill = {
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
  children : React.ReactNode
};

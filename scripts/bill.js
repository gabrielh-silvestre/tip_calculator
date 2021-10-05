const calcTip = () => {
  billInfo.tipAmount = billInfo.totalBill * billInfo.tipPercentage;
};

const calcBillPerson = () => {
  billInfo.totalPerPerson = billInfo.totalBill / billInfo.numberPeople;
};

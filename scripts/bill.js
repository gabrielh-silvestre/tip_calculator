const calcTip = () => {
  billInfo.tipAmount = (billInfo.totalBill * billInfo.tipPercentage) / billInfo.numberPeople;
};

const calcBillPerson = () => {
  billInfo.totalPerPerson = billInfo.totalBill / billInfo.numberPeople;
};

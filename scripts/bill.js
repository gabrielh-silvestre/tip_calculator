const calcTip = () => {
  billInfo.tipAmount = Math.round(billInfo.totalBill * billInfo.tipPercentage);
};

const calcBillPerson = () => {
  billInfo.totalPerPerson = Math.round(billInfo.totalBill / billInfo.numberPeople);
};

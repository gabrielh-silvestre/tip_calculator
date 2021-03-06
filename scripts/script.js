const billInfo = {
  totalBill: 0,
  tipPercentage: 0,
  numberPeople: 1,
  tipAmount: 0,
  totalPerPerson: 0,
};

const staticElements = {
  bill: document.querySelector('[name=total_bill]'),
  tips: document.querySelectorAll('[name=tip_percentage'),
  customTip: document.querySelector('#tip_custom'),
  people: document.querySelector('[name=n_of_people]'),
  tipAmount: document.querySelector('#tip_amount'),
  totalPerPerson: document.querySelector('#total_amount'),
  resetBtn: document.querySelector('.btn_reset'),
  inputNumbers: document.querySelectorAll('[type=number]'),
};

const addMultiplesListeners = (arr, eventName, listener) => {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
};

const calcs = () => {
  calcTip();
  calcBillPerson();
};

const setTipAmount = () => {
  staticElements.tipAmount.innerText = `$${billInfo.tipAmount.toFixed(2)}`;
};

const setTotalPerson = () => {
  staticElements.totalPerPerson.innerText = `$${billInfo.totalPerPerson.toFixed(2)}`;
};

const setInfos = () => {
  calcs();
  setTipAmount();
  setTotalPerson();
};

const getTotalBill = (event) => {
  event.target.value === ''
    ? billInfo.totalBill = 0
    : billInfo.totalBill = Number.parseFloat(event.target.value, 10);
  setInfos();
};

const getTipPercentage = (event) => {
  Number.parseFloat(event.target.value / 100, 10) === billInfo.tipPercentage
  || event.target.value === ''
    ? billInfo.tipPercentage = 0
    : billInfo.tipPercentage = Number.parseFloat(event.target.value / 100, 10);
  
  setInfos();
};

const getNumberPeople = (event) => {
  event.target.value === ''
    ? billInfo.numberPeople = 1
    : billInfo.numberPeople = Number.parseFloat(event.target.value, 10);
  setInfos();
};

const resetCalculator = () => {
  for (let key in billInfo) billInfo[key] = 0;
  staticElements.inputNumbers.forEach((input) => input.value = '');
  billInfo.numberPeople = 1;
  setInfos();
};

window.onload = () => {
  staticElements.bill.addEventListener('input', getTotalBill);
  addMultiplesListeners(staticElements.tips, 'click', getTipPercentage);
  staticElements.customTip.addEventListener('input', getTipPercentage);
  staticElements.people.addEventListener('input', getNumberPeople);
  staticElements.resetBtn.addEventListener('click', resetCalculator);
};

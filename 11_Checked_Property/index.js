const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  subResult.textContent = myCheckBox.checked ?`You are subscribed` : `You are not subscribed`
  // if (myCheckBox.checked) {
  //   subResult.textContent = `You are subscribed`;
  // } else {
  //   subResult.textContent = `You are not subscribed`;
  // }
  if(visaBtn.checked){
    paymentResult.textContent = `You are paying with Visa`
  } else if(masterCardBtn.checked){
    paymentResult.textContent = `You are paying with Master Card`
  } else if(payPalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`
  } else {
    paymentResult.textContent = `You haven't selected a payment method yet`
  }
};

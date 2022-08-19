const balance = 325.00;
const checkBalance = true;
const isActive = true;
if (checkBalance === true){
  if (isActive === true && balance > 0){
    console.log("your account balance is"+" " + balance.toFixed(2) + ".");
  }
  else if (isActive !== true){
    console.log("Your account is no longer active");
  }
  else if (balance === 0){
    console.log("your account balance is empty");
  }
  else {
    console.log("your account is on deficit, kindly visit the bank");
  }
}
else {
  console.log("Thank you for coming");
}

// // click button addEventListener;
// document.getElementById('cashout-btn')
// .addEventListener('click', function(){
// //1. get agent number and validate;
//     const cashoutNumberInput = document.getElementById('cashout-number');
//    const cashoutNumber = cashoutNumberInput.value ;
//    if(cashoutNumber.length !== 11){
//     alert('invalid Number');
//     return
//    }
   
// //2. get cashout amount and validate;
// const cashoutAmountInput = document.getElementById('cashout-amount');
// const cashoutAmount = cashoutAmountInput.value ;


// //3. get currant balance and validate , convert number;

//  const balaceInput = document.getElementById('balance')
//  const balances = balaceInput.innerText
  
//  //4. balance calculat
//    const newBalance = Number(balances) - Number(cashoutAmount)  
// if(newBalance < 0){
//    alert('invalid Amount');
//    return
   
//   }

// //5. get pin and condition;
//  const cashoutPinInput = document.getElementById('cashout-pin')
//  const pin = cashoutPinInput.value;
//  // 5.1 true: 
//  if(pin === "1234"){
//    alert('Cash Out success')
//    balaceInput.innerText = newBalance; 

//  }
//  //5.2 fals;
//  else{
//    alert("Invalid Pin")
//  }





// })

document.getElementById('cashout-btn').addEventListener('click', function(){
  const cashoutNumber = valueElement('cashout-number')
  console.log(cashoutNumber)
})

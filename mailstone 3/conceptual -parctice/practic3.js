
/**
 * Shopping Bill Calculator

 */
// function calcBill(prices, items){
//   let itemCoutn = {};
//   for(const item of items){
//     if( itemCoutn.hasOwnProperty(item)){
//         itemCoutn[item]++
//     }
//     else{
//         itemCoutn[item] = 1
//     }
//   }

//   let total = 0;
//   for(const item in itemCoutn){
//     const price = prices[item];
//     const quantity = itemCoutn[item]
//     const totalPriceQuantity = price * quantity;
//     total = total + totalPriceQuantity
//   }
  
//   return {
//     total,
//     itemCoutn
//   }
// }


// const prices = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
// const price = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, ["egg", "egg", "rice", "oil", "egg", "sugar"]);
// console.log(prices, price)


// function calcBill2(prices, items){
//   let itemCount = {};
//   for( const item of items){
//     // console.log(item)
//     if(itemCount.hasOwnProperty(item)){
//       itemCount[item]++
//     }
//     else{
//       itemCount[item]=1
//     }
//   }
//    console.log(itemCount)
//    let total = 0;
//    for(const item in prices){
//     const price = prices[item]
//     const quantity = itemCount[item]
//     const priceQuantity = price * quantity;
//     total = total + priceQuantity
    
//     // console.log(price,quantity)

//    }
//    return {
//     itemCount,
//     total
//    }
// }

// const price2 = calcBill2({ rice: 70, oil: 180, egg: 12, sugar: 90 }, ["egg", "egg", "rice", "oil", "egg", "sugar"]);
// console.log( price2)

function shoppingBill(prices,items){
  let itemCount = {};
  for (const item of items){
    if( itemCount.hasOwnProperty(item)){
        itemCount[item]++
        
    }
    else{
        itemCount[item]= 1;
    }
  }
   let total = 0;
   for(const item in prices){
    const price = prices[item]
    const quantity = itemCount[item]
    
    const priceQuantity = price * quantity

    total = total +priceQuantity
    

   }
   
   return {
    total,
    itemCount
   }
}


const prices = shoppingBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(prices)
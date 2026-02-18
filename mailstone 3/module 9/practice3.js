
/**
 * ciar table bad make korta koto tuku wood lagba tar calculation;
 * stape1: funtcion make
 * stape2: kat ar poriman
 * stape3: kat ar poriman asbabpotrar poriman mul;
 * stape4: total sum;
 * 
 */

function woodQuantity(cair,table,bad){
   const perCairWood = 3;
   const perTableWood = 10;
   const perBadWood = 50;
   // protita kat koto tuku;
  const cairTotalWood = cair * perCairWood
  const tableTotalWood = table* perTableWood
  const badTotalwood = bad * perBadWood

  //totol sum '
  const totalWood = cairTotalWood+ tableTotalWood+badTotalwood
//return;

return totalWood
}

//function call;

const result = woodQuantity(5,2,2)
console.log(result)



//home work:

/**
 * pant , showe, shirt sopping total price
 */
                                //quantity
function shoppinQuntity(shirtQuantity, showsQuantity, pantQuantity){
  //price three product
 const perShirtPrice = 500;
 const perShowsPrice = 1000;
 const perPentPrice = 700;

//quantity * parproduct

const shirtTotalPrice = shirtQuantity * perShirtPrice;
const showsTotalPrice = showsQuantity * perShowsPrice;
const pentTotalPrace = pantQuantity *  perPentPrice

//total sum

const totolprice = shirtTotalPrice + showsTotalPrice + pentTotalPrace;

return totolprice
}

const shopping = shoppinQuntity(1,1,1,)
console.log(shopping)
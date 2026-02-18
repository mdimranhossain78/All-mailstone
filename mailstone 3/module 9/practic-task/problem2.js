
/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget( laptop, tablet, mobile){
    const perLaptopPrice = 35000;
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    // price and quantity multiplacation;

    const laptopTotalPrice = perLaptopPrice * laptop;
    const tabletTotalprice = perTabletPrice * tablet;
    const mobileTotalPrice = perMobilePrice * mobile;

    //total sum

    const totalPrice = laptopTotalPrice + tabletTotalprice + mobileTotalPrice;

    return totalPrice;
}

const shopping = calculateElectronicsBudget(1,1,1);
console.log(shopping)
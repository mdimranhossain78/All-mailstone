
/**
 * boro number bar korta hoba
 * 1. two ar moddha boro ta 
 * 2. three ar moddha boro ta
 */

//1.

// function towOflarge(num1, num2){
//     if(num1 > num2){
//         return num1
//     }
//     else{
//         return num2
//     }
// }
// const result = towOflarge(5,6);
// console.log(result)
//2.

function threeOflarge(num1,num2,num3){
  if(num1 > num2 && num1 > num3){
    return num1
  }
  else if(num2>num1 && num2>num3){
    return num2
  }
  else{
    return num3
  }
}

const result = threeOflarge(5,4,6)
console.log(result)
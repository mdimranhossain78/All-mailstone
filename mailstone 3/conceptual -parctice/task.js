
/**
 * Problem 5: Remove Duplicates From Array

 */
// function removeDuplicates(arr){
//  let uniqe = [];
//  for(const array of arr){
//     if(uniqe.includes(array) ===false){
//         uniqe.push(array)
//     }
//  }
//  return uniqe
// }
// const input = removeDuplicates( [5, 3, 5, 2, 3, 9, 2, 7])
// console.log(input)

const  arry =['ha','ha','ha','na', 'na']
let h = 0;
let na = 0;
for(const arr of arry){
    if(arr.includes('ha')){
        h++;
    }
   else if(arr.includes('na')){
        na++
    }
}
console.log(h)
console.log(na)
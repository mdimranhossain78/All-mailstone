/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 */

function countNumber(numbers){
     let count = 0;
        for(let number of numbers){
            if(number === 5){
                count++
            }
        }
        return count
}

let numbers = [5,6,15,12,98, 5]
let number2 = [ 16, 6 , 5, 2, 5, 5, 0,]
console.log(countNumber(numbers))
console.log(countNumber(number2))

/**
 * one array moddha thaka max number bar kora
 * stape1: make a function
 * stape2: akta variable a numbers ar first value dhorta hoby;
 * stape3: for of loop chalai ta hoba
 * stape 4: condition dita hoba ja numbers thaka jodi max small hoy tahola dhukba;
 * stape5 : num ar value max a rakha
 * stape6: function coll korbo;
 */

// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num
//         }
        
//     }
//     return max


// }

// const array = [14, 4, 15, 32, 50, 11, 12]
// const result = getMax(array)
// console.log(result)

// home work find the smalle number in an array;

function getMin( numbers){
let min = numbers[0]
for(const num of numbers){
    if (num < min){
        min = num
    }
}
return min
}

const arr = [11, 2, 22, 20, 8, 5, 6,]
const result = getMin(arr);
console.log(result)
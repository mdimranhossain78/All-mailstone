

// let str = 'i am learnig web development'

// let count = 0
// for(let i = 0 ; i<str.length; i++){
//     let letter = str[i]
//     if(letter === 'a' || letter === 'i' || letter=== 'u' || letter=== 'e' || letter==='o'){
//         count+=1;
//     }
// }
// console.log(count)

//Challenge 2
// let str = 'hello'

// let revers=''
// for(let letter of str){
//     revers = letter + revers
// }
// console.log(revers)
// challenge 3:

let str = 'i love javascrept'
let str_new = str.split(' ')

let capitalize = str_new.map(str_new => str_new[0].toUpperCase() + str_new.slice(1))
let rev = capitalize.reverse();

let letter = rev.join(' ');
console.log(letter)

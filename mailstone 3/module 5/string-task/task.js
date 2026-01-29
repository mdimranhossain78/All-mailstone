//task 1:
// let centans = ' i am a studant'

// let count = 0
// for(let i = 0 ; i<centans.length; i++){
//     let letter = centans[i]
//     if(letter==='a'){
//         count = count + 1
//     }
// }
// console.log(count)

// task 2:

//  let str = 'you are vary good developer in programming hero' 

// let result = str.includes('a','i','o','u','e')
// console.log(result)
//task 3:

// let str = 'capitalize cvery first cetter of each word in a ctring'

// let arry = str.split(' ')
// console.log(arry)
// //use for in loop:

// for(let x in arry){
//     arry[x]=arry[x][0].toLocaleUpperCase() + arry[x].slice(1,arry[x].length)
    
// }
// console.log(arry)

// // conver array to string:

// let str_new ='';

// for(let y in arry){
//     str_new = str_new + arry[y] + ' '
// }
// console.log(str_new.trim())

// athor ways:

// let str = 'i am a web developer'

// let new_str = str.split(' ')

// let capitalize = new_str.map(new_str =>new_str[0].toUpperCase() + new_str.slice(1))

// let letter = capitalize.join(' ')

// console.log(letter)

//task 4:

let rep = 'if the given string has X, replace it by Y.'

console.log(rep.replace('X','x'))
console.log(rep.replace('Y', 'y'))
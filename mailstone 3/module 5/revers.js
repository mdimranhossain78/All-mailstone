
// i will use revers of three ways

// 1 ways

const sentens = 'i am learnig web dev'

// let revers= ''
// for(const letter of sentens){
//     // console.log(letter)
//     revers = letter + revers
    
// }
// console.log(revers)

//2 ways:


// let rev = ''
// for(let i = 0; i< sentens.length ; i++){
//    const letter = sentens[i]
//    rev = rev + letter
// }
// console.log(rev)

//3 ways:

// const revers = sentens.split(' ').reverse().join(" ")



// console.log(revers)
//just pratice:

let str = 'i am a student'

// let str_new = str.split(" ")
// console.log(str_new)

// for(let x in str_new){

//     str_new[x]= str_new[x][0].toUpperCase() + str_new[x].slice(1,str_new.length)
// }

// console.log(str_new)

// let s = '';

// for(let y in str_new){
//     s = s + str_new[y] + ' '
// }
// console.log(s.trim())


let array = str.split(' ')
console.log(array)

let capitalize = array.map(array =>array[0].toUpperCase() + array.slice(1))

let letter = capitalize.join(' ')
console.log(letter)
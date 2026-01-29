
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

const revers = sentens.split(' ').reverse().join(" ")



console.log(revers)
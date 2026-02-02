
// let str = ['hello', 'world', 'javascript'];

// let reco= []
// for(let word of str){

//     let frist = word[0].toUpperCase()
//     let middel = word.slice(1, word.length-1)
//     let last = word[word.length-1].toUpperCase()

//     let summer = frist + middel + last;
//     reco.push(summer)
// }
// console.log(reco)

let arrays = ['hello', 'world', 'javascript'];

let rep = []

for(let array of arrays){
    let frist = array[0].toUpperCase()
    let middel = array.slice(1,array.length)

    let total= frist + middel
    rep.push(total)
}
console.log(rep) 
/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

function findSmallWord(words){
    let min = words[0]
    for(const word of words){
        if(word.length < min.length){
            min = word
        }
    }
    return min
}

const  heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

console.log(findSmallWord(heights2))
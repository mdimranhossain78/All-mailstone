
/**
 * 
 * Write a function to find the longest word in a given string.
 * 
 */

function findLargeWord(string){
  const words = string.split(' ')
  let largeWord = '';
  for(const word of words){
    if(word.length > largeWord.length){
        largeWord = word
    }
    
  }
  return largeWord
}

const str = 'I am learning Programming to become a programmer'
 console.log(findLargeWord(str))
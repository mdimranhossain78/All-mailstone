
/**
 * count word in a sentens ;
 */

function wordFrequency(sentence){
    let words = sentence.split(' ')
    let wordCount = {};
    for(const word of words){
        if(wordCount.hasOwnProperty(word)){
            wordCount[word] = wordCount[word]+1;
        }
        else{
            wordCount[word] =1;
        }
        
    }
    return wordCount
}

const input = 'I love JS and I love coding and JS is fun'
console.log(wordFrequency(input))
/**
 * 
 * Write a function to count the number of vowels in a string.
 */


function countVawel(vawels){
    let count = 0;
    for(let i = 0; i< vawels.length; i++){
        let vawel = vawels[i].toLowerCase();
        if(vawel ==='a' || vawel ==='e' || vawel === 'i' || vawel === 'u' || vawel==='o'){
            count = count+1;
        }
    }
    return count
}

let str = ' I am learning Programming to become a programmer'
console.log(countVawel(str))
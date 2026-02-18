
/**
 * check a year it is leapyear or not 
 *  stape 1: make a function
 *  stape 2: condition dibo ja jodi 100 diya vag kora na jay and 4 dara vag jay tahola return true
 * stape 3: 
 */

function leapyear(year){
        if(year % 100 !==0 && year % 4===0){
            return true;
        }
        else if ( year % 100 ===0 && year % 400 ===0){
                    return true;
        }
        else{
            return false;
        }
}

const result = leapyear(2000)
console.log(result)
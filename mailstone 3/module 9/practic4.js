
/**
 * object thaka small price phone bar korta hoba;
 * 
 */
//make objce may phone;
const phones = [
   {name: 'samsung', price: 50000, camera: '12mp', color:'black'},
   {name: 'vivo', price: 20000, camera: '12mp', color:'black'},
   {name: 'xoami', price: 15000, camera: '12mp', color:'black'},
   {name: 'iphone', price: 150000, camera: '12mp', color:'black'},
   {name: 'oppo', price: 12000, camera: '12mp', color:'black'}
]

function getCheepetPhone(numbers){
    let min = numbers[0]
    for(const num of numbers){
        if ( num.price < min.price){
            min = num
        }
    }
    return min
}

const result =getCheepetPhone(phones)
console.log(result)

/**
 * 1. function declaration
 * 
 * 2. function expression
 * 3. arrow function;
 * 
 *
 */

 //1. function declaration; amra ata declear kora agai call Korta parbo ;
 console.log(add(12, 2))
 function add(a, b){
    return a + b;
 }

 //2. function expression: ata declear korar aga call kora jay na :
//  console.log(add2(12, 15))
//  const add2 = function(n1, n2){
//     let sum = n1 + n2;
//     return sum
//  }

 
//3. arrow function: একটি ছোট ও সহজভাবে function লেখার পদ্ধতি । আমরা অনেক গুলো উদাহরণ দেখবো।

// single line not return use
// i. it we can wright one line function. when we have to need one line function. writing ths way;

const add3 = (a, b) => a + b
console.log(add3(11, 9))

//ii.while we will use one paramiter ;

const tenTime = x => x * 10

//iii. When we add multiple values, we do it like this

const addAll = (a, b , c, d, e, f) => (a+b+c+d+e+f)
console.log(addAll(12,4,2,3,5,8))

//iv. multiple line

const many = (a,b) =>{
    let sum = a + b;
    let mul = a * b;
    let div = a / b;
    let sqr = a*a + b;

    return sum, mul, div, sqr
}
console.log(many(4,2))

// we can use boolean;

const isOdd = x => x % 2 === 1;
console.log(isOdd(4)) 

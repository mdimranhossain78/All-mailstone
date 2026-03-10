/**
 * Default Parameter হলো এমন একটি feature (ES6),
যার মাধ্যমে আমরা function parameter এর default value সেট করতে পারি।

👉 যদি function call করার সময় argument না দেই, তাহলে default value ব্যবহার হবে।
 */
//exmple,

// use string;
function name(name){
   console.log(name)
}
name() // it is show undefined becous i am not give argument;

// solution:
function name1(name = ' '){  // it is default parameter.
    console.log(name)
}
name1()

//use number and multiply number;
// sum ----> 0
function num(a , b = 0){
console.log(a+b+c+d)
}
num(10)

// mul 
// mul ----> 1

function mul (a, b = 1){
    let m = a * b
  return m
}

console.log(mul(5))
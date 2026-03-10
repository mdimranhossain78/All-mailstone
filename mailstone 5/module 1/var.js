/**
 1 * Function scoped 

2 একই নামে আবার ডিক্লেয়ার করা যায়

3 Hoisting হয় (উপরে তুলে নেয়)

4 পুরনো পদ্ধতি (ES6 এর আগে ব্যবহার হতো বেশি)
 */


//  1 Function scoped

if(true){
    var name = 'tazmul'
} 
console.log(name) // it is not block scop . it is function scope . 

//একই নামে আবার ডিক্লেয়ার করা যায়;

var student = 'tazmul'
var student = 'hassan'
console.log(student)

//Hoisting হয় (উপরে তুলে নেয়) but undefined;


console.log(age)

var age = 30;
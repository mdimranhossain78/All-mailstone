/**
 * 1 it is a block scope variable
 * 2 Hoisting হয় কিন্তু ব্যবহার করার আগে error দেয় (Temporal Dead Zone)
 * 3 একই নামে আবার ডিক্লেয়ার করা যায় না
 * 4 value chengable
 */

// block scope variable
// example: 1 
 
// function block(){
//     let name = 'tazmul'
//     console.log(name)
// }
// console.log(name) //it is not output becous it outside of block scope

//example:2 

// if(true){
//     let age = 21;
// }
// console.log(age) // it not output becous it is too outsid of block scope;
//end

// 2.  Hoisting হয় কিন্তু ব্যবহার করার আগে error দেয় (Temporal Dead Zone)

// console.log(student)
// const student = 'diploma in cst' // it is error becous the variable diclear bofore console. it is hoisting system
 
//  একই নামে আবার ডিক্লেয়ার করা যায় না

// let name = 'tazmul'
// let name = 'hassan'

 //value chengable

 let a = 10;

 a = 20;
 console.log(a)

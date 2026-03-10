
/**
 * Template String হলো JavaScript-এর একটি modern feature (ES6), যেটা দিয়ে আমরা সহজভাবে string লিখতে এবং ভেরিয়েবল বসাতে পারি।

👉 এটা লিখতে আমরা ব্যবহার করি backtick ( ) — single ' ' বা double " " না।
 3. ${} it is dynamic 
 */

// 1 teplate string and dynamic 

const name = 'tazmul';
const age = 21;
const student = 'diploma'

const parson =`
i am ${name}. i am ${age} years old. i am studing in ${student}
`
console.log(parson)

//multi-line string;

let massage = `
Welcome mr,
i am learner js developer.
it is my first website.

`
console.log(massage)
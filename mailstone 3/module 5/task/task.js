//task1:
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors['golden rod'])

// task2:

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks)

//task 3:

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car.passengerCapacity = 10;

// console.log(car)

//task 4:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}
 let keys = Object.keys(student)
 let values = Object.values(student)
 let sum = keys+ ' - '+values
console.log(sum)



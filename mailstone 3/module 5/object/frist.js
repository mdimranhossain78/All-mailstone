
/**
 * frist object use 
 *   object হলো একটি নির্দিষ্ঠ variable কি  এবং ভেলু আকারে অনেক তথ্য রাখা যায়।
 * ১. 
 */

 // this is a car object . in this information of car:

 const car = {
    name: 'marcitiz',
    price: 200000,
 }
 console.log(car)

 /**
  * obje এর ভিতরে আরও এরে এবং object use করতে পারি
  */
  
 const subject =  {
    name : 'dsa',
    tercher : 'hassn',
    examDate : '20 feb',
    cepter:['firs', 'second', 'third'], // array 
    exams : {
        name : 'final',      //object in object
        mark: 100,   
    }

 }
 console.log(subject)
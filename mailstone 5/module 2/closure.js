


// function outer(){

// function inner(){
   
// }
// return inner
// }

// const result = outer()
// console.log(result)

function counter(owner){
    let count = 0;
    function incriment(){
      
         count++
        console.log(count, owner)
      
    }
    return incriment
}

let c = counter('tazmul')
let c1 = counter()
let c2 = counter()

c()
c()
c()
c()

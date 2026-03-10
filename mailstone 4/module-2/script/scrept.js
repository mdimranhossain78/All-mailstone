// video 2:
// tag name

const allHead = document.getElementsByTagName('h1')
for(const head of allHead){
    console.log(head.innerText)
}

// video 3:
// by id
const items = document.getElementById('foods')
items.innerText = 'Romdan foods items'
console.log(items)

// by class:

const cItems = document.getElementsByClassName('common')
for(const item of cItems){
console.log(item.innerText)

}

// video 4:
// queryselectorall explain/nodelist

// const nodeList = document.querySelectorAll('#old-dhaka')
// for(const list of nodeList){
//     console.log(list.innerText)
// }

// querySelector explyin or HTMLAllCollection

// const a = document.querySelector('#old-dhaka')
// for(const b of a){
//     console.log(b)
// }

//setAttribute

const f = document.getElementsByClassName('food')
f.set

// // this is a object
// const parsone = {
//     name: 'Tazmul',
//     age: 21,
//     isRich: false,
//     frinds: ['ashik', 'hridoy', 'tonmoy'],
//     money: 200
// }

// //we are convert to json . we need one mathord is json.stringify;
// const consvertJson = JSON.stringify(parsone)
// console.log(consvertJson)

// // we are convert to object . we need one mathord is joson.parse

// const convertObject = JSON.parse(consvertJson)
// console.log(convertObject)


// explore fetch function ;
 


const loadData = () => {
fetch("https://jsonplaceholder.typicode.com/users")

//convert json formet; and promis of respons
.then(res =>res.json())
//promis of json data
.then(data => console.log(data))

}
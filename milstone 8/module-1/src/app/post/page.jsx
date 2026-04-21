//data loading way:

import { cache } from "react";

//way 2:
// const getPost = async()=>{
//  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//  return res.json()
// }

//way 3:

// const getPost = async()=>{
//  try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
//  }
//  catch(err){
//     throw new Error('filed to fetch post')
//  }
// }

// way 4:

const getPost = async()=>{
 const res = await fetch('https://jsonplaceholder.typicode.com/posts')

 if(!res.ok){
     throw new Error('filed to fetch post')
 }
 return res.json()
}


const postPage = async() => {
    //way 1:
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()

 const posts = await getPost()
  

    return (
        <div>
            <h1>this is post page:{posts.length}</h1>
          
        </div>
    );
};

export default postPage;
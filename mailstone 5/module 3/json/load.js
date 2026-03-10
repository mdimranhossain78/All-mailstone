

let url = 'https://jsonplaceholder.typicode.com/posts'


const loadPost = () =>{
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        displayPost(data)
    })
}

const displayPost = (posts)=>{

    const postContainer = document.getElementById('post-container')
    console.log(postContainer)
    postContainer.innerHTML = " "

 posts.forEach(post => {
    //creat a element li;
    
   const div = document.createElement('div')

        div.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        
        `

    postContainer.appendChild(div)

 });
}
loadPost()
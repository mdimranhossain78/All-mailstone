
// it is hard way.
//  perent node
const mainContainar = document.getElementById('main-container');

//create child node
const placesSection = document.createElement('section')

//creat h1;
const heading = document.createElement('h1')
heading.innerText = 'scond player list'
placesSection.appendChild(heading)

// creat ul
const ul = document.createElement('ul')
placesSection.appendChild(ul)

//creat li;
const li1 = document.createElement('li')
li1.innerText='Hassan mahmud'
ul.appendChild(li1)


//append main-container in placesSection;

mainContainar.appendChild(placesSection)


//easy way.

const booksList = document.createElement('section')

booksList.innerHTML = `
<h1> This is a book list</h1>
<ul>
<li>story</li>
<li> math </li>
<li> physic </li>
<li> boyology </li>
</ul>
`
mainContainar.appendChild(booksList)




const loadLesson = () =>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => displayLesson(data.data))
}
loadLesson()
// i will remove all class for toggle;
const removeActive = () =>{
  const lessonbtn = document.querySelectorAll('.btn-lesson')
  // console.log(lessonbtn)
  lessonbtn.forEach(btn => btn.classList.remove('active'))
}
//load word;
const loadWord = (id)=>{
  const url = (`https://openapi.programming-hero.com/api/level/${id}`)
  fetch(url)
  .then(res => res.json())
  .then(json =>{
    removeActive() //remove function call
    const clickBtn = document.getElementById(`lesson-btn-${id}`)
    clickBtn.classList.add('active')
    displayWord(json.data)
  })

}


const displayWord =(words) =>{
 const wordContainer = document.getElementById('word-container')
 wordContainer.innerHTML = "";

 if(words.length === 0){
     wordContainer.innerHTML = `
        <div class="grid col-span-full text-center space-y-4">
    <img class="mx-auto" src="./assets/alert-error.png" alt="">
    <p class="bangla-font">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <p class="text-[34px] bangla-font">নেক্সট Lesson এ যান</p>
  </div>
     `
  }

 for(let word of words){
 
  

  const card = document.createElement('div')
  card.innerHTML = `
   <div class="bg-base-100 shadow-md text-center space-y-4 p-6 ">
  <h2 class="font-bold text-[32px]">${word.word? word.word : "শব্দ পাওয়া যায়নি"}</h2>
  <p class="font-medium text-[20px]">Meaning /Pronounciation</p>
  <div class="bangla-fonts font-semibold text-[#18181B95] text-[25px] ">"${word.meaning? word.meaning: "not found word" } / ${word.pronunciation?word.pronunciation:"not found Word"}"</div>
  <div class="flex justify-between">
    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
  </div>
 </div>


  `
  wordContainer.appendChild(card)
 }
}


const displayLesson = (lessons) =>{
 //get lessone constainer
 const lessonContainer = document.getElementById('lesson-constainer')
 lessonContainer.innerHTML = "";

 lessons.forEach(element => {
   //creat element
   const btnDiv= document.createElement('div')
   btnDiv.innerHTML = `
  
   <button id="lesson-btn-${element.level_no}" onclick = "loadWord(${element.level_no})" class="btn btn-outline btn-primary btn-lesson"><i class="fa-solid fa-book-open">
    </i>Lesson-${element.level_no} </button>
   
   `
   lessonContainer.appendChild(btnDiv)


 });
}


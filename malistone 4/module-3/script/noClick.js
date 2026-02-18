
function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}
function makeRed(){
    document.body.style.backgroundColor = 'red'
}
//3 ways
const btnMakeBlue = document.getElementById('btn-make-blue')
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}
//4 ways;

const btnMakePurple = document.getElementById('btn-make-purple')

btnMakePurple.onclick = makePurple
function makePurple (){
    document.body.style.backgroundColor ='purple'
}

/**
 * stude mark analyzer
 * three kaj korci 
 * 1. tota mark bar kora
 * 2. avarage
 * 3. highes mart and lowest mark
 * 
 */
function analyzerMark(markObj){
    // console.log(markObj)
    let total = 0;
    let highesMark = -Infinity;
    let lowesMark = Infinity;

    let highetSubject = null;
    let lowestSubject = null;



    for(const subject in markObj){
        // console.log(subject)
        const mark = markObj[subject]
        // console.log(mark)
        total = total + mark;

        if( mark > highesMark){
            // highestmark bar korsi
            highesMark = mark;
            // higheest sumbject bar korci
            highetSubject = subject;

        }
        if(mark < lowesMark){
            lowesMark = mark;
            lowestSubject = subject;
        }

    }
    const average = total / Object.keys(markObj).length; // akana langth bar korar jonno objcet funcion use korsi
    return {
        average,
        total,
        highesMark,
        lowesMark,
        highetSubject,
        lowestSubject
    }
}

const input = { math: 78, english: 65, physics: 88, bangla: 55 }
console.log(analyzerMark(input))


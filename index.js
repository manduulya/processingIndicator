const container = document.querySelector('.indicator-container');


const dotsArr = []
const rows = 5;

for(let i=0; i<rows; i++){
    dotsArr[i] = []
    const dots = document.createElement('div');
    dots.classList.add('indicator-box')
    container.appendChild(dots)
    dotsArr[i].push(dots)
}
// console.log(dotsArr)

const dots = document.querySelectorAll('.indicator-box')
// console.log(dots)


dotsArr.forEach((rows, i) => {
    growDot(rows, i)
    // console.log(rows, i)
})

function growDot(i) {
    // for(let dot of dots) {
        const dot = document.querySelector('.indicator-box')
        if(!dot.classList.contains('grow'));
        dot.classList.add('grow');
        console.log(i)
        

        // setTimeout(() => {
        //     growDot(rows)
        // }, 100)
        // setTimeout(() => {
        //     dot.classList.remove('grow')
        // }, 300)
    // }
}


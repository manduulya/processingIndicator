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


// dotsArr.forEach((i) => {
//     growDot(i)
//     console.log(i)
// })
for(let dot of dots) {
    console.log(dot)
    if(!dot.classList.contains('grow'));
    setTimeout(() => {
        dot.classList.add('grow');
    }, 1000)
    setTimeout(() => {
        dot.classList.remove('grow');
    }, 2000)
}

// function growDot() {

//         const dot = document.querySelector('.indicator-box')
//         if(!dot.classList.contains('grow'));
//         dot.classList.add('grow');
//         // console.log(dot)
        

//         // setTimeout(() => {
//         //     growDot(rows)
//         // }, 100)
//         // setTimeout(() => {
//         //     dot.classList.remove('grow')
//         // }, 300)
//     // 
// }
// growDot()

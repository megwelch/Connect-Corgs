const columns = document.getElementsByClassName("column")
const columnsArr = Array.from(columns)
const circles = document.getElementsByClassName('circle')
const circleArr = Array.from(circles)
let tokens = document.querySelector(".tokens")
// let isPlayer1 = true
let currPlayer = true
const winCombos = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], 
    [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11],
    [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17],
    [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
    [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29],
    [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
    [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    [0, 6, 12, 18], [1, 7, 13, 19], [2, 8, 14, 20],
    [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23],
    [6, 12, 18, 24], [7, 13, 9, 25], [8, 14, 20, 26],
    [9, 15, 21, 27], [10, 16, 22, 28], [11, 17, 23, 29],
    [12, 18, 24, 30], [13, 19, 25, 31], [14, 20, 26, 32],
    [15, 21, 27, 33], [16, 22, 28, 34], [17, 23, 29, 35],
    [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38],
    [21, 27, 33, 39], [22, 28, 34, 40], [23, 29, 35, 41],
    [2, 9, 16, 23,], [1, 8, 15, 22], [8, 15, 22, 29],
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35],
    [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
    [12, 19, 26, 33], [19, 26, 33, 40], [18, 25, 32, 39],
    [3, 8, 13, 18], [4, 9, 14, 19], [9, 14, 19, 24],
    [5, 10, 15, 20], [10, 15, 20, 25], [15, 20, 25, 30],
    [11, 16, 21, 26], [16, 21, 26, 31], [21, 26, 31, 36],
    [17, 22, 27, 32], [22, 27, 32, 37], [23, 28, 33, 38]
]
const column1Divs = document.getElementsByClassName("circle1")
const column1 = Array.from(column1Divs)
const column2Divs = document.getElementsByClassName("circle2")
const column2 = Array.from(column2Divs)
const column3Divs = document.getElementsByClassName("circle3")
const column3 = Array.from(column3Divs)
const column4Divs = document.getElementsByClassName("circle4")
const column4 = Array.from(column4Divs)
const column5Divs = document.getElementsByClassName("circle5")
const column5 = Array.from(column5Divs)
const column6Divs = document.getElementsByClassName("circle6")
const column6 = Array.from(column6Divs)
const column7Divs = document.getElementsByClassName("circle7")
const column7 = Array.from(column7Divs)


const startGame = () => {
    columnsArr.forEach(column => column.addEventListener('click', playSlot))
}

const choosePlayer = (event) => {
    let color = event.target.getAttribute('class')
    if(color === 'token1'){
        currPlayer = true
    } else if (color === 'token2'){
        currPlayer = false
    }
    console.log(currPlayer)
}

tokens.addEventListener('click', choosePlayer, {once: true})

const playSlot = (event) => {
    event.currentTarget = this
    let column = event.currentTarget.getAttribute('id')
    let red = document.getElementsByClassName('red')
    let yellow = document.getElementsByClassName('yellow')
    const currPlayer = choosePlayer() ? red : yellow

    // column 1
    if(column === 'column1'){
        for(i = column1.length - 1; i >= 0; i--){
            let slot = column1[i]
            console.log(slot)
            let taken = slot.classList.contains(red || yellow)
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add(currPlayer)
                    break
                } 
        }
    }
    // column 2
    if(column === 'column2'){
        for(i = column2.length - 1; i >= 0; i--){
            let slot = column2[i]
            console.log(slot)
            let taken = slot.classList.contains('red')
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add('red')
                    break
                } 
        }
    }
    // column 3
    if(column === 'column3'){
        for(i = column3.length - 1; i >= 0; i--){
            let slot = column3[i]
            console.log(slot)
            let taken = slot.classList.contains('red')
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add('red')
                    break
                } 
        }
    }
    // column 4
    if(column === 'column4'){
        for(i = column4.length - 1; i >= 0; i--){
            let slot = column4[i]
            console.log(slot)
            let taken = slot.classList.contains('red')
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add('red')
                    break
                } 
        }
    }
    // column 5
    if(column === 'column5'){
        for(i = column5.length - 1; i >= 0; i--){
            let slot = column5[i]
            console.log(slot)
            let taken = slot.classList.contains('red')
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add('red')
                    break
                } 
        }
    }
    // column 6
    if(column === 'column6'){
        for(i = column6.length - 1; i >= 0; i--){
            let slot = column6[i]
            console.log(slot)
            let taken = slot.classList.contains('red')
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add('red')
                    break
                } 
        }
    }
    // column 7
    if(column === 'column7'){
        for(i = column7.length - 1; i >= 0; i--){
            let slot = column7[i]
            console.log(slot)
            let taken = slot.classList.contains('red')
                if(slot[i] = taken){
                    continue
                } else {
                    slot.classList.add('red')
                    break
                } 
        }
    }
}

startGame()
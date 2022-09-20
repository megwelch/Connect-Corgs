const columns = document.getElementsByClassName("column")
const columnsArr = Array.from(columns)

const startGame = () => {
    columnsArr.forEach(column => column.addEventListener('click', playSpot))
}

const playSpot = (event) => {
    const playedSpot = event.target.getAttribute('class')
    console.log(playedSpot, 'click')
}

startGame()
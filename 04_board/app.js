const SQUARES_COUNT = 400
const COLORS = ['#B07B00', '#704F00', '#F0A600', '#FCB100', '#D69600',]

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}


const board = document.querySelector('#board')


for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', (e) => setColor(square))
    square.addEventListener('mouseleave', (e) => removeColor(square))
    board.append(square)
}


const getColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]


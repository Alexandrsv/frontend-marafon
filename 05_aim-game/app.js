const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const board = document.querySelector('#board')

let time = 0
let score = 0

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

const timeList = document.querySelector('#time-list')
timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame(time)
    }
})

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const createRandomCircle = () => {
    const size = getRandomNumber(15, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(size, width - size)
    const y = getRandomNumber(size, height - size)
    const circle = document.createElement('div')
    circle.classList.add('circle')
    board.append(circle)
    circle.style.width = size + 'px'
    circle.style.height = size + 'px'
    circle.style.top = y + 'px'
    circle.style.left = x + 'px'


}


const timeEl = document.querySelector('#time')
let interval

const startGame = (time) => {
    interval = setInterval(decreaseTime, 1000)
    createRandomCircle()
    debugger

    timeEl.innerHTML = `00:${time}`
}

const decreaseTime = () => {
    if (time === 0) {
        clearInterval(interval)
        finishGame()
    } else {
        let current = --time
        timeEl.innerHTML = `00:${current < 10 ? '0' + current : current}`
    }
}



const finishGame = () => {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`
}



const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length


let activeSlideIndex = 0
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

document.addEventListener('keydown', event => {
    event.key === 'ArrowUp' && changeSlide('up')
    event.key === 'ArrowDown' && changeSlide('down')
})

function changeSlide(direction) {
    direction === 'up' ? activeSlideIndex = ++activeSlideIndex % slidesCount : true
    direction === 'down' ? activeSlideIndex ? --activeSlideIndex : activeSlideIndex = slidesCount - 1 : true
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${(activeSlideIndex) * height}px)`
    sidebar.style.transform = `translateY(${(activeSlideIndex) * height}px)`
}

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))
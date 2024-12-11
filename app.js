'use strict'
const parentContainer = document.querySelector('.parent-container')
const clearButton = document.createElement('button')
const userInput = document.createElement('button')
userInput.textContent = 'Choose amount of squares'
userInput.classList.add('user-input')
clearButton.textContent = 'Clear Grid'
clearButton.classList.add('button')
parentContainer.appendChild(clearButton)
parentContainer.appendChild(userInput)
const container = document.querySelector('.container')

let width = 16

renderGrid(width)
function renderGrid(gridWidth) {
    container.innerHTML = ''
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        const element = document.createElement('div')
        element.classList.add('square')
        element.style.width = `${450 / gridWidth}px`
        element.style.height = `${450 / gridWidth}px`
        container.appendChild(element)
    }
}

let squares = document.querySelectorAll('.square')

userSelection()

function userSelection(width) {
    let userChoice = userInput.addEventListener('click', () => {
        userChoice = +prompt('How many squares would you like?')
         width += userChoice
        if (userChoice > 0 && userChoice <= 100) {
            width = userChoice
            renderGrid(width)
            affectGrid()
        } else {
            alert(`Invald input! The maximum number of squares are 100.`)
        }
    })
}

affectGrid()
function affectGrid() {
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor()
        })
    })
}

resetButton()
function resetButton() {
    clearButton.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square')
        squares.forEach(square => square.style.backgroundColor = '')
    })
}


function getRandomColor(length) {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
const conatiner = document.getElementById('container')
const color = 'red'
const SQUARES = 500
// ,'green','blue','white','yellow'


for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))

square.addEventListener('mouseout', () => removeColor(square))


    conatiner.appendChild(square)
}

function setColor(element) {
    
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(element){
element.style.backgroundColor = `#1d1d1d`
element.style.boxShadow = `0 0 2px #000`
}

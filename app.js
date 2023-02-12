const board = document.querySelector('#board')
const colors = ['#FA8072', '#00FF00', '#00BFFF', '#FFD700', '#FF1493', '#FFFFE0', '#4B0082', '#8B0000', '#000080']
const BOX_NUMBER = 1000

for (let i = 0 ; i < BOX_NUMBER ; i++){
    const box = document.createElement('div')
    box.classList.add('box')

    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))

    board.append(box)
}

function setColor(element) {
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function  removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function randomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
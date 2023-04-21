const board = document.querySelector('#board')
const colors = ['#4c23c9', '#4fb921', '#44eee0', '#d135c2', '#d9d93c', '#ac2c2c', '#4ca7f6', '#e8872e']
const SQUARES_NUMBER = 2090

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', ()=> {
		setColor(square)
	})

	square.addEventListener('mouseleave', ()=> {
		removeColor(square)
	})

	board.append(square)
}

function setColor(element) {
	const color = getRendomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 7px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#fff'
	element.style.boxShadow = `0 0 3px rgb(139, 139, 139)`
}

function getRendomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
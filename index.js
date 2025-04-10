
import Game from "./src/Game.js"
import {
    canvas,
    context, 
    CELL_SIZE
} from './src/global.js'
import { level1, level2, levels } from "./src/levels.js";


const g_ActionsContainer = document.querySelector('.actions')
const g_TargetElement = document.querySelector('.target')

let currentLevel = localStorage.getItem('current')
if(!currentLevel) {
    localStorage.setItem('current', 0)
    currentLevel = 0
}
else {
    currentLevel = parseInt(currentLevel)
}


// const game = Game.GetInstance()
const game = new Game()
game.load(levels[currentLevel])
game.run()


g_TargetElement.style.backgroundColor = game.color
g_ActionsContainer.innerHTML = ''

game.colors.forEach(color => {
    const btn = document.createElement('button')
    btn.classList.add('btn-color')
    btn.style.backgroundColor = color
    btn.value = color
    btn.addEventListener('click', e => {

    })


    g_ActionsContainer.appendChild(btn)
})
g_ActionsContainer.addEventListener('click', e => {
    if(e.target.classList.contains('btn-color')) {
        game.color = e.target.value
        // e.target.classList.toggle('active')
    }
})

canvas.addEventListener('click', e => {
    // Lấy tọa độ chuột trong canvas
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    const cellX = Math.floor(mouseX / CELL_SIZE);
    const cellY = Math.floor(mouseY / CELL_SIZE);
    game.changeColor(game.color, cellX, cellY)
    game.count--
    game.checkWin()
});

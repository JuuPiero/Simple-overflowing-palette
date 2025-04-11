
import Game from "./src/Game.js"
import {
    canvas,
    context, 
    CELL_SIZE
} from './src/global.js'
import { levels } from "./src/levels.js";

const UI_ActionsContainer = document.querySelector('.actions')
const UI_TargetElement = document.querySelector('.target')
const UI_Count = document.querySelector('.count')
const UI_Level = document.querySelector('.level')
const audio = document.querySelector('audio')


let currentLevel = localStorage.getItem('current')
if(!currentLevel) {
    localStorage.setItem('current', 0)
    currentLevel = 0
}
else {
    currentLevel = parseInt(currentLevel)
}


if(currentLevel < (levels.length)) {
    main()
}
else {
    alert("Bạn đã phá đảo game")
    localStorage.setItem('current', 0)
    window.location.href = 'index.html'
}

function main() {
    UI_Level.innerHTML = (currentLevel + 1) + ' / ' + (levels.length)

    const game = Game.GetInstance()
    // const game = new Game()
    // console.log(game.grid);

    game.load(levels[currentLevel])
    UI_Count.innerHTML = game.count
    game.run()

    UI_TargetElement.style.backgroundColor = game.target
    UI_ActionsContainer.innerHTML = ''

    game.colors.forEach((color, i) => {
        const btn = document.createElement('button')
        const index = document.createElement('span')
        btn.classList.add('btn-color')
        btn.style.backgroundColor = color
        btn.value = color

        index.classList.add('btn-index')
        index.innerHTML = (i + 1)
        btn.append(index)
        UI_ActionsContainer.appendChild(btn)
    })

    const buttons = document.querySelectorAll('.btn-color');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa class selected khỏi tất cả nút
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Thêm class selected cho nút được bấm
            button.classList.add('selected');
        })
    })


    UI_ActionsContainer.addEventListener('click', e => {
        if(e.target.classList.contains('btn-color')) {
            game.color = e.target.value
            // e.target.classList.toggle('active')
        }
    })

    canvas.addEventListener('click', async (e) => {
        // Lấy tọa độ chuột trong canvas
        audio.play()
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        const cellX = Math.floor(mouseX / CELL_SIZE);
        const cellY = Math.floor(mouseY / CELL_SIZE);
        await game.changeColor(game.color, cellX, cellY, () => {
            game.checkWin(); // Chỉ chạy sau khi màu đổi xong
        })
        game.count--
        
        // setTimeout(() => {
        //     game.checkWin()
        // }, 3000)

        UI_Count.innerHTML = game.count
    });
}
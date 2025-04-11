import { levels } from "../levels.js"

const levelContainer = document.querySelector('.levels')


levelContainer.innerHTML = ''
levels.forEach((level, index) => {
    const a = document.createElement('a')
    a.innerHTML = (index + 1)
    a.classList.add('level')
    a.href = 'game.html'
    a.addEventListener('click', e => {
        localStorage.setItem('current', index)
        // alert('Hello')
    })

    levelContainer.appendChild(a)
})


// levelElements.forEach(level => {
//     level.addEventListener('click', e => {
        
//     })
// })
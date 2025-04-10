const canvas = document.createElement('canvas')
document.querySelector('#root').append(canvas)
const context = canvas.getContext('2d')
context.globalAlpha = 0.8
const CELL_SIZE = 60

export {
    canvas,
    context, 
    CELL_SIZE
}
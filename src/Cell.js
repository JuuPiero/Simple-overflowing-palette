export default class Cell {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.color = null 
        this.prevColor = this.color
    }
}
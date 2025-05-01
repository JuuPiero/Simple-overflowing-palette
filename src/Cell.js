export default class Cell {
    constructor(x, y, canChange = true) {
        this.x = x
        this.y = y
        this.color = null 
        this.prevColor = this.color
        this.canChange = canChange
    }
}
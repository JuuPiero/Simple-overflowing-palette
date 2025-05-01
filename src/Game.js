import Cell from "./Cell.js"
import { drawRoundedRect } from "./utils.js"
import {
    context, 
    CELL_SIZE,
    canvas
} from './global.js'
function getRandomElement(arr) {
    if (arr.length === 0) return null; // Tránh lỗi mảng rỗng
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
export default class Game {

    static Instance = null

    static GetInstance() {
        if(this.Instance === null) {
            this.Instance = new Game()
        }
        return this.Instance
    }

    constructor() {
        this.grid = []
        this.isWinner = false
        this.currentLevel = null // level data
        this.colors = []
        this.color = null  // current color to change
        this.loop = null // loop id
        this.count = 0 // max change
        this.isChanging = false
    }
    run = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.render()
        this.loop = requestAnimationFrame(this.run);
        // this.checkWin()
    }

    load(level) {
        this.currentLevel = level
        this.count = level.maxChange
        this.target = level.colors[level.target]

        this.colors = level.colors
        this.color = level.colors[0]

        canvas.width = CELL_SIZE * this.currentLevel.cols
        canvas.height = CELL_SIZE * this.currentLevel.rows

        for (let y = 0; y < this.currentLevel.rows; y++) {
            for (let x = 0; x < this.currentLevel.cols; x++) {
                this.grid[y * this.currentLevel.cols + x] = new Cell(x, y)
                this.grid[y * this.currentLevel.cols + x].color = this.currentLevel.colors[this.currentLevel.data[y * this.currentLevel.cols + x]]
            }
        }
    }

    getCell(x, y) {
        if(x < 0 || y < 0 || x >= this.currentLevel.cols || y >= this.currentLevel.rows) return null
        return this.grid[y * this.currentLevel.cols + x]
    }

    // changeColor(color, x, y) {
    //     const cell = this.getCell(x, y)
    //     if (!cell || cell.color === color) return;
    //     cell.prevColor = cell.color
    //     cell.color = color
    //     // console.log(this.getCell(x - 1, y));
    //     if((x - 1 >= 0) && this.getCell(x - 1, y).color == cell.prevColor) {
    //         if(this.getCell(x - 1, y).color == cell.prevColor) {
    //             this.changeColor(cell.color, x - 1, y)
    //         }
    //     }
    //     if((x + 1 < cols) && this.getCell(x + 1, y).color == cell.prevColor) {
    //         if(this.getCell(x + 1, y).color == cell.prevColor) {
    //             this.changeColor(cell.color, x + 1, y)
    //         }
    //     }
    //     if((y - 1 >= 0) && this.getCell(x, y - 1).color == cell.prevColor) {
    //         if(this.getCell(x, y - 1).color == cell.prevColor) {
    //             this.changeColor(cell.color, x, y - 1)
    //         }
    //     }
    //     if((y + 1 < rows) && this.getCell(x, y + 1).color == cell.prevColor) {
    //         if(this.getCell(x, y + 1).color == cell.prevColor) {
    //             this.changeColor(cell.color, x, y + 1)
    //         }
    //     }
    // }

    //FILL
    async changeColor(color, x, y, callback) {
        this.isChanging = true
        const targetCell = this.getCell(x, y);
        if (!targetCell || targetCell.color == color) return; 
        this.count--

        const prevColor = targetCell.color;
        const queue = [{ x, y }];
        const visited = new Set();
        let step = 0; 
    
        while (queue.length > 0) {
            const { x, y } = queue.shift();
            
            // Kiểm tra xem đã duyệt ô này chưa
            if (visited.has(`${x},${y}`)) continue;
            visited.add(`${x},${y}`);
    
            // Chỉ đổi màu nếu ô vẫn còn đúng màu cũ
            setTimeout(() => {
                const cell = this.getCell(x, y);
                if (cell && cell.color === prevColor) {
                    cell.color = color;
                    // this.render();
                }
            }, step * 50);
    
            step++;
    
            // Duyệt 4 ô cạnh bên nhưng CHỈ THÊM VÀO nếu cùng màu ban đầu
            const directions = [
                { dx: -1, dy: 0 }, // Trái
                { dx: 1, dy: 0 },  // Phải
                { dx: 0, dy: -1 }, // Trên
                { dx: 0, dy: 1 }   // Dưới
            ];
    
            for (let { dx, dy } of directions) {
                const newX = x + dx;
                const newY = y + dy;
                const neighborKey = `${newX},${newY}`;
                if (
                    newX >= 0 && newX < this.currentLevel.cols &&
                    newY >= 0 && newY < this.currentLevel.rows &&
                    !visited.has(neighborKey) &&
                    this.getCell(newX, newY).color === prevColor
                ) {
                    queue.push({ x: newX, y: newY });
                }
            }
        }
        // Gọi callback sau khi màu đã đổi hết
        if (typeof callback === "function") {
            setTimeout(() => {
                callback();
               
            }, step * 50); // Delay tương ứng với lần đổi màu cuối cùng
        }
    }

    render() {
        for (let y = 0; y < this.currentLevel.rows; y++) {
            for (let x = 0; x < this.currentLevel.cols; x++) {
                const cell = this.grid[y * this.currentLevel.cols + x]
                drawRoundedRect(context, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE, 10, cell.color);
            }
        }
    }
    
    checkWin() {

        this.isWinner = true; // Mặc định là thắng, kiểm tra từng ô để xác nhận
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i].color !== this.target) {
                this.isWinner = false;
                break; // Thoát vòng lặp sớm nếu tìm thấy ô không khớp
            }
        }

        if (this.isWinner) {
            cancelAnimationFrame(this.loop);
            alert("You are winner !!!");
            if(confirm("Go to next level ?")) {
                const currentLevel = parseInt(localStorage.getItem('current'))
                localStorage.setItem('current', (currentLevel + 1))
                window.location.reload()
            }
            
        } 
        else if (this.count <= 0) {
            alert("Bạn đã thua!");
            cancelAnimationFrame(this.loop);
            window.location.reload()
            return
        }
    }

}
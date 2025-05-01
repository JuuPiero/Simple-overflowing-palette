import { CELL_SIZE } from "./global.js";

function drawRoundedRect(ctx, x, y, width, height, radius, color) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height);
    ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000"; // Viền
    ctx.stroke();
}

function drawCell(ctx, cell) {
    const x = cell.x * CELL_SIZE
    const y = cell.y * CELL_SIZE
    const radius = 10
    const color = cell.color
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + CELL_SIZE - radius, y);
    ctx.arcTo(x + CELL_SIZE, y, x + CELL_SIZE, y + radius, radius);
    ctx.lineTo(x + CELL_SIZE, y + CELL_SIZE - radius);
    ctx.arcTo(x + CELL_SIZE, y + CELL_SIZE, x + CELL_SIZE - radius, y + CELL_SIZE, radius);
    ctx.lineTo(x + radius, y + CELL_SIZE);
    ctx.arcTo(x, y + CELL_SIZE, x, y + CELL_SIZE - radius, radius);
    ctx.lineTo(x, y + radius);
    ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000"; // Viền
    ctx.stroke();

    
    if(!cell.canChange) {
        // Vẽ chữ X ở giữa
        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 5;
        ctx.moveTo(x + 5, y + 5); // Từ trên trái
        ctx.lineTo(x + CELL_SIZE - 5, y + CELL_SIZE - 5); // xuống dưới phải
        ctx.moveTo(x + CELL_SIZE - 5, y + 5); // Từ trên phải
        ctx.lineTo(x + 5, y + CELL_SIZE - 5); // xuống dưới trái
        ctx.stroke();
        ctx.lineWidth = 3;
    }
}


function drawRect(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * width, y * height, width, height);
    ctx.strokeStyle = "#000"; 
    ctx.strokeRect(x * width, y * height, width, height);
}

export {
    drawRoundedRect,
    drawRect,
    drawCell
}
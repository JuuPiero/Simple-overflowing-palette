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

function drawRect(ctx, x, y, width, height, color) {
    ctx.fillStyle = color; // Màu mặc định
    ctx.fillRect(x * width, y * height, width, height);
    ctx.strokeStyle = "#000"; // Viền ô vuông
    ctx.strokeRect(x * width, y * height, width, height);
}

export {
    drawRoundedRect,
    drawRect
}
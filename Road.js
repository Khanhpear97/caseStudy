class Road {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawRoad () {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#626262";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.closePath();
}
}
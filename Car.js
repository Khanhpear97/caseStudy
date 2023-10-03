class Car {
    x;
    y;
    width;
    height;
    carImg;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.carImg = document.getElementById('car')
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawCar () {
        this.ctx.beginPath();
        // this.ctx.fillStyle = "red";
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.carImg, this.x, this.y, this.width, this.height);
        this.ctx.closePath();
    }
    moveCarLeft () {
        if (this.x >= 7) {
            this.x -= 27;
        }
    }
    moveCarRight () {
        if (this.x <= 493 - this.width) {
            this.x += 27;
        }
    }
}
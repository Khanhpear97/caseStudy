class Line {
    x;
    y;
    name;
    width;
    constructor(name, y) {
        this.name = name;
        this.x = 240;
        this.y = y;
        this.width = 20;
        this.height = 70;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawLine () {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();
    }
    moveLine () {
        this.y += 12;
        if (this.y > 750) {
            this.y = 0;
        }
    }
}
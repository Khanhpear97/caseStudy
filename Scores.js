class Scores {
    point;
    constructor(point) {
        this.point = point;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawPoint () {
        this.ctx.font = '23px Verdana';
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Scores: ${this.point}`, 370, 30);
    }
}
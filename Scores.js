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
    gainSpeed () {
        if (this.point >= 10 && this.point < 25) {
            speed = 5;
        } else if (this.point >= 25 && this.point < 40) {
            speed = 7;
        } else if (this.point >= 40 && this.point < 60) {
            speed = 10;
        } else if (this.point >= 60) {
            speed = 13;
        }
    }
}
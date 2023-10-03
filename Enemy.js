class Enemy {
    x;
    y;
    start;
    width;
    height;
    enemyImg;
    constructor(start, y, width, height) {
        this.x = Math.floor(Math.random() * (493 - this.width) + 7);
        this.y = y;
        this.start = start;
        this.width = width;
        this.height = height;
        this.enemyImg = document.getElementById('enemy')
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    drawEnemy (car, life, scores) {
        this.ctx.beginPath();
        this.ctx.drawImage(this.enemyImg, this.x, this.y, this.width, this.height);
        this.collide(car, life, scores);
        this.ctx.closePath();
    }
    moveEnemy (scores) {
        this.y += 7;
        if (this.y > 750) {
            scores.point++;
            this.y = -200;
            this.x = Math.floor(Math.random() * (493 - this.width) + 7);
        }
    }
    collide (car, life, scores) {
        if (this.y + this.height > car.y && this.x < car.x +car.width
            && this.x + this.width > car.x) {
            this.y = this.start - 100;
            this.x = Math.floor(Math.random() * (493 - this.width) + 7);
            life.point--;
            if (life.point < 1) {
                this.gameOver(scores);
            }
        }
    }
    gameOver (scores) {
        gameOver = true;
        this.ctx.font = '50px Helvetica';
        this.ctx.fillStyle = "red";
        this.ctx.fillText('Game over:', 120, 250);
        this.ctx.font = '40px Helvetica';
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText(`Your score is: ${scores.point}`, 105, 300);
    }
}
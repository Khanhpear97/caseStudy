// Set map
let road = new Road(500, 750);
let life = new Life(3);
let scores = new Scores(0);
road.drawRoad();
let enemy1 = new Enemy( 0, 0, 60, 110);
let enemy2 = new Enemy(-330, -300, 60, 110);
let enemy3 = new Enemy(-600, -600, 60, 110);
let car = new Car(215, 620, 70, 120);

// Move down line
let line1 = new Line('line1',0);
let line2 = new Line('line2',-150);
let line3 = new Line('line3',-300);
let line4 = new Line('line4',-450);
let line5 = new Line('line5',-600);
let gameOver = false;
function render () {
    if (!gameOver){
        road.drawRoad();
        line1.moveLine();
        line2.moveLine();
        line3.moveLine();
        line4.moveLine();
        line5.moveLine();
        line1.drawLine();
        line2.drawLine();
        line3.drawLine();
        line4.drawLine();
        line5.drawLine();
        enemy1.moveEnemy(scores);
        enemy1.drawEnemy(car, life, scores);
        enemy2.moveEnemy(scores);
        enemy2.drawEnemy(car, life, scores);
        enemy3.moveEnemy(scores);
        enemy3.drawEnemy(car, life, scores);
        scores.drawPoint();
        life.drawPoint();
        car.drawCar();

        requestAnimationFrame(render);
    }
}
render();

window.addEventListener('keydown', (evt) => {
    let key = evt.keyCode;
    switch (key) {
        case 37:
            car.moveCarLeft();
            break;
        case 39:
            car.moveCarRight();
            break;
    }
})

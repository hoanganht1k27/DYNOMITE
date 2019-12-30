class grid {
    constructor(game) {
        this.game = game;
        this.y = 0;
        this.cnt = 0;
        this.balls = [];
        this.timeOut = 2;
        this.typeOfRow = 1;
        this.createBalls();
    }

    createBalls() {
        for(let row = 0; row < 1; row++) {
            for(let i = 0; i <= 11; i++) {
                let newBall = new ball(this.game, row - 1, i, this.y, this.typeOfRow);
                this.balls.push(newBall);
            }
        }
        this.typeOfRow = 3 - this.typeOfRow;
    }

    addBall(b, bulletBall) {
        let typeOfRow = b.typeOfRow;
        let row = Math.round(b.y / DIAMETER);
        let col = b.col;
        console.log(col, row);
        if(bulletBall.y != b.y) {typeOfRow = 3 - typeOfRow; row++;}
        let newBall = new ball(this.game, row, col, typeOfRow);
        this.balls.push(newBall);
    }

    update() {
        this.timeOut++;
        if(this.timeOut < 3) return;
        this.timeOut = 0;
        this.y++;
        this.cnt++;
        if(this.cnt == HEIGHT_PER_ROW) {
            this.createBalls();
            this.cnt = 0;
        }
        this.balls.forEach((ball) => {
            ball.update();
        })
    }

    draw() {
        this.balls.forEach((ball) => {
            ball.draw();
        })
    }
}
class physics {
    constructor(game, bulletBall, grid) {
        this.game = game;
        this.bulletBall = bulletBall;
        this.grid = grid;
        this.resColl = false;
    }

    collision(ball1, ball2) {
        return this.distance(ball1, ball2) <= DIAMETER;
    }

    distance(ball1, ball2) {
        return Math.sqrt((ball1.x - ball2.x) * (ball1.x - ball2.x) + (ball1.y - ball2.y) * (ball1.y - ball2.y));
    }

    checkCollision() {
        let resBall = null;
        this.grid.balls.forEach((ball) => {
            if(this.collision(ball, this.bulletBall)) resBall = ball;
        })
        return resBall;
    }
}
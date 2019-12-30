class arrow {
    constructor(game) {
        this.game = game;
        this.mousePos = null;
    }

    setMousePos(newMousePos) {
        this.mousePos = newMousePos;
    }

    draw() {
        if(this.mousePos == null) return;
        this.game.context.beginPath();
        this.game.context.strokeStyle = "#FF0000";
        this.game.context.lineWidth = 7;
        this.game.context.moveTo(BULLET_BALL_START_X, BULLET_BALL_START_Y);
        this.game.context.lineTo(this.mousePos.x, this.mousePos.y);
        this.game.context.stroke();
    }
}
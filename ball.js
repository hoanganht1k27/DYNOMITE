class ball {
    constructor(game, row, col, curRow, typeOfRow) {
        this.game = game;

        this.row = row;
        this.col = col;
        this.x = 0;
        this.y = 0;
        this.image = null;
        this.curRow = curRow;
        this.typeOfRow = typeOfRow;

        this.isImageLoaded = false;

        this.color = this.getRandomColor();

		this.loadImage();
        this.caculatePos();
    }

    caculatePos() {
        if(this.typeOfRow == 1) {
            this.x = this.col * DIAMETER - BALL_RADIUS;
            this.y = this.row * HEIGHT_PER_ROW;
        }
        else {
            this.x = this.col * DIAMETER - BALL_RADIUS * 2;
            this.y = this.row * HEIGHT_PER_ROW;
        }
    }

    loadImage() {
		this.image = new Image();
		this.image.onload = () => {
			this.isImageLoaded = true;
		}
		this.image.src = "images/ball.png";
    }
    
    getRandomColor() {
		let colors = ["red"];
		let r = Math.round(Math.random() * 0);
		return colors[r];
	}

    update() {
        this.y++;
    }

    draw() {
        if(!this.isImageLoaded) return;
        if(this.x - BALL_RADIUS < 0) return;
        if(this.x + BALL_RADIUS > GAME_WIDTH) return;
		this.game.context.drawImage(this.image, this.x - BALL_RADIUS, this.y - BALL_RADIUS);
	}
}
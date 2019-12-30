class bulletBall {
	constructor(game) {
		this.game = game;
		this.createStartProperties();
	}

	createStartProperties() {
		this.image = null;
		this.isImageLoaded = false;
		this.speed = BALL_SPEED;
		this.speedX = 0;
		this.speedY = 0;
		this.isMoving = false;


		this.x = BULLET_BALL_START_X;
		this.y = BULLET_BALL_START_Y;

		this.color = this.getRandomColor();

		this.loadImage();
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

	fire(mousePos) {
		if(this.isMoving) return;
		this.isMoving = true;
		let deg = Math.atan2(mousePos.y - this.y, mousePos.x - this.x);
		this.speedX = this.speed * Math.cos(deg);
		this.speedY = this.speed * Math.sin(deg);

	}

	update() {
		if(this.x - BALL_RADIUS <= 0 || this.x + BALL_RADIUS >= GAME_WIDTH) {
			this.speedX = -this.speedX;
		}
		this.x += this.speedX;
		this.y += this.speedY;

		//check over top
		if(this.y - BALL_RADIUS <= 0) {
			this.createStartProperties();
		}
	}

	draw() {
		if(!this.isImageLoaded) return;
		this.game.context.drawImage(this.image, this.x - BALL_RADIUS, this.y - BALL_RADIUS);
	}
}
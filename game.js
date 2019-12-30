class game {
	constructor() {
		this.canvas = null;
		this.context = null;
		this.init();
		this.loop();
	}

	init() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = GAME_WIDTH;
		this.canvas.height = GAME_HEIGHT;
		document.body.appendChild(this.canvas);

		//create grid
		this.grid = new grid(this);

		//create bullet ball
		this.bulletBall = new bulletBall(this);

		//create arrow
		this.arrow = new arrow(this);

		this.physics = null;

		this.listenMouseEvent();
	}

	getMousePosition(event) {
		var rect = this.canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		}
	}

	listenMouseEvent() {
		this.canvas.addEventListener('mousemove', (event) => {
			let mousePos = this.getMousePosition(event);
			this.arrow.setMousePos(mousePos);
			// console.log(mousePos);
		});

		document.body.addEventListener('click', (event) => {
			let mousePos = this.getMousePosition(event);
			this.bulletBall.fire(mousePos);
		});
	}

	loop() {
		this.update();
		this.draw();
		setTimeout(() => this.loop(), 20);
	}

	update() {
		this.bulletBall.update();
		this.physics = new physics(this, this.bulletBall, this.grid);
		let ball = this.physics.checkCollision();
		if(ball != null) {
			this.grid.addBall(ball, this.bulletBall);
			this.bulletBall.createStartProperties();
		}
		this.grid.update();
	}

	draw() {
		this.context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		this.arrow.draw();
		this.bulletBall.draw();
		this.grid.draw();
	}
}

var g = new game();
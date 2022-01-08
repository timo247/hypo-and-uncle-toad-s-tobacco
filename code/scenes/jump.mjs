import k from "../main.mjs";
import Hypocampus from "../objects/hypocampus.mjs";
import Salad from "../objects/salad.mjs";
import movingSalad from "../objects/movingSalad.mjs";
import { addScore } from "../objects/score.mjs";
import { updateScore } from "../objects/score.mjs";

export default class JumpScene {
	constructor({ PIPE_OPEN = 240, PIPE_MIN = 60, JUMP_FORCE = 550 * k.height() / 640, SPEED = 320, CEILING = -60 } = {}) {
		this.PIPE_OPEN = PIPE_OPEN
		this.PIPE_MIN = PIPE_MIN
		this.JUMP_FORCE = JUMP_FORCE
		this.SPEED = SPEED
		this.CEILING = CEILING
		this.addJumpScene = this.addJumpScene.bind(this)
		this.spawnPipe = this.spawnPipe.bind(this)

	}

	addJumpScene() {
		k.background = k.rgb(255, 255, 255);
		// define gravity
		gravity(3200 * height() / 640)


		let hypocampusObj = new Hypocampus;
		let hypocampus = hypocampusObj.addHypocampusObj();
		hypocampus.play("idle")

		let saladCounter = new Salad({scale: 0.5 * k.height() / 640, posX: 60, posY: 60});
		saladCounter.addSaladObj()
		
		console.log("hypo wiwdth",hypocampus.height)		
		let score = 0;
		let scoreLabel = addScore(score);

		// hypo movement
		// jump
		onKeyPress("space", () => {
			hypocampus.jump(this.JUMP_FORCE)
			console.log("jump")
			play("tinySplash")
		})

		// mobile
		onClick(() => {
			hypocampus.jump(this.JUMP_FORCE)
			play("woosh")
		})

		onKeyPress("p", () => {
			pause();
		})


		// check for fall death
		hypocampus.onUpdate(() => {
			if (hypocampus.pos.y >= height() || hypocampus.pos.y <= this.CEILING) {
				// switch to "lose" scene
				go("loseScene", score)
			}
		})

		// spawn a pipe every 1 sec
		loop(1, () => {
			this.spawnPipe()
		})


		// callback when hypo onCollide with objects with tag "pipe"
		k.onCollide("player", "pipe", () => {
			k.go("loseScene", score)
			play("hit")
			addKaboom(hypocampus.pos)
		})

		k.onCollide("player", "salad", (hypo, salad) => {
			score++;
			updateScore(score, scoreLabel);
			k.destroy(salad);			
			saladCounter.hasJustMoved = true;
		})

		// per frame event for all objects with tag 'pipe'
		onUpdate("pipe", (p) => {
			// check if bean passed the pipe
			if (p.pos.x + p.width <= hypocampus.pos.x && p.passed === false) {
				//score = updateScore(score, scoreLabel)
				p.passed = true
			}
		})

	}

	spawnPipe() {

		// calculate pipe positions
		const h1 = rand(this.PIPE_MIN, height() - this.PIPE_MIN - this.PIPE_OPEN)
		const h2 = height() - h1 - this.PIPE_OPEN


		let saladPos = h1 + (0.5 * this.PIPE_OPEN);
		console.log("saladpos", saladPos)
		let salad = new movingSalad({posX: width(), posY: saladPos, speed : this.SPEED, dir: LEFT})
		salad.addSaladObj();

		add([
			pos(width(), 0),
			rect(64, h1),
			color(0, 127, 255),
			outline(4),
			area(),
			move(LEFT, this.SPEED),
			cleanup(),
			// give it tags to easier define behaviors see below
			"pipe",
			{
				scale: k.height() / 557
			}
		])

		add([
			pos(width(), h1 + this.PIPE_OPEN),
			rect(64, h2),
			color(0, 127, 255),
			outline(4),
			area(),
			move(LEFT, this.SPEED),
			cleanup(),
			// give it tags to easier define behaviors see below
			"pipe",
			// raw obj just assigns every field to the game obj
			{ 
				passed: false,
				scale: k.height() / 557
			},
		])

		
	}

	loadJumpScene() { return k.scene("jumpScene", this.addJumpScene); }
}


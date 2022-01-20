import k from "../main.mjs";
import Hypocampus from "../objects/hypocampus.mjs";
import Salad from "../objects/salad.mjs";
import movingSalad from "../objects/movingSalad.mjs";
import { addScore } from "../objects/score.mjs";
import { updateScore } from "../objects/score.mjs";
import LoseScene from "./lose.mjs";
import Ground from "../objects/ground.mjs";
import {getScore} from "../objects/score.mjs"
import Rock from "../objects/rock.js";
import Loader from "../loader.mjs";

export default class JumpScene {
	constructor({ PIPE_OPEN = 240 * k.height()/640, PIPE_MIN = 60 * k.height()/640, JUMP_FORCE = 550 * k.height() / 640, SPEED = 320 * k.height()/640, CEILING = -60 * k.height()/640 } = {}) {
		this.PIPE_OPEN = PIPE_OPEN
		this.PIPE_MIN = PIPE_MIN
		this.JUMP_FORCE = JUMP_FORCE
		this.SPEED = SPEED
		this.CEILING = CEILING
		this.addJumpScene = this.addJumpScene.bind(this)
		this.spawnPipe = this.spawnPipe.bind(this)

	}

	addJumpScene() {
		console.log(this)
		k.background = k.rgb(255, 255, 255);
		// define gravity
		gravity(3200 * height() / 640)

		let music = k.play("starsArpMusic",{
			loop: true
		})
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
			//console.log("jump")
				play("tinySplash")
		})
		// mobile
		onClick(() => {
			hypocampus.jump(this.JUMP_FORCE)
			play("tinySplash")
		})


		// check for fall death
		hypocampus.onUpdate(() => {
			if (hypocampus.pos.y >= height() || hypocampus.pos.y <= this.CEILING) {
				// switch to "lose" scene
				this.goLoseScene(score, hypocampus, music);
			}
		})

		// spawn a pipe every 1 sec
		loop(1, () => {
			this.spawnPipe()
		})


		// callback when hypo onCollide with objects with tag "pipe"
		k.onCollide("player", "pipe", () => {
			this.goLoseScene(score, hypocampus, music);
		})

		k.onCollide("player", "salad", (hypo, salad) => {
			score++;
			updateScore(score, scoreLabel);
			k.destroy(salad);			
			saladCounter.hasJustMoved = true;
			if(score >= 5){
				this.goWinScene(score, hypocampus, music);
			}
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
		const h1 = rand(this.PIPE_MIN, k.height() - this.PIPE_MIN - this.PIPE_OPEN)
		const h2 = k.height() - h1 - this.PIPE_OPEN


		console.log("h1", h1)
		console.log("h2", h2)

		let saladPos = h1 + (0.5 * this.PIPE_OPEN);
		console.log("saladpos", saladPos)
		let salad = new movingSalad({posX: width(), posY: saladPos, speed : this.SPEED, dir: LEFT})
		salad.addSaladObj();

		add([
			pos(width(), 0),
			rect(64, h1),
			color(130, 27, 128),
			outline(4),
			area(),
			move(LEFT, this.SPEED),
			cleanup(),
			// give it tags to easier define behaviors see below
			"pipe",
			{
				scale: k.height() / 640
			}
		])

		add([
			pos(width(), h1 + this.PIPE_OPEN),
			rect(64, h2 * 640 / k.height()),
			color(130, 27, 128),
			outline(4),
			area(),
			move(LEFT, this.SPEED),
			cleanup(),
			// give it tags to easier define behaviors see below
			"pipe",
			// raw obj just assigns every field to the game obj
			{ 
				scale: k.height() / 640
			},
		])

		let topRockObj = new Rock({posX: width() + (30*k.height()/640), posY:0})
		topRockObj.randomizeRockType();
		topRockObj.addRockObj();

		let botRockObj = new Rock({posX: width() + (30*k.height()/640), posY:k.height()})
		botRockObj.randomizeRockType();
		botRockObj.addRockObj();

		
	}

	goLoseScene(score, hypocampus, music){
		let loseScene = new LoseScene()
				loseScene.updateLastSceneScore(score);
				loseScene.loadLoseScene();
				k.go("loseScene")
			play("hit")
			addKaboom(hypocampus.pos)
			music.pause();
	}

	goWinScene(score, hypocampus, music){
		let loseScene = new LoseScene()
				loseScene.updateLastSceneScore(score);
				loseScene.loadLoseScene();
				k.go("winScene")
			play("hit")
			addKaboom(hypocampus.pos)
			music.pause();
	}
	loadJumpScene() { return k.scene("jumpScene", this.addJumpScene); }
}


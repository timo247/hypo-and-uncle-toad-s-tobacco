import k from "../main.mjs";
import Hypocampus from "../objects/hypocampus.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";
import Toad from "../objects/toad.js";
import Loader from "../loader.mjs";
import JumpScene from "./jump.mjs";
import Fish from "../objects/fish.js";
import SeaWeed from "../objects/SeaWeed.js";

export default class LoseScene {
    constructor({lastGameScore = 0} = {}) {
        this.addLoseScene = this.addLoseScene.bind(this),
        this.lastGameScore = lastGameScore
    }

    updateLastSceneScore (lastSceneScore){
        console.log("score reçu:", lastSceneScore)
        this.lastGameScore = lastSceneScore
    }

    addLoseScene() {

        let muteSoundButton = new Button ({txt : "Son [M]", p : vec2( width() - 100 * k.height() / 640, 100 * k.height() / 640), f : () => k.volume() == 1 ? k.volume(0): k.volume(1)})
        muteSoundButton.addButton()



        let startButton = new Button ({txt : "Restart", p : vec2( width()/2, height()*1/3), f : () => go("jumpScene")})
        let quitButton = new Button ({txt : "Quit", p : vec2(width()/2, height()*2/3), f : () => pause()})
        //console.log(startButton)
        startButton.addButton()
        quitButton.addButton()

        let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
        restingHypo.addRestingHypoObj()


        let seaWeedObj = new SeaWeed({pos: vec2( k.width() * 5 / 7, k.height() - (25*k.height()/640)), isMoving:false });
		let seaWeed = seaWeedObj.addSeaWeedObj();
		seaWeed.play("idle");


        
        let seaWeedObj2 = new SeaWeed({pos: vec2( k.width() * 3 / 7, k.height() - (25*k.height()/640)), isMoving:false });
		let seaWeed2 = seaWeedObj2.addSeaWeedObj();
		seaWeed2.play("idle");
        

        let seaWeedObj3 = new SeaWeed({pos: vec2( k.width() * 4 / 7, k.height() - (25*k.height()/640)), isMoving:false });
		let seaWeed3 = seaWeedObj3.addSeaWeedObj();
		seaWeed3.play("idle");

        let seaWeedObj4 = new SeaWeed({pos: vec2( k.width() * 6 / 7, k.height() - (25*k.height()/640)), isMoving:false });
		let seaWeed4 = seaWeedObj4.addSeaWeedObj();
		seaWeed4.play("idle");



        let fish = new Fish({scale: 2.4 * k.height() / 640});
        fish.addRestingFishObj()



            // display score
           let scoreText = add([
                text("Score: ", this.lastGameScore),
                pos(width() / 2, height() / 2),
                scale(3),
                origin("center"),
            ])

            console.log("scoreTExt", scoreText)

            add([
                text(this.lastGameScore),
                pos((width() / 2) + (scoreText.width* 7 * scoreText.scale.x/ 5), height() / 2),
                scale(3),
                origin("center"),
            ])
          
        onKeyPress("enter", () => {
            let jumpScene = new JumpScene 
            jumpScene.loadJumpScene();
            k.go("jumpScene")
  
         })   
         
           
        onKeyPress("m", () => {
         k.volume() == 1 ? k.volume(0): k.volume(1)
         })  

         onKeyPress("M", () => {
            k.volume() == 1 ? k.volume(0): k.volume(1)
            })  
    }

    loadLoseScene() {
        return k.scene("loseScene", this.addLoseScene);
    }

};


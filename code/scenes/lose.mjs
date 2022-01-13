import k from "../main.mjs";
import Hypocampus from "../objects/hypocampus.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";

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
      
        

        let startButton = new Button ({txt : "Restart", p : vec2( width()/2, height()*1/3), f : () => go("jumpScene")})
        let quitButton = new Button ({txt : "Quit", p : vec2(width()/2, height()*2/3), f : () => pause()})
        //console.log(startButton)
        startButton.addButton()
        quitButton.addButton()

        let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
        restingHypo.addRestingHypoObj()

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
                pos(width() / 2 + (scoreText.width* 7 / 5), height() / 2),
                scale(3),
                origin("center"),
            ])

        
    }

    loadLoseScene() {
        return k.scene("loseScene", this.addLoseScene);
    }

};


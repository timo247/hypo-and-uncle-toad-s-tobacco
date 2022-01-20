import k from "../main.mjs";
import Hypocampus from "../objects/hypocampus.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";
import Toad from "../objects/toad.js";
import Loader from "../loader.mjs";
import marketingPrinciplesManager from "../objects/marketingPrinciplesManager.mjs";

export default class WinScene {
    constructor({lastGameScore = 0} = {}) {
        this.addWinScene = this.addWinScene.bind(this),
        this.lastGameScore = lastGameScore
    }

    updateLastSceneScore (lastSceneScore){
        console.log("score reçu:", lastSceneScore)
        this.lastGameScore = lastSceneScore
    }

    addWinScene() {

        let startButton = new Button ({txt : "Recommencer", p : vec2( width()/2, height()*1/3), f : () => go("jumpScene")})
        let quitButton = new Button ({txt : "Quit", p : vec2(width()/2, height()*2/3), f : () => pause()})
        //console.log(startButton)
        startButton.addButton()
        quitButton.addButton()

        let marketingPrincipleDisplayer = new marketingPrinciplesManager

        let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
        restingHypo.addRestingHypoObj()

        let restingToadObj = new Toad({resting: true});
        let restingToad = restingToadObj.addToadObj();
        console.log(restingToad)
        restingToad.play("idle");

            // display score
            /*
           let scoreText = add([
                text("Score: ", this.lastGameScore),
                pos(width() / 2, height() / 2),
                scale(3),
                origin("center"),
            ])*/

            let scoreText = add([
                text(marketingPrincipleDisplayer.pickupRandomPrinciple(), this.lastGameScore),
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

    loadWinScene() {
        return k.scene("winScene", this.addWinScene);
    }

};


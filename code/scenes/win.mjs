import k from "../main.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";
import MarketingPrinciplesManager from "../objects/marketingPrinciplesManager.mjs";

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

        let startButton = new Button ({txt : "Découvir autre chose avec DigiMarc", p : vec2( width()/2, height()*3/4), f : () => go("jumpScene"), scale: vec2(2), hoverScale: vec2(2.2)})
        startButton.addButton()

        let marketingPrinciplesManager = new MarketingPrinciplesManager
        console.log(marketingPrinciplesManager)

        let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
        restingHypo.addRestingHypoObj()
        let marketingText = marketingPrinciplesManager.addText(marketingPrinciplesManager.pickupRandomPrinciple(), 15)
    }

    loadWinScene() {
        return k.scene("winScene", this.addWinScene);
    }

};


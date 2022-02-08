import k from "../main.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";
import MarketingPrinciplesManager from "../objects/marketingPrinciplesManager.mjs";
import DigiMarc from "../objects/Digimarc.js";
import JumpScene from "./jump.mjs";

export default class WinScene {
    constructor({lastGameScore = 0, musicStarted = true} = {}) {
        this.addWinScene = this.addWinScene.bind(this),
        this.lastGameScore = lastGameScore,
        this.musicStarted = musicStarted
    }

    updateLastSceneScore (lastSceneScore){
        console.log("score reçu:", lastSceneScore)
        this.lastGameScore = lastSceneScore
    }

    addWinScene() {

        let startButton = new Button ({txt : "Apprendre autre chose avec DigiMarc", p : vec2( width()/2, height()*3/4), f : () => go("jumpScene"), scale: vec2(2), hoverScale: vec2(2.2)})
        startButton.addButton()

        let marketingPrinciplesManager = new MarketingPrinciplesManager
        marketingPrinciplesManager.transformSpecialChars()
        console.log(marketingPrinciplesManager)

        let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
        let digiMarcObj = new DigiMarc({scale:3.4* k.height() / 640, pos : vec2( width()/2, height()*1/3)});
        let digiMarc = digiMarcObj.addDigiMarcObj();
        digiMarc.play("talk");
        //restingHypo.addRestingHypoObj()
        let marketingText = marketingPrinciplesManager.addText(marketingPrinciplesManager.pickupRandomPrinciple(), 15)


        let muteSoundButton = new Button ({txt : "Son [M]", p : vec2( width() - 100 * k.height() / 640, 100 * k.height() / 640), f : () => k.volume() == 1 ? k.volume(0): k.volume(1)})
        muteSoundButton.addButton()


        onKeyPress("m", () => {
            k.volume() == 1 ? k.volume(0): k.volume(1)
            })  
   
        onKeyPress("M", () => {
            k.volume() == 1 ? k.volume(0): k.volume(1)
             })  

        
        onKeyPress("space", () => {
            console.log("space pressed")
            let jumpScene = new JumpScene({playingMusic: this.musicStarted})
            jumpScene.loadJumpScene();
            k.go("jumpScene")
  
         })
    }

    loadWinScene() {
        return k.scene("winScene", this.addWinScene);
    }

};


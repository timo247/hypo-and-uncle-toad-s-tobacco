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

        const startButton = new Button ({txt : "Rejouer \n (touche enter)", p : vec2( width()/2, height()*3/4), f : () => go("jumpScene"), scale: vec2(2), hoverScale: vec2(2.2)})
        startButton.addButton()
        const textButton = new Button ({txt : "Apprendre autre chose \n (touche espace)", p : vec2( width()/2, height()*5/6), f : () =>{ this.resetText()}, scale: vec2(2), hoverScale: vec2(2.2)})
        textButton.addButton()
        const muteSoundButton = new Button ({txt : "Son [M]", p : vec2( width() - 100 * k.height() / 640, 100 * k.height() / 640), f : () => k.volume() == 1 ? k.volume(0): k.volume(1)})
        muteSoundButton.addButton()
        this.resetText()


        onKeyPress("m", () => {
            k.volume() == 1 ? k.volume(0): k.volume(1)
            })  
   
        onKeyPress("M", () => {
            k.volume() == 1 ? k.volume(0): k.volume(1)
             })  

        
        onKeyPress("enter", () => {
            const jumpScene = new JumpScene({playingMusic: this.musicStarted})
            jumpScene.loadJumpScene();
            k.go("jumpScene")
  
         })

         onKeyPress("space", () => {
            this.resetText()
         })
    }

    resetText() {
        k.every("marketing_text", k.destroy)
        const marketingPrinciplesManager = new MarketingPrinciplesManager
        marketingPrinciplesManager.transformSpecialChars()
        marketingPrinciplesManager.addText(marketingPrinciplesManager.pickupRandomPrinciple(), 15)
        const digiMarcObj = new DigiMarc({scale:3.4* k.height() / 640, pos : vec2( width()/2 + 25, height()*1/3)});
        const digiMarc = digiMarcObj.addDigiMarcObj();
        digiMarc.play("talk");
    }

    loadWinScene() {
        return k.scene("winScene", this.addWinScene);
    }

};


import k from "../main.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";
import JumpScene from "./jump.mjs";

export default class IntroScene {
    constructor({lastGameScore = 0} = {}) {
        this.addIntroScene = this.addIntroScene.bind(this),
        this.introText = "Vous faites bien de passer par là ! \n Voici DigiMarc, et il conaît tout un tas d'astuces marketing qui peuvent vous aider dans vos projets ! Il vous suffit d'appuyer sur espace sur ordinateur ou de toucher l'écran sur mobile pour le faire sauter et manger les fruits. Une fois rassasié, DigiMarc vous donnera un conseil marketing pertinent. DigiMark connaît pleins de choses, mais il a aussi très faim ! Pour 5 conseils, rassasiez Marc 5 fois, et pour 20 conseils, vous avez compris ..."
    }


    addIntroScene() {

        let startButton = new Button ({txt : "Continuer", p : vec2( width()/2, height()*3/4), f : () => go("jumpScene"), scale: vec2(3), hoverScale: vec2(3.6), isHovering: true})
        startButton.addButton()

        this.introText = this.introText.replaceAll('é', 'e') 
        this.introText = this.introText.replaceAll('è', 'e')
        this.introText = this.introText.replaceAll('à', 'a')
        this.introText = this.introText.replaceAll('ê', 'e') 
        this.introText = this.introText.replaceAll('ù', 'u')
        this.introText = this.introText.replaceAll('ç', 'c')

        let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
        restingHypo.addRestingHypoObj()
        this.addText(this.introText, 15)

    }

    loadIntroScene() {
        return k.scene("introScene", this.addIntroScene);
    }

    addText(t, s){
        add([
          text(t, {
            size: s, 
            font: 'sinko',
            width: width(),
            transform: (idx) => ({
              pos: vec2(0, wave(-1, 1, time() * 1.5 + idx * 0.5)),
              scale: wave(1, 1.2, time() * 2 + idx) * k.height() / 640,
            }),
          }),
          origin("center"),
          pos(width()/2, height()/2),
          z(100)
        ])
      }

};


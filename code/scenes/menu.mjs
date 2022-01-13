import k from "../main.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";
import Salad from "../objects/salad.mjs";

export default class Menu {
    constructor() {
        this.addMenu = this.addMenu.bind(this),
        this.score = 0,
        this.previousSceneName = "",
        this.previousSceneDisplay = NaN

    }

    addMenu() {        
       /* let music = k.play("gorilleDilemMusic",{
            loop: true
        })*/
            let startButton = new Button ({txt : "Start", p : vec2( width()/2, height()*1/3), f : () => {/*music.pause();*/ go("jumpScene")}})
            let quitButton = new Button ({txt : "Quit", p : vec2(width()/2, height()*2/3), f : () => pause()})
            //console.log(startButton)
            startButton.addButton()
            quitButton.addButton()

            let restingHypo = new RestingHypo({scale: 3.4 * k.height() / 640});
            restingHypo.addRestingHypoObj()
            
            let salad = new Salad;
            salad.addSaladObj()

            

            // reset cursor to default at frame start for easier cursor management
            onUpdate(() => cursor("default"))
    }

    loadMenu() {
        return k.scene("menu", this.addMenu);
    }


}
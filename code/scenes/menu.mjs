import k from "../main.mjs";
import Button from "../objects/button.mjs";
import RestingHypo from "../objects/restingHypo.mjs";

export default class Menu {
    constructor() {
        this.addMenu = this.addMenu.bind(this),
        this.score = 0,
        this.previousSceneName = "",
        this.previousSceneDisplay = NaN

    }

    addMenu() {        
            
            let startButton = new Button ({txt : "Start", p : vec2( width()/2, height()*1/3), f : () => go("jumpScene")})
            let quitButton = new Button ({txt : "Pause", p : vec2(width()/2, height()*2/3), f : () => pause()})
            console.log(startButton)
            startButton.addButton()
            quitButton.addButton()

            let restingHypo = new RestingHypo;
            restingHypo.addRestingHypoObj()
            

            // reset cursor to default at frame start for easier cursor management
            onUpdate(() => cursor("default"))
    }

    loadMenu() {
        return k.scene("menu", this.addMenu);
    }


}
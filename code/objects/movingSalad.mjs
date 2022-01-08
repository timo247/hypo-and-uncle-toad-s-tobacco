import Salad from "./salad.mjs";
import k from "../main.mjs";

export default class movingSalad extends Salad {
    constructor({dir = LEFT, speed = 800, posX = k.width(), posY =  k.height() / 2} = {}){
        super(),
        this.dir = dir,
        this.speed = speed,
        this.posX = posX,
        this.posY = posY
    }
    addSaladObj(){
        const salad = k.add([
            k.sprite("salad"),
            k.origin("center"),
            pos(this.posX, this.posY),
            cleanup(),
            move(this.dir, this.speed),
            area(),
            {
                speed: 250,
                scale: (0.15 * k.height() / 640),
                //scale: (46.7 / height())
                //scale: (67.16 / k.width())
                //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
               // height: 46.7 / height(),
                //width: 395.1 / width(),
            },            
            "salad"
        ]);   

        
        this.saladObj = salad; 
        return salad;
    }
}
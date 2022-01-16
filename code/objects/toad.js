import k from "../main.mjs";
export default class Toad{
    constructor({scale = 4 * k.height() / 640, resting = false, posX = k.width() * 3/4, posY = k.height()/2 } = {}){
        this.scale = scale,
        this.resting = resting,
        this.addToadObj = this.addToadObj.bind(this),
        this.posX = posX,
        this.posY = posY
    }

    addToadObj(){
        if(!this.resting){
            const toad = k.add([
                k.sprite("toad"),
                k.origin("center"),
                k.pos(this.posX, this.posY),
                
                area(),
                body(),            
                {
                    speed: 250,
                    scale: this.scale,
                    //scale: (46.7 / height())
                    //scale: (67.16 / k.width())
                    //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
                   // height: 46.7 / height(),
                    //width: 395.1 / width(),
                },            
                "toad"
            ]); 
            
            return toad;
        } else {
            const toad = k.add([
                k.sprite("toad"),
                k.origin("center"),
                k.pos(this.posX, this.posY),          
                {
                    speed: 250,
                    scale: this.scale,
                    //scale: (46.7 / height())
                    //scale: (67.16 / k.width())
                    //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
                   // height: 46.7 / height(),
                    //width: 395.1 / width(),
                },            
                "toad"
            ]);   
            return toad;
        }
    }
}

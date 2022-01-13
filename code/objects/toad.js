import k from "../main.mjs";
export default class Toad{
    constructor({scale = 1.3 * k.height() / 640, resting = false } = {}){
        this.scale = scale,
        this.resting = resting
    }

    addToadObj(){
        if(!this.resting){
            const Toad = k.add([
                k.sprite("toad"),
                k.origin("center"),
                k.pos(k.center()),
                
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
        } else {
            const Toad = k.add([
                k.sprite("toad"),
                k.origin("center"),
                k.pos(k.center()),            
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
        }
       
        return hypocampus;
    }
}

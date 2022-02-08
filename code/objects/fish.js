import k from "../main.mjs";
export default class Fish{
    constructor({scale= 1.3 * k.height() / 640} = {}){
        this.scale = scale
    }

    addRestingFishObj(){
            const fish = k.add([
                k.sprite("fish"),
                k.origin("center"),
                k.pos(width() * 1 /4, height() * 1/2), 
                z(0),
                "deco",
                {
                    scale: this.scale
                }
            ]);   
            
            fish.onUpdate(()=>{
                if(fish.scale < 2.5){
                    fish.scale += 0.1;
                }
            })
        return fish;
    }
}
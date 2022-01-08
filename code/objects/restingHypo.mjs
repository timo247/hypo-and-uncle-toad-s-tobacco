import k from "../main.mjs";
export default class RestingHypo{
    constructor({scale= 1.3 * k.height() / 640} = {}){
        this.scale = scale
    }

    addRestingHypoObj(){
            const hypocampus = k.add([
                k.sprite("restingHypo"),
                k.origin("center"),
                k.pos(width() * 1 /4, height() * 1/2), 
                "deco",
                {
                    scale: this.scale
                }
            ]);   
            
            hypocampus.onUpdate(()=>{
                if(hypocampus.scale < 2.5){
                    hypocampus.scale += 0.1;
                }
            })
        return hypocampus;
    }
}
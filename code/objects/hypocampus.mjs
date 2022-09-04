import k from "../main.mjs";
export default class Hypocampus{
    constructor({scale = 0.165 * k.height() / 640 } = {}){
        this.scale = scale
    }

    addHypocampusObj(){
        const hypocampus = k.add([
            k.sprite("hypocampus"),
            k.origin("center"),
            k.pos(k.center()),
            area(),
            body(),
            {
                speed: 250,
                scale: this.scale,
            },            
            "player"
        ]);    
        return hypocampus;
    }
}

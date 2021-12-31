import k from "../main.mjs";
export default class Hypocampus{
    constructor({} = {}){

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
                scale: 0.17
            },            
            "player"
        ]);    
        return hypocampus;
    }
}

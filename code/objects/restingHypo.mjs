import k from "../main.mjs";
export default class RestingHypo{
    constructor({} = {}){

    }

    addRestingHypoObj(){
        const hypocampus = k.add([
            k.sprite("restingHypo"),
            k.origin("center"),
            k.pos(width() * 1 /4, height() * 1/2),           
            "deco",
            {
                scale: 1.5
            }
        ]);    
        return hypocampus;
    }
}
import k from "../main.mjs";
export default class Ground{
    constructor({scale = 13 * k.height() / 640 } = {}){
        this.scale = scale
    }

    addGroundObj(){
        const ground = k.add([
            k.sprite("ground"),
            k.origin("center"),
            k.pos(0, k.height() + 90),
            area(),            
            {
                scale: this.scale,
            },            
            "ground"
        ]);    
        return ground;
    }
}

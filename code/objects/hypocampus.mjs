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
                scale: (1.3 * k.height() / 640),
                //scale: (46.7 / height())
                //scale: (67.16 / k.width())
                //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
               // height: 46.7 / height(),
                //width: 395.1 / width(),
            },            
            "player"
        ]);    
        return hypocampus;
    }
}

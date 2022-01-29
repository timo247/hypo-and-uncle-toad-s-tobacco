import k from "../main.mjs";
export default class DigiMarc{
    constructor({scale = 1.3 * k.height() / 640 } = {}){
        this.scale = scale
    }

    addDigiMarcObj(){
        const digiMarc = k.add([
            k.sprite("digiMarc"),
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
            "digiMarc"
        ]);    
        return digiMarc;
    }
}

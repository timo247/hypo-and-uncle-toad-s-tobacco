import k from "../main.mjs";
export default class Buble{
    constructor({scale = 0.25 * k.height() / 640, pos = vec2( width()/2, height()*3/4), speed = 320 * k.height()/640, dir = LEFT } = {}){
        this.scale = scale,
        this.pos = pos,
        this.speed = speed,
        this.dir = dir
    }

    addBubleObj(){
        const buble = k.add([
            k.sprite("buble"),
            k.origin("center"),
            k.pos(this.pos),
            move(LEFT, this.speed),
            area(),
            cleanup(),
            {
                speed: 250,
                scale: this.scale,
                //scale: (46.7 / height())
                //scale: (67.16 / k.width())
                //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
               // height: 46.7 / height(),
                //width: 395.1 / width(),
            },            
            "buble"
        ]);    
        return buble;
    }
}

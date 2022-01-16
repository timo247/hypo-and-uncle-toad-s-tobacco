import k from "../main.mjs";
export default class Rock{
    constructor({posX = (k.width()*2 / 3), posY =  k.height() / 2, scale = 0.85 * k.height() / 640, speed = 320 * k.height()/640, dir = LEFT} = {}){
        this.posX = posX;
        this.posY = posY;
        this.rockdObj = NaN,
        this.rockName = "rock1"
        this.scale = scale
        this.speed = speed
        this.dir = dir
    }


    randomizeRockType(){
        let n = randi(0,3)
            if(n == 1){
                this.rockName = "rock1"
            } else if(n == 2 ){
                this.rockName = "rock2"
            }        
    }
    addRockObj(){
        const rock = k.add([
            k.sprite(this.rockName),
            k.origin("center"),
            pos(this.posX, this.posY),
            area(),
            cleanup(),
            move(this.dir, this.speed),
            {
                speed: 250,
                scale: this.scale,
                //scale: (46.7 / height())
                //scale: (67.16 / k.width())
                //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
               // height: 46.7 / height(),
                //width: 395.1 / width(),
            },            
            "rock",
        ]);   

        this.rockdObj = rock; 
        return rock;
    }
}

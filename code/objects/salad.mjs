import k from "../main.mjs";
export default class Salad{
    constructor({posX = (k.width()*2 / 3), posY =  k.height() / 2, scale = 1.3 * k.height() / 640} = {}){
        this.posX = posX;
        this.posY = posY;
        this.saladObj = NaN,
        this.scale = scale,
        this.hasJustMoved = false
    }

    addSaladObj(){
        const salad = k.add([
            k.sprite("salad"),
            k.origin("center"),
            pos(this.posX, this.posY),
            {
                speed: 250,
                scale: this.scale,
                //scale: (46.7 / height())
                //scale: (67.16 / k.width())
                //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
               // height: 46.7 / height(),
                //width: 395.1 / width(),
            },            
            "salad",
            "scoreSalad"
        ]);   

        salad.onUpdate(() => {
            if(this.hasJustMoved){
                if(salad.scale < 0.5){
                    salad.scale += 0.03;
                } else {
                    salad.scale = 0.15 * k.height() / 640;
                    this.hasJustMoved = false;
                }
            }
        })

        this.saladObj = salad; 
        return salad;
    }
}

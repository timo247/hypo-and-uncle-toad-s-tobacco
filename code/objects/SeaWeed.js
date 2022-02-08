import k from "../main.mjs";
export default class SeaWeed {
    constructor({ scale = 0.25 * k.height() / 640, pos = vec2(width() / 2, height() * 3 / 4), speed = 320 * k.height() / 640, dir = LEFT, isMoving = true } = {}) {
        this.scale = scale,
            this.pos = pos,
            this.speed = speed,
            this.dir = dir,
            this.isMoving = isMoving
    }

    addSeaWeedObj() {
        if (this.isMoving) {


            const seaWeed = k.add([
                k.sprite("seaWeed"),
                k.origin("center"),
                k.pos(this.pos),
                move(LEFT, this.speed),
                area(),
                cleanup(),
                z(5),
                {
                    speed: 250,
                    scale: this.scale,
                    //scale: (46.7 / height())
                    //scale: (67.16 / k.width())
                    //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
                    // height: 46.7 / height(),
                    //width: 395.1 / width(),
                },
                "seaWeed"
            ]);
            return seaWeed;
        } else {       
            const seaWeed = k.add([
                k.sprite("seaWeed"),
                k.origin("center"),
                k.pos(this.pos),
                area(),
                cleanup(),
                z(5),
                {
                    speed: 250,
                    scale: this.scale,
                    //scale: (46.7 / height())
                    //scale: (67.16 / k.width())
                    //scale: ((1254 / 557) * ((width()/height()) / (1254 / 557)) / 13.24),
                    // height: 46.7 / height(),
                    //width: 395.1 / width(),
                },
                "seaWeed"
            ]);
            return seaWeed;
        }
    }
}

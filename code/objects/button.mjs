import k from "../main.mjs"

export default class Button {

    constructor({txt = "Start", p = vec2(200, 100), f = () => console.log("oh hi")} = {}){
        this.txt = txt,
        this.p = p,
        this.f = f
    }

    addButton(){
        const btn = add([
            text(this.txt),
            pos(this.p),
            area({ cursor: "pointer", }),
            scale(1),
            origin("center"),
        ])

        
        btn.onUpdate(() => {
            if (btn.isHovering()) {
                const t = time() * 10
                btn.color = rgb(
                    wave(0, 255, t),
                    wave(0, 255, t + 2),
                    wave(0, 255, t + 4),
                )
                btn.scale = vec2(1.2)
            } else {
                btn.scale = vec2(1)
                btn.color = rgb()
            }            
        })
        btn.onClick(this.f)

    
    }

	
}


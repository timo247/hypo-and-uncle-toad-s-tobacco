import k from "../main.mjs"

export default class Button {

    constructor({txt = "Start", p = vec2(200, 100), f = () => console.log("oh hi"), scale = vec2(1), hoverScale = vec2(1.2), isHovering = false} = {}){
        this.txt = txt,
        this.p = p,
        this.f = f,
        this.hoverScale = hoverScale,
        this.scale = scale,
        this.isHovering = isHovering
    }

    addButton(){
        const btn = add([
            text(this.txt),
            pos(this.p),
            area({ cursor: "pointer", }),
            scale(1),
            origin("center"),
            z(5)
        ])

        
        btn.onUpdate(() => {
            if (btn.isHovering() || this.isHovering) {
                const t = time() * 10
                btn.color = rgb(
                    wave(0, 255, t),
                    wave(0, 255, t + 2),
                    wave(0, 255, t + 4),
                )
                btn.scale = this.hoverScale
            } else {
                btn.scale = this.scale
                btn.color = rgb()
            }            
        })
        btn.onClick(this.f)

    
    }

	
}


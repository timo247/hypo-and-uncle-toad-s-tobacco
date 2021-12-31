import k from "../main.mjs";

export default class LoseScene {
    constructor() {
        this.addLoseScene = this.addLoseScene.bind(this)
    }

    addLoseScene() {
        scene("lose", (score) => {
            add([
                sprite("hypocampus"),
                pos(width() / 2, height() / 2 - 108),
                scale(3),
                origin("center"),
            ])

            // display score
            add([
                text(score),
                pos(width() / 2, height() / 2 + 108),
                scale(3),
                origin("center"),
            ])

            // go back to game with space is pressed
            onKeyPress("space", () => go("jumpScene"))
            onClick(() => go("jumpScene"))
        })
    }

    loadLoseScene() {
        return k.scene("loseScene", this.addLoseScene);
    }

};


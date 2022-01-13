import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import k from "./main.mjs";
export default class Loader {
    constructor() {
    }
    loadAssets() {
        /* k.loadSprite("hypocampus", "sprites/Hypo-pink.svg", {
             origin: k
         });
         */
        loadSprite("hypocampus", "/sprites/hypos-8-red.svg", {
            origin: k,
            //height: height(),
            "width": 700,

            // The image contains 9 frames layed out horizontally, slice it into individual frames
            sliceX: 8,
            // Define animations
            anims: {
                "idle": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 7,
                    // Frame per second
                    speed: 5,
                    loop: true,
                },
                "run": {
                    from: 4,
                    to: 7,
                    speed: 10,
                    loop: true,
                },
                // This animation only has 1 frame
                "jump": 8
            },
        })
        loadSprite("restingHypo", "sprites/hypo-pink.svg");
        loadSprite("salad", "sprites/salad.svg");
        loadSprite("ground", "sprites/ground.svg");
        loadSprite("toad", "sprites/toad.svg")
        k.loadFont("unscii", "fonts/unscii_8x8.png", 24, 24);
        k.loadSound("hit", "../sounds/heartImpact.wav")
        k.loadSound("woosh", "../sounds/airWoosh.wav")
        k.loadSound("enteringWaterSplash", "../sounds/entering-water.mp3")
        k.loadSound("tinySplash", "../sounds/tiny-splash.mp3")
        k.loadSound("tinySplash2", "../sounds/tiny-splash-2.mp3")
        k.loadSound("tinySplash3", "../sounds/tiny-splash-3.mp3")
        k.loadSound("buble", "../sounds/bubble-one.mp3")
        k.loadSound("botRadioMusic", "../sounds/Botradio.mp3")
        k.loadSound("gorilleDilemMusic", "../sounds/gorilleDilemMusic.mp3")
        k.loadSound("spaceArpMusic", "../sounds/spaceArpMusic.mp3")
        k.loadSound("starsArpMusic", "../sounds/starsArpMusic.mp3")
        k.loadSound("antepsDedalMusic", "../sounds/antepsDedalMusic.mp3")
        k.loadSound("banbouGreenBrumeMusic", "../sounds/banbouGreenBrumeMusic.mp3")

    }
};
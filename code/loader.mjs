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
        loadSprite("hypocampus", "/sprites/hypo-8.png", {
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


        let toadSprite = loadSprite("toad", "/sprites/toad.svg", {
            origin: k,
            //height: height(),
            "width": 700,

            // The image contains 9 frames layed out horizontally, slice it into individual frames
            sliceX: 7,
            // Define animations
            anims: {
                "idle": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 6,
                    // Frame per second
                    speed: 5,
                    loop: true,
                }
            },
        })
        console.log(toadSprite)
        



        k.loadSprite("digiMarc", "sprites/digiMarc.png", {
            origin: k,
            //height: height(),
            "width": 700,

            // The image contains 9 frames layed out horizontally, slice it into individual frames
            sliceX: 12,
            // Define animations
            anims: {
                "talk": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 11,
                    // Frame per second
                    speed: 5,
                    loop: false,
                }
            },
        })


        k.loadSprite("buble", "sprites/bubles.png", {
            origin: k,
            //height: height(),
            "width": 700,

            // The image contains 9 frames layed out horizontally, slice it into individual frames
            sliceX: 4,
            sliceY: 4,
            // Define animations
            anims: {
                "pop": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 15,
                    // Frame per second
                    speed: 5,
                    loop: false,
                }
            },
        })

        k.loadSprite("seaWeed", "sprites/seaWeed.png", {
            origin: k,
            //height: height(),
            "width": 700,

            // The image contains 9 frames layed out horizontally, slice it into individual frames
            sliceX: 4,
            // Define animations
            anims: {
                "idle": {
                    // Starts from frame 0, ends at frame 3
                    from: 0,
                    to: 3,
                    // Frame per second
                    speed: 5,
                    loop: true,
                }
            },
        })

        loadSprite("restingHypo", "sprites/hypo-pink.svg");
        loadSprite("fish", "sprites/fish-flappy.png");
        loadSprite("salad", "sprites/peach.png");
        loadSprite("ground", "sprites/ground.svg");
        loadSprite("toad", "sprites/toad.svg")
        loadSprite("rock1", 'sprites/rock1.png')
        loadSprite("rock2", 'sprites/rock2.png')
        k.loadFont("unscii", "fonts/unscii_8x8.png", 24, 24);
        //k.loadFont("cga", "fonts/cga.png", 8, 8, "éàè")
        k.loadFont("cga", "fonts/cga.png",8,8,CP437_CHARS)
        k.loadFont("cp437", "../fonts/cp437.png", 8, 8, CP437_CHARS);
        k.loadFont("drake", "../fonts/drake_10x10.png", 10, 10, CP437_CHARS);
        k.loadSound("hit", "../sounds/heartImpact.wav")
        k.loadSound("woosh", "../sounds/airWoosh.wav")
        k.loadSound("enteringWaterSplash", "../sounds/entering-water.mp3")
        k.loadSound("tinySplash", "../sounds/tiny-splash.mp3")
        //k.loadSound("tinySplash2", "../sounds/tiny-splash-2.mp3")
        //k.loadSound("tinySplash3", "../sounds/tiny-splash-3.mp3")
        k.loadSound("buble", "../sounds/bubble-one.mp3")
        k.loadSound("starsArpMusic", "../sounds/starsArpMusic.mp3")

    }
};
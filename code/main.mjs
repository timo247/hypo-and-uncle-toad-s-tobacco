//terminer l'import du score
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import Loader from "./loader.mjs";
import IntroScene from "./scenes/intro.js";
import JumpScene from "./scenes/jump.mjs";
import LoseScene from "./scenes/lose.mjs";
import Menu from "./scenes/menu.mjs";
import WinScene from "./scenes/win.mjs";

let kaboomCanvas = document.querySelector("#myCanvas")
const k = kaboom({
    width: kaboomCanvas.clientWidth ,
    height: kaboomCanvas.clientHeight ,
    scale: 1,
    font: "sinko",
    canvas: kaboomCanvas,
    //background: [104, 104, 130,],
    background: (29, 40, 64)
})


export default k;
let loader = new Loader
loader.loadAssets();

let jumpScene = new JumpScene({scoreToWin: 10})
let loseScene = new LoseScene
let menu = new Menu 
jumpScene.loadJumpScene();
loseScene.loadLoseScene();
menu.loadMenu();
let winScene = new WinScene({musicStarted: false})
winScene.loadWinScene()
let introScene = new IntroScene
introScene.loadIntroScene()


k.go("winScene");
kaboomCanvas.focus()


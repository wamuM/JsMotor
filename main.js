import {checkHitboxes,Hitbox} from "./ml/hitbox.js";
import calculateDrawableElements from "./ml/calDrEl.js";
import {GameObject, Sprite} from "./ctr/basics.js";
import drawSceene from "./ml/draw.js"

var lastTimestamp = null
async function gameFrame(timestamp,game){
    if(!lastTimestamp) lastTimestamp = 0;
    let dt = (timestamp - lastTimestamp)/1000;
    lastTimestamp = timestamp
    let hitboxes = await  checkHitboxes();
    let inputs   = await  checkInputs();
    await executeCode(dt);
    let drawableElements = await calculateDrawableElements(game.sceene.gameObjects);
    //todo light
    await drawSceene(drawableElements)
    requestAnimationFrame((ts)=>{gameFrame(ts,this)})
}
function sampleFunction(){
    return new Promise((_res)=>{
        _res()
    });
}
class Game{
    constructor(canvas = false,fps = false){
        this.sceene
        this.cameras = []
        this.hitboxes = []
        this.canvas = canvas 
        this.ctx = false
        this.startEvent = ()=>{};
        this.updateEvent = ()=>{};
    }
    runGame(){
        this.startEvent();
        this.animationLoopId = requestAnimationFrame((ts)=>{gameFrame(ts,this)})
    }
    stopGame(){
        cancelAnimationFrame(this.animationLoopId)
        this.stopEvent()
    }
    on(event,callback){
        switch(event){
            case "start":
                this.startEvent = callback;
            break;
            case "update":
                this.updateEvent = callback;
            break;
            case "stop":
            break;
            default:
            console.error("Invalid event")
            break;
        }
    }
}
export {Game, GameObject, Sprite}

//* Importing processors
import processSounds from "./procesors/sound.js" //Transfroms an url to a sound
import processImages from "./processors/image.js"//Transforms an url into an image
import keyEvent from "./processors/key.js" // gives a key event
//* Importing phases 
import Collide from "./phases/Collide.js"; // Sceene --> Colsion Sceene
import Compute from "./phases/Compute.js"; // Sceene --> coputedDrawableObjects
import Draw from "./phases/Draw.js";  // --> coputedDrawableObjects --> void();

//* Importing Prototipes 
import Sceene from "./prototipes/Sceene.js";
import Sprite from  "./prototipes/Sprite.js";
import Hitbox from "./prototipes/Hitbox.js"

//* Game variables
const Game = {
    "canvas":undefined,
    "ctx":undefined,
    "fps":undefined,
    "sceene":undefined,
    "sceenes":undefined,
    "phases":{},
    "toSound":false,
    "sounds":{}
}
var settedUp = false;
Game.start = ()=>{
   if(Game.toSound) this.sounds = processSounds(Game.toSound);
   Game.instance = requestAnimationFrame(frame)
}
Game.end = ()=>{
    cancelAnimationFrame(Game.instance)
}

//! MAIN FLOW
function frame(timestamp){
    //// changeGame();
    Game.sceenes[Game.sceene].collisions=Collide(Game.sceenes[Game.sceene].colliders);
    Game.phases.Update();
    let computedDrawableObjects = Compute();
    Game.ctx.clearRect(0,0,Game.canvas.width,Game.canvas.height);
    Draw(computedDrawableObjects);
}
//* Dev Functions
function setUp(canvas,settings){
        //Canvas management
        Game.canvas = isNaN(canvas)?canvas:document.getElementById(canvas);
        Game.ctx = Game.canvas.getContext("2d");
        //Settings
        Game.fps = settings.fps || 30;
        //Colections
        Game.sceenes = [] //Colection of sceenes
        Game.sceene = 0;
        //Validate
        settedUp = true;
}
function setUpStart(handler){
    Game.phases.Start = handler;
}
function setUpUpdate(handler){
    Game.phases.Update = handler;
}
//* Dev export
export {
    setUp,
    setUpStart as Start,
    setUpUpdate as Update,
    Sceene,
    Sprite,
    Hitbox,
};
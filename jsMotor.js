//* Importing processors
//todo import processSounds from "./procesors/sound.js" //Transfroms an url to a sound
//todo import processImages from "./processors/image.js"//Transforms an url into an image
//todo import keyEvent from "./processors/key.js" // gives a key event
//* Importing phases 
import Collide from "./phases/Collide.js"; // Sceene --> Colsion Sceene
import Compute from "./phases/Compute.js"; // Sceene --> coputedDrawableObjects
import Draw from "./phases/Draw.js";  // --> coputedDrawableObjects --> void();

//* Importing Prototipes 
import Sceene from "./prototipes/Sceene.js";
import Sprite from "./prototipes/Sprite.js";
//todo import Hitbox from "./prototipes/Hitbox.js";
import GameObject from "./prototipes/GameObject.js"

//* Game variables
var Game = {
    "canvas":undefined,
    "ctx":undefined,
    "fps":undefined,
    "sceene":undefined,
    "sceenes":undefined,
    "phases":{
        Start:()=>{},
        Update:()=>{}
    },
    "toSound":false,
    "sounds":{}
}
var settedUp = false;
Game.start = (g)=>{
   Game.phases.Start();
   //todo if(Game.toSound) this.sounds = processSounds(Game.toSound);
   Game.instance = requestAnimationFrame(frame)
}
Game.end = ()=>{
    cancelAnimationFrame(Game.instance)
}

//! MAIN FLOW
function frame(timestamp){
    //? Game.sceenes[Game.sceene].collisions=Collide(Game.sceenes[Game.sceene].colliders);
    Game.phases.Update();
    let computedDrawableObjects = Compute(Game.sceenes[Game.sceene].objects);
    console.log(computedDrawableObjects[0])
    Game.ctx.clearRect(0,0,Game.canvas.width,Game.canvas.height);
    Draw(Game.canvas,Game.ctx,computedDrawableObjects);
}
//* Dev Functions
function setUp(canvas,settings = {}){
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
    Game,
    setUp,
    setUpStart as Start,
    setUpUpdate as Update,
    Sceene,
    Sprite,
    GameObject,
    //Hitbox,
};
export {GameObject, Sprite}
class GameObject{
    /*
     x: x coord
     y: y coord
     r: rotation
     sprite: Associated sprite
     name: Associated name
     childs: childs objects
    */
    constructor(x,y,r,{sprite = new Sprite(0,0), childs = []},name){
        this.x = x;
        this.y = y;
        this.r = r;
        this.sprite = sprite;
        this.name = name || "NewGameObject"
        this.childs = childs;
    }
}
class Sprite{
    constructor(x,y){
     /*
        x: x coord
        y: y coord
    */
        this.x = x
        this.y = y
    }
}
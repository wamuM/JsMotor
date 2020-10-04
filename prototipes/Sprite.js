class Sprite{
    constructor(type,x,y,data){
        this.x = x;
        this.y = y;
        this.type = type
        switch(type){
            case "void":
            break;
            case "rect":
                this.w = data.w||data.with;
                this.h = data.h||data.height;
                this.fS = data.fS|| data.fillStyle || "#000";
                this.sS = data.sS|| data.fillStyle || "#000";
            break;
            default:
               return console.error("error at creating a sprite")
            break;
        }
    }
}
export default Sprite;
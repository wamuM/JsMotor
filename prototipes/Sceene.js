class Sceene{
    /*  
        name: string || false
        objects: collection GameObject
        coliders: collection Colsision
        collisions: collection triggeredColision
    */
    constructor(name,objects = [],cameras=[],camera = 0,coliders = [],collisions = []){
        this.id = undefined;
        this.name = name || undefined;
        this.cameras = cameras;
        this.camera = camera;
        this.objects = objects;
        this.coliders = coliders;
        this.collisions = collisions;
    }
    addGameObject(gameObject){
        gameObject.id = this.objects.length;
        this.objects.push(gameObject);
    }
}
export default Sceene;
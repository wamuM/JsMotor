class GameObject{
    constructor(name,position,sprite,hitbox,childs){
        this.name = name || undefined;
        this.x = position[0] || position.x;
        this.y = position[1] || position.y;
        this.r = position[2] || position.r || 0;
        this.sprite = sprite || {type:"void"}
        this.hitbox = hitbox || false;
        this.childs = childs || false;
    }
    appendChild(gameObject){
        gameObject.parent = this.id;
        this.childs.push(gameObject);
    }
}

export default GameObject;
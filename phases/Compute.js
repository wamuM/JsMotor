export default Compute;
function destroyArray(array){//transforms any array [[a,b,c],[d,e,[f,g,h,[i,...]]] into [a,b,c,d,e,f,g,h,i,...]
    let betterArray = [];
    array.forEach(element => {
        if(element[0]){
          betterArray = betterArray.concat(destroyArray(element));
        }else
        betterArray.push(element);
    });
    return betterArray;
}
function Compute(objects,_parent){
    let layer = [[]]
    for (let objectID in objects){
            console.log(objects[objectID].name)
            //Computed X, Y and Rotation
            objects[objectID].sprite.x += objects[objectID].x 
            objects[objectID].sprite.y += objects[objectID].y
            objects[objectID].sprite.r += objects[objectID].r

            if(!layer[objects[objectID].sprite.layer])layer[objects[objectID].sprite.layer] = [];//Create layer if it doesn't exist
            layer[objects[objectID].sprite.layer].push(objects[objectID])// Add to layer
            if(objects[objectID].childs){
                console.log("child")
                layer[objects[objectID].sprite.layer] = layer[objects[objectID].sprite.layer].concat(destroyArray(Compute(objects[objectID].childs)))
                console.log(layer)
            }
    }
    return layer;
}

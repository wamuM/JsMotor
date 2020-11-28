export default calculate

async function calculate(gameObjects){
    return new Promise((_res)=>{
        for await(go of gameObjects){
            if(!go.sprite || go.sprite.hide){
                
            }
        }
        _res()
    });
}
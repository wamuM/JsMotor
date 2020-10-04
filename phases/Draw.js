export default Draw;
function Draw(canvas,ctx,coputedDrawableObjects){
    console.log(ctx)
    for(let layer=0;layer<coputedDrawableObjects.lenght;layer++){
        computedDrawableObjects[layer].forEach(e => {
            switch(e.type){
                case "void":
                break;
                case "rect":
                    ctx.beginPath();
                    if(e.fS){
                        ctx.fillStyle = e.fS 
                        ctx.fillRect(e.x,e.y,e.w,e.h);
                    }
                    if(e.sS){
                        ctx.strokeStyle = e.sS;
                        ctx.strokeStyle(e.x,e.y,e.w,e.h)
                    }
                    ctx.endPath();
                break;
            }
        });
    }
}
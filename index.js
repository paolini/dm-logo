function draw(ctx, N=5, dots=true) {
    const margin = 0.2;
    const r0 = 0.2;
    let ii = 0;
    let i = -margin;
    let jj = 1;
    let j = 1;
    ctx.save();
    ctx.translate(200,370);
    ctx.scale(30,30);
    for(let k=0;k<=N;++k) {        
        ctx.fillStyle = "#0000FF";
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(j,0);
        ctx.arc(0,0,j,0,Math.PI/2);
        ctx.closePath();
        ctx.fill();

        if (dots) {
            // disegna jj punti.
            ctx.fillStyle = "#FFFFFF";
            const r = r0;
            const R = j-r-r0;
            for(let x=0;x<jj;++x) {
                const alpha = Math.PI/2/(jj)*(x+0.5);
                ctx.beginPath();
                ctx.arc(R*Math.cos(alpha), R*Math.sin(alpha), r, 0, 2*Math.PI);
                ctx.fill();
            }
        }

        ctx.translate(0,-margin);
        ctx.rotate(-Math.PI/2);        
        const n = i+j+margin;
        ctx.translate(0,-i-margin);
        [i, j] = [j, i+j+margin];
        [ii, jj] = [jj, ii+jj];
    }
    ctx.restore();
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
draw(ctx,5,false);
ctx.translate(400,0);
draw(ctx,5,true);
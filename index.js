function draw(ctx, N=5, dots=true, squares=true) {
    const margin = 0.2;
    const r0 = 0.25;
    const blue = "#0000FF";
    const white = "#FFFFFF";
    const gray = white; //"#A0A0A0";
    let ii = 0;
    let i = -margin;
    let jj = 1;
    let j = 1;
    ctx.save();
    ctx.translate(200,370);
    ctx.lineWidth=0.1;
    ctx.scale(30,30);
    for(let k=0;k<=N;++k) {        
        if (squares) {
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(j,0);
            ctx.lineTo(j,j);
            ctx.lineTo(0,j);
            ctx.closePath();
            ctx.strokeStyle=blue;
            ctx.fillStyle = gray;
            ctx.fill();
            ctx.stroke();
        }

        ctx.fillStyle = blue;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(j,0);
        ctx.arc(0,0,j,0,Math.PI/2);
        ctx.closePath();
        ctx.fill();

        if (dots) {
            // disegna jj punti.
            if (squares) ctx.fillStyle = gray;
            else ctx.fillStyle = white;
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
draw(ctx,5,false,false);
ctx.translate(400,0);
draw(ctx,5,true,false);
ctx.translate(400,0);
draw(ctx,5,false,true);
ctx.translate(400,0);
draw(ctx,5,true,true);
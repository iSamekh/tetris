let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFFFFF";

const w = 15;
const h = w;
let x = 15;
let y = 0;


//Math.random();

function frames () {


}


function peça1 () {
    y += 1;
    let rotacao = []

    ctx.clearRect(0, 0, 400, 600);
    ctx.fillRect(x, y, w, h);
    ctx.fillRect(x + 20, y, w, h);
    ctx.fillRect(x + 40, y, w, h);
    ctx.fillRect(x + 60, y, w, h);

    ```
    OOOO
    XXXX
    OOOO
    OOOO
    ```

    // ctx.clearRect(0, 0, 400, 600);
    // ctx.fillRect(x, y, w, h);
    // ctx.fillRect(x, y + 20, w, h);
    // ctx.fillRect(x, y + 40, w, h);
    // ctx.fillRect(x, y + 60, w, h);



}


function test() {
    y += 1;
    ctx.clearRect(0, 0, 400, 600);
    ctx.fillRect(x, y, w, h);
    ctx.fillRect(x + 20, y, w, h);
    ctx.fillRect(x, y + 20, w, h);
    ctx.fillRect(x, y + 40, w, h);
}

setInterval(test, 1);



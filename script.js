
document.addEventListener("DOMContentLoaded", () =>{

    const grid = document.querySelector(".grid")
    let squares = Array.from(document.querySelectorAll(".grid div"))
    const ScoreDisplay = document.querySelector("#score")
    const StartBtn = document.querySelector("#start-button")
    const width = '3.8vh'
    
    //Peças
    
    ``` Peça 1
    O X X   O O O   O X O   O O O
    O X O   X X X   O X O   X O O
    O X O   O O X   X X O   X X X
    ```
    
    const lTetromino = [
        [1, width+1, width*2+1,2],
        [width, width+1, width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]
    
    ``` Peça 2
    O O O   X O O   O O O   X O O
    O X X   X X O   O X X   X X O
    X X O   O X O   X X O   O X O
    ```
    
    const sTetromino = [
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1]
    ]
    
    ``` Peça 3
    O O O   O X O   O O O   O X O
    X X O   X X O   X X O   X X O
    O X X   X O O   O X X   X O O
    ```
    
    const zTetromino = [
        [width,width+1,width*2+1,width*2+2],
        [1,width,width+1,width*2],
        [width,width+1,width*2+1,width*2+2],
        [1,width,width+1,width*2]
    ]
    
    ``` Peça 4
    O X O   O X O   O O O   O X O
    X X X   O X X   X X X   X X O
    O O O   O X O   O X O   O X O
    ```
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    
    ``` Peça 5
    X X O   X X O   X X O   X X O
    X X O   X X O   X X O   X X O
    O O O   O O O   O O O   O O O
    ```
    
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    ``` Peça 6
    O X O O   O O O O   O X O O    O O O O
    O X O O   X X X X   O X O O    X X X X
    O X O O   O O O O   O X O O    O O O O
    O X O O   O O O O   O X O O    O O O O
    ```
    
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]
    
    const tetrominoes = [lTetromino,sTetromino,zTetromino,tTetromino,oTetromino,iTetromino]
    
    let currentPosition = 4
    let current = tetrominoes[0][0]
    
    function draw() {
        current.forEach(i => {
            squares[currentPosition + i].classList.add('tetromino')
        })
    }
    
    draw()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });
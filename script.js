let defaultSize = 16;
let gridBoxWidth = 20;
let maxCanvasSize = 500;

createGrid(defaultSize);

let grid = document.querySelectorAll('.grid-box');
let canvasSizeButton = document.querySelector('.canvas-size-button');
let clearButton = document.querySelector('.clear-button');

canvasSizeButton.addEventListener('click', ()=>{

    let size = 0;
    while (size < 10 || size > 100){

        size = prompt("Enter size of the grid (from 10 to 100)");
    }

    createGrid(size);
    grid = document.querySelectorAll('.grid-box');

});

clearButton.addEventListener('click', ()=>{

    clearGrid(grid)
});







function createGrid(size){

    let gridContainer = document.querySelector('.grid-container');

    // Empty grid
    gridContainer.innerHTML = "";

    let gridBoxWidth = maxCanvasSize / size;


    gridContainer.style['height'] = maxCanvasSize + 'px';
    gridContainer.style['width'] = maxCanvasSize + 'px';

    // Create grids

    for (let i = 0; i < size*size; i++){

        let gridBox = document.createElement('div');
        gridBox.className = 'grid-box';
        gridBox.id = "square-" + i;

        gridBox.style['height'] = gridBoxWidth + 'px';
        gridBox.style['width'] = gridBoxWidth + 'px';
        
        let mouseDown = false;

        document.addEventListener('mousedown', (event)=>{
            event.preventDefault();
            mouseDown = true;

        });

        document.addEventListener('mouseup', ()=>{
            mouseDown = false;

        });

        gridBox.addEventListener('mouseenter', ()=>{
            
            if (mouseDown){
                draw(gridBox);
            }

        });

        gridBox.addEventListener('click', ()=> {
            draw(gridBox);

        });
        gridContainer.appendChild(gridBox);
    }

    
}


function draw(box){

    let color = 'blue';
    box.style['background-color'] = color;
}


function clearGrid(grid){

    grid.forEach((box)=>{
        box.style['background-color'] = 'white';
    });

}
let defaultSize = 16;
let gridBoxWidth = 20;
let maxCanvasSize = 500;

createGrid(defaultSize);

let grid = document.querySelectorAll('.grid-box');
let canvasSizeButton = document.querySelector('.canvas-size-button');
let clearButton = document.querySelector('.clear-button');
let rainbowButton = document.querySelector('.rainbow-button');
let mode = 'black';
let colorIndex = 0;
let colors = [
    "#FF0000", // Red
    "#FF4500", // Orange-Red
    "#FF8C00", // Dark Orange
    "#FFA500", // Orange
    "#FFD700", // Gold
    "#FFFF00", // Yellow
    "#ADFF2F", // Green-Yellow
    "#32CD32", // Lime Green
    "#00FF00", // Green
    "#008000", // Dark Green
    "#00FFFF", // Cyan
    "#1E90FF", // Dodger Blue
    "#0000FF", // Blue
    "#8A2BE2", // Blue-Violet
    "#9932CC", // Dark Orchid
    "#9400D3"  // Dark Violet
];

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

rainbowButton.addEventListener('click', ()=>{
    if (mode == 'black'){
        mode = 'rainbow';
        rainbowButton.className = 'rainbow-button-activated';
    }
    else if (mode == 'rainbow'){
        mode = 'black';
        rainbowButton.className = 'rainbow-button';
    }

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

    let color;

    if (mode == 'black'){
        color = 'black';
    }
    else if(mode == 'rainbow'){

        color = colors[colorIndex];
        colorIndex++;

        if (colorIndex > 15){
            colorIndex = 0;
        }
    }

    box.style['background-color'] = color;
}


function clearGrid(grid){

    grid.forEach((box)=>{
        box.style['background-color'] = 'white';
    });

}
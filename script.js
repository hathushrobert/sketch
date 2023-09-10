let defaultSize = 16;
let gridBoxWidth = 20;

createGrid(defaultSize);

let canvasSizeButton = document.querySelector('.canvas-size-button');

canvasSizeButton.addEventListener('click', ()=>{

    let size = 0;
    while (size < 10 || size > 100){

        size = prompt("Enter size of the grid (from 10 to 100)");
    }

    createGrid(size);

});







function createGrid(size){

    let gridContainer = document.querySelector('.grid-container');

    // Empty grid
    gridContainer.innerHTML = "";
    let length = size * gridBoxWidth;

    gridContainer.style['height'] = length + 'px';
    gridContainer.style['width'] = length + 'px';

    // Create grids

    for (let i = 0; i < size*size; i++){

        let gridBox = document.createElement('div');
        gridBox.className = 'grid-box';
        gridBox.id = "square-" + i;
        gridBox.addEventListener('mouseover', ()=>{
            
            gridBox.style['background-color'] = 'black';

        });
        gridContainer.appendChild(gridBox);
    }

    
}
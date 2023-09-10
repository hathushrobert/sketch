let body = document.querySelector('body');
let gridContainer = document.querySelector('.grid-container');

// Create 16 x 16 grids

for (let i = 0; i < 256; i++){

    let gridBox = document.createElement('div');
    gridBox.className = 'grid-box';
    gridBox.id = "square-" + i;
    gridBox.addEventListener('mouseover', ()=>{
        gridBox.style['background-color'] = 'black';

    });
    gridContainer.appendChild(gridBox);
}
let body = document.querySelector('body');
let gridContainer = document.querySelector('.grid-container');

// Create 16 x 16 grids
let gridBox;

for (let i = 0; i < 256; i++){

    gridBox = document.createElement('div');
    gridBox.className = 'grid-box';
    gridContainer.appendChild(gridBox);
}
const CONTAINER_WIDTH = 960;
const CONTAINER_HEIGHT = 960;

document.addEventListener('DOMContentLoaded', drawSquares());

const btnChangeDim = document.querySelector('button');

function hoverFill(e) {
    const squareStyle = e.target.style;
    const bgColor = squareStyle.backgroundColor;

    if (!bgColor) {
        const rgbValues = [];
        for (let i = 0; i < 3; i++) {
            rgbValues[i] = Math.floor(Math.random() * 256);
        }

        squareStyle.backgroundColor = `rgb(${rgbValues.join(',')})`;
        squareStyle.opacity = '0.5';
    } else if (squareStyle.opacity < 1) {
        squareStyle.opacity = Number(squareStyle.opacity) + 0.1;
    } else {
        return;
    }
};

btnChangeDim.addEventListener('click', () => {
    let numSquares;
    while (!numSquares || numSquares > 100) {
        numSquares = parseInt(prompt('Enter the number of squares per side:'));
    };
    drawSquares(numSquares);
})

function drawSquares(dim = 16) {
    // Clear container
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    let squareDiv;
    for (let i = 0; i < dim**2; i++) {
        squareDiv = document.createElement('div');
        squareDiv.setAttribute('id', `square${i}`)
        squareDiv.classList.add('square');

        squareDiv.style.width = `${CONTAINER_WIDTH / dim}px`;
        squareDiv.style.height = `${CONTAINER_HEIGHT / dim}px`;

        squareDiv.addEventListener('mouseover', hoverFill);

        container.appendChild(squareDiv);
    }
 
}




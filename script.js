const containerGrid = document.querySelector('.containerGrid');
const containerSize = 600;
let gridSize;
if (localStorage.getItem('gridSize') !== null) {
    gridSize = localStorage.getItem('gridSize');
}
else {gridSize=16;}
let divWidht = containerSize/gridSize;
let color = '#000';
let newDiv;
//buttons variables
let clearButton = document.getElementById('clear');
let colorChooser = document.getElementById('colorChooser');
let resetButton = document.getElementById('reset');
let smallButton = document.getElementById('small');
let mediumButton = document.getElementById('medium');
let largeButton = document.getElementById('large');

    //create the grid of divs
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            newDiv = document.createElement("div");
            newDiv.classList.add('gridElement');
            newDiv.style.width = divWidht + 'px';
            newDiv.style.height = divWidht + 'px';
            containerGrid.appendChild(newDiv);
            
        }
    }
    //add mouseover listener to the divs in the grid
     const div= document.querySelectorAll('.gridElement');
     div.forEach(function(div){
            div.addEventListener('mouseover', function(){
            div.style.backgroundColor = color;
        }
    )});

//add listener to the buttons
clearButton.addEventListener('click', clear);
colorChooser.addEventListener('input', changeColor,false);

resetButton.addEventListener('click', reset);
smallButton.addEventListener('click', changeSizeSmall);
mediumButton.addEventListener('click', changeSizeMedium);
largeButton.addEventListener('click', changeSizeLarge);

function clear(){
    console.log("click clear");
    div.forEach(function(div){
        div.style.backgroundColor = '#ffffff';
    }
)}
function changeColor(){
    console.log("click clear");
    color = colorChooser.value;
}
function reset(){
    console.log("click clear");
    color = '#000000';
    colorChooser.value = '#000000';
}
function changeSizeSmall(){
    console.log("click clear 16");
    gridSize = 16;
    saveGridSizeAndReload();
}
function changeSizeMedium(){
    console.log("click clear 32");
    gridSize = 32;    
    saveGridSizeAndReload();
}
function changeSizeLarge(){
    console.log("click clear 64");
    gridSize = 64;
    saveGridSizeAndReload();
}
function saveGridSizeAndReload(){
    localStorage.setItem('gridSize', gridSize);
    window.location.reload();
}
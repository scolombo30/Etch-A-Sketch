const containerGrid = document.querySelector('.containerGrid');
let gridSize = 16;
let newDiv;
let isOnDiv = false;
//create the grid of divs
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        newDiv = document.createElement("div");
        newDiv.classList.add('gridElement');
        containerGrid.appendChild(newDiv);
        
    }
}
//add mouseover listener to the divs in the grid
 const div= document.querySelectorAll('.gridElement');
 div.forEach(function(div){
        div.addEventListener('mouseover', function(){
        div.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
)});

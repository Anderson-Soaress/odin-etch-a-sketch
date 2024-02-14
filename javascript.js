const container = document.querySelector(".flexContainer");


function game(){
    let gridSize = 16;
    let color = "black";
    clicked = false;

    let grid = createGrid(gridSize);
    colorGrid(color);

    let inputColor = document.querySelector("#inputColor");
    inputColor.addEventListener("change", () => {
        color = inputColor.value;
        colorGrid(color);
    })

    const eraserButton = document.querySelector(".eraserButton");
    eraserButton.addEventListener("click", () => {
        color = "#ffffff";
        inputColor.value = color;
        colorGrid(color);
    })

    const clearButton = document.querySelector(".clearButton");
    clearButton.addEventListener("click", () => {
        const containerItens = document.querySelectorAll(".lineItem");
        containerItens.forEach(lineItem => lineItem.style.backgroundColor = "white");
    })

    let lineOn = true;

    const toggleLineButton = document.querySelector(".toggleLineButton");
    toggleLineButton.addEventListener("click", () => {
        if(lineOn){
            const containerItens = document.querySelectorAll(".lineItem");
            containerItens.forEach(lineItem => lineItem.style.border = "none");
            lineOn = false;
        } else {
            const containerItens = document.querySelectorAll(".lineItem");
            containerItens.forEach(lineItem => lineItem.style.border = "1px solid rgb(150, 150, 150)");
            lineOn = true;
        }
    })
    
    const resizeButton = document.querySelector("#resizeButton");
    resizeButton.addEventListener("click" , () => {
        grid = resizeGrid(gridSize, grid)
        colorGrid(color);
    })

    const rainbowButton = document.querySelector(".rainbowButton");
    rainbowButton.addEventListener("click" , () => {
        const rainbow = "rainbow"
        colorGrid(color, rainbow);
    
    })


}

function createGrid(gridSize){
    let containerLine;
    let lineItem;
    
    grid = document.createElement("div")
    grid.classList.add("grid");
    container.appendChild(grid);
    for(let line = 1; line <= gridSize; line++){
        containerLine = document.createElement("div");
        containerLine.classList.add("containerLine");
        grid.append(containerLine);

        for(let item = 1; item <= gridSize; item++){
            lineItem = document.createElement("div");
            lineItem.classList.add("lineItem");
            containerLine.append(lineItem);
        }
    }
    return grid;
}

function resizeGrid(gridSize, grid){
    let inputResize = document.querySelector("#inputResize");
    gridSize = inputResize.value;

    if(gridSize <= 100 && gridSize >= 1){
        container.removeChild(grid);
        grid = createGrid(gridSize);
        inputResize.value = "";
        inputResize.placeholder = `Current: ${gridSize}`;
        return grid;
    } else {
        inputResize.value = "";
        inputResize.placeholder = `Max value: 100`;
        return grid;
    }
}

function randomColor(){
    let R = Math.floor(Math.random() * 251);
    let G = Math.floor(Math.random() * 251);
    let B = Math.floor(Math.random() * 251);

    return `rgb(${R}, ${G}, ${B})` 
}

function colorGrid(color, teste){
    const containerItens = document.querySelectorAll(".lineItem");  
    
    if(teste == "rainbow"){
        containerItens.forEach(lineItem => lineItem.addEventListener("mouseover", () => {  
            color = randomColor();
            lineItem.style.backgroundColor = color;
        }))
    } else {
        containerItens.forEach(lineItem => lineItem.addEventListener("mouseover", () => {  
            lineItem.style.backgroundColor = color;
        }))
    }
    
}

game();
function game(){
    const container = document.querySelector(".flexContainer");
    let containerLine;
    let lineItem;

    let gradeSize = 16;
    
    let grade = document.createElement("div")
    grade.classList.add("grade");
    container.appendChild(grade);
    for(let line = 1; line <= gradeSize; line++){
        containerLine = document.createElement("div");
        containerLine.classList.add("containerLine");
        grade.append(containerLine);

        for(let item = 1; item <= gradeSize; item++){
            lineItem = document.createElement("div");
            lineItem.classList.add("lineItem");
            containerLine.append(lineItem);
        }
    } 

    let color = "black";

    let inputColor = document.querySelector("#inputColor");
    inputColor.addEventListener("change", () => {
        color = inputColor.value;
    })

    const eraserButton = document.querySelector(".eraserButton");
    eraserButton.addEventListener("click", () => {
        color = "white";
    })

    const containerItens = document.querySelectorAll(".lineItem");
    containerItens.forEach(lineItem => lineItem.addEventListener("mouseover", () => {
        lineItem.style.backgroundColor = color;
    }))

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
    
    const resizeButton = document.querySelector(".resizeButton");
    resizeButton.addEventListener("click" , () => {

        gradeSize = window.prompt("Type the new grade: (max:100)")

        let validAnswer = false;
        while(!validAnswer){
            if(gradeSize <= 100 && gradeSize >= 16){
                validAnswer = true;
            } else {
                gradeSize = window.prompt("Please, type a valid answer: (min:16 max:100)")
            }
        }

        container.removeChild(grade);

        grade = document.createElement("div")
        grade.classList.add("grade");
        container.appendChild(grade);
        for(let line = 1; line <= gradeSize; line++){
            containerLine = document.createElement("div");
            containerLine.classList.add("containerLine");
            grade.append(containerLine);
    
            for(let item = 1; item <= gradeSize; item++){
                lineItem = document.createElement("div");
                lineItem.classList.add("lineItem");
                containerLine.append(lineItem);
            }
        } 
        const containerItens = document.querySelectorAll(".lineItem");
        containerItens.forEach(lineItem => lineItem.addEventListener("mouseover", () => {
        lineItem.style.backgroundColor = color;
    }))
    })
}

game();
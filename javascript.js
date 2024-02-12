function game(){
    const container = document.querySelector(".container");
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

    const containerItens = document.querySelectorAll(".lineItem");
    containerItens.forEach(lineItem => lineItem.addEventListener("mouseover", () => {
        lineItem.style.backgroundColor = "black";
    }))

    const clearButton = document.querySelector(".clearButton");
    clearButton.addEventListener("click", () => {
        const containerItens = document.querySelectorAll(".lineItem");
        containerItens.forEach(lineItem => lineItem.style.backgroundColor = "white")

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
        lineItem.style.backgroundColor = "black";
    }))
    })
}

game();
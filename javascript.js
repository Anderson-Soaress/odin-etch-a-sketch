function game(){
    const container = document.querySelector(".container");

    for(let line = 1; line <= 100; line++){
        const containerLine = document.createElement("div");
        containerLine.classList.add("containerLine");
        container.append(containerLine);

        for(let item = 1; item <= 100; item++){
            const lineItem = document.createElement("div");
            lineItem.classList.add("lineItem");
            containerLine.append(lineItem);
        }
    } 

    const containerItens = document.querySelectorAll(".lineItem");
    containerItens.forEach(lineItem => lineItem.addEventListener("mouseover", () => {
        lineItem.style.backgroundColor = "black";
    }))

}

game();
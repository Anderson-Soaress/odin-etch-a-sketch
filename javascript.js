function game(){
    const container = document.querySelector(".container");

    for(let line = 1; line <= 16; line++){
        const containerLine = document.createElement("div");
        container.append(containerLine);

        for(let item = 1; item <= 16; item++){
            const lineItem = document.createElement("div");
            lineItem.classList.add("lineItem");
            containerLine.append(lineItem);
        }
    } 
}

game();
const container = document.querySelector(".container");
const gridSize = document.querySelector(".gridSize");
const button = document.querySelector("button");

function generateDivs(num) {
    let basis = 100 / num;
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        div.style.flex = `1 1 ${basis}%`;
    }
}

const grid = document.querySelectorAll(".grid");

function resetGrid() {
    grid.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

function removeGrid() {
    grid.forEach(cell => {
        cell.remove();
    });
}

button.addEventListener("click", removeGrid);
button.addEventListener("click", () => generateDivs(Number(gridSize.value)));
button.addEventListener("click", resetGrid);
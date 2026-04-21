const container = document.querySelector(".container");
const gridSize = document.querySelector(".gridSize");
const change = document.querySelector(".change");
const reset = document.querySelector(".reset");

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

generateDivs(16);

function resetGrid() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
} // Fix so it works when grid size is changed too

function removeGrid() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach(cell => {
        cell.remove();
    });
}

change.addEventListener("click", removeGrid);
change.addEventListener("click", () => generateDivs(Number(gridSize.value)));
reset.addEventListener("click", resetGrid);
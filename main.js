const container = document.querySelector(".container");
const gridSize = document.querySelector(".gridSize");
const button = document.querySelector("button");

function generateDivs(num) {
    let basis = 100 / Math.sqrt(num);
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
        div.style.flex = `1 1 ${basis}%`;
    }
}

button.addEventListener("click", () => generateDivs(Number(gridSize.value)));
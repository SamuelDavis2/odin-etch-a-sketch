const container = document.querySelector(".container");

function generateDivs(num) {
    for (let i = 0; 1 < num; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }
}

generateDivs(16);
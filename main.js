const container = document.querySelector(".container");

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

generateDivs(100);
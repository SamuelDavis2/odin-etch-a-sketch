const container = document.querySelector(".container");

function generateDivs(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "#D8DAD3";
        });
        div.addEventListener("mouseleave", () => {
            div.style.backgroundColor = "white";
        });
    }
}

generateDivs(16);
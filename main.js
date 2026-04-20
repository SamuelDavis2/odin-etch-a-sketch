const container = document.querySelector(".container");

function generateDivs(num) {
    for (let i = 0; i < num; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
    }
}

generateDivs(16);
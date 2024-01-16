const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");



inputEl.addEventListener("input", (el) => {
    const inputContent = el.target.value.trim();

if (inputContent === "") {
    nameOutput.textContent = "Anonymous";
} else {
    nameOutput.textContent = inputContent;
}
});


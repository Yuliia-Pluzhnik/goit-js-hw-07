const inputEl = document.querySelector("#name-input");
const spanText = document.querySelector("#name-input");



inputEl.addEventListener("input", (el) => {
    const inputContent = el.target.value.trim();

if (inputContent === "") {
    spanText.textContent = "Anonymus"
    console.log(inputContent);
} else {
    spanText.textContent = inputContent;
console.log(inputEl)
}

});


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorName = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomColor()];
  }
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}

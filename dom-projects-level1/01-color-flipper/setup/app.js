const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorName = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const randomColor = getRandomNumber();
  document.body.style.backgroundColor = colors[randomColor];
  colorName.textContent = colors[randomColor];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

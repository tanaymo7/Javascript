"use strict";

const value = document.getElementById("value");
const btn = document.querySelectorAll(".btn");
let ct = 0;

btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      ct--;
    } else if (styles.contains("increase")) {
      ct++;
    } else ct = 0;

    value.style.color =
      ct > 0 ? "mediumaquamarine" : ct < 0 ? "tomato" : "silver";

    value.textContent = ct;
  });
});

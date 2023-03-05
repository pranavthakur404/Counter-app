const increment = document.querySelector("#inc");
const decrement = document.querySelector("#dec");
const number = document.querySelector("#num");
let num = 0;
increment.addEventListener("click", () => {
  num += 1;
  number.textContent = num;
});
decrement.addEventListener("click", () => {
  num -= 1;
  number.textContent = num;
});

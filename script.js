const buttonCalculator = document.querySelector("#button-calculator");
let height = document.querySelector("#input-height");
const weight = document.querySelector("#input-weight");
const result = document.querySelector("#result");
const restartButton = document.querySelector("#rest-btn");

function calculator() {
  if (!height.toString().includes(".")) {
    height.value = height.value / 100;
  }
  if (weight.value === "" || height.value === "") {
    weight.style.borderColor = "red";
    height.style.borderColor = "red";
    height.value = "";
  } else {
    const bmi = weight.value / Math.pow(height.value, 2);
    const slice = bmi.toString().slice(0, 5);
    result.textContent = `Your bmi is ${slice}`;
    buttonCalculator.classList.add("hide");
    result.classList.remove("hide");
    restartButton.classList.remove("hide");
    weight.style.borderColor = "#06114f";
    height.style.borderColor = "#06114f";
  }
}

function restart() {
  weight.value = "";
  height.value = "";
  buttonCalculator.classList.remove("hide");
  result.classList.add("hide");
  restartButton.classList.add("hide");
  weight.style.borderColor = "#06114f";
  height.style.borderColor = "#06114f";
}

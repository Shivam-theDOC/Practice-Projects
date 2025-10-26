const bmiCalulator = (height, weight) => {
  const result = document.querySelector("#results");
  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  result.innerHTML = bmi;
};

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);

  bmiCalulator(height, weight);
});

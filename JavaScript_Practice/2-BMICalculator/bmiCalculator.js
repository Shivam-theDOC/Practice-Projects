const bmiCalulator = (height, weight) => {
  const result = document.querySelector("#results");
  const bmi = (weight / (height / 100) ** 2).toFixed(2);

  if (bmi <= 18.6) {
    result.innerHTML = `${bmi} <span>Under Weight</span>`;
  }
  if (18.6 < bmi <= 24.9) {
    result.innerHTML = `${bmi} <span>Normal</span>`;
  }
  if (24.9 < bmi) {
    result.innerHTML = `${bmi} <span>Over Weight</span>`;
  }
};

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);

  bmiCalulator(height, weight);
});

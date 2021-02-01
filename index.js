// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
let intervalId = null;

const changeColor = function () {
  if (intervalId) return;
  startRef.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = `${
      colors[randomIntegerFromInterval(0, 5)]
    }`;
  }, 1000);
};

const stopChange = function () {
  clearInterval(intervalId);
  intervalId = null;
  startRef.disabled = false;
};

startRef.addEventListener('click', changeColor);
stopRef.addEventListener('click', stopChange);

const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  // фон для body:
  body.style.backgroundColor = randomColor;

  // текстовий колір для span.color:
  colorSpan.textContent = randomColor;

  // Опціонально можна також змінити текстовий колір кнопки
  changeColorButton.style.color = randomColor;
});
const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

// Завдання 1: Порахує та виведе кількість категорій в ul#categories
console.log(`Total categories: ${categoryItems.length}`);

// Завдання 2: текст заголовка та кількість елементів
categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('ul li');
  console.log(`Category: ${categoryName}`);
  console.log(`Number of elements: ${categoryElements.length}`);
});

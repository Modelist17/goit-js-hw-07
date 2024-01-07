const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Заборона перезавантаження сторінки при відправці форми:

  const emailInput = loginForm.elements['email'];
  const passwordInput = loginForm.elements['password'];

  // Перевірка на наявність значень в інпутах:
  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    alert('All form fields must be filled in');
    return;
  }

  // Збирання значень полів в об'єкт:
  const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  // Виведення об'єкта в консоль:
  console.log(formData);

  // Очищення значень полів та скидування форми:
  loginForm.reset();
});


const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', updateName);

function updateName() {
  // Очищення значення в інпуті від пробілів по краях
  const trimmedName = nameInput.value.trim();
  // Перевірка, чи інпут порожній або містить лише пробіли
  if (trimmedName === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedName;
  }
}

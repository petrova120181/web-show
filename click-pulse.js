// Эффект: при клике колонка "мигает" (увеличивается и возвращается)
document.addEventListener('click', (e) => {
  const tile = e.target.closest('.tile');
  if (!tile) return;

  // перезапуск анимации
  tile.classList.remove('pulse');
  void tile.offsetWidth;
  tile.classList.add('pulse');

  // короткий блик
  const flash = document.createElement('span');
  flash.className = 'flash';
  tile.appendChild(flash);
  setTimeout(() => flash.remove(), 650);

  e.preventDefault(); // не переходить по "#!"
});
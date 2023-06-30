function getRandomColors() {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i += 1) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return '#' + color;
  // Функция генерации случайного цвета.
}

// Генерируем случайные цвета
const colors = getRandomColors();

// Проверяем, что массив цветов не пустой
if (!colors || colors.length === 0) {
  throw new Error('Массив цветов пуст');
}

// Проверяем, что все цвета в массиве действительные
for (const color of colors) {
  if (!isValidColor(color)) {
    throw new Error(`Неверный цвет: ${color}`);
  }
}

// Проверяем, что каждый цвет не является похожим на предыдущий
for (let i = 1; i < colors.length; i += 1) {
  const previousColor = colors[i - 1];
  const currentColor = colors[i];

  if (areColorsSimilar(previousColor, currentColor)) {
    throw new Error('Сгенерирован похожий цвет');
  }
}

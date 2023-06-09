const cosl = document.querySelectorAll('.column');

const generateRandomColor = () => {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i += 1) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return `#${color}`;
};
const getRandomColors = () => {
  cosl.forEach((column) => {
    column.style.background = generateRandomColor();
  });
};
getRandomColors();

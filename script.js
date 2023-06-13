import chroma from "chroma-js";

const columnl = document.querySelectorAll('.column');
const generateRandomColor = () => {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i += 1) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return `#${color}`;
};
const getRandomColors = () => {
  columnl.forEach((column) => {
    const text = column.querySelector('h2');
    const color = generateRandomColor();
    text.textContent = color;
    column.style.background = generateRandomColor();
  });
};

getRandomColors();

const columnl = document.querySelectorAll('.column');
const generateRandomColor = () => {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i += 1) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return `#${color}`;
};

document.addEventListener('keydown', (event) => {
  if (event.code.toLowerCase() === 'space') {
    getRandomColors();
  };
});

const getRandomColors = () => {
  columnl.forEach((column) => {
    const text = column.querySelector('h2');
    const buttons = column.querySelector("button");
    const color = generateRandomColor();
    text.textContent = color;
    column.style.background = generateRandomColor();

    setTextColor(text, color);
    setTextColor(buttons, color);
  });
};

const setTextColor = (text, color) => {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
};

getRandomColors();

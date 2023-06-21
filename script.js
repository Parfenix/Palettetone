const columnl = document.querySelectorAll('.column');


document.addEventListener('keydown', (event) => {
  if (event.code.toLowerCase() === 'space') {
    getRandomColors();
  };
});



const getRandomColors = () => {
  columnl.forEach((column) => {
    const text = column.querySelector('h2');
    const button = column.querySelector("button");
    const color = chroma.random();
    text.textContent = color;
    column.style.background = color;


    setTextColor(text, color);
    setTextColor(button, color);
  });
};


const setTextColor = (text, color) => {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
};

getRandomColors();

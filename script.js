const columnl = document.querySelectorAll('.column');

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === 'space') {
    getRandomColors();
  };
});

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type

  if (type === 'lock'){
    const node = 
    event.target.tagName.toLowerCase() === 'i'
    ? event.target
    : event.target.children[0]

    node.classList.toggle('icon-lock-open-v2');
    node.classList.toggle('icon-lock-close-icon');
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

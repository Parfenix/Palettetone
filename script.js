const columns = document.querySelectorAll('.column');

const setTextColor = (text, color) => {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
};

const getRandomColors = () => {
  columns.forEach((column) => {
    const isLocked = column.querySelector('i').classList.contains('icon-lock-close-icon');
    const text = column.querySelector('h2');
    const button = column.querySelector('button');
    const color = chroma.random();

    if (isLocked) {
      return;
    }

    text.textContent = color;
    column.style.background = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });
};

const copyToClipboard = (text) => {
  return navigator.clipboard.writeText(text);
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === 'space') {
    getRandomColors();
  }
});

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type

  if (type === 'lock') {
    const node =
      event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0];

    node.classList.toggle('icon-lock-open-v2');
    node.classList.toggle('icon-lock-close-icon');
  } else if (type === 'copy') {
    copyToClipboard(event.target.textContent);
  }
});

getRandomColors();

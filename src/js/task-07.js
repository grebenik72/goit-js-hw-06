const inputRange = document.querySelector(`#font-size-control`);
const textParagraph = document.querySelector(`#text`);


const fontSizeControl = ({ target }) =>
  (textParagraph.style.fontSize = `${target.value}px`);

inputRange.addEventListener('input', fontSizeControl);
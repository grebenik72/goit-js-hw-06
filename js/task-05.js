
const inputUsername = document.querySelector('#name-input');
const outputUsername = document.querySelector('#name-output');

const placeholder = (event) => {
    outputUsername.textContent = inputUsername.value.trim() !== ''
        ? event.target.value
        : 'Anonymous';
};

inputUsername.addEventListener('input', placeholder);
// elements
const textField = document.getElementById('textField');
const output = document.getElementById('output');

textField.addEventListener('input', event => {
  const { value } = event.target;

  const offset = 3;

  let result = '';

  for (let i = 0; i < value.length; i++) {
    let code = value.charCodeAt(i);
    code = code + offset;
    result += String.fromCharCode(code);
  }

  output.textContent = result;
});

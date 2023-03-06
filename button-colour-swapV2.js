function colourSwap(indexNumber) {
  const colours = ['green', 'red', 'blue', 'purple', 'black', 'none'];
  const curButton = document.getElementById(indexNumber)
  const bgColour = curButton.style.backgroundColor;
  for (let index = 0; index < colours.length; index++) {
    if (bgColour == colours[index]) {
      if (colours[(index+1)] == 'none') {
        curButton.remove();
      } else {
        curButton.style.backgroundColor = colours[(index+1)];
      }
    }
  }
}

// Setup begin
let buttonContainer = document.getElementById('container');
buttonContainer.style.width = '80%';
buttonContainer.style.backgroundColor = 'grey';
buttonContainer.style.margin = 'auto';
buttonContainer.style.display = 'flex';
buttonContainer.style.flexWrap = 'wrap';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.padding = '0.5em';
for (let index = 1; index <= 30; index++) {
  let button = document.createElement('button');
  button.style.background = 'green';
  button.style.margin = '0.5em';
  button.style.width = '18%';
  button.style.padding = '1.5em';
  button.style.textAlign = 'center';
  button.innerText = index;
  button.style.fontWeight = 'bold';
  button.id = `button-${index}`;
  button.addEventListener('click', colourSwap.bind(undefined, `button-${index}`));
  buttonContainer.appendChild(button);
}
// Setup end
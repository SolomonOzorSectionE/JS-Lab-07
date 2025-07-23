const hoverBtn = document.getElementById('hoverBtn');
const mouseMessage = document.getElementById('mouseMessage');

hoverBtn.addEventListener('mouseover', () => {
  mouseMessage.textContent = 'Mouse is over the button!';
});
hoverBtn.addEventListener('mouseout', () => {
  mouseMessage.textContent = 'Mouse has left the button!';
});

const keyboardInput = document.getElementById('keyboardInput');
const keyPressed = document.getElementById('keyPressed');

keyboardInput.addEventListener('keydown', (event) => {
  keyPressed.textContent = `Key pressed: ${event.key}`;
});

const form = document.getElementById('sampleForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Form submitted successfully!';
});

const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Input is focused';
});
focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Input has lost focus';
});

const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
  }
});

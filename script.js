const hoverBtn = document.getElementById('hoverBtn');
const mouseMessage = document.getElementById('mouseMessage');

hoverBtn.addEventListener('mouseover', () => {
  mouseMessage.textContent = 'The mouse is hovering over the button';
});
hoverBtn.addEventListener('mouseout', () => {
  mouseMessage.textContent = 'The mouse is no longer over the button';
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
  formMessage.textContent = 'Form submitted';
});

const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Ready for input';
});
focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Input no longer ready';
});

const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    delegationMessage.textContent = `You clicked ${event.target.textContent}`;
  }
});

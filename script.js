// Example: Add a simple alert on button click
document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button');
  button.textContent = 'Click Me';
  button.addEventListener('click', () => alert('Hello!'));
  document.body.appendChild(button);
});

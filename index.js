const container = document.getElementById('container');

// Create 256 divs (16 * 16)
function grid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-item');
    container.appendChild(square);
    square.addEventListener('mouseenter', (event) => {
      square.classList.add('hovered');
    });
    square.style.width = 640 / size + 'px';
    square.style.height = 640 / size + 'px';
  }
}
grid(16);
const button = document.getElementById('usergrid');

button.addEventListener('click', (event) => {
  const userNumber = prompt(
    'You can enter your number a number between 0 to 99: ',
  );
  const size = parseInt(userNumber);
  if (!isNaN(size) && size > 0 && size <= 100) {
    container.innerHTML = '';
    grid(size);
  } else {
    alert('Please enter a number between 0 and 99');
  }
});

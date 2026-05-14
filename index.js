const container = document.getElementById('container');

// Create 256 divs (16 * 16)
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-item');
  container.appendChild(square);
}

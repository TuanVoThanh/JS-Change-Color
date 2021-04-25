const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
]

const changeColor = function() {
  const h1 = document.querySelector('h1');
  const colorH1 = this.style.backgroundColor;
  h1.style.color = colorH1;
  h1.innerText = `It's ${colorH1.toUpperCase()}`;
}

const container = document.querySelector('#boxes');
container.classList.add('boxes');

for ( let color of colors ) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = color;
  container.appendChild(box);

  box.addEventListener('click', changeColor)
}

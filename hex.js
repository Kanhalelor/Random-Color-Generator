//  select elements 
const res = document.querySelector('.color')
const btn = document.querySelector('.generate');

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', (e) => {
  let hexColor = '#';
  for( let i = 0; i < 6; i++ ){
    hexColor += hex[randomColor()];
  }
  document.body.style.backgroundColor = `${hexColor}`;
  res.textContent = `${hexColor}`;
})

const randomColor = () => {
  return Math.floor(Math.random() * hex.length);
}
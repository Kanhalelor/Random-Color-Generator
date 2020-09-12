//  select elements 

const res = document.querySelector('.color')
const btn = document.querySelector('.generate');


// events
btn.addEventListener('click', (e) => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

  res.textContent = `rbg(${r}, ${g}, ${b})`;
})
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let texto = document.getElementById('texto');
let clave = document.getElementById('clave');
let resultado = document.getElementById('resultado');

btn1.addEventListener('click', (event) => {
  event.preventDefault();
  resultado.value = window.cipher.encode(texto.value, clave.value);

})
btn2.addEventListener('click', (event) => {
  event.preventDefault();
  resultado.value = window.cipher.decode(texto.value, clave.value);
})

btn3.addEventListener('click', (event) => {
  event.preventDefault();
  texto.value = '';
  clave.value = '';
  resultado.value = '';
})

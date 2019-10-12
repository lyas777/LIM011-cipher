const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn2");

btn1.addEventListener('click', (event) => {
  event.preventDefault();
  let texto = document.getElementById('texto').value;
  let clave = document.getElementById('clave').value;

  let resultado = document.getElementById('resultado');
  resultado.value = window.cipher.encode(texto, clave);

})
btn2.addEventListener('click', (event) => {
  event.preventDefault();
  let texto = document.getElementById('texto').value;
  let clave = document.getElementById('clave').value;
  let resultado = document.getElementById('resultado');
  resultado.value = window.cipher.decode(texto, clave);
})

btn3.addEventListener('click', (event) => {
  event.preventDefault();
  let texto = document.getElementById('texto');
  let clave = document.getElementById('offset');
  let resultado = document.getElementById('resultado');
  texto.value = '';
  clave.value = '';
  resultado.value = '';
})

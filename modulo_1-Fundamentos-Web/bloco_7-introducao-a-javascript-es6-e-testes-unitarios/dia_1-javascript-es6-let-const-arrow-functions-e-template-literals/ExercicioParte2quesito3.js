// 🚀 Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const btn =  document.getElementsByTagName('button')[0];
let clickCount = 0;
const campo = document.getElementsByTagName('h3')[0];
btn.addEventListener('click', () => {
    clickCount += 1;
    campo.innerText = clickCount;
});
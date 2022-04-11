//Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n

const lado = 5;
let linha = '';

/*if(lado > 1){
        for (let i = 0; i < lado; i += 1){
            linha += '*';   
        }
        for (let k = 0; k < lado; k += 1){
            console.log(linha);
        }
}
*/

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

/*if(lado > 1){
    for (let i = 0; i < lado; i += 1){
        linha += '*';
        console.log(linha);
    }
}
*/

//Agora inverta o lado do triângulo.

if(lado > 1){
    for (let i = 0; i < lado; i += 1){
        linha += ' ';
    }
let arrayLinha = linha.split("")
    for (let k = arrayLinha.length; k > 0; k -= 1){
      arrayLinha.push('*');
      arrayLinha.shift();
      linha = arrayLinha.join('');
      console.log(linha);
    }
}

//Depois, faça uma pirâmide com n asteriscos de base:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/*for (number of numbers){
    console.log(number);
}
*/
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/*let x = 0;
for (number of numbers){
    x += number;
}

console.log(x);
*/

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

/*let x = 0;
let media;

for(number of numbers){
    x += number;
}
media = x / numbers.length;
console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media > 20){
    console.log('Valor maior que 20');
}
else{
    console.log('Valor menor que 20')
}
*/

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

/*let maior =0;

for(number of numbers){
    if(number > maior){
        maior = number;
    }
}
console.log(maior);
*/

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

/*let impar = 0;

for(number of numbers){
    if(number % 2 > 0){
        impar += 1;
    }
}

if(impar == 0){
    impar = "Nenhum valor encontrado";
}
console.log(impar);
*/

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

/*let menor;

for(number of numbers){
    if(number == numbers[0]){
        menor = number;
    }
    else if(menor > number){
        menor = number;
    }
}

console.log(menor);
*/

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

/*let numeros = [];
for(let i = 0; i <= 25; i += 1){
    numeros.push(i);
}

console.log(numeros);
*/

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let i = 0; i <= 25; i += 1){
    console.log(i / 2);
}

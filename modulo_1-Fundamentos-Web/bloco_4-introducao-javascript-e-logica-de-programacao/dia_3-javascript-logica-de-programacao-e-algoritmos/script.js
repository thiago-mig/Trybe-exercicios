// orial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const num = 10;
let fatorial = 1;
for (let i = num; i > 0; i -= 1){
    fatorial *= i;
}

console.log(fatorial);

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

const word = 'Thiago Miguel da Costa';
let word2 = '';
for(let i = word.length -1; i >=0; i --){
    word2 += word[i];
}

console.log(word2);

//Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior;
let menor;
for(let n of array){
    if(n === array[0]){
        maior = n;
        menor = n;
    }else if (n.length > maior.length){
        maior = n;
    }else if (n.length < menor.length){
        menor = n;
    }
}

console.log('maior: ', maior, '\nmenor: ', menor);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumeroPrimo;
let  aux;
for(let i = 4; i < 50; i += 1){
    aux = 0;
    for(let k = 2; k < i; k += 1){
        if(i % k == 0){
          aux += 1;
        }

    }
    if(aux == 0){
        maiorNumeroPrimo = i;
    }
}
 console.log(maiorNumeroPrimo);
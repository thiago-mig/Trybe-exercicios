//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(text) {
    let resultado;
    let arrTeste = text.split('');
    arrTeste.reverse();
    let textAux = arrTeste.join('');
    if (textAux === text){
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(verificaPalindromo('arara'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function qualIndex(array) {
    let aux;
    for (let index in array) {
        if (index == 0){
            aux = index;
        } else if (array[aux] < array[index]) {
            aux = index;
        }
    }
    return aux;
}

console.log(qualIndex([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(array) {
    let menor;

    for (let index in array) {
        if (index == 0) {
            menor = index;
        } else if (array[index] < array[menor]){
            menor = index;
        }
    }
    return menor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomeMaior(array) {
    let aux;
    for (let value of array) {
        if (aux == undefined){
            aux = value;
        }else if (aux.length < value.length){
            aux = value;
        }
    }
    return aux;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete

function maisRepetido(array) {
    let xRepetido;
    let array2 = [];
    let numeroRepetido = {numero:0, vezes: 0};
    for (let value of array) {
        array2[0] = value;
        for (let value2 in array){
            if (array[value2] == array2[0]) {
                array2.push(array[value2]);
                xRepetido = array2.length - 1;
            } else if (value2 == array.length - 1 && xRepetido > numeroRepetido.vezes) {
                numeroRepetido.numero = array2[0];
                numeroRepetido.vezes = xRepetido;
            }
        }
        array2.splice(0, array2.length);
    }
    return numeroRepetido.numero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somatorioN(n) {
    let resultado;
    if(n < 0) {
        resultado = 'valor menor que zero'
    }else {
        resultado = 0
        for (let i = 1; i <= n; i += 1) {
            resultado += i;            
        }
    }
    return resultado;
}

console.log(somatorioN(5));

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function comparaString(textA, textB) {
    let resultado;
    let arrAux;
    let varAux;
    if (textA.length <= textB.length) {
        resultado = 'Tamanho do segundo texto inválido.';
    } else {
        varAux = (textA.length - 1) - (textB.length - 1);
        arrAux = textA.slice(varAux);
        //arrAux = arrAux.join('');
        if (arrAux == textB) {
            resultado = true;
        } else {
            resultado = false;
        }
    }
    return resultado;
}

console.log(comparaString('JoãoFernando', 'Fernan'));
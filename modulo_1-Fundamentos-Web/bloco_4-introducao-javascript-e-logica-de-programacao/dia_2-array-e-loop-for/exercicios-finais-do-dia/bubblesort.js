let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordene o array numbers em ordem crescente e imprima seus valores;

/*for(let i = 1; i < numbers.length; i += 1){
    for(let k = 0; k < i; k += 1){
        if(numbers[i] < numbers[k]){
            let aux = numbers[i];
            numbers[i] = numbers[k];
            numbers[k] = aux;
        }
    }
}

console.log(numbers);
*/

//Ordene o array numbers em ordem decrescente e imprima seus valores;

/*for(let i = 1; i < numbers.length; i += 1){
    for(let k = 0; k < i; k += 1){
        if(numbers[i] > numbers[k]){
            let aux = numbers[i];
            numbers[i] = numbers[k];
            numbers[k] = aux;
        }
    }
}

console.log(numbers);
*/

/*Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
*/ 
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersX = []; 

for(let i = 1; i <= numbers.length; i += 1){
    for(let k = 0; k < i; k += 1){
        if(i == numbers.length && i - k == 1){
            numbersX.push(numbers[k] * 2)
        }
        else if(i - k == 1) {
          numbersX.push(numbers[i] * numbers[k]);
        }
    }
    
}

console.log(numbersX);
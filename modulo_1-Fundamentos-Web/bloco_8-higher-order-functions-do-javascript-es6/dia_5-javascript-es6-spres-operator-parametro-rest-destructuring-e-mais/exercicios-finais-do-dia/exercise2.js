// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...values) => values.reduce((acc, curr) => acc + curr);

console.log(sum(1, 2, 3, 4));
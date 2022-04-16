//1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
/*let entrada = 'XIV';
let resultado = 0;
let numerosRomanos = {
    I:1, IV:4, V:5, IX:9, X:10, 
    XL:40, L:50, XC:90, C:100, 
    CD:400, D:500, CM:900, M:1000
}
for (let alg = 0; alg < entrada.length; alg += 1) {
    if (alg == 0){
        resultado = numerosRomanos[entrada[alg]];
    } else if (numerosRomanos[entrada[alg - 1]] < numerosRomanos[entrada[alg]]) {
        resultado -= numerosRomanos[entrada[alg - 1]];
        resultado += (numerosRomanos[entrada[alg]] - numerosRomanos[entrada[alg -1]]);
    } else {
        resultado += numerosRomanos[entrada[alg]];
    }
}
console.log(resultado);
*/
// 
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfnumbers(vetor) {
    let pares = [];
    for (let num in vetor) {
        for (let num2 = 0; num2 < vetor[num].length; num2 += 1) {
            if (vetor[num][num2] % 2 == 0) {
                pares.push(vetor[num][num2]); 
            }
        }
    }
    return pares;
}
console.log(arrayOfnumbers(vector));
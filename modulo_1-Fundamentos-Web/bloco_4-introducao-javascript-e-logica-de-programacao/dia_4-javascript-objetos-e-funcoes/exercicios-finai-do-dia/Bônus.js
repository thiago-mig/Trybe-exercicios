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
/*let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

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
*/
//
/*const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
function contaACesta(cesta){
    let lista = {};
    let resultado;
    for (let key of cesta) {
        lista[key] = 1;
    }
    for (let key2 in lista){
        for (let key3 of cesta){
            if (key2 == key3){
                lista[key3] += 1;
            }
        }
    }
    return lista;
}
list = contaACesta(basket);
for (let item in list){
    console.log('Sua cesta possui ', list[item], ' ', item + 's');
}
*/

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
  
  console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1]['nome']} ${moradores.blocoDois[1]['sobrenome']} mora no ${moradores.blocoDois[1].andar}° andar, apartamento ${moradores.blocoDois[1].apartamento}`);

  let fullName;
for (let i in moradores) {
    console.log(`moradores do ${i} \n`);
    for (let k of moradores[i]) {
        for (let l in k) {
            if (l == 'nome'){
                fullName = k[l];
            } else if (l == 'sobrenome'){
                fullName += ` ${k[l]}`;
            } 
        }console.log(fullName);
    }
}
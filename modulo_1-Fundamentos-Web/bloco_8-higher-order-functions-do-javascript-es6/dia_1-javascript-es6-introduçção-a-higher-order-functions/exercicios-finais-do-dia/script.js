const createEmployee = (nome) => {
  const email = `${nome.toLowerCase().replace(/ /g, '_')}@betrybe.com`;
  const employee = {
    nomeCompleto: nome,
    email: email,
  }
  return employee;
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
console.log(newEmployees(createEmployee));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const verifyNumber = (number1, number2) => number1 === number2;
const sorteio = (bet, callback) => {
    const numeroSorteado = Math.floor((Math.random() * 5) + 1);
    return callback(bet, numeroSorteado)?'Parabéns você ganhou':'Tente novamente';
}

console.log(sorteio(2, verifyNumber));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaNotas = (arr1, arr2) => {
  let nota = 0;
  for(i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr2[i]) {
      nota += 1;
    } else if (arr1[i] !== arr2[i] && arr1[i] !== 'N.A') {
      nota -= 0.5;
    }
  }
  return nota;
}

const geraNotas = (prova, gabarito, callback) => callback(prova, gabarito);

console.log(geraNotas(STUDENT_ANSWERS, RIGHT_ANSWERS, verificaNotas));


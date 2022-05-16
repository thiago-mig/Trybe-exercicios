// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
const fatorial = (n) => (n === 0) ? 1 : n * fatorial(n-1);

console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.]
//Exemplo:

//longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (phrase) => {
    const words = phrase.split(' ');
    let word = '';
    for (let i = 0; i < words.length; i += 1) {
      if (words[i].length > word.length) {
        word = words[i];
      }
    }
    return word;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
// Exemplo:
// "Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...
// #goTrybe".


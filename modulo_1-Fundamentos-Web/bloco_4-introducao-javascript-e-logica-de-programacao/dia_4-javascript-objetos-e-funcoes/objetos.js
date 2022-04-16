//Crie um objeto player contendo as variáveis listadas abaixo.
let person = {
    name:'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {gold: 2, silver: 3}
};
// Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + person.name, person.lastName, 'Tem ' + person.age, 'anos de idade' );

//Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

person.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log( 'A jogadora Marta Silva foi eleita a melhor do mundo por ' + person.bestInTheWorld.length + ' vezes.');

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + person.medals.gold + ' medalhas de ouro e ' + person.medals.silver + ' medalhas de prata');



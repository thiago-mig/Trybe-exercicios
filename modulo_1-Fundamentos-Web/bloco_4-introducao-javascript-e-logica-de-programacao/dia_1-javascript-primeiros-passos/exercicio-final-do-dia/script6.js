let peca = 'Tower';
peca = peca.toLowerCase();

switch (peca){
    case 'bishop':
        console.log("Diagonal");
        break;
    case 'tower':
        console.log('Linha reta vertical ou horizontal');
        break;
    case 'queen':
        console.log('Linha reta vertical, horizontal e diagonal');
        break;
    case 'king':
        console.log('Uma casa em qualquer direção');
        break;
    case 'knight':
        console.log('2 casas em linha reta e uma casa para direita ou esquerda. Pode pular peças');
        break;
    case 'pawn':
        console.log('Uma casa na vertical pra frente. Momento inicial 2 casas.');
        break;
    default:
        console.log('Peça inválida.');
}
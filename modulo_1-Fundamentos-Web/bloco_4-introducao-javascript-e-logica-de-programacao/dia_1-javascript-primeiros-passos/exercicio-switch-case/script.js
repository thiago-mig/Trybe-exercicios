let situacao = 'reprovado';

switch (situacao) {
    case 'aprovado':
        console.log('Você foi aprovado');
        break;
    case 'lista':
        console.log('Você está na lista de espera');
        break;
    case 'reprovado':
        console.log('Você foi reprovado');
        break;
    default:
        console.log('Valor inválido');

}
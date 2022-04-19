/*
function calculadora(a, operacao, b) {
    switch (operacao) {
        case '+':
            return a + b;
        
        case '-':
            return a - b;
        
        case '*':
            return a * b;
        
        case '/':
            return a / b;
        
        case '%':
            return a % b;
        
        default:
            return 'Operação Inválida';
            break;
    }
}
*/

/*
function qualMaior(a, b){
    let maior;
    
    if (a > b) {
        maior = a;
    } else if (b > a) {
        maior = b;
    }

    return maior;
}
*/
/*
function qualMaiorDosTres(a, b, c) {
    let maior;

    if(a > b && a > c) {
        maior = a;
    }
    else if (b > a && b > c) {
        maior = b;
    }
    else {
        maior = c;
    }
    return maior;
}
*/
/*
function posOrNeg(num){
    if (num > 0) {
        return 'O número é positivo';
    } else if (num < 0) {
        return 'O número é negativo';
    } else {
        return 'O número é 0';
    }
}
*/
/*
function ehTriangulo(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return 'Ângulo inválido';
    } else if (a + b + c === 180) {
        return 'É um triângulo';
    } else {
        return 'Não é um triângulo';
    }
}
console.log(ehTriangulo(60, 60, 60));
*/
/*
function pecaXadrez(peca) {
    switch (peca){
        case 'bishop':
            return "Diagonal";
            break;
        case 'tower':
            return 'Linha reta vertical ou horizontal';
            break;
        case 'queen':
            return 'Linha reta vertical, horizontal e diagonal';
            break;
        case 'king':
            return 'Uma casa em qualquer direção';
            break;
        case 'knight':
            return '2 casas em linha reta e uma casa para direita ou esquerda. Pode pular peças';
            break;
        case 'pawn':
            return 'Uma casa na vertical pra frente. Momento inicial 2 casas.';
            break;
        default:
            return 'Peça inválida.';
    }
}

console.log(pecaXadrez('queen'));
*/

/*
function conceito(nota) {
    let conceito;
    if (nota >= 90 && nota <= 100) {
        conceito = 'A';
    } else if (nota <= 90 && nota >= 80) {
        conceito = 'B';
    } else if (nota <= 80 && nota >= 70) {
        conceito = 'C';
    } else if (nota <= 70 && nota >= 60) {
        conceito = 'D';
    } else if (nota <= 60 && nota >= 50) {
        conceito = 'E';
    } else if (nota < 50) {
        conceito = 'F';
    } else {
        conceito = 'Nota inválida'
    }
    return conceito;
}

console.log(conceito(98));
*/

/*
function temParAi(a, b, c) {
    
    let temPar = false;

    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        temPar = true;
    }

    return temPar;
}
 console.log(temParAi(13, 5, 7));
 */
/*
 function temImparAi(a, b, c){
    let temImpar = false;

    if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
        temImpar = true;
    }
    return temImpar;
 }

 console.log(temImparAi(8, 2, 4));
 */

 
let nota = 86;
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

console.log(conceito);
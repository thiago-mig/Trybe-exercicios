const a = 60;
const b = 60;
const c = 60;

let ehTriangulo;

if(a < 0 || b < 0 || c < 0){
    console.log('Angulo inválido');
}
else if ( a + b + c == 180){
    ehTriangulo = true;
}
else{
    ehTriangulo = false;
}

console.log(ehTriangulo)

const a = 10;
const b = 20;
const c = 30;
let maior;

if(a > b && a > c){
    maior = a;
}
else if (b > a && b > c){
    maior = b;
}
else{
    maior = c;
}

console.log(maior);